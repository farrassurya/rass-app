import { useMemo, useState } from 'react';
import productsData from '../../data/productsData.json';
import SectionHeader from '../../components/SectionHeader.jsx';
import ProductFilters from '../../components/ProductFilters.jsx';
import ProductGrid from '../../components/ProductGrid.jsx';
import StatusPill from '../../components/StatusPill.jsx';

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
      <SectionHeader
        eyebrow="Inventory"
        title="Product Bengkel"
        description="Daftar product bengkel seperti oli, coolant, filter, dan komponen lainnya untuk kebutuhan servis harian."
        action={
          <StatusPill tone="neutral">
            Total Product: <span className="text-white">{filteredProducts.length}</span>
            <span className="text-slate-400"> / {productsData.length}</span>
          </StatusPill>
        }
      />

      <ProductFilters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
      />

      <ProductGrid products={filteredProducts} />
    </div>
  );
}
