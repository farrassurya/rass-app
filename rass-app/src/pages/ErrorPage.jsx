import { Link } from 'react-router-dom';

/**
 * ERROR PAGE (404 NOT FOUND)
 * Route Not Found: Menampilkan halaman custom untuk route yang tidak tersedia
 * Navigation: Link ke dashboard untuk kembali ke halaman utama
 */
export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -top-40 -left-40 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -bottom-40 -right-40 animate-pulse"></div>
      </div>

      {/* Error Container */}
      <div className="text-center z-10 max-w-md">
        {/* Error Code */}
        <div className="mb-6">
          <p className="text-9xl font-bold text-transparent bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text">
            404
          </p>
        </div>

        {/* Error Icon */}
        <div className="mb-6 flex justify-center">
          <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-5xl">⚠️</span>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-4xl font-bold text-white mb-4">Halaman Tidak Ditemukan</h1>
        <p className="text-slate-400 mb-8 text-lg">
          Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
        </p>

        {/* Suggested Links */}
        <div className="space-y-3 mb-8">
          <p className="text-slate-300 text-sm font-semibold">Kembali ke:</p>
          <div className="flex flex-col gap-3">
            <Link
              to="/dashboard"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-smooth shadow-lg"
            >
              Dashboard
            </Link>
            <Link
              to="/login"
              className="bg-slate-700 text-white font-semibold py-3 px-6 rounded-lg hover:bg-slate-600 transition-smooth"
            >
              Halaman Login
            </Link>
          </div>
        </div>

        {/* Info Text */}
        <p className="text-slate-500 text-sm">
          Jika masalah terus berlanjut, silakan hubungi support kami.
        </p>
      </div>
    </div>
  );
}
