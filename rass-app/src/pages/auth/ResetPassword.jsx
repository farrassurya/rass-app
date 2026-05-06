import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * RESET PASSWORD PAGE
 * Route Parameter: Menggunakan token dari URL untuk validasi
 */
export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      alert('Password tidak cocok');
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      console.log('Password direset');
      setIsLoading(false);
      alert('Password berhasil direset. Silakan login dengan password baru.');
      navigate('/login');
    }, 1000);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">Reset Password</h2>
      <p className="text-slate-300 text-sm mb-6">
        Buat password baru untuk akun Anda
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* New Password Input */}
        <div>
          <label className="block text-white text-sm font-medium mb-2">
            Password Baru
          </label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-smooth"
            required
          />
        </div>

        {/* Confirm Password Input */}
        <div>
          <label className="block text-white text-sm font-medium mb-2">
            Konfirmasi Password
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-smooth"
            required
          />
        </div>

        {/* Password Requirements */}
        <div className="bg-white bg-opacity-10 rounded-lg p-3 text-sm text-slate-300">
          <p className="font-semibold mb-2">Persyaratan Password:</p>
          <ul className="list-disc list-inside space-y-1 text-xs">
            <li>Minimal 8 karakter</li>
            <li>Mengandung huruf besar dan kecil</li>
            <li>Mengandung angka</li>
          </ul>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-smooth disabled:opacity-50 disabled:cursor-not-allowed mt-6"
        >
          {isLoading ? 'Memproses...' : 'Reset Password'}
        </button>
      </form>
    </div>
  );
}
