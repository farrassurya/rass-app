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
      <h2 className="text-2xl font-bold text-yellow-600 mb-2">Masuk Akun</h2>
      <p className="text-slate-500 text-sm mb-6">
        Masukkan email dan password Anda
      </p>

      {/* Login Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email Input */}
        <div>
          <label className="block text-slate-500 text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@bengkel.com"
            className="w-full bg-white bg-opacity-10 border text-slate-500 border-opacity-20 rounded-lg px-4 py-3 text-black placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-smooth"
            required
          />
        </div>

        {/* Password Input */}
        <div>
          <label className="block text-slate-500 text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full bg-white bg-opacity-10 border text-slate-500 border-opacity-20 rounded-lg px-4 py-3 text-black placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-smooth"
            required
          />
        </div>

        {/* Remember & Forgot Password */}
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-slate-400"
            />
            <span className="text-slate-400">Ingat saya</span>
          </label>
          <a
            href="/forgot-password"
            className="text-orange-400 hover:text-orange-300 transition-smooth"
          >
            Lupa password?
          </a>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 rounded-lg hover:from-orange-600 hover:to-orange-700 shadow-[0_12px_30px_rgba(249,115,22,0.35)] transition-smooth disabled:opacity-50 disabled:cursor-not-allowed mt-6 border border-orange-400/20"
        >
          {isLoading ? 'Memproses...' : 'Masuk'}
        </button>
      </form>

      {/* Sign Up Link */}
      <p className="text-center text-slate-400 text-sm mt-6">
        Belum punya akun?{' '}
        <a
          href="/register"
          className="text-orange-400 font-semibold hover:text-orange-300 transition-smooth"
        >
          Daftar di sini
        </a>
      </p>
    </div>
  );
}
