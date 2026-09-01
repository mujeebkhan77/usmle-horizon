import React from 'react';
import { SITE_INFO, CONTACT_LINKS } from '../data/siteData';
import { ArrowUp } from 'lucide-react';

export default function Footer({ onNavigate, currentPath = '/' }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e, href, isAmbassador = false) => {
    if (isAmbassador) {
      e.preventDefault();
      if (onNavigate) {
        onNavigate('/ambassador');
      } else {
        window.history.pushState({}, '', '/ambassador');
        window.dispatchEvent(new Event('popstate'));
      }
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
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img src={SITE_INFO.logo} alt="The USMLE Horizon logo" className="w-9 h-9 rounded-full object-cover border border-sky-400" />
              <span className="font-extrabold text-lg text-white font-heading">
                THE USMLE <span className="text-sky-400">HORIZON</span>
              </span>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              "{SITE_INFO.tagline}" — Serving medical students, international graduates, and clinicians worldwide with 50,000+ resources and PubMed research mentorship since 2015.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider font-heading">Platform Links</h4>
            <ul className="space-y-2 font-medium">
              <li><a href="#resources" onClick={(e) => handleLinkClick(e, '#resources')} className="hover:text-sky-400 transition">iMD QBank & Lecture Hub</a></li>
              <li><a href="#pubmed-opportunities" onClick={(e) => handleLinkClick(e, '#pubmed-opportunities')} className="hover:text-sky-400 transition">Medical Research Opportunities</a></li>
              <li><a href="#exams" onClick={(e) => handleLinkClick(e, '#exams')} className="hover:text-sky-400 transition">USMLE / PLAB / AMC Exam Prep</a></li>
              <li><a href="#clinical-rotations" onClick={(e) => handleLinkClick(e, '#clinical-rotations')} className="hover:text-sky-400 transition">Global Clinical Rotations</a></li>
              <li><a href="#pricing" onClick={(e) => handleLinkClick(e, '#pricing')} className="hover:text-sky-400 transition">VIP Access & Plans</a></li>
              <li><a href="/ambassador" onClick={(e) => handleLinkClick(e, '/ambassador', true)} className="hover:text-sky-400 transition text-sky-400 font-bold">Become an Ambassador</a></li>
            </ul>
          </div>

          {/* Support Info */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider font-heading">Contact & Support</h4>
            <p>WhatsApp: <a href={CONTACT_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-bold hover:underline">{CONTACT_LINKS.whatsappNumber}</a></p>
            <p>Telegram: <a href={CONTACT_LINKS.telegram} target="_blank" rel="noopener noreferrer" className="text-sky-400 font-bold hover:underline">{CONTACT_LINKS.telegramHandle}</a></p>
            <p>Email: <a href={`mailto:${CONTACT_LINKS.email}`} className="text-slate-200 hover:underline">{CONTACT_LINKS.email}</a></p>
          </div>

        </div>

        {/* Disclaimer */}
        <div className="pt-8 border-t border-slate-800 space-y-3 text-[11px] text-slate-400">
          <p>
            <b>Disclaimer:</b> THE USMLE HORIZON is an independent educational platform. USMLE® is a joint program of the Federation of State Medical Boards (FSMB) and National Board of Medical Examiners (NBME). PLAB® is a registered trademark of the General Medical Council (GMC UK). All product names, logos, and brands are property of their respective owners.
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-800 text-[11px]">
          <p>© {new Date().getFullYear()} THE USMLE HORIZON. All rights reserved.</p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-sky-400 hover:text-white font-bold px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 transition shadow-sm"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
