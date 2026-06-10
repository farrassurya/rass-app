import { useState } from 'react';
import { CirclePlus, MoreHorizontal } from 'lucide-react';
import productsData from '../data/productsData.json';
import SectionHeader from '../components/SectionHeader.jsx';
import PrimaryButton from '../components/PrimaryButton.jsx';
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
import { Button } from '../components/ui/button.jsx';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } 
from '../components/ui/dialog.jsx';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs.jsx';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../components/ui/dropdown-menu.jsx';

import { LayoutDashboard, Package2, Users2, Wrench, Sparkles } from '../components/WorkshopIcons.jsx';

export default function Components() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Component Playground"
        title="Reusable Component Library"
        description="Halaman ini merangkum component yang dipakai ulang di project dan mengikuti style Figma yang kamu lampirkan."
        action={
          <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
            <Button
              className="rounded-xl border border-white/10 bg-[#7B57E0] px-4 text-white shadow-[0_12px_30px_rgba(123,87,224,0.32)] hover:bg-[#8B6FE8]"
              onClick={() => setDialogOpen(true)}
            >
              <CirclePlus className="size-4" />
              Add snippet
            </Button>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Quick component note</DialogTitle>
                <DialogDescription>
                  Dialog ini dipakai untuk aksi singkat seperti tambah catatan, konfirmasi, atau form kecil tanpa pindah halaman.
                </DialogDescription>
              </DialogHeader>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-slate-300">
                <div className="mb-2 flex items-center gap-2 text-white">
                  <Sparkles className="size-4 text-[#8B6FE8]" />
                  <span>Styling mengikuti surface dashboard yang gelap dan lembut.</span>
                </div>
                <p>
                  Komponen ini cocok dipakai untuk quick add, konfirmasi delete, atau detail singkat pada area admin.
                </p>
              </div>

              <DialogFooter>
                <Button variant="outline" className="border-white/10 bg-white/5 text-slate-200 hover:bg-white/10" onClick={() => setDialogOpen(false)}>
                  Cancel
                </Button>
                <Button className="bg-[#7B57E0] text-white hover:bg-[#8B6FE8]" onClick={() => setDialogOpen(false)}>
                  Save changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog.Root>
        }
      />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <PanelCard className="p-6">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-[#B8C0CC]">Shadcn / Tabs</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">Tabbed overview</h2>
            </div>
            <StatusPill tone="info">New</StatusPill>
          </div>

          <Tabs.Root defaultValue="overview">
            <TabsList className="w-full justify-start overflow-x-auto">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="bookings">Bookings</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#B8C0CC]">Active panels</p>
                  <p className="mt-3 text-3xl font-semibold text-white">12</p>
                  <p className="mt-2 text-sm text-slate-300">Reusable block untuk halaman admin dan playground.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#B8C0CC]">Design tokens</p>
                  <p className="mt-3 text-3xl font-semibold text-white">5</p>
                  <p className="mt-2 text-sm text-slate-300">Warna, radius, shadow, dan spacing utama project.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#B8C0CC]">Speed</p>
                  <p className="mt-3 text-3xl font-semibold text-white">Fast</p>
                  <p className="mt-2 text-sm text-slate-300">Tabs menjaga konten tetap ringkas tanpa pindah page.</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="bookings">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-[#11151d] p-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#B8C0CC]">Today</p>
                  <p className="mt-3 text-2xl font-semibold text-white">16 bookings</p>
                  <p className="mt-2 text-sm text-slate-300">Filter cepat untuk ringkasan harian di dashboard.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-[#11151d] p-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-[#B8C0CC]">Status</p>
                  <p className="mt-3 text-2xl font-semibold text-white">3 pending</p>
                  <p className="mt-2 text-sm text-slate-300">Pas untuk memisahkan antrian aktif dan selesai.</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="services">
              <div className="rounded-2xl border border-white/10 bg-[#11151d] p-4">
                <p className="text-xs uppercase tracking-[0.28em] text-[#B8C0CC]">Service group</p>
                <p className="mt-3 text-lg font-semibold text-white">Interior wash, detailing, coating</p>
                <p className="mt-2 text-sm text-slate-300">Tab ini bisa dipakai untuk memecah kategori layanan per unit bisnis.</p>
              </div>
            </TabsContent>
          </Tabs.Root>
        </PanelCard>

        <PanelCard className="p-6">
          <p className="text-xs uppercase tracking-[0.35em] text-[#B8C0CC]">Shadcn / Dropdown</p>
          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm text-[#B8C0CC]">Workshop action</p>
                <h3 className="mt-1 text-xl font-semibold text-white">Booking row menu</h3>
              </div>

              <DropdownMenu.Root>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10 hover:text-white">
                    <MoreHorizontal className="size-4" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" className="w-52">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Edit booking</DropdownMenuItem>
                  <DropdownMenuItem>Duplicate row</DropdownMenuItem>
                  <DropdownMenuItem>Send reminder</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem variant="destructive">Archive booking</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu.Root>
            </div>

            <div className="mt-5 space-y-3">
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0f1319] px-4 py-3">
                <div>
                  <p className="text-sm font-medium text-white">BMW X5</p>
                  <p className="text-xs text-slate-400">Premium detailing</p>
                </div>
                <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-300">Confirmed</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0f1319] px-4 py-3">
                <div>
                  <p className="text-sm font-medium text-white">Toyota Innova</p>
                  <p className="text-xs text-slate-400">Interior wash</p>
                </div>
                <span className="rounded-full bg-amber-500/15 px-3 py-1 text-xs font-medium text-amber-300">Pending</span>
              </div>
            </div>
          </div>
        </PanelCard>
      </div>

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