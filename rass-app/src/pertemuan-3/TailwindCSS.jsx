import React, { useState } from "react";
import UserForm from "./userForm";

export default function TailwindCSS() {
  const [isValid, setIsValid] = useState(false);
  const [summary, setSummary] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    // Background utama pake gradasi linear biar dapet feel kedalaman laut
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white p-6 md:p-12 relative overflow-hidden font-sans">
      
      {/* Efek Cahaya Biastral (Holographic Glow) khas Undersea Mystery */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full animate-pulse delay-700" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <header className="text-center mb-12">
          
          {/* Title Undersea Mystery dengan Text Glow */}
          <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter uppercase drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]">
            Top Up <span className="text-cyan-300">Free Fire</span>
          </h1>
          <div className="mt-4 inline-block bg-cyan-500 text-slate-900 px-6 py-1 rounded-full font-black text-xs tracking-widest uppercase">
            Dive In. Fight On.
          </div>
        </header>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Form Section - Glassmorphism Style */}
          <div className="lg:col-span-7 bg-slate-900/40 backdrop-blur-xl border border-cyan-500/20 p-8 rounded-3xl shadow-2xl relative">
            <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-8 bg-cyan-400 rounded-full shadow-[0_0_10px_#22d3ee]"></div>
                <h2 className="text-2xl font-black uppercase italic tracking-widest text-white">Top Up Mission</h2>
            </div>

            <UserForm onStatusChange={setIsValid} setSummaryData={setSummary} />

            {isValid ? (
              <button 
                onClick={() => setIsSuccess(true)}
                className="w-full mt-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-black uppercase tracking-[0.2em] rounded-xl shadow-[0_10px_30px_rgba(6,182,212,0.3)] transition-all transform hover:-translate-y-1 active:scale-95"
              >
                Execute Deployment
              </button>
            ) : (
              <div className="w-full mt-10 py-5 bg-slate-800/50 text-slate-500 text-center font-bold uppercase rounded-xl border border-slate-700/50 text-[10px] tracking-[0.3em]">
                System: Enter Tactical Data
              </div>
            )}
          </div>

          {/* Mission Brief Section */}
          <div className="lg:col-span-5">
            <div className="h-full bg-slate-950/60 backdrop-blur-md border-2 border-white/5 p-10 rounded-3xl relative overflow-hidden group">
              {/* Efek garis air transparan */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
              
              <h3 className="text-3xl font-black uppercase italic mb-10 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">Mission Brief</h3>
              
              <div className="space-y-8">
                {[
                    {label: "Commander ID", val: summary.playerId},
                    {label: "Codename", val: summary.nickname},
                    {label: "Tactical Gear", val: summary.item},
                    {label: "Finance Hub", val: summary.payment}
                ].map((item, i) => (
                    <div key={i} className="group/item">
                        <p className="text-[10px] font-black text-cyan-500/70 tracking-[0.3em] uppercase mb-1">{item.label}</p>
                        <p className="text-xl font-bold text-white border-b border-white/10 pb-2 group-hover/item:border-cyan-500/50 transition-colors">
                            {item.val || "---"}
                        </p>
                    </div>
                ))}
              </div>

              {isSuccess && (
                <div className="mt-12 p-6 bg-cyan-500 text-slate-900 rounded-2xl animate-bounce shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                  <p className="text-center font-black uppercase text-sm tracking-tighter italic">
                    Mission Accomplished: Supply Dropped!</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}