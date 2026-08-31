import React, { useState, useEffect } from 'react';
import { SITE_INFO, CONTACT_LINKS } from '../data/siteData';
import { 
  MessageSquare, 
  ShieldCheck, 
  Menu, 
  X, 
  UserPlus, 
  MoreVertical, 
  Home, 
  BookOpen, 
  Database, 
  Zap, 
  Globe, 
  Stethoscope, 
  Building2,
  Users
} from 'lucide-react';

export default function Header({ onOpenRegisterModal, onNavigate, currentPath = '/' }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quickAccessOpen, setQuickAccessOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href, isAmbassador = false) => {
    if (isAmbassador) {
      e.preventDefault();
      if (onNavigate) {
        onNavigate('/ambassador');
      } else {
        window.history.pushState({}, '', '/ambassador');
        window.dispatchEvent(new Event('popstate'));
      }
      setQuickAccessOpen(false);
      setMobileMenuOpen(false);
      return;
    }

    if (currentPath === '/ambassador') {
      e.preventDefault();
      if (onNavigate) {
        onNavigate('/');
        setTimeout(() => {
          if (href.startsWith('#')) {
            const el = document.querySelector(href);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 150);
      }
      setQuickAccessOpen(false);
      setMobileMenuOpen(false);
    }
  };

  const quickAccessItems = [
    { label: 'Home', href: '#hero', icon: Home, badge: null, isAmbassador: false },
    { label: 'USMLE Resources', href: '#resources', icon: BookOpen, badge: null, isAmbassador: false },
    { label: 'iMD', href: '#pricing', icon: Database, badge: 'iMD Hub', isAmbassador: false },
    { label: 'StepWiseMD', href: '#stepwise-pricing', icon: Zap, badge: 'StepWise', isAmbassador: false },
    { label: 'PLAB / UK Resources', href: '#exams', icon: Globe, badge: 'UK', isAmbassador: false },
    { label: 'AMC Resources', href: '#exams', icon: Globe, badge: 'AUS', isAmbassador: false },
    { label: 'Medical Research Opportunities', href: '#pubmed-opportunities', icon: Stethoscope, badge: 'Research', isAmbassador: false },
    { label: 'Global Clinical Rotations', href: '#clinical-rotations', icon: Building2, badge: 'USCE', isAmbassador: false },
    { label: 'Become an Ambassador', href: '/ambassador', icon: Users, badge: 'Join Us', isAmbassador: true },
    { label: 'Contact / WhatsApp', href: '#contact', icon: MessageSquare, badge: '24/7', isAmbassador: false }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200/80 py-3 shadow-lg shadow-slate-900/5' : 'bg-slate-50/70 py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, '#hero', false)}
            className="flex items-center gap-3 group"
          >
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
            <a href="#resources" onClick={(e) => handleNavClick(e, '#resources')} className="hover:text-sky-600 transition-colors">iMD Resources</a>
            <a href="#pubmed-opportunities" onClick={(e) => handleNavClick(e, '#pubmed-opportunities')} className="hover:text-sky-600 transition-colors flex items-center gap-1">
              Research <span className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-1.5 py-0.2 rounded border border-emerald-200">Pubs</span>
            </a>
            <a href="#exams" onClick={(e) => handleNavClick(e, '#exams')} className="hover:text-sky-600 transition-colors">Exam Prep</a>
            <a href="#clinical-rotations" onClick={(e) => handleNavClick(e, '#clinical-rotations')} className="hover:text-sky-600 transition-colors">Clinical Rotations</a>
            <a href="#pricing" onClick={(e) => handleNavClick(e, '#pricing')} className="hover:text-sky-600 transition-colors">VIP Plans</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-sky-600 transition-colors">Contact</a>
          </nav>

          {/* Action CTAs & 3-Dots Quick-Access Menu */}
          <div className="flex items-center gap-2.5">
            <div className="hidden sm:flex items-center gap-2.5">
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

            {/* 3-Dots Quick-Access Menu Button */}
            <div className="relative">
              <button 
                onClick={() => setQuickAccessOpen(!quickAccessOpen)}
                className={`p-2.5 rounded-full border transition flex items-center justify-center ${
                  quickAccessOpen 
                    ? 'bg-sky-600 text-white border-sky-600 shadow-md' 
                    : 'bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-100 border-slate-200 shadow-sm'
                }`}
                title="Quick Access Menu (3-Dots)"
                aria-label="Quick Access Menu"
              >
                <MoreVertical className="w-5 h-5" />
              </button>

              {/* 3-Dots Dropdown Menu */}
              {quickAccessOpen && (
                <div 
                  className="absolute right-0 mt-3 w-72 bg-white rounded-2xl border border-slate-200 shadow-2xl py-3 px-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  <div className="px-3 py-2 border-b border-slate-100 mb-1 flex items-center justify-between">
                    <span className="text-xs font-black text-slate-900 font-heading uppercase tracking-wider">Quick Access Menu</span>
                    <span className="text-[10px] font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded-full border border-sky-100">Horizon</span>
                  </div>

                  <div className="space-y-0.5 max-h-[75vh] overflow-y-auto">
                    {quickAccessItems.map((item, idx) => (
                      <a 
                        key={idx}
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href, item.isAmbassador)}
                        className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-sky-50 text-slate-700 hover:text-sky-600 transition group"
                      >
                        <div className="flex items-center gap-2.5">
                          <item.icon className="w-4 h-4 text-slate-400 group-hover:text-sky-600 transition" />
                          <span className="text-xs font-bold">{item.label}</span>
                        </div>
                        {item.badge && (
                          <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200 group-hover:bg-sky-100 group-hover:text-sky-700 group-hover:border-sky-200 transition">
                            {item.badge}
                          </span>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Hamburger Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-900 rounded-lg bg-white border border-slate-200 shadow-sm"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 mt-3 space-y-4 animate-in slide-in-from-top duration-200 shadow-xl max-h-[85vh] overflow-y-auto">
          <div className="pb-2 border-b border-slate-100">
            <span className="text-xs font-black text-slate-900 uppercase tracking-wider">Navigation Menu</span>
          </div>

          <nav className="flex flex-col space-y-1 text-slate-700">
            {quickAccessItems.map((item, idx) => (
              <a 
                key={idx}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.isAmbassador)}
                className="flex items-center justify-between py-2.5 px-3 rounded-xl hover:bg-sky-50 hover:text-sky-600 font-semibold text-sm transition"
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-4 h-4 text-sky-600" />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
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
