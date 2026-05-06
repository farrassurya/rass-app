/**
 * CUSTOMERS PAGE
 * Placeholder untuk halaman manajemen pelanggan
 */
export default function Customers() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Manajemen Pelanggan</h1>
        <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-smooth shadow-md">
          + Tambah Pelanggan
        </button>
      </div>

      <div className="rounded-3xl border border-white/10 bg-slate-950/50 shadow-md p-12 text-center backdrop-blur-xl">
        <p className="text-4xl mb-4">👥</p>
        <h2 className="text-2xl font-bold text-white mb-2">
          Halaman Pelanggan
        </h2>
        <p className="text-slate-400">
          Fitur manajemen pelanggan akan segera hadir
        </p>
      </div>
    </div>
  );
}
