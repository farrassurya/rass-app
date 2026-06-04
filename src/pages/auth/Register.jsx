import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthCard from '../../components/AuthCard.jsx';
import FormField from '../../components/FormField.jsx';
import CheckboxField from '../../components/CheckboxField.jsx';
import PrimaryButton from '../../components/PrimaryButton.jsx';

/**
 * REGISTER PAGE
 * State Management: Form state untuk multiple inputs
 */
export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      console.log('Register:', formData);
      setIsLoading(false);
      alert('Registrasi berhasil! Silakan login.');
    }, 1000);
  };

  return (
    <AuthCard>
      <h2 className="text-2xl font-bold text-white mb-2">Buat Akun Baru</h2>
      <p className="text-[#B8C0CC] text-sm mb-6">Daftar untuk memulai</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <FormField
          label="Nama Lengkap"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nama Anda"
          autoComplete="name"
        />

        <FormField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="email@bengkel.com"
          autoComplete="email"
        />

        <FormField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="••••••••"
          autoComplete="new-password"
        />

        <FormField
          label="Konfirmasi Password"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="••••••••"
          autoComplete="new-password"
        />

        <CheckboxField required>
          Saya setuju dengan syarat dan ketentuan penggunaan
        </CheckboxField>

        <PrimaryButton
          type="submit"
          disabled={isLoading}
          className="mt-6 w-full"
        >
          {isLoading ? 'Memproses...' : 'Daftar'}
        </PrimaryButton>
      </form>

      <p className="text-center text-[#B8C0CC] text-sm mt-6">
        Sudah punya akun?{' '}
        <Link
          to="/login"
          className="text-[#7B57E0] font-semibold hover:text-[#8B6FE8] transition-smooth"
        >
          Masuk di sini
        </Link>
      </p>
    </AuthCard>
  );
}
