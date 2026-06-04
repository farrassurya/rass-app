import SectionHeader from '../../components/SectionHeader.jsx';
import EmptyState from '../../components/EmptyState.jsx';
import PrimaryButton from '../../components/PrimaryButton.jsx';

export default function Booking() {
  return (
    <div className="space-y-6">
      <SectionHeader eyebrow="Booking" title="Manajemen Booking" action={<PrimaryButton>+ Tambah Booking</PrimaryButton>} />
      <EmptyState icon="📅" title="Halaman Booking" description="Fitur manajemen booking akan segera hadir" />
    </div>
  );
}
