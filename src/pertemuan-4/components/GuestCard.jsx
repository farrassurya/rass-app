function formatPrice(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function GuestCard({ destination }) {
  return (
    <article className="group card-enter relative overflow-hidden rounded-2xl border border-white/70 bg-white/95 shadow-[0_12px_26px_rgba(48,64,63,0.12)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_36px_rgba(48,64,63,0.2)]">
      <div className="relative overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(47,64,63,0.44),transparent_50%)]" />
        <span className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-semibold text-[color:var(--deep)] backdrop-blur-sm">
          {destination.category}
        </span>
      </div>

      <div className="space-y-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold text-[color:var(--deep)]">{destination.name}</h3>
          <span className="rounded-full bg-[color:var(--p1)] px-2.5 py-1 text-xs font-semibold text-[color:var(--deep)]">
            {destination.rating} / 5
          </span>
        </div>

        <p className="text-sm text-[color:var(--muted)]">{destination.description}</p>

        <div className="grid grid-cols-2 gap-2 text-xs text-[color:var(--ink)]">
          <div className="rounded-lg border border-[color:var(--p2)]/80 bg-[color:var(--p2)]/35 px-3 py-2">
            <p className="font-semibold">Kategori</p>
            <p>{destination.category}</p>
          </div>
          <div className="rounded-lg border border-[color:var(--p2)]/80 bg-[color:var(--p2)]/35 px-3 py-2">
            <p className="font-semibold">Provinsi</p>
            <p>{destination.province}</p>
          </div>
          <div className="rounded-lg border border-[color:var(--p2)]/80 bg-[color:var(--p2)]/35 px-3 py-2">
            <p className="font-semibold">Kota</p>
            <p>{destination.location.city}</p>
          </div>
          <div className="rounded-lg border border-[color:var(--p2)]/80 bg-[color:var(--p2)]/35 px-3 py-2">
            <p className="font-semibold">Pulau</p>
            <p>{destination.location.island}</p>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-[color:var(--p2)] pt-3">
          <p className="text-xs text-[color:var(--muted)]">
            Jam {destination.schedule.open} - {destination.schedule.close}
          </p>
          <p className="text-sm font-bold text-[color:var(--deep)]">{formatPrice(destination.ticketPrice)}</p>
        </div>
      </div>
    </article>
  );
}
