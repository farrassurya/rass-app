import { Link } from 'react-router-dom';
import { ArrowRight, BadgeCheck } from './WorkshopIcons.jsx';
import PanelCard from './PanelCard.jsx';
import { formatRupiah } from '../utils/formatRupiah.js';

export default function ProductCard({ product }) {
  return (
    <PanelCard className="group transition-all duration-300 hover:-translate-y-1 hover:border-[#7B57E0]/45">
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
            <span>
              Stok {product.stock} {product.unit}
            </span>
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
    </PanelCard>
  );
}