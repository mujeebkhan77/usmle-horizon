import React, { useState } from 'react';
import { EXAM_TRACKS } from '../data/siteData';
import { Globe, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ExamTracks({ onOpenRegisterModal }) {
  const [activeTrack, setActiveTrack] = useState(EXAM_TRACKS[0]);

  return (
    <section id="exams" className="py-20 relative bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="badge-cyan inline-flex items-center gap-1.5">
            <Globe className="w-3.5 h-3.5" />
            <span>Global Medical Pathways Supported</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Targeted Prep for International Licensing Exams
          </h2>
          <p className="text-slate-600 text-sm">
            Whether you are preparing for US residency, UK NHS registration, or Australian licensing, our platform provides curated resources tailored to each exam requirement.
          </p>
        </div>

        {/* Exam Country Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {EXAM_TRACKS.map((track) => (
            <button
              key={track.code}
              onClick={() => setActiveTrack(track)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition ${
                activeTrack.code === track.code 
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              <img src={track.flag} alt={`${track.name} licensing flag`} className="w-4 h-3 object-cover rounded-sm" />
              <span>{track.code} ({track.name.split(' ')[0]})</span>
            </button>
          ))}
        </div>

        {/* Selected Track Detail Card */}
        <div className="glass-panel p-8 rounded-3xl border border-sky-200 max-w-4xl mx-auto bg-white shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-4 text-center md:text-left">
              <img src={activeTrack.flag} alt={`${activeTrack.name} official flag`} className="w-12 h-9 object-cover rounded shadow" />
              <div>
                <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">{activeTrack.code} Pathway</span>
                <h3 className="text-2xl font-bold text-slate-900 font-heading">{activeTrack.name}</h3>
              </div>
            </div>

            <button
              onClick={onOpenRegisterModal}
              className="btn-primary py-2.5 px-5 text-xs"
            >
              <span>Get {activeTrack.code} Package</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {activeTrack.steps.map((step, idx) => (
              <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Stage {idx + 1}</span>
                  <CheckCircle2 className="w-4 h-4 text-sky-600" />
                </div>
                <h4 className="font-bold text-slate-900 text-sm">{step}</h4>
                <p className="text-[11px] text-slate-500">Complete QBank & video series included in VIP subscription.</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
