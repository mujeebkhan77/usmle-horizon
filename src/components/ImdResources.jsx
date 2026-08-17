import React, { useState } from 'react';
import { IMD_RESOURCES_LIST, CONTACT_LINKS } from '../data/siteData';
import { Search, Database, PlayCircle, BookCheck, Check, ArrowRight, MessageCircle } from 'lucide-react';

export default function ImdResources({ onOpenRegisterModal }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedExam, setSelectedExam] = useState('All');

  const examOptions = ['All', 'USMLE Step 1', 'USMLE Step 2 CK', 'PLAB (UK)', 'AMC (Australia)'];

  const filteredResources = IMD_RESOURCES_LIST.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    let matchesExam = false;
    if (selectedExam === 'All') {
      matchesExam = true;
    } else if (selectedExam.includes('Step 2')) {
      matchesExam = item.exam.includes('Step 2');
    } else if (selectedExam.includes('Step 1')) {
      matchesExam = item.exam.includes('Step 1');
    } else if (selectedExam.includes('PLAB')) {
      matchesExam = item.exam.includes('PLAB');
    } else if (selectedExam.includes('AMC')) {
      matchesExam = item.exam.includes('AMC');
    } else {
      matchesExam = item.exam.includes(selectedExam);
    }

    return matchesSearch && matchesExam;
  });

  return (
    <section id="resources" className="py-20 relative bg-white border-t border-slate-100">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="badge-cyan inline-flex items-center gap-1.5">
            <Database className="w-3.5 h-3.5" />
            <span>World's Largest Medical Resource Hub</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Access 45,000+ to 50,000+ <span className="text-gradient">QBanks & Lectures</span>
          </h2>
          <p className="text-slate-600 text-base">
            Switch between your laptop, tablet, and mobile phone seamlessly. All resources are updated to the <b>2025/2026 examination blueprints</b>.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="max-w-4xl mx-auto mb-10 space-y-4">
          
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
            <input 
              type="text"
              placeholder="Search QBanks (UWorld, Amboss, Bootcamp), video series (B&B, Pathoma, Sketchy)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 focus:border-sky-500 rounded-full pl-12 pr-4 py-3.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition shadow-sm"
            />
          </div>

          {/* Exam Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {examOptions.map((exam) => (
              <button
                key={exam}
                onClick={() => setSelectedExam(exam)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition ${
                  selectedExam === exam 
                    ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20' 
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {exam}
              </button>
            ))}
          </div>

        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((item, idx) => (
            <div 
              key={idx} 
              className="glass-panel glass-panel-hover p-6 rounded-2xl relative flex flex-col justify-between bg-white border border-slate-200 shadow-sm"
            >
              {item.popular && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow">
                  🔥 High Demand
                </div>
              )}

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600">
                    {item.category === 'QBank' ? <BookCheck className="w-5 h-5" /> : <PlayCircle className="w-5 h-5" />}
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-sky-600 uppercase tracking-wider">{item.category}</span>
                    <h3 className="text-lg font-bold text-slate-900 font-heading">{item.name}</h3>
                  </div>
                </div>

                <div className="inline-block bg-slate-100 px-2.5 py-1 rounded text-xs text-slate-700 font-medium border border-slate-200">
                  🎯 Targeted Exam: <span className="text-sky-700 font-bold">{item.exam}</span>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1">
                  <Check className="w-3.5 h-3.5 text-emerald-600" /> 2025/2026 Ready
                </span>

                <button
                  onClick={onOpenRegisterModal}
                  className="text-xs font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1 group"
                >
                  <span>Get Access</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Device Integration Banner */}
        <div className="mt-16 glass-panel rounded-2xl p-8 border border-sky-200 relative overflow-hidden bg-gradient-to-r from-sky-50/80 to-white shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="badge-emerald">Cross-Platform Sync</span>
              <h3 className="text-2xl font-bold text-slate-900 font-heading">
                Study Seamlessly Across PC, Laptop & Mobile
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Upon registering for your iMD account, you will instantly receive your login credentials alongside a step-by-step installation guide for Windows, MacOS, iOS, and Android devices.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={onOpenRegisterModal}
                className="btn-primary justify-center text-sm py-3"
              >
                <span>Register for iMD VIP Access</span>
              </button>

              <a
                href={CONTACT_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp justify-center text-sm py-3"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ask Support on WhatsApp</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
