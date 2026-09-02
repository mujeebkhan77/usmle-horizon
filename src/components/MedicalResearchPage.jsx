import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import GlobalTextMarquee from './GlobalTextMarquee';
import { PROOF_IMAGES, CONTACT_LINKS } from '../data/siteData';
import { 
  Award, 
  BookOpen, 
  CheckCircle2, 
  ChevronRight, 
  FileText, 
  ArrowRight, 
  MessageSquare, 
  Search, 
  Users,
  GraduationCap
} from 'lucide-react';

export default function MedicalResearchPage({ onNavigate, onOpenRegisterModal }) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Medical Research Opportunities & Mentorship for IMGs | The USMLE Horizon";
    
    const canonicalLink = document.querySelector("link[rel='canonical']");
    const prevCanonical = canonicalLink ? canonicalLink.getAttribute("href") : "https://the-usmle-horizon.vercel.app/";
    if (canonicalLink) {
      canonicalLink.setAttribute("href", "https://the-usmle-horizon.vercel.app/medical-research");
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });

    return () => {
      document.title = prevTitle;
      if (canonicalLink) {
        canonicalLink.setAttribute("href", prevCanonical);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-white">
      
      {/* Header */}
      <Header 
        onOpenRegisterModal={() => onOpenRegisterModal('VIP Premium Plan')}
        onNavigate={onNavigate}
        currentPath="/medical-research"
      />

      <main className="pt-24 pb-20 bg-slate-50 text-slate-900">
        
        {/* Breadcrumb Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <button onClick={() => onNavigate('/')} className="hover:text-sky-600 transition">Home</button>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-bold">Medical Research</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="py-12 border-b border-slate-200/80 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200 text-purple-800 text-xs font-extrabold shadow-sm">
              <Award className="w-4 h-4 text-purple-600" />
              <span>Peer-Reviewed Publication Mentorship</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-heading leading-tight">
              Medical Research Opportunities & <span className="text-gradient">Mentorship for IMGs</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Peer-reviewed PubMed and Scopus publications can be a valuable addition to an academic portfolio during Residency & Fellowship applications. Learn how Dr. Abdullah guides medical students from initial protocol development through scientific drafting.
            </p>

            <div className="pt-3 flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => onNavigate('#research')}
                className="btn-primary py-3 px-6 text-xs font-bold"
              >
                <span>View Mentorship Workflow</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={() => onNavigate('#pubmed-opportunities')}
                className="px-5 py-3 rounded-full text-xs font-bold bg-purple-50 text-purple-900 border border-purple-300 hover:bg-purple-100 transition shadow-sm"
              >
                <span>Explore Ongoing Research Slots</span>
              </button>
            </div>
          </div>
        </section>

        <GlobalTextMarquee />

        {/* Content Body */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
          
          {/* Research Importance in Match */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-2xl font-extrabold text-slate-900 font-heading flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-sky-600" />
              <span>Why Medical Research Matters for Residency Match</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              According to published NRMP Match surveys, presenting peer-reviewed publications, abstracts, and citations can demonstrate academic curiosity, evidence-based critical thinking, and scientific writing proficiency during residency reviews.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
                <span className="text-xs font-bold text-sky-600 uppercase">Step 1</span>
                <h3 className="font-bold text-slate-900 text-sm">Systematic Reviews</h3>
                <p className="text-[11px] text-slate-500">Comprehensive evidence synthesis.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
                <span className="text-xs font-bold text-emerald-600 uppercase">Step 2</span>
                <h3 className="font-bold text-slate-900 text-sm">Meta-Analyses</h3>
                <p className="text-[11px] text-slate-500">High-yield quantitative analysis.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
                <span className="text-xs font-bold text-purple-600 uppercase">Step 3</span>
                <h3 className="font-bold text-slate-900 text-sm">Case Reports</h3>
                <p className="text-[11px] text-slate-500">Rare clinical findings & series.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-1">
                <span className="text-xs font-bold text-amber-600 uppercase">Step 4</span>
                <h3 className="font-bold text-slate-900 text-sm">Cross-Sectional</h3>
                <p className="text-[11px] text-slate-500">Epidemiological survey studies.</p>
              </div>
            </div>
          </div>

          {/* Mentorship Methodology */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl font-extrabold text-slate-900 font-heading text-center">
              Dr. Abdullah’s 4-Step Mentorship Methodology
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-sky-600 text-white font-bold text-xs flex items-center justify-center">1</span>
                  <h3 className="font-bold text-slate-900 text-sm font-heading">Topic Selection & Protocol</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Identify high-yield clinical questions and formulate PRISMA-compliant systematic review protocols registered in PROSPERO.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center">2</span>
                  <h3 className="font-bold text-slate-900 text-sm font-heading">Literature Search & Extraction</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Search PubMed, EMBASE, and Google Scholar. Perform data extraction and quality assessment using Cochrane risk-of-bias tools.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-purple-600 text-white font-bold text-xs flex items-center justify-center">3</span>
                  <h3 className="font-bold text-slate-900 text-sm font-heading">Statistical Analysis (RevMan/SPSS)</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Conduct statistical meta-analysis, forest plots, funnel plots, and subgroup analysis guided by experienced biostatisticians.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-amber-600 text-white font-bold text-xs flex items-center justify-center">4</span>
                  <h3 className="font-bold text-slate-900 text-sm font-heading">Manuscript Writing & Peer-Review</h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Draft, review, and format the manuscript according to target journal guidelines for submission and PubMed indexing.
                </p>
              </div>
            </div>
          </div>

          {/* PubMed Opportunities Overview */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-2xl font-extrabold text-slate-900 font-heading">
              Ongoing Research Opportunities & Journals
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              We collaborate across leading medical journals including Annals of Med & Surg, The Lancet Journal, Cureus, and EMBASE indexed platforms.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              {PROOF_IMAGES.map((img, idx) => (
                <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-center space-y-1">
                  <h3 className="font-bold text-slate-900 text-xs">{img.title}</h3>
                  <span className="text-[10px] text-sky-600 font-semibold">{img.category}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Banner */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-900 to-slate-900 text-white shadow-xl text-center space-y-4">
            <h2 className="text-2xl font-extrabold font-heading">Ready to Start Your Research Journey?</h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Contact Dr. Abdullah to inquire about current article slots and join a collaborative team of medical authors.
            </p>
            <div className="pt-2 flex justify-center">
              <a 
                href={CONTACT_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp py-3 px-6 text-xs font-bold inline-flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Inquire About Research Opportunities</span>
              </a>
            </div>
          </div>

        </div>

      </main>

      {/* Footer */}
      <Footer onNavigate={onNavigate} currentPath="/medical-research" />

    </div>
  );
}
