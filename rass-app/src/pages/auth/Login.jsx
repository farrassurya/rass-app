import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthCard from '../../components/AuthCard.jsx';
import FormField from '../../components/FormField.jsx';
import CheckboxField from '../../components/CheckboxField.jsx';
import PrimaryButton from '../../components/PrimaryButton.jsx';

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

    // Simulasi login - dalam praktik nyata, hubungkan ke backend
    setTimeout(() => {
      console.log('Login dengan:', { email, password });
      setIsLoading(false);
      navigate('/dashboard');
    }, 1000);
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
