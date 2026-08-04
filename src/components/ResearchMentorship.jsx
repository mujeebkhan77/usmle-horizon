import React from 'react';
import { RESEARCH_TRACKS, CONTACT_LINKS } from '../data/siteData';
import { Award, CheckCircle, ArrowUpRight, UserCheck } from 'lucide-react';

export default function ResearchMentorship({ onOpenRegisterModal }) {
  return (
    <section id="research" className="py-24 relative bg-slate-50 border-t border-slate-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="badge-gold inline-flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5" />
            <span>PubMed & Scopus Publication Program</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-heading">
            Medical Research Mentorship <br />
            <span className="text-gradient">From Scratch to Match</span>
          </h2>

          <p className="text-slate-600 text-base leading-relaxed">
            Elevate your Residency & Fellowship match odds with peer-reviewed publications. Dr. Abdullah personally guides you step-by-step from zero experience to indexed journal publication.
          </p>
        </div>

        {/* 4 Core Research Tracks */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {RESEARCH_TRACKS.map((track) => (
            <div key={track.id} className="glass-panel glass-panel-hover p-6 rounded-2xl flex flex-col justify-between border-t-4 border-t-purple-600 bg-white shadow-sm">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-700 border border-purple-200">
                    {track.level}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">{track.duration}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 font-heading">{track.title}</h3>
                
                <p className="text-xs text-slate-600 leading-relaxed">
                  {track.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 space-y-3">
                <div className="text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" /> {track.journal}
                </div>

                <button
                  onClick={onOpenRegisterModal}
                  className="w-full text-xs font-bold py-2.5 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white transition flex items-center justify-center gap-1 shadow-sm"
                >
                  <span>Start Track</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Mentorship Methodology Steps */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-200 mb-16 bg-white shadow-md">
          <h3 className="text-2xl font-bold text-slate-900 font-heading text-center mb-10">
            How Dr. Abdullah Mentors You to Publication
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-3 text-center md:text-left">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 font-extrabold text-xl flex items-center justify-center mx-auto md:mx-0 border border-sky-300">
                1
              </div>
              <h4 className="font-bold text-slate-900 text-base">Topic & Protocol</h4>
              <p className="text-xs text-slate-600">Identify high-impact clinical research gaps and draft PROSPERO / PRISMA protocols.</p>
            </div>

            <div className="space-y-3 text-center md:text-left">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 font-extrabold text-xl flex items-center justify-center mx-auto md:mx-0 border border-emerald-300">
                2
              </div>
              <h4 className="font-bold text-slate-900 text-base">Data & RevMan</h4>
              <p className="text-xs text-slate-600">Extract clinical data, compute Odds Ratios / Risk Ratios, and build forest & funnel plots.</p>
            </div>

            <div className="space-y-3 text-center md:text-left">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 font-extrabold text-xl flex items-center justify-center mx-auto md:mx-0 border border-amber-300">
                3
              </div>
              <h4 className="font-bold text-slate-900 text-base">Manuscript Writing</h4>
              <p className="text-xs text-slate-600">Draft full Intro, Methods, Results, and Discussion following ICMJE guidelines.</p>
            </div>

            <div className="space-y-3 text-center md:text-left">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 font-extrabold text-xl flex items-center justify-center mx-auto md:mx-0 border border-purple-300">
                4
              </div>
              <h4 className="font-bold text-slate-900 text-base">PubMed Indexing</h4>
              <p className="text-xs text-slate-600">Submit to PubMed/Scopus journals and assist with peer-review revision letters.</p>
            </div>
          </div>

          <div className="mt-10 text-center pt-6 border-t border-slate-100">
            <a
              href={CONTACT_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-sm py-3 px-6"
            >
              <UserCheck className="w-4 h-4" />
              <span>Apply for Research Mentorship Directly</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
