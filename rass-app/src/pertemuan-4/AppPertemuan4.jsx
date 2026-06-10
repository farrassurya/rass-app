import { useMemo, useState } from "react";
import destinations from "./data/destinations.json";
import ViewSwitch from "./components/ViewSwitch";
import SearchBar from "./components/SearchBar";
import FilterSelect from "./components/FilterSelect";
import GuestGrid from "./components/GuestGrid";
import AdminTable from "./components/AdminTable";

export default function AppPertemuan4() {
  const [activeView, setActiveView] = useState("guest");
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedIsland, setSelectedIsland] = useState("all");

  const categoryOptions = useMemo(
    () => [...new Set(destinations.map((item) => item.category))],
    []
  );

  const islandOptions = useMemo(
    () => [...new Set(destinations.map((item) => item.location.island))],
    []
  );

  const filteredDestinations = useMemo(() => {
    return destinations.filter((item) => {
      const query = searchText.toLowerCase().trim();
      const searchMatch =
        query.length === 0 ||
        item.name.toLowerCase().includes(query) ||
        item.province.toLowerCase().includes(query) ||
        item.location.city.toLowerCase().includes(query);

      const categoryMatch =
        selectedCategory === "all" || item.category === selectedCategory;

      const islandMatch =
        selectedIsland === "all" || item.location.island === selectedIsland;

      return searchMatch && categoryMatch && islandMatch;
    });
  }, [searchText, selectedCategory, selectedIsland]);

  return (
    <main className="pertemuan4-theme min-h-screen bg-[linear-gradient(165deg,var(--p1)_0%,var(--p2)_38%,var(--p3)_72%,var(--p4)_100%)] px-4 py-6 sm:px-8">
      <div className="mx-auto w-full max-w-7xl space-y-6">
        <header className="relative overflow-hidden rounded-3xl border border-white/40 bg-linear-to-br from-(--deep) to-[#2f403f] p-6 text-white shadow-[0_16px_40px_rgba(41,65,62,0.28)] sm:p-8">
          <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-(--p1)/25 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-24 left-1/3 h-52 w-52 rounded-full bg-(--p4)/20 blur-2xl" />

          <p className="relative text-[10px] font-bold uppercase tracking-[0.22em] text-(--p2)">
            Farrassurya - 2 SIC - Framework Lanjutan
          </p>
          <h1 className="relative mt-2 text-2xl font-black leading-tight sm:text-4xl">
            Destinasi Wisata Indonesia
          </h1>
          <p className="relative mt-3 max-w-2xl text-xs text-(--p2) sm:text-sm">
            Eksplorasi 20 lokasi pilihan dengan fitur Search & Filter terintegrasi.
          </p>
        </header>

        <section className="rounded-2xl border border-white/50 bg-white/80 p-4 shadow-[0_10px_30px_rgba(47,64,63,0.08)] backdrop-blur-sm sm:p-5">
          <div className="mb-4 flex flex-col gap-4 border-b border-(--p2)/70 pb-4 lg:flex-row lg:items-center lg:justify-between">
            <ViewSwitch activeView={activeView} onChange={setActiveView} />
            <p className="text-xs font-medium text-(--muted)">
              Menampilkan <span className="font-bold text-(--deep)">{filteredDestinations.length}</span> data
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <SearchBar value={searchText} onChange={setSearchText} />
            </div>
            <FilterSelect
              id="category-filter"
              label="Filter Kategori"
              value={selectedCategory}
              options={categoryOptions}
              onChange={setSelectedCategory}
            />
            <FilterSelect
              id="island-filter"
              label="Filter Pulau"
              value={selectedIsland}
              options={islandOptions}
              onChange={setSelectedIsland}
            />
          </div>
        </section>

        <section className="transition-opacity duration-300">
          {activeView === "guest" ? (
            <GuestGrid items={filteredDestinations} />
          ) : (
            <div className="overflow-hidden rounded-2xl border border-white/50 bg-white/85 shadow-[0_10px_30px_rgba(47,64,63,0.1)] backdrop-blur-sm">
              <AdminTable items={filteredDestinations} />
            </div>
          )}
        </section>
      </div>
    </main>
  );
}