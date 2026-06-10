/**
 * LOADING COMPONENT
 * Digunakan sebagai Suspense fallback saat lazy loading komponen
 * Tailwind Animation: Menggunakan animate-pulse untuk loading effect
 * UPDATE: Dark purple theme sesuai design system
 */
export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#0D0F11] via-[#191D23] to-[#0A0C12]">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="mb-6 flex justify-center">
          <div className="w-16 h-16 bg-gradient-to-br from-[#7B57E0] to-[#8B6FE8] rounded-lg flex items-center justify-center animate-bounce shadow-lg">
            <span className="text-4xl">⚙</span>
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="text-2xl font-bold text-white mb-2">Loading...</h2>
        <p className="text-[#B8C0CC] mb-8">Mohon tunggu sebentar</p>

        {/* Loading Bars */}
        <div className="flex gap-2 justify-center mb-6">
          <div className="w-3 h-3 bg-[#7B57E0] rounded-full animate-pulse"></div>
          <div
            className="w-3 h-3 bg-[#7B57E0] rounded-full animate-pulse"
            style={{ animationDelay: '0.1s' }}
          ></div>
          <div
            className="w-3 h-3 bg-[#7B57E0] rounded-full animate-pulse"
            style={{ animationDelay: '0.2s' }}
          ></div>
        </div>

        <p className="text-[#B8C0CC] text-sm">RevDrive Bengkel Admin</p>
      </div>
    </div>
  );
}
