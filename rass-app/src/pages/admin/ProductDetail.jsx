import { Link, useParams } from 'react-router-dom';
import productsData from '../../data/productsData.json';
import { ArrowRight, BadgeCheck, CircleDollarSign } 
from '../../components/WorkshopIcons.jsx';

function formatRupiah(value) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(value);
}

export default function ProductDetail() {
  const { productId } = useParams();
  const product = productsData.find((item) => item.id === productId);

  if (!product) {
    return (
      <section className="rounded-3xl border border-white/10 bg-slate-950/65 p-8 text-center">
        <h1 className="text-2xl font-semibold text-white">Product tidak ditemukan</h1>
        <p className="mt-3 text-slate-300">
          Cek kembali product yang dipilih atau kembali ke halaman daftar product.
        </p>
        <Link
          to="/products"
          className="mt-6 inline-flex items-center gap-2 rounded-xl border border-[#7B57E0]/45 bg-[#7B57E0]/12 px-4 py-2 font-semibold text-[#D9CDFF] transition-smooth hover:bg-[#7B57E0]/22"
        >
          Kembali ke Product
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    );
  }

  return (
    <div className="space-y-6">
      <Link
        to="/products"
        className="inline-flex items-center gap-2 text-sm font-medium text-[#CFC7FF] transition-smooth hover:text-white"
      >
        <ArrowRight className="h-4 w-4 rotate-180" />
        Kembali ke daftar product
      </Link>

      <section className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/75 shadow-[0_20px_60px_rgba(2,6,23,0.45)]">
        <div className="grid grid-cols-1 xl:grid-cols-[1.1fr_1fr]">
          <div className="h-full min-h-80">
            <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
          </div>

          <div className="space-y-5 p-6 lg:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-[#7B57E0]/40 bg-[#7B57E0]/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#DDD4FF]">
                {product.category}
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
                {product.brand}
              </span>
            </div>

            <div>
              <h1 className="text-3xl font-bold text-white">{product.name}</h1>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">{product.description}</p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Harga</p>
                <p className="mt-2 flex items-center gap-2 text-lg font-semibold text-white">
                  <CircleDollarSign className="h-5 w-5 text-[#80C5FF]" />
                  {formatRupiah(product.price)}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Ketersediaan</p>
                <p className="mt-2 flex items-center gap-2 text-lg font-semibold text-[#8EE6B0]">
                  <BadgeCheck className="h-5 w-5" />
                  Stok {product.stock} {product.unit}
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/35 p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Spesifikasi Product</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-200">
                {product.specifications.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#7B57E0]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
