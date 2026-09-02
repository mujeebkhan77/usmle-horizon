import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import GlobalTextMarquee from './GlobalTextMarquee';
import { CONTACT_LINKS } from '../data/siteData';
import { 
  Building2, 
  Stethoscope, 
  CheckCircle2, 
  ChevronRight, 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  Globe,
  FileCheck,
  Home,
  UserCheck
} from 'lucide-react';

export default function ClinicalRotationsPage({ onNavigate, onOpenRegisterModal }) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "US Clinical Rotations & USCE Guide for IMGs | The USMLE Horizon";
    
    const canonicalLink = document.querySelector("link[rel='canonical']");
    const prevCanonical = canonicalLink ? canonicalLink.getAttribute("href") : "https://the-usmle-horizon.vercel.app/";
    if (canonicalLink) {
      canonicalLink.setAttribute("href", "https://the-usmle-horizon.vercel.app/us-clinical-rotations");
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => {
      document.title = prevTitle;
      if (canonicalLink) {
        canonicalLink.setAttribute("href", prevCanonical);
      }
    };
  }, []);

  const specialties = [
    'Internal Medicine',
    'Family Medicine',
    'Emergency Medicine',
    'General Surgery',
    'Pediatrics',
    'Neurology',
    'Pathology',
    'Anesthesiology'
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-white">
      
      {/* Header */}
      <Header 
        onOpenRegisterModal={() => onOpenRegisterModal('VIP Premium Plan')}
        onNavigate={onNavigate}
        currentPath="/us-clinical-rotations"
      />

      <main className="pt-24 pb-20 bg-slate-50 text-slate-900">
        
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <button onClick={() => onNavigate('/')} className="hover:text-sky-600 transition">Home</button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-bold">US Clinical Rotations</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="py-12 border-b border-slate-200/80 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-extrabold shadow-sm">
              <Building2 className="w-4 h-4 text-emerald-600" />
              <span>Hospital-Based US Clinical Experience (USCE)</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-heading leading-tight">
              US Clinical Rotations & <span className="text-gradient">USCE Guide for IMGs</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              US Clinical Experience (USCE) is a vital requirement for international medical graduates preparing for US Residency Match. Learn about hospital-based inpatient rotations, specialty options, and LOR considerations.
            </p>

            <div className="pt-3 flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => onNavigate('#clinical-rotations')}
                className="btn-primary py-3 px-6 text-xs font-bold"
              >
                <span>View Hospital Rotations</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a 
                href={CONTACT_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition shadow-sm inline-flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        <GlobalTextMarquee />

        {/* Content Body */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
          
          {/* Overview of USCE Formats */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-2xl font-extrabold text-slate-900 font-heading flex items-center gap-2">
              <Stethoscope className="w-6 h-6 text-sky-600" />
              <span>Understanding US Clinical Experience (USCE) Types</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              USCE allows international medical students and graduates to familiarize themselves with US hospital EMR systems, patient interaction standards, and inter-professional clinical workflows.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-sky-50/60 border border-sky-100 space-y-2">
                <span className="text-xs font-bold text-sky-700 uppercase">Inpatient Rotations</span>
                <h3 className="font-bold text-slate-900 text-sm font-heading">Hospital Hands-On</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Direct inpatient patient rounds, daily case presentations, and EMR documentation alongside hospital faculty.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-2">
                <span className="text-xs font-bold text-emerald-700 uppercase">Outpatient Electives</span>
                <h3 className="font-bold text-slate-900 text-sm font-heading">Clinic-Based Prep</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Outpatient primary care clinical encounters, diagnostic workups, and ambulatory procedure shadowing.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-purple-50/60 border border-purple-100 space-y-2">
                <span className="text-xs font-bold text-purple-700 uppercase">Observerships</span>
                <h3 className="font-bold text-slate-900 text-sm font-heading">Shadowing Programs</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Observational clinical attendance allowing IMGs to gain valuable US healthcare orientation.
                </p>
              </div>
            </div>
          </div>

          {/* Specialties Available */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl font-extrabold text-slate-900 font-heading text-center">
              Available Clinical Rotation Specialties
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {specialties.map((spec, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-1">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mx-auto" />
                  <h3 className="font-bold text-slate-900 text-xs">{spec}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Support & Visa Assistance */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-2xl font-extrabold text-slate-900 font-heading flex items-center gap-2">
              <FileCheck className="w-6 h-6 text-emerald-600" />
              <span>Comprehensive Support Services Included</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <UserCheck className="w-5 h-5 text-sky-600" />
                <h3 className="font-bold text-slate-900 text-xs">Physician LOR Guidance</h3>
                <p className="text-[11px] text-slate-500">Merit-based Letters of Recommendation provided by supervising physician faculty upon clinical evaluation.</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <Globe className="w-5 h-5 text-emerald-600" />
                <h3 className="font-bold text-slate-900 text-xs">US B1/B2 Visa Support</h3>
                <p className="text-[11px] text-slate-500">Official hospital invitation documentation provided for visa interview scheduling (does not constitute visa sponsorship).</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <Home className="w-5 h-5 text-purple-600" />
                <h3 className="font-bold text-slate-900 text-xs">Housing & Logistics</h3>
                <p className="text-[11px] text-slate-500">Neighborhood orientation and nearby housing recommendations.</p>
              </div>
            </div>
          </div>

          {/* CTA Banner */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-emerald-900 to-slate-900 text-white shadow-xl text-center space-y-4">
            <h2 className="text-2xl font-extrabold font-heading">Inquire About US Clinical Rotations</h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Speak with Dr. Abdullah on WhatsApp to inquire about current clinical rotation slots, locations (Chicago, Houston, NY), and specialty availability.
            </p>
            <div className="pt-2 flex justify-center">
              <a 
                href={CONTACT_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp py-3 px-6 text-xs font-bold inline-flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Inquire About Clinical Rotations</span>
              </a>
            </div>
          </div>

        </div>

      </main>

      {/* Footer */}
      <Footer onNavigate={onNavigate} currentPath="/us-clinical-rotations" />

    </div>
  );
}
