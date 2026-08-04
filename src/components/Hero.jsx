import React from 'react';
import { SITE_INFO, CONTACT_LINKS } from '../data/siteData';
import { Sparkles, CheckCircle2, ArrowRight, Award, Laptop, MessageCircle } from 'lucide-react';

export default function Hero({ onOpenRegisterModal }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-sky-50/80 via-slate-50 to-white">
      
      {/* Light Background Glow */}
      <div className="glow-orb glow-cyan top-10 left-1/4 w-[500px] h-[500px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Clean Headline & High Priority Text */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 border border-sky-200 text-sky-800 text-xs font-bold shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>The #1 Trusted USMLE & Medical Resource Hub Since 2015</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              We Serve From <br className="hidden sm:inline" />
              <span className="text-gradient">Scratch to Match</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Gain access to <b>45,000+ to 50,000+</b> medical resources, QBanks (UWorld, Amboss, USMLE-Rx), and lectures — paired with 1-on-1 PubMed research mentorship.
            </p>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 max-w-xl mx-auto lg:mx-0 text-left text-sm text-slate-700">
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                <span className="font-semibold">All QBanks: UWorld, Amboss, USMLE-Rx</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                <span className="font-semibold">6 Months, 12 Months & 2 Years Plans</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                <span className="font-semibold">PubMed Research Mentorship</span>
              </div>
              <div className="flex items-center gap-2.5 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                <CheckCircle2 className="w-4.5 h-4.5 text-emerald-600 shrink-0" />
                <span className="font-semibold">24/7 Support with Dr. Abdullah</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenRegisterModal}
                className="btn-primary w-full sm:w-auto text-base py-3.5 px-7 shadow-lg shadow-sky-600/20 font-bold"
              >
                <span>Get iMD Access</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={CONTACT_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full sm:w-auto text-base py-3.5 px-7 shadow-lg shadow-emerald-600/20 font-bold"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Device Support */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-3 text-xs text-slate-500 border-t border-slate-200 mt-6">
              <span className="font-bold text-slate-700 flex items-center gap-1">
                <Laptop className="w-4 h-4 text-sky-600" /> Supported Devices:
              </span>
              <span className="text-slate-600 font-semibold">Windows • MacOS • iOS • Android</span>
            </div>

          </div>

          {/* Right Column - Clean Image Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden bg-white p-3 border border-slate-200 shadow-2xl group">
              <div className="overflow-hidden rounded-2xl aspect-[4/3] bg-slate-100 relative">
                <img 
                  src={SITE_INFO.heroImage} 
                  alt="THE USMLE HORIZON Medical Platform" 
                  onError={(e) => {
                    // Fallback to secondary image if webp fails to render
                    e.target.onerror = null;
                    e.target.src = SITE_INFO.medImage;
                  }}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md border border-sky-300 rounded-2xl p-3 shadow-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-100 flex items-center justify-center text-sky-700 font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-900">50,000+ Students</div>
                  <div className="text-[10px] text-sky-700 font-bold">Worldwide Access</div>
                </div>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-xl font-extrabold text-sky-700 font-heading">50,000+</div>
                <div className="text-[11px] text-slate-500 font-semibold">Resources</div>
              </div>
              <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-xl font-extrabold text-emerald-700 font-heading">100%</div>
                <div className="text-[11px] text-slate-500 font-semibold">Updated 2025</div>
              </div>
              <div className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm">
                <div className="text-xl font-extrabold text-purple-700 font-heading">24/7</div>
                <div className="text-[11px] text-slate-500 font-semibold">Support</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
