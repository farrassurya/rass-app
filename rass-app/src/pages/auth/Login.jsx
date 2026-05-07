import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <div>
      {/* Form Title */}
      <h2 className="text-2xl font-bold text-white mb-2">Masuk Akun</h2>
      <p className="text-[#B8C0CC] text-sm mb-6">
        Masukkan email dan password Anda
      </p>

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email Input */}
        <div>
          <label className="block text-[#B8C0CC] text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@bengkel.com"
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full bg-slate-900/70 border border-[#334E68]/70 rounded-lg px-4 py-3 text-white placeholder-[#B8C0CC] focus:outline-none focus:ring-2 focus:ring-[#7B57E0] focus:border-[#7B57E0] transition-smooth"
            required
          />
        </div>

        {/* Remember & Forgot Password */}
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-[#334E68]/70 bg-slate-900/70"
            />
            <span className="text-[#B8C0CC]">Ingat saya</span>
          </label>
          <a
            href="/forgot-password"
            className="text-[#7B57E0] hover:text-[#8B6FE8] transition-smooth"
          >
            Lupa password?
          </a>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-[#7B57E0] to-[#8B6FE8] text-white font-semibold py-3 rounded-lg hover:from-[#8B6FE8] hover:to-[#9B7EF0] shadow-[0_12px_30px_rgba(123,87,224,0.35)] transition-smooth disabled:opacity-50 disabled:cursor-not-allowed mt-6 border border-[#7B57E0]/30"
        >
          {isLoading ? 'Memproses...' : 'Masuk'}
        </button>
      </form>

      {/* Sign Up Link */}
      <p className="text-center text-[#B8C0CC] text-sm mt-6">
        Belum punya akun?{' '}
        <a
          href="/register"
          className="text-[#7B57E0] font-semibold hover:text-[#8B6FE8] transition-smooth"
        >
          Daftar di sini
        </a>
      </p>
    </div>
  );
}
