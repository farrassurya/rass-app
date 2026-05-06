import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

/**
 * MAIN LAYOUT COMPONENT
 * Layout: Menggunakan flex untuk responsive grid design
 * State: Sidebar visibility untuk mobile responsiveness
 * Outlet: React Router outlet untuk render child routes
 * 
 * Struktur:
 * - Header (sticky top)
 * - Main Container:
 *   - Sidebar (fixed pada mobile, static pada desktop)
 *   - Content area (flex-1 untuk occupy remaining space)
 * - Footer (bottom)
 */
export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.16),transparent_30%),radial-gradient(circle_at_85%_12%,rgba(14,165,233,0.15),transparent_22%),linear-gradient(180deg,#030712_0%,#0b1220_48%,#050816_100%)]" />
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-40 h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />

      <div className="relative flex min-h-screen flex-col">
        <Header onToggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

        <div className="relative flex flex-1">
          <Sidebar
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />

          <main className="flex-1 overflow-auto">
            <div className="mx-auto max-w-screen-2xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
              <div className="rounded-[28px] border border-white/10 bg-slate-950/35 p-4 shadow-[0_24px_100px_rgba(2,6,23,0.45)] backdrop-blur-xl sm:p-6 lg:p-8">
                {/* Outlet: Tempat halaman child (Dashboard, Booking, dll) di-render */}
                <Outlet />
              </div>
            </div>
          </main>
        </div>

        <Footer />
      </div>
    </div>
  );
}
