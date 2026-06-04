import SectionHeader from '../../components/SectionHeader.jsx';
import EmptyState from '../../components/EmptyState.jsx';
import PrimaryButton from '../../components/PrimaryButton.jsx';

export default function Customers() {
  return (
    <div className="space-y-6">
      <SectionHeader eyebrow="Customers" title="Manajemen Pelanggan" action={<PrimaryButton>+ Tambah Pelanggan</PrimaryButton>} />
      <EmptyState icon="👥" title="Halaman Pelanggan" description="Fitur manajemen pelanggan akan segera hadir" />
    </div>
  );
}
