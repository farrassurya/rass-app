import { Outlet } from 'react-router-dom';

/**
 * AUTH LAYOUT COMPONENT
 * Layout: Minimal layout untuk halaman autentikasi
 * Design: Centered container dengan background gradient
 * Outlet: Untuk render halaman auth (Login, Register, ForgotPassword, ResetPassword)
 */
export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -top-40 -left-40 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -bottom-40 -right-40 animate-pulse"></div>
      </div>

      {/* Auth Container */}
      <div className="w-full max-w-md z-10">
        {/* Header Logo */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-3xl">⚙</span>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">RevDrive</h1>
          <p className="text-slate-400">Sistem Manajemen Bengkel</p>
        </div>

        {/* Auth Form Container */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white border-opacity-10">
          <Outlet />
        </div>

        {/* Footer Info */}
        <div className="text-center mt-6">
          <p className="text-slate-400 text-sm">
            © 2026 RevDrive. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
