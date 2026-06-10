import SectionHeader from '../../components/SectionHeader.jsx';
import EmptyState from '../../components/EmptyState.jsx';
import PrimaryButton from '../../components/PrimaryButton.jsx';

export default function Services() {
  return (
    <div className="space-y-6">
      <SectionHeader eyebrow="Services" title="Manajemen Layanan Servis" action={<PrimaryButton>+ Tambah Layanan</PrimaryButton>} />
      <EmptyState icon="🔧" title="Halaman Layanan Servis" description="Fitur manajemen layanan servis akan segera hadir" />
    </div>
  );
}
