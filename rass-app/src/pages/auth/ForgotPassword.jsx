import { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * FORGOT PASSWORD PAGE
 * Form handling untuk reset password request
 */
export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      console.log('Reset password request untuk:', email);
      setIsLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div>
      {!submitted ? (
        <>
          <h2 className="text-2xl font-bold text-yellow-600 mb-2">Lupa Password?</h2>
          <p className="text-slate-500 text-sm mb-6">
            Masukkan email Anda untuk menerima link reset password
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div>
              <label className="block text-slate-500 text-sm font-medium mb-2">
                Email Terdaftar
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

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-smooth disabled:opacity-50 disabled:cursor-not-allowed mt-6"
            >
              {isLoading ? 'Mengirim...' : 'Kirim Link Reset'}
            </button>
          </form>

          {/* Back to Login */}
          <p className="text-center text-slate-400 text-sm mt-6">
            <Link
              to="/login"
              className="text-orange-400 font-semibold hover:text-orange-300 transition-smooth"
            >
              Kembali ke login
            </Link>
          </p>
        </>
      ) : (
        <div className="text-center">
          <div className="mb-4 text-5xl">📧</div>
          <h2 className="text-2xl font-bold text-yellow-600 mb-4">Email Terkirim!</h2>
          <p className="text-slate-500 mb-6">
            Kami telah mengirimkan link reset password ke {email}. Silakan cek
            email Anda.
          </p>
          <Link
            to="/login"
            className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-smooth"
          >
            Kembali ke Login
          </Link>
        </div>
      )}
    </div>
  );
}
