import ProductCard from './ProductCard.jsx';
import EmptyState from './EmptyState.jsx';

export default function ProductGrid({ products }) {
  if (products.length === 0) {
    return (
      <EmptyState
        icon="🛒"
        title="Product tidak ditemukan"
        description="Coba ubah kata kunci pencarian atau pilih kategori lain."
      />
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}