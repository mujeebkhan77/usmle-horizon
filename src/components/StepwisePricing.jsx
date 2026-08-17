import React, { useState } from 'react';
import { STEPWISE_PLANS, STEPWISE_DURATIONS } from '../data/siteData';
import { Check, Zap, Sparkles, Send, Clock, Calendar, Globe, Laptop } from 'lucide-react';

export default function StepwisePricing({ onOpenRegisterModal }) {
  const [activeDuration, setActiveDuration] = useState('12m');

  const selectedDurationObj = STEPWISE_DURATIONS.find(d => d.id === activeDuration) || STEPWISE_DURATIONS[1];

  return (
    <section id="stepwise-pricing" className="py-20 relative bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-2">
            <div className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-extrabold px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-sm">
              <Zap className="w-3.5 h-3.5 text-emerald-600" />
              <span>StepWiseMD Subscription</span>
            </div>
            
            {/* Web Version Also Available Badge */}
            <div className="bg-sky-50 text-sky-800 border border-sky-200 text-xs font-bold px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 shadow-sm">
              <Globe className="w-3.5 h-3.5 text-sky-600" />
              <span>Web Version Also Available</span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Choose Your <span className="text-gradient">StepWiseMD Plan & Duration</span>
          </h2>

          <p className="text-slate-600 text-sm max-w-2xl mx-auto">
            Simple, user-friendly, and accessible USMLE preparation. Access high-yield QBanks, explanations, and performance tracking.
          </p>
        </div>

        {/* Duration Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {STEPWISE_DURATIONS.map((dur) => (
            <button
              key={dur.id}
              onClick={() => setActiveDuration(dur.id)}
              className={`px-5 py-3 rounded-2xl text-xs font-bold transition flex items-center gap-2 ${
                activeDuration === dur.id
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 scale-105'
                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-sm'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>{dur.label}</span>
              {dur.badge && (
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${
                  activeDuration === dur.id ? 'bg-white/20 text-white' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                }`}>
                  {dur.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* StepWiseMD Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto items-stretch">
          {STEPWISE_PLANS.map((plan, idx) => (
            <div 
              key={idx}
              className={`p-8 rounded-3xl flex flex-col justify-between relative transition duration-300 bg-white ${
                plan.highlight 
                  ? 'border-2 border-emerald-500 shadow-xl shadow-emerald-500/10' 
                  : 'border border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-extrabold text-[11px] px-4 py-1 rounded-full uppercase tracking-wider shadow flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Recommended StepWiseMD Plan
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 font-heading">{plan.name}</h3>
                  <p className="text-xs text-slate-500 mt-1">{plan.tagline}</p>
                </div>

                <div className="py-3 px-4 bg-emerald-50/70 rounded-2xl border border-emerald-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-900">Selected Duration:</span>
                  <span className="text-xs font-extrabold text-emerald-800 bg-white px-3 py-1 rounded-full border border-emerald-200 shadow-sm flex items-center gap-1">
                    <Clock className="w-3 h-3 text-emerald-600" /> {selectedDurationObj.label}
                  </span>
                </div>

                <ul className="space-y-3 text-xs text-slate-700">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => onOpenRegisterModal(plan.name)}
                  className={`w-full text-sm font-bold py-3.5 px-6 rounded-full transition flex items-center justify-center gap-2 ${
                    plan.highlight 
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/20' 
                      : 'bg-slate-900 hover:bg-slate-800 text-white shadow-md'
                  }`}
                >
                  <Send className="w-4 h-4" />
                  <span>Get Price & Order ({selectedDurationObj.label.split(' ')[0]} {selectedDurationObj.label.split(' ')[1]})</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Platform Indicator */}
        <div className="flex items-center justify-center gap-2 text-xs text-slate-500 font-medium">
          <Laptop className="w-3.5 h-3.5 text-emerald-600" />
          <span>StepWiseMD Availability: Web Version • Windows • MacOS • Mobile</span>
        </div>

      </div>
    </section>
  );
}
