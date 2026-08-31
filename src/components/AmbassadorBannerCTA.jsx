import React from 'react';
import { Users, ArrowRight, Sparkles, Award } from 'lucide-react';

export default function AmbassadorBannerCTA({ onNavigate }) {
  const handleNav = (e) => {
    if (e) e.preventDefault();
    if (typeof onNavigate === 'function') {
      onNavigate('/ambassador');
    } else {
      window.history.pushState({}, '', '/ambassador');
      window.dispatchEvent(new Event('popstate'));
    }
  };

  return (
    <section className="py-10 bg-slate-50 border-t border-b border-slate-200/80 relative overflow-hidden">
      
      {/* Soft Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[180px] bg-sky-200/25 rounded-full blur-[90px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-3xl border border-sky-200/80 p-6 sm:p-8 shadow-xl shadow-sky-900/5 hover:border-sky-300 transition duration-300 relative overflow-hidden">
          
          {/* Top Right Decorative Tag */}
          <div className="absolute -top-1 right-8 hidden md:flex items-center gap-1 bg-gradient-to-r from-sky-500 to-emerald-500 text-white text-[10px] font-black px-3 py-1 rounded-b-xl shadow-sm tracking-wider uppercase">
            <Sparkles className="w-3 h-3" />
            <span>Official Program</span>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Left Content */}
            <div className="flex items-center gap-4 sm:gap-5 text-left w-full md:w-auto">
              <div className="w-14 h-14 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 shrink-0 shadow-sm">
                <Users className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-extrabold text-sky-700 bg-sky-50 border border-sky-200 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    Community Leadership
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-heading tracking-tight">
                  Become a <span className="text-sky-600">USMLE Horizon Ambassador</span>
                </h3>
                <p className="text-xs sm:text-sm font-bold text-slate-600 font-heading tracking-wide flex items-center gap-2">
                  <span>Represent.</span>
                  <span className="w-1 h-1 rounded-full bg-sky-500" />
                  <span>Connect.</span>
                  <span className="w-1 h-1 rounded-full bg-emerald-500" />
                  <span className="text-emerald-700">Grow with us.</span>
                </p>
              </div>
            </div>

            {/* Right Action Button */}
            <div className="shrink-0 w-full md:w-auto text-right">
              <a
                href="/ambassador"
                onClick={handleNav}
                className="btn-primary w-full md:w-auto py-3.5 px-7 text-xs sm:text-sm font-bold shadow-lg shadow-sky-600/20 group hover:scale-[1.02] transition inline-flex items-center justify-center gap-2"
              >
                <span>Become an Ambassador</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}