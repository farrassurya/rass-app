import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import productsData from '../../data/productsData.json';
import { ArrowRight, BadgeCheck } from '../../components/WorkshopIcons.jsx';

function formatRupiah(value) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(value);
}

export default function Product() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const categories = useMemo(
    () => ['Semua', ...new Set(productsData.map((product) => product.category))],
    []
  );

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return productsData.filter((product) => {
      const isCategoryMatch =
        selectedCategory === 'Semua' || product.category === selectedCategory;

      const isSearchMatch =
        product.name.toLowerCase().includes(normalizedSearch) ||
        product.brand.toLowerCase().includes(normalizedSearch) ||
        product.shortDescription.toLowerCase().includes(normalizedSearch);

      return isCategoryMatch && isSearchMatch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[#B8C0CC]">Inventory</p>
          <h1 className="mt-2 text-3xl font-bold text-white">Product Bengkel</h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-300">
            Daftar product bengkel seperti oli, coolant, filter, dan komponen lainnya untuk kebutuhan
            servis harian.
          </p>
        </div>
        <div className="rounded-2xl border border-[#334E68]/60 bg-slate-950/70 px-4 py-3 text-sm text-slate-200">
          Total Product: <span className="font-semibold text-white">{filteredProducts.length}</span>
          <span className="text-slate-400"> / {productsData.length}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 rounded-2xl border border-white/10 bg-slate-950/60 p-4 md:grid-cols-[1fr_auto]">
        <label className="relative block">
          <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-slate-400">Search Product</span>
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Cari nama product, brand, atau deskripsi..."
            className="w-full rounded-xl border border-[#334E68]/60 bg-slate-900/55 px-4 py-2.5 text-sm text-white outline-none transition-smooth focus:border-[#7B57E0]/50 focus:ring-2 focus:ring-[#7B57E0]/20"
          />
        </label>

        <label className="block md:min-w-52">
          <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-slate-400">Filter Kategori</span>
          <select
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
            className="w-full rounded-xl border border-[#334E68]/60 bg-slate-900/55 px-3 py-2.5 text-sm text-white outline-none transition-smooth focus:border-[#7B57E0]/50 focus:ring-2 focus:ring-[#7B57E0]/20"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredProducts.map((product) => (
          <article
            key={product.id}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 shadow-[0_20px_55px_rgba(2,6,23,0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-[#7B57E0]/45"
          >
            <div className="relative h-52 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute right-3 top-3 rounded-full border border-[#7B57E0]/40 bg-slate-950/80 px-3 py-1 text-xs font-semibold text-[#D8CCFF]">
                {product.category}
              </div>
            </div>

            <div className="space-y-4 p-5">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">{product.brand}</p>
                <h2 className="mt-2 text-lg font-semibold text-white">{product.name}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{product.shortDescription}</p>
              </div>

              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/40 px-4 py-3">
                <p className="text-sm text-slate-300">Harga</p>
                <p className="text-base font-semibold text-white">{formatRupiah(product.price)}</p>
              </div>

              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2 text-[#7DE0A6]">
                  <BadgeCheck className="h-4 w-4" />
                  <span>Stok {product.stock} {product.unit}</span>
                </div>
                <Link
                  to={`/products/${product.id}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#7B57E0]/45 bg-[#7B57E0]/12 px-3 py-2 font-semibold text-[#D9CDFF] transition-smooth hover:bg-[#7B57E0]/22"
                >
                  Detail
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-8 text-center">
          <p className="text-lg font-semibold text-white">Product tidak ditemukan</p>
          <p className="mt-2 text-sm text-slate-300">
            Coba ubah kata kunci pencarian atau pilih kategori lain.
          </p>
        </div>
      )}
    </div>
  );
}
