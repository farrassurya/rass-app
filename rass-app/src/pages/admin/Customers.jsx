/**
 * CUSTOMERS PAGE
 * Placeholder untuk halaman manajemen pelanggan
 * UPDATE: Dark purple theme sesuai design system
 */
export default function Customers() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Manajemen Pelanggan</h1>
        <button className="bg-gradient-to-r from-[#7B57E0] to-[#8B6FE8] text-white px-6 py-3 rounded-lg font-semibold hover:from-[#8B6FE8] hover:to-[#9B7EF0] transition-smooth shadow-md">
          + Tambah Pelanggan
        </button>
      </div>

      <div className="rounded-3xl border border-[#334E68]/70 bg-slate-950/70 shadow-md p-12 text-center backdrop-blur-xl">
        <p className="text-4xl mb-4">👥</p>
        <h2 className="text-2xl font-bold text-white mb-2">
          Halaman Pelanggan
        </h2>
        <p className="text-[#B8C0CC]">
          Fitur manajemen pelanggan akan segera hadir
        </p>
      </div>
    </div>
  );
}
