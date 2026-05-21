import { Link } from 'react-router-dom';
import PanelCard from '../components/PanelCard.jsx';
import PrimaryButton from '../components/PrimaryButton.jsx';

/**
 * ERROR PAGE (404 NOT FOUND)
 * Route Not Found: Menampilkan halaman custom untuk route yang tidak tersedia
 * Navigation: Link ke dashboard untuk kembali ke halaman utama
 * UPDATE: Dark purple theme sesuai design system
 */
export default function ErrorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D0F11] via-[#191D23] to-[#0A0C12] flex items-center justify-center p-4">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 h-72 bg-[#7B57E0] rounded-full mix-blend-multiply filter blur-3xl opacity-20 -top-40 -left-40 animate-pulse"></div>
        <div className="absolute w-72 h-72 bg-[#5395CF] rounded-full mix-blend-multiply filter blur-3xl opacity-20 -bottom-40 -right-40 animate-pulse"></div>
      </div>

      {/* Error Container */}
      <PanelCard className="z-10 max-w-md p-8 text-center">
        {/* Error Code */}
        <div className="mb-6">
          <p className="text-9xl font-bold text-transparent bg-gradient-to-r from-[#7B57E0] to-[#5395CF] bg-clip-text">
            404
          </p>
        </div>

        {/* Error Icon */}
        <div className="mb-6 flex justify-center">
          <div className="w-24 h-24 bg-gradient-to-br from-[#7B57E0] to-[#8B6FE8] rounded-full flex items-center justify-center shadow-lg">
            <span className="text-5xl">⚠️</span>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-4xl font-bold text-white mb-4">Halaman Tidak Ditemukan</h1>
        <p className="text-[#B8C0CC] mb-8 text-lg">
          Maaf, halaman yang Anda cari tidak tersedia atau telah dipindahkan.
        </p>

        {/* Suggested Links */}
        <div className="space-y-3 mb-8">
          <p className="text-white text-sm font-semibold">Kembali ke:</p>
          <div className="flex flex-col gap-3">
            <PrimaryButton to="/dashboard">Dashboard</PrimaryButton>
            <PrimaryButton to="/login" variant="secondary">
              Halaman Login
            </PrimaryButton>
          </div>
        </div>

        {/* Info Text */}
        <p className="text-[#B8C0CC] text-sm">
          Jika masalah terus berlanjut, silakan hubungi support kami.
        </p>
      </PanelCard>
    </div>
  );
}
