import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/siteData';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="py-20 relative bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center space-y-4 mb-12">
          <div className="badge-cyan inline-flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-slate-600 text-sm">
            Everything you need to know about access credentials, mentorship workflows, and resource setup.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition shadow-sm"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-slate-50 transition"
                >
                  <span className="font-bold text-slate-900 text-base font-heading">{item.q}</span>
                  {isOpen ? <ChevronUp className="w-5 h-5 text-sky-600 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in duration-200">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
