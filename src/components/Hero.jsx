import React from 'react';
import { CONTACT_LINKS } from '../data/siteData';
import { ArrowRight, MessageCircle, Laptop, ShieldCheck, BookOpen, Stethoscope, GraduationCap } from 'lucide-react';

export default function Hero({ onOpenRegisterModal }) {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-slate-50 text-slate-900 border-b border-slate-100">
      
      {/* Full-Width, Full-Height Subtle Background Atmosphere */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-45 transition-opacity duration-700 pointer-events-none" 
        style={{ backgroundImage: `url('/full_bleed_medical_hero_bg.jpg')` }} 
      />

      {/* Light Soft Gradient Overlay Layer ensuring hero content & cards remain primary visual focus */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/96 via-white/88 to-white/50 md:to-white/40 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-slate-50/95 z-10 pointer-events-none" />

      {/* Subtle Soft Sky Ambient Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 sm:w-[500px] sm:h-[500px] max-w-full bg-sky-200/20 rounded-full blur-[120px] pointer-events-none z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        <div className="space-y-6 max-w-4xl mx-auto">
          
          {/* Top Pill / Secondary Tagline */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-sky-800 text-xs font-extrabold shadow-sm">
            <ShieldCheck className="w-4 h-4 text-sky-600" />
            <span>Your trusted platform for medical students</span>
          </div>

          {/* Controlled Hero Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] font-heading">
            THE USMLE <span className="text-gradient">HORIZON</span>
          </h1>

          {/* Primary Introductory Description */}
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-3xl mx-auto">
            The USMLE Horizon is an authentic and reliable platform created to help medical students access premium USMLE resources, clinical opportunities, and research mentorship at affordable prices.
          </p>

          {/* 3 Distinct Independent Foreground UI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 text-left items-stretch">
            
            {/* Card 1: Premium USMLE Resources */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-md shadow-slate-900/5 hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between h-full group">
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600 shrink-0 shadow-sm group-hover:scale-105 transition">
                    <BookOpen className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-sky-800 font-heading">
                    Premium USMLE Resources
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Access <strong className="text-slate-900">iMD Subscription</strong> and <strong className="text-slate-900">StepwiseMD Subscription</strong> with premium resources including Qbanks, Video Lectures, Notes, Flashcards, and Anki Cards — at significantly more affordable prices than their official websites.
                </p>
              </div>
              <div className="pt-3">
                <span className="inline-block bg-emerald-50 text-emerald-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-emerald-200">
                  💰 Affordable Prices
                </span>
              </div>
            </div>

            {/* Card 2: Beyond USMLE Preparation */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-md shadow-slate-900/5 hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between h-full group">
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 shadow-sm group-hover:scale-105 transition">
                    <Stethoscope className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 font-heading">
                    Beyond USMLE Prep
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We also provide services including <strong className="text-slate-900">US Visa Appointments</strong>, <strong className="text-slate-900">USMLE Triad Booking</strong>, and <strong className="text-slate-900">US University-based Clinical Rotations</strong>.
                </p>
              </div>
              <div className="pt-3">
                <span className="inline-block bg-sky-50 text-sky-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-sky-200">
                  🏥 US Clinical Rotations
                </span>
              </div>
            </div>

            {/* Card 3: Research & Residency Opportunities */}
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-md shadow-slate-900/5 hover:shadow-xl hover:border-purple-300 transition-all duration-300 flex flex-col justify-between h-full group">
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 shrink-0 shadow-sm group-hover:scale-105 transition">
                    <GraduationCap className="w-4.5 h-4.5" />
                  </div>
                  <h3 className="text-xs font-extrabold uppercase tracking-wider text-purple-800 font-heading">
                    Research & Residency
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We provide Research Mentorship and high-yield research opportunities for <strong className="text-slate-900">PubMed publications</strong>, helping medical students build stronger profiles for residency opportunities in the:
                </p>
              </div>
              <div className="pt-2 flex flex-wrap items-center gap-2 text-lg">
                <span title="United States">🇺🇸</span>
                <span title="United Kingdom">🇬🇧</span>
                <span title="Australia">🇦🇺</span>
                <span title="Canada">🇨🇦</span>
                <span title="United Arab Emirates">🇦🇪</span>
                <span title="Saudi Arabia">🇸🇦</span>
              </div>
            </div>

          </div>

          {/* Tagline Banner: "We Serve from Scratch to Match." */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-sky-200 flex items-center justify-center gap-3 shadow-sm max-w-2xl mx-auto">
            <span className="text-xs font-extrabold text-sky-700 uppercase tracking-widest">Our Motto:</span>
            <span className="text-lg sm:text-xl font-black text-slate-900 font-heading">
              "We Serve from Scratch to Match."
            </span>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenRegisterModal('VIP Premium Plan')}
              className="btn-primary py-3 px-6 text-sm font-bold shadow-md shadow-sky-600/15 w-full sm:w-auto"
            >
              <span>Get iMD & StepwiseMD Access</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={CONTACT_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp py-3 px-6 text-sm font-bold shadow-md shadow-emerald-600/15 w-full sm:w-auto"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Platform Indicators */}
          <div className="pt-2 flex items-center justify-center gap-2 text-xs text-slate-500 font-medium">
            <Laptop className="w-3.5 h-3.5 text-sky-600" />
            <span>Supported Platforms: Windows • MacOS • iOS • Android</span>
          </div>

        </div>
      </div>
    </section>
  );
}
