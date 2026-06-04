function formatPrice(value) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatFacility(value) {
  return value ? "Ya" : "Tidak";
}

export default function AdminTable({ items }) {
  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-[color:var(--p2)] bg-white p-10 text-center text-[color:var(--muted)]">
        Data tidak ditemukan. Coba ubah kata kunci atau filter.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-2xl border border-[color:var(--p2)]/80 bg-white">
      <table className="min-w-full text-left text-sm text-[color:var(--ink)]">
        <thead className="bg-[color:var(--p2)]/65 text-xs uppercase tracking-wide text-[color:var(--deep)]">
          <tr>
            <th className="px-4 py-3">Nama</th>
            <th className="px-4 py-3">Kategori</th>
            <th className="px-4 py-3">Provinsi</th>
            <th className="px-4 py-3">Kota</th>
            <th className="px-4 py-3">Pulau</th>
            <th className="px-4 py-3">Harga Tiket</th>
            <th className="px-4 py-3">Rating</th>
            <th className="px-4 py-3">Jam Buka</th>
            <th className="px-4 py-3">Parkir</th>
            <th className="px-4 py-3">Guide</th>
            <th className="px-4 py-3">Toilet</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border-t border-[color:var(--p2)]/70 even:bg-[color:var(--p3)]/35 hover:bg-[color:var(--p1)]/45">
              <td className="px-4 py-3 font-semibold text-[color:var(--deep)]">{item.name}</td>
              <td className="px-4 py-3">{item.category}</td>
              <td className="px-4 py-3">{item.province}</td>
              <td className="px-4 py-3">{item.location.city}</td>
              <td className="px-4 py-3">{item.location.island}</td>
              <td className="px-4 py-3">{formatPrice(item.ticketPrice)}</td>
              <td className="px-4 py-3">{item.rating}</td>
              <td className="px-4 py-3">
                {item.schedule.open} - {item.schedule.close}
              </td>
              <td className="px-4 py-3">{formatFacility(item.facilities.parking)}</td>
              <td className="px-4 py-3">{formatFacility(item.facilities.localGuide)}</td>
              <td className="px-4 py-3">{formatFacility(item.facilities.restroom)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
