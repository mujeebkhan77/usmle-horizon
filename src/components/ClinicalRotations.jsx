import React, { useState } from 'react';
import { CONTACT_LINKS } from '../data/siteData';
import { 
  Building2, 
  MapPin, 
  Stethoscope, 
  CheckCircle2, 
  XCircle, 
  ShieldCheck, 
  Clock, 
  MessageCircle, 
  Sparkles,
  Layers,
  ChevronRight
} from 'lucide-react';

export default function ClinicalRotations({ onOpenRegisterModal }) {
  const [selectedSpecialty, setSelectedSpecialty] = useState('All Rotations');

  // Rotation Formats Data
  const rotationFormats = [
    { name: "1 Inpatient Clinical Rotation in 1 Month", count: 23, duration: "4 Weeks", badge: "Most Popular", highlight: true },
    { name: "2 Inpatient Clinical Rotations in 5 Weeks", count: 4, duration: "5 Weeks", badge: "Accelerated" },
    { name: "1 Inpatient + 1 Outpatient over 2 Months", count: 4, duration: "8 Weeks", badge: "Comprehensive" },
    { name: "Research Rotations", count: 2, duration: "Flexible", badge: "Academic" },
    { name: "Clinical Tele-Rotation", count: 1, duration: "4 Weeks", badge: "Virtual / Remote" }
  ];

  // Locations Data
  const locations = [
    { city: "Chicago", count: 23, state: "Illinois", tag: "Major Medical Hub", iconColor: "text-sky-600 bg-sky-50 border-sky-200" },
    { city: "Houston", count: 5, state: "Texas", tag: "TMC Ecosystem", iconColor: "text-emerald-600 bg-emerald-50 border-emerald-200" },
    { city: "Indiana", count: 3, state: "Indiana State", tag: "Hospital System", iconColor: "text-purple-600 bg-purple-50 border-purple-200" },
    { city: "New York", count: 7, state: "New York State", tag: "University Affiliated", iconColor: "text-amber-600 bg-amber-50 border-amber-200" }
  ];

  // Categories & Specialties Data
  const categories = [
    { name: "All Rotations", count: 23 },
    { name: "Internal Medicine", count: 8 },
    { name: "Family Medicine" },
    { name: "Emergency Medicine" },
    { name: "General Surgery" },
    { name: "Allied Surgery" },
    { name: "Neurology" },
    { name: "Paediatrics" },
    { name: "Pathology" },
    { name: "Anesthesia" }
  ];

  const specialtiesList = [
    { title: "Internal Medicine", desc: "Core subspecialties including Cardiology, Pulmonology, Gastroenterology & Nephrology inpatient floors." },
    { title: "Family Medicine", desc: "Broad-spectrum inpatient & outpatient clinical encounters and community health management." },
    { title: "Emergency Medicine", desc: "High-volume Level I/II Trauma centers & acute ER resuscitation rotations." },
    { title: "General Surgery", desc: "Operating room exposure, surgical pre/post-op care, laparoscopic procedures & scrub training." },
    { title: "Allied Surgery", desc: "Subspecialty surgical exposure in Orthopedics, Urology, Vascular & Cardiothoracic Surgery." },
    { title: "Neurology", desc: "Stroke unit management, neuro-ICU rounds, EEG analysis & clinical neurological exams." },
    { title: "Paediatrics", desc: "Neonatal ICU, pediatric inpatient ward rounds, developmental assessments & adolescent care." },
    { title: "Pathology", desc: "Surgical pathology, histopathology grossing, frozen sections & autopsy conferences." },
    { title: "Anesthesia", desc: "Airway management, general & regional anesthesia administration, pain management & ICU rounds." }
  ];

  return (
    <section id="clinical-rotations" className="py-24 relative bg-slate-50 border-t border-b border-slate-200 text-slate-900">
      
      {/* Background Soft Sky Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-sky-200/20 rounded-full blur-[130px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
        
        {/* 1. Section Introduction */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-sky-200 text-sky-800 text-xs font-extrabold shadow-sm">
            <Building2 className="w-4 h-4 text-sky-600" />
            <span>US Clinical Experience (USCE)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 font-heading tracking-tight">
            Global Clinical <span className="text-gradient">Rotations</span>
          </h2>

          {/* Prominent Hospital-Based Inpatient Highlight Box */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-sky-50 via-white to-emerald-50 border-2 border-sky-300 shadow-md space-y-2 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-800 uppercase tracking-widest bg-emerald-100/90 px-3 py-1 rounded-full border border-emerald-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Hospital-Based Inpatient Clinical Rotations</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-heading">
              1-Month Clinical Rotation Programs Across Top US Hospitals
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              Hands-on US Clinical Experience (USCE) tailored for international medical students and IMGs with specialty letters of recommendation (LORs) directly from hospital Chairmen and Department Chiefs.
            </p>
          </div>
        </div>

        {/* 2. Rotation Formats */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-600 shrink-0 shadow-sm">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 font-heading">Rotation Formats</h3>
              <p className="text-xs text-slate-500">Flexible 4-week to 8-week structured clinical hospital attachments.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {rotationFormats.map((fmt, idx) => (
              <div 
                key={idx}
                className={`p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between space-y-4 bg-white ${
                  fmt.highlight 
                    ? 'border-2 border-sky-500 shadow-md shadow-sky-500/10' 
                    : 'border-slate-200 hover:border-sky-300 shadow-sm'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                      {fmt.badge}
                    </span>
                    <span className="text-xs font-black text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                      {fmt.count} Available
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 font-heading leading-snug">
                    {fmt.name}
                  </h4>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-sky-600" /> {fmt.duration}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Locations */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0 shadow-sm">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 font-heading">US Clinical Locations</h3>
              <p className="text-xs text-slate-500">Established hospital sites across major US healthcare centers.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((loc, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${loc.iconColor}`}>
                      <Building2 className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-black text-slate-900 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                      {loc.count} Programs
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xl font-extrabold text-slate-900 font-heading">{loc.city}</h4>
                    <p className="text-xs text-slate-500 font-medium">{loc.state}</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <span className="text-[11px] font-bold text-sky-700 bg-sky-50 px-2.5 py-1 rounded-md border border-sky-100 block text-center">
                    🏥 {loc.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Categories & Specialties */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-600 shrink-0 shadow-sm">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 font-heading">Categories & Clinical Specialties</h3>
              <p className="text-xs text-slate-500">Explore clinical rotation availability across medical & surgical disciplines.</p>
            </div>
          </div>

          {/* Specialty Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedSpecialty(cat.name)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition flex items-center gap-1.5 ${
                  selectedSpecialty === cat.name
                    ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-sm'
                }`}
              >
                <span>{cat.name}</span>
                {cat.count !== undefined && (
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${
                    selectedSpecialty === cat.name ? 'bg-white/20 text-white' : 'bg-sky-50 text-sky-700 border border-sky-200'
                  }`}>
                    {cat.count}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Specialties Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {specialtiesList.map((spec, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-sky-300 transition space-y-2"
              >
                <div className="flex items-center gap-2">
                  <ChevronRight className="w-4 h-4 text-sky-600" />
                  <h4 className="text-base font-bold text-slate-900 font-heading">{spec.title}</h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  {spec.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 5. The USMLE Horizon VS Other Agencies (Landscape Comparison Section) */}
        <div className="space-y-6 pt-4">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-extrabold text-sky-700 uppercase tracking-widest">Why Choose Us</span>
            <h3 className="text-3xl font-black text-slate-900 font-heading">
              The USMLE Horizon vs Other Agencies
            </h3>
            <p className="text-xs text-slate-600">
              Clear, transparent comparison between authentic hospital-based rotations and generic agency placements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
            
            {/* Side A: The USMLE Horizon (The Better Choice) */}
            <div className="p-8 rounded-3xl bg-white border-2 border-emerald-500 shadow-xl shadow-emerald-500/10 space-y-6 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-emerald-500 text-white font-extrabold text-[10px] uppercase px-4 py-1 rounded-bl-xl tracking-wider shadow">
                ⭐️ The Better Choice
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-2xl font-black text-slate-900 font-heading">The USMLE Horizon</h4>
                  <p className="text-xs text-emerald-700 font-bold mt-1">Hospital-based, IMG-first, built for your match success.</p>
                </div>

                <ul className="space-y-3.5 text-xs text-slate-800">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900">Affordable, hospital-based rotations</strong> with transparent pricing.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900">Hands-on experience</strong> with real inpatient patient care.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900">LORs from Chairmen & Chiefs</strong> of Hospital Departments.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900">Direct mentoring</strong> by ACGME Program Directors.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900">Housing & B1/B2 visa assistance</strong> guidance included.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-900">24/7 dedicated availability</strong>, 7 days a week support.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 block text-center">
                  ✅ Verified Hospital Attachments Guaranteed
                </span>
              </div>
            </div>

            {/* Side B: Other Rotation Agencies (The Rest) */}
            <div className="p-8 rounded-3xl bg-slate-100/90 border border-slate-300 space-y-6 flex flex-col justify-between relative opacity-90">
              <div className="absolute top-0 right-0 bg-slate-400 text-slate-900 font-bold text-[10px] uppercase px-4 py-1 rounded-bl-xl tracking-wider">
                The Rest
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-2xl font-bold text-slate-800 font-heading">Other Rotation Agencies</h4>
                  <p className="text-xs text-slate-500 mt-1">Generic, expensive, and leaves you guessing.</p>
                </div>

                <ul className="space-y-3.5 text-xs text-slate-600">
                  <li className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>Often expensive and opaque hidden pricing structures.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>Mostly outpatient clinic shadow observer rotations.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>LORs from private clinic doctors (not department heads).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>No guidance from hospital ACGME Program Directors.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>No housing or visa paperwork support offered.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span>Limited communication hours and delayed responses.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <span className="text-[11px] font-medium text-slate-500 block text-center">
                  ⚠️ Compare before making your clinical deposit
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* 6. Final CTA */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-sky-600 via-sky-700 to-emerald-600 text-white shadow-xl max-w-4xl mx-auto text-center space-y-6 relative overflow-hidden">
          
          <div className="space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 bg-white/20 text-white text-xs font-extrabold px-3.5 py-1 rounded-full backdrop-blur shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hospital Placement & Visa Assistance</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-black font-heading tracking-tight">
              Ready to Start Your Clinical Rotation?
            </h3>

            <p className="text-xs sm:text-sm text-sky-100 leading-relaxed font-medium">
              Inquire directly with Dr. Abdullah for clinical rotation availability, hospital locations in Chicago, Houston, Indiana, and New York, and letter of recommendation formats.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/923414517833?text=${encodeURIComponent('Hello Dr. Abdullah! I am interested in US Hospital-Based Clinical Rotations. Please send me details on available rotation locations, specialties, and enrollment instructions.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-sm font-extrabold py-3.5 px-8 rounded-full shadow-lg transition flex items-center justify-center gap-2.5 w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Inquire Clinical Rotations via WhatsApp</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
