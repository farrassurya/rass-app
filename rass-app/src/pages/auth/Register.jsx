import { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">Buat Akun Baru</h2>
      <p className="text-[#B8C0CC] text-sm mb-6">Daftar untuk memulai</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Input */}
        <div>
          <label className="block text-[#B8C0CC] text-sm font-medium mb-2">
            Nama Lengkap
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nama Anda"
            className="w-full bg-slate-900/70 border border-[#334E68]/70 rounded-lg px-4 py-3 text-white placeholder-[#B8C0CC] focus:outline-none focus:ring-2 focus:ring-[#7B57E0] focus:border-[#7B57E0] transition-smooth"
            required
          />
        </div>

        {/* Email Input */}
        <div>
          <label className="block text-[#B8C0CC] text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email@bengkel.com"
            className="w-full bg-slate-900/70 border border-[#334E68]/70 rounded-lg px-4 py-3 text-white placeholder-[#B8C0CC] focus:outline-none focus:ring-2 focus:ring-[#7B57E0] focus:border-[#7B57E0] transition-smooth"
            required
          />
        </div>

        {/* Password Input */}
        <div>
          <label className="block text-[#B8C0CC] text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="••••••••"
            className="w-full bg-slate-900/70 border border-[#334E68]/70 rounded-lg px-4 py-3 text-white placeholder-[#B8C0CC] focus:outline-none focus:ring-2 focus:ring-[#7B57E0] focus:border-[#7B57E0] transition-smooth"
            required
          />
        </div>

        {/* Confirm Password Input */}
        <div>
          <label className="block text-[#B8C0CC] text-sm font-medium mb-2">
            Konfirmasi Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="••••••••"
            className="w-full bg-slate-900/70 border border-[#334E68]/70 rounded-lg px-4 py-3 text-white placeholder-[#B8C0CC] focus:outline-none focus:ring-2 focus:ring-[#7B57E0] focus:border-[#7B57E0] transition-smooth"
            required
          />
        </div>

        {/* Terms Agreement */}
        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            className="w-4 h-4 rounded border-[#334E68]/70 bg-slate-900/70 mt-1"
            required
          />
          <span className="text-[#B8C0CC] text-sm">
            Saya setuju dengan syarat dan ketentuan penggunaan
          </span>
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-[#7B57E0] to-[#8B6FE8] text-white font-semibold py-3 rounded-lg hover:from-[#8B6FE8] hover:to-[#9B7EF0] transition-smooth disabled:opacity-50 disabled:cursor-not-allowed mt-6"
        >
          {isLoading ? 'Memproses...' : 'Daftar'}
        </button>
      </form>

      {/* Login Link */}
      <p className="text-center text-[#B8C0CC] text-sm mt-6">
        Sudah punya akun?{' '}
        <Link
          to="/login"
          className="text-[#7B57E0] font-semibold hover:text-[#8B6FE8] transition-smooth"
        >
          Masuk di sini
        </Link>
      </p>
    </div>
  );
}
