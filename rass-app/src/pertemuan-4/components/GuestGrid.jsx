import GuestCard from "./GuestCard";

export default function GuestGrid({ items }) {
  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-[color:var(--p2)] bg-white/90 p-10 text-center text-[color:var(--muted)]">
        Data tidak ditemukan. Coba ubah kata kunci atau filter.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <GuestCard key={item.id} destination={item} />
      ))}
    </div>
  );
}
