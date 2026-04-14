import React, { useState } from "react";
import GuestView from "./components/GuestView";
import AdminView from "./components/AdminView";

export default function Pertemuan4() {
  const [activeView, setActiveView] = useState("guest");

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation/Toggle Bar */}
      <div className="sticky top-0 z-40 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-amber-400/20 backdrop-blur-md shadow-lg">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          {/* Logo/Title */}
          <div>
            <h1 className="text-xl md:text-2xl font-black text-white">
              Restaurant <span className="text-amber-400">Management</span>
            </h1>
            <p className="text-xs text-slate-400 mt-0.5">Pertemuan 4 - JSON Data & Responsive UI</p>
          </div>

          {/* View Toggle */}
          <div className="flex gap-2 bg-slate-800/50 border border-amber-400/20 p-1 rounded-lg">
            <button
              onClick={() => setActiveView("guest")}
              className={`px-4 md:px-6 py-2 rounded-md font-bold text-sm md:text-base transition-all uppercase tracking-wider ${
                activeView === "guest"
                  ? "bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 shadow-lg shadow-amber-400/50"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              👤 Guest View
            </button>
            <button
              onClick={() => setActiveView("admin")}
              className={`px-4 md:px-6 py-2 rounded-md font-bold text-sm md:text-base transition-all uppercase tracking-wider ${
                activeView === "admin"
                  ? "bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 shadow-lg shadow-amber-400/50"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              ⚙️ Admin View
            </button>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="animate-fade-in">
        {activeView === "guest" && <GuestView />}
        {activeView === "admin" && <AdminView />}
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-t border-amber-400/20 mt-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Info */}
            <div>
              <h3 className="font-black text-white text-lg mb-3">About</h3>
              <p className="text-sm text-slate-400">
                A responsive restaurant directory built with React, Tailwind CSS, and JSON data.
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-black text-white text-lg mb-3">Features</h3>
              <ul className="text-sm text-slate-400 space-y-2">
                <li>✓ Search functionality</li>
                <li>✓ Multiple filters</li>
                <li>✓ Responsive design</li>
                <li>✓ Card & Table views</li>
              </ul>
            </div>

            {/* Stats */}
            <div>
              <h3 className="font-black text-white text-lg mb-3">Data Structure</h3>
              <ul className="text-sm text-slate-400 space-y-2">
                <li>📊 20 restaurants</li>
                <li>🏷️ 5+ main attributes</li>
                <li>📦 3 nested structures</li>
                <li>🎨 Tailwind styling</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-700 text-center text-xs text-slate-500">
            <p>© 2024 Restaurant Directory. Built for Pertemuan 4 Assignment.</p>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
}
