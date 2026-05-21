import SearchField from './SearchField.jsx';
import SelectField from './SelectField.jsx';

export default function ProductFilters({ searchTerm, setSearchTerm, selectedCategory, setSelectedCategory, categories }) {
  return (
    <div className="grid grid-cols-1 gap-3 rounded-2xl border border-white/10 bg-slate-950/60 p-4 md:grid-cols-[1fr_auto]">
      <label className="block">
        <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-slate-400">Search Product</span>
        <SearchField
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          placeholder="Cari nama product, brand, atau deskripsi..."
          clearable
          onClear={() => setSearchTerm('')}
        />
      </label>

      <label className="block md:min-w-52">
        <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-slate-400">Filter Kategori</span>
        <SelectField
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
          options={categories}
        />
      </label>
    </div>
  );
}