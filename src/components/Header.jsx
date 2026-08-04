import React, { useState, useEffect } from 'react';
import { SITE_INFO, CONTACT_LINKS } from '../data/siteData';
import { MessageSquare, ShieldCheck, Menu, X, UserPlus } from 'lucide-react';

export default function Header({ onOpenRegisterModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 py-3 shadow-lg shadow-slate-900/5' : 'bg-slate-50/70 py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-emerald-400 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-300"></div>
              <img 
                src={SITE_INFO.logo} 
                alt={SITE_INFO.name} 
                className="relative w-10 h-10 rounded-full object-cover border-2 border-sky-500 shadow-md"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-xl tracking-tight text-slate-900 font-heading group-hover:text-sky-600 transition">
                  THE USMLE <span className="text-sky-600">HORIZON</span>
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 bg-sky-50 text-sky-700 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-sky-200">
                  <ShieldCheck className="w-3 h-3 text-sky-600" /> VERIFIED
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium tracking-wide">
                Scratch to Match • Medical Portal
              </p>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            <a href="#resources" className="hover:text-sky-600 transition-colors">iMD Resources</a>
            <a href="#research" className="hover:text-sky-600 transition-colors flex items-center gap-1">
              Research <span className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-1.5 py-0.2 rounded border border-emerald-200">Pubs</span>
            </a>
            <a href="#exams" className="hover:text-sky-600 transition-colors">Exam Prep</a>
            <a href="#pricing" className="hover:text-sky-600 transition-colors">VIP Plans</a>
            <a href="#proofs" className="hover:text-sky-600 transition-colors">Proof Gallery</a>
            <a href="#contact" className="hover:text-sky-600 transition-colors">Contact</a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={CONTACT_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-300 transition flex items-center gap-1.5 shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </a>

            <button
              onClick={onOpenRegisterModal}
              className="btn-primary py-2 px-4 text-xs font-semibold"
            >
              <UserPlus className="w-3.5 h-3.5" />
              <span>Get iMD Access</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-slate-900 rounded-lg bg-white border border-slate-200 shadow-sm"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 mt-3 space-y-4 animate-in slide-in-from-top duration-200 shadow-xl">
          <nav className="flex flex-col space-y-3 font-semibold text-slate-700">
            <a 
              href="#resources" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-sky-600 py-1 transition"
            >
              📚 iMD Resources & QBanks
            </a>
            <a 
              href="#research" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-sky-600 py-1 transition"
            >
              🔬 Research Mentorship ("Scratch to Match")
            </a>
            <a 
              href="#exams" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-sky-600 py-1 transition"
            >
              🩺 Exam Prep (USMLE / PLAB / AMC)
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-sky-600 py-1 transition"
            >
              💎 VIP Pricing & Duration Plans
            </a>
            <a 
              href="#proofs" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-sky-600 py-1 transition"
            >
              📜 Verified Proof Gallery
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-sky-600 py-1 transition"
            >
              📞 Contact Dr. Abdullah
            </a>
          </nav>

          <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegisterModal();
              }}
              className="btn-primary w-full justify-center py-2.5 text-sm"
            >
              <UserPlus className="w-4 h-4" />
              <span>Register for iMD Access</span>
            </button>

            <a
              href={CONTACT_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full justify-center py-2.5 text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contact via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
