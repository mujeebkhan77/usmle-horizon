import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import GlobalTextMarquee from './GlobalTextMarquee';
import { IMD_RESOURCES_LIST, CONTACT_LINKS } from '../data/siteData';
import { 
  BookOpen, 
  CheckCircle2, 
  Search, 
  Database, 
  Zap, 
  ArrowRight, 
  MessageSquare, 
  ChevronRight,
  Sparkles,
  ShieldCheck,
  Award,
  Layers
} from 'lucide-react';

export default function UsmleResourcesPage({ onNavigate, onOpenRegisterModal }) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "USMLE Resources & Prep Guide for IMGs | The USMLE Horizon";
    
    const canonicalLink = document.querySelector("link[rel='canonical']");
    const prevCanonical = canonicalLink ? canonicalLink.getAttribute("href") : "https://the-usmle-horizon.vercel.app/";
    if (canonicalLink) {
      canonicalLink.setAttribute("href", "https://the-usmle-horizon.vercel.app/usmle-resources");
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => {
      document.title = prevTitle;
      if (canonicalLink) {
        canonicalLink.setAttribute("href", prevCanonical);
      }
    };
  }, []);

  const usmleQbanks = IMD_RESOURCES_LIST.filter(r => r.exam.includes('USMLE'));

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-white">
      
      {/* Header */}
      <Header 
        onOpenRegisterModal={() => onOpenRegisterModal('VIP Premium Plan')}
        onNavigate={onNavigate}
        currentPath="/usmle-resources"
      />

      <main className="pt-24 pb-20 bg-slate-50 text-slate-900">
        
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <button onClick={() => onNavigate('/')} className="hover:text-sky-600 transition">Home</button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-bold">USMLE Resources</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="py-12 border-b border-slate-200/80 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-extrabold shadow-sm">
              <BookOpen className="w-4 h-4 text-sky-600" />
              <span>Comprehensive Study Guide & Resource Hub</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-heading leading-tight">
              Complete USMLE Resources & <span className="text-gradient">QBank Prep Guide for IMGs</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Navigating the United States Medical Licensing Examination (USMLE) requires selecting the right combination of question banks, video lectures, and revision tools. Learn how to optimize your Step 1 and Step 2 CK prep efficiently.
            </p>

            <div className="pt-3 flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => onNavigate('#pricing')}
                className="btn-primary py-3 px-6 text-xs font-bold"
              >
                <span>Explore iMD Subscription</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => onNavigate('#stepwise-pricing')}
                className="px-5 py-3 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-300 hover:bg-emerald-100 transition shadow-sm"
              >
                <span>StepWiseMD Subscription</span>
              </button>
            </div>
          </div>
        </section>

        <GlobalTextMarquee />

        {/* Content Body */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
          
          {/* Overview Card */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-2xl font-extrabold text-slate-900 font-heading flex items-center gap-2">
              <Layers className="w-6 h-6 text-sky-600" />
              <span>Understanding the USMLE Exam Structure</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              The USMLE examination process traditionally includes Step 1 and Step 2 CK as core examination components evaluated alongside ECFMG Pathways requirements for International Medical Graduates (IMGs). Specific eligibility criteria and exam sequencing are governed officially by USMLE and ECFMG.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-100 space-y-2">
                <h3 className="font-bold text-sky-900 text-sm font-heading">USMLE Step 1 (Pass/Fail)</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Focuses on foundational basic medical sciences: Pathology, Physiology, Pharmacology, Microbiology, Anatomy, and Biochemistry. Consistent QBank practice and active recall are essential.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-2">
                <h3 className="font-bold text-emerald-900 text-sm font-heading">USMLE Step 2 CK (Scored)</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Evaluates clinical knowledge and clinical science necessary for providing patient care under supervision. Step 2 CK performance serves as an important objective component evaluated during the residency application process.
                </p>
              </div>
            </div>
          </div>

          {/* Featured QBanks Grid */}
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h2 className="text-2xl font-extrabold text-slate-900 font-heading">
                Top USMLE QBanks & Learning Platforms
              </h2>
              <p className="text-xs text-slate-600">
                Explore the primary study resources included across our subscription options.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {usmleQbanks.map((resource, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3 hover:border-sky-300 transition">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-sky-600 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-100">
                      {resource.category}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-500">
                      {resource.exam}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-heading">{resource.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{resource.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Subscription Options Summary */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl font-extrabold text-slate-900 font-heading text-center">
              Accessing Premium USMLE Resources via The USMLE Horizon
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl border border-sky-200 bg-sky-50/30 space-y-4 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-bold">
                    <Database className="w-3.5 h-3.5 text-sky-600" />
                    <span>iMD Subscription</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-heading">45,000+ to 50,000+ Resource Library</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Digital access hub providing cataloged study materials including third-party question banks, video lectures, slide notes, and clinical revision materials across your PC, laptop, and mobile devices. All third-party trademarks belong to their respective owners.
                  </p>
                </div>
                <button 
                  onClick={() => onNavigate('#pricing')}
                  className="btn-primary py-2.5 px-4 text-xs font-bold w-full justify-center"
                >
                  <span>View iMD Plans & Duration</span>
                </button>
              </div>

              <div className="p-6 rounded-2xl border border-emerald-200 bg-emerald-50/30 space-y-4 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                    <Zap className="w-3.5 h-3.5 text-emerald-600" />
                    <span>StepWiseMD Subscription</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-heading">User-Friendly QBank Access</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    A clean, streamlined QBank subscription tailored for students seeking essential, focused USMLE preparation tools.
                  </p>
                </div>
                <button 
                  onClick={() => onNavigate('#stepwise-pricing')}
                  className="px-4 py-2.5 rounded-full text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white w-full justify-center transition shadow-sm"
                >
                  <span>View StepWiseMD Plans</span>
                </button>
              </div>
            </div>
          </div>

          {/* WhatsApp Guidance CTA Banner */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-sky-900 to-slate-900 text-white shadow-xl text-center space-y-4">
            <h2 className="text-2xl font-extrabold font-heading">Need Personalized Resource Advice?</h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Dr. Abdullah and team provide direct guidance to help you select the exact study resources matching your exam target date and preparation stage.
            </p>
            <div className="pt-2 flex justify-center">
              <a 
                href={CONTACT_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp py-3 px-6 text-xs font-bold inline-flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat with Dr. Abdullah on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

      </main>

      {/* Footer */}
      <Footer onNavigate={onNavigate} currentPath="/usmle-resources" />

    </div>
  );
}
