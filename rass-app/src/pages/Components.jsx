import productsData from '../data/productsData.json';
import SectionHeader from '../components/SectionHeader.jsx';
import PrimaryButton from '../components/PrimaryButton.jsx';
import AuthCard from '../components/AuthCard.jsx';
import EmptyState from '../components/EmptyState.jsx';
import FormField from '../components/FormField.jsx';
import CheckboxField from '../components/CheckboxField.jsx';
import StatusPill from '../components/StatusPill.jsx';
import dashboardData from '../data/dashboardData.json';

import PanelCard from '../components/PanelCard.jsx';
import SearchField from '../components/SearchField.jsx';
import SelectField from '../components/SelectField.jsx';
import ProductCard from '../components/ProductCard.jsx';
import AnalyticsChart from '../components/AnalyticsChart.jsx';
import CalendarWidget from '../components/CalendarWidget.jsx';
import ColorSwatch from '../components/ColorSwatch.jsx';
import IconTile from '../components/IconTile.jsx';
import UserPreview from '../components/UserPreview.jsx';

import { LayoutDashboard, Package2, Users2, Wrench } from '../components/WorkshopIcons.jsx';

export default function Components() {
  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Component Playground"
        title="Reusable Component Library"
        description="Halaman ini merangkum component yang dipakai ulang di project dan mengikuti style Figma yang kamu lampirkan."
        action={<PrimaryButton>Primary Action</PrimaryButton>}
      />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <PanelCard className="p-6 xl:col-span-2">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#B8C0CC]">Navigation / Big</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">Navigation components</h2>
            </div>
            <StatusPill tone="purple">Active</StatusPill>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <IconTile icon={LayoutDashboard} label="Dashboard" active />
            <IconTile icon={Package2} label="Products" />
            <IconTile icon={Users2} label="Customer" />
            <IconTile icon={Wrench} label="Services" />
          </div>
        </PanelCard>

        <PanelCard className="p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-[#B8C0CC]">User</p>
          <div className="mt-4 space-y-4">
            <UserPreview name="Mark Ferdinand" email="mkferdinand@gmail.com" image="/img/rass3.jpeg" />
            <StatusPill tone="success">10.0%</StatusPill>
            <StatusPill tone="warning">7.0%</StatusPill>
          </div>
        </PanelCard>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <AnalyticsChart analytics={dashboardData.analytics} />
        <CalendarWidget title="Calendar item" schedule={[{ time: '16:00', event: 'Summer Campaign is end!' }]} />
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <PanelCard className="p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-[#B8C0CC]">Search</p>
          <div className="mt-4 space-y-4">
            <SearchField value="" onChange={() => {}} placeholder="Search" />
            <SearchField value="Content" onChange={() => {}} placeholder="Content" />
            <SearchField value="Search" onChange={() => {}} placeholder="Search" clearable onClear={() => {}} />
          </div>
        </PanelCard>

        <PanelCard className="p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-[#B8C0CC]">Forms</p>
          <div className="mt-4 space-y-4">
            <FormField label="Email" name="email" value="demo@rass.app" onChange={() => {}} placeholder="demo@rass.app" />
            <SelectField value="Month" onChange={() => {}} options={['Year', 'Month']} />
            <CheckboxField>Remember me</CheckboxField>
            <PrimaryButton className="w-full">Submit</PrimaryButton>
          </div>
        </PanelCard>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <PanelCard className="p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-[#B8C0CC]">Basic</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <PrimaryButton>Save</PrimaryButton>
            <PrimaryButton variant="secondary">Cancel</PrimaryButton>
            <StatusPill tone="info">Info</StatusPill>
          </div>
        </PanelCard>

        <PanelCard className="p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-[#B8C0CC]">Card</p>
          <div className="mt-4 max-w-sm">
            <ProductCard product={productsData[0]} />
          </div>
        </PanelCard>

        <EmptyState
          icon="⚙"
          title="Section component"
          description="Contoh placeholder section untuk halaman yang masih belum punya data lengkap."
          action={<PrimaryButton variant="secondary">Explore</PrimaryButton>}
        />
      </div>

      <PanelCard className="p-6">
        <p className="text-xs uppercase tracking-[0.35em] text-[#B8C0CC]">Design tokens</p>
        <div className="mt-4 grid grid-cols-2 gap-6 md:grid-cols-4 xl:grid-cols-5">
          <ColorSwatch label="Highlight" swatchClass="bg-[#7B57E0]" hex="#7B57E0" />
          <ColorSwatch label="Base" swatchClass="bg-[#E3E3E3]" hex="#E3E3E3" />
          <ColorSwatch label="Secondary" swatchClass="bg-[#B8C0CC]" hex="#B8C0CC" />
          <ColorSwatch label="Error" swatchClass="bg-[#F53B30]" hex="#F53B30" />
          <ColorSwatch label="Success" swatchClass="bg-[#2AA31F]" hex="#2AA31F" />
        </div>
      </PanelCard>
    </div>
  );
}