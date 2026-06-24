import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../components/PrimaryButton.jsx';
import AuthCard from '../../components/AuthCard.jsx';
import FormField from '../../components/FormField.jsx';
import CheckboxField from '../../components/CheckboxField.jsx';

/**
 * LOGIN PAGE
 * State Management: Gunakan useState untuk form inputs
 * Event Handling: Handle form submission dan input changes
 * Navigation: useNavigate untuk redirect ke dashboard setelah login
 */
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // P14: Mengganti setTimeout dummy dengan fetch pengecekan data ke database Supabase secara real-time
    try {
      // Menyusun query parameter untuk mencocokkan email dan password secara eksplisit
      const targetUrl = `https://ecmgvafbdasnynlxwwjb.supabase.co/rest/v1/users?email=eq.${encodeURIComponent(email)}&password=eq.${encodeURIComponent(password)}`;
      
      const response = await fetch(targetUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'apikey': 'sb_publishable_c5VmxN30Z6pMC1_clJjH8A_Yg_DACrB',
          'Authorization': 'Bearer sb_publishable_c5VmxN30Z6pMC1_clJjH8A_Yg_DACrB'
        }
      });

      if (!response.ok) {
        throw new Error('Gagal terhubung ke server login.');
      }

      const users = await response.json();

      // P14: Jika array kosong, berarti email atau password salah
      if (users.length === 0) {
        alert('Email atau Password salah! Silakan periksa kembali akun Anda.');
        return;
      }

      // P14: Jika user ditemukan, simpan data session sederhana ke localStorage (berguna untuk validasi CRUD halaman admin nanti)
      localStorage.setItem('userSession', JSON.stringify(users[0]));

      alert(`Selamat datang kembali, ${users[0].name}!`);
      navigate('/dashboard'); // P14: Redirect ke halaman utama setelah login sukses
    } catch (err) {
      console.error('Login Error:', err);
      alert(`Login Gagal: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthCard>
      <h2 className="text-2xl font-bold text-white mb-2">Masuk Akun</h2>
      <p className="text-[#B8C0CC] text-sm mb-6">
        Masukkan email dan password Anda
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <FormField
          label="Email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="admin@bengkel.com"
          autoComplete="email"
        />

        <FormField
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          autoComplete="current-password"
        />

        <div className="flex items-center justify-between text-sm">
          <CheckboxField>Ingat saya</CheckboxField>
          <a
            href="/forgot-password"
            className="text-[#7B57E0] hover:text-[#8B6FE8] transition-smooth"
          >
            Lupa password?
          </a>
        </div>

        <PrimaryButton
          type="submit"
          disabled={isLoading}
          className="mt-6 w-full border border-[#7B57E0]/30"
        >
          {isLoading ? 'Memproses...' : 'Masuk'}
        </PrimaryButton>
      </form>

      <p className="text-center text-[#B8C0CC] text-sm mt-6">
        Belum punya akun?{' '}
        <a
          href="/register"
          className="text-[#7B57E0] font-semibold hover:text-[#8B6FE8] transition-smooth"
        >
          Daftar di sini
        </a>
      </p>
    </AuthCard>
  );
}