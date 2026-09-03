import React, { useState, useRef, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import GlobalTextMarquee from './GlobalTextMarquee';
import { SITE_INFO, CONTACT_LINKS } from '../data/siteData';
import { 
  Users, 
  Share2, 
  TrendingUp, 
  Megaphone, 
  Award, 
  Percent, 
  Gift, 
  Network, 
  Send, 
  CheckCircle2, 
  Mail, 
  User, 
  Building2, 
  Globe, 
  MapPin, 
  GraduationCap, 
  Phone, 
  Instagram, 
  MessageSquare,
  ArrowRight,
  Sparkles,
  ChevronDown
} from 'lucide-react';

export default function AmbassadorPage({ onNavigate, onOpenRegisterModal }) {
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Become a USMLE Horizon Ambassador | The USMLE Horizon";
    
    const canonicalLink = document.querySelector("link[rel='canonical']");
    const prevCanonical = canonicalLink ? canonicalLink.getAttribute("href") : "https://the-usmle-horizon.vercel.app/";
    if (canonicalLink) {
      canonicalLink.setAttribute("href", "https://the-usmle-horizon.vercel.app/ambassador");
    }

    return () => {
      document.title = prevTitle;
      if (canonicalLink) {
        canonicalLink.setAttribute("href", prevCanonical);
      }
    };
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    university: '',
    country: '',
    city: '',
    yearOfStudy: '',
    whatsappNumber: '',
    socialHandle: '',
    reachCount: '',
    reason: ''
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const subject = `USMLE Horizon Ambassador Application - ${formData.fullName}`;
    const body = `USMLE HORIZON AMBASSADOR APPLICATION

Full Name: ${formData.fullName}
Email Address: ${formData.email}
Medical School / University: ${formData.university}
Country: ${formData.country}
City: ${formData.city}
Year of Study: ${formData.yearOfStudy}
WhatsApp Number: ${formData.whatsappNumber}
Instagram / Social Handle: ${formData.socialHandle || 'N/A'}
Approximate Student Reach: ${formData.reachCount}

Why I want to become a USMLE Horizon Ambassador:
${formData.reason}`;

    const mailtoUrl = `mailto:${CONTACT_LINKS.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const handleRevealForm = () => {
    setShowForm(true);
    setTimeout(() => {
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const roleTasks = [
    {
      title: "Share & Connect",
      desc: "Introduce The USMLE Horizon to genuine medical students in your university and online communities.",
      icon: Share2,
      color: "text-sky-600 bg-sky-50 border-sky-200"
    },
    {
      title: "Grow the Community",
      desc: "Help students discover and join our relevant student communities and groups.",
      icon: TrendingUp,
      color: "text-emerald-600 bg-emerald-50 border-emerald-200"
    },
    {
      title: "Promote Opportunities",
      desc: "Share information about USMLE resources, clinical rotations, research opportunities, and other relevant services.",
      icon: Megaphone,
      color: "text-purple-600 bg-purple-50 border-purple-200"
    },
    {
      title: "Represent The USMLE Horizon",
      desc: "Become a recognized student representative of The USMLE Horizon within your medical community.",
      icon: Award,
      color: "text-amber-600 bg-amber-50 border-amber-200"
    }
  ];

  const benefits = [
    {
      title: "Exclusive Discounts",
      desc: "Receive special discounts on selected USMLE Horizon services and resources.",
      icon: Percent,
      color: "bg-sky-50 text-sky-700 border-sky-200"
    },
    {
      title: "Referral Rewards",
      desc: "Earn rewards for successful referrals and genuine students you bring to the platform.",
      icon: Gift,
      color: "bg-emerald-50 text-emerald-700 border-emerald-200"
    },
    {
      title: "Recognition",
      desc: "Top-performing ambassadors can receive special recognition and additional rewards.",
      icon: Award,
      color: "bg-purple-50 text-purple-700 border-purple-200"
    },
    {
      title: "Professional Networking",
      desc: "Connect with other motivated medical students and become part of the USMLE Horizon ambassador community.",
      icon: Network,
      color: "bg-amber-50 text-amber-700 border-amber-200"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-white relative overflow-x-hidden">
      
      {/* Sticky Header with routing awareness */}
      <Header 
        onOpenRegisterModal={onOpenRegisterModal} 
        onNavigate={onNavigate}
        currentPath="/ambassador"
      />

      <main className="pt-28 pb-20 bg-slate-50 text-slate-900 min-h-screen relative overflow-hidden">
        
        {/* Soft Ambient Background Light */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-sky-200/20 rounded-full blur-[140px] pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
          
          {/* 1. HERO SECTION */}
          <div className="text-center max-w-4xl mx-auto space-y-6 pt-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-sky-200 text-sky-800 text-xs font-extrabold shadow-sm">
              <Sparkles className="w-4 h-4 text-sky-600" />
              <span>Official Ambassador Program</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 font-heading tracking-tight leading-tight">
              Become a <span className="text-gradient">USMLE Horizon Ambassador</span>
            </h1>

            <p className="text-xl sm:text-2xl font-black text-sky-700 font-heading">
              Grow your medical community. Grow with us.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium max-w-2xl mx-auto">
              As a USMLE Horizon Ambassador, you will represent our mission within your medical school and online networks. Help fellow medical students discover affordable USMLE resources, clinical rotations, research opportunities, and other USMLE Horizon services while gaining exclusive discounts, recognition, and professional networking.
            </p>
          </div>

          {/* Global Scrolling Text Marquee Band */}
          <GlobalTextMarquee />

          {/* 2. WHAT AMBASSADORS DO */}
          <div className="space-y-8">
            <div className="text-center space-y-2 max-w-xl mx-auto">
              <span className="text-xs font-extrabold text-sky-700 uppercase tracking-widest">Your Role</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                What USMLE Horizon Ambassadors Do
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {roleTasks.map((task, idx) => (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-sky-300 transition duration-300 space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${task.color}`}>
                      <task.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 font-heading">{task.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{task.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. AMBASSADOR BENEFITS */}
          <div className="space-y-8">
            <div className="text-center space-y-2 max-w-xl mx-auto">
              <span className="text-xs font-extrabold text-emerald-700 uppercase tracking-widest">Rewards & Growth</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
                Ambassador Program Benefits
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, idx) => (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition duration-300 space-y-3"
                >
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${benefit.color}`}>
                    <benefit.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 font-heading">{benefit.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 4. APPLICATION — BUTTON FIRST CTA CARD */}
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-sky-600 via-sky-700 to-emerald-600 rounded-3xl p-8 sm:p-12 text-white text-center shadow-2xl relative overflow-hidden space-y-6">
            
            <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mx-auto text-white">
              <Users className="w-7 h-7" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading tracking-tight">
                Ready to Represent The USMLE Horizon?
              </h2>
              <p className="text-xs sm:text-sm text-sky-100 font-medium max-w-lg mx-auto">
                Join our international team of student ambassadors and help grow your medical community.
              </p>
            </div>

            {!showForm ? (
              <div className="pt-2">
                <button
                  onClick={handleRevealForm}
                  className="bg-white text-slate-900 hover:bg-slate-100 font-black text-sm sm:text-base px-8 py-4 rounded-full shadow-xl hover:scale-105 transition transform flex items-center gap-3 mx-auto"
                >
                  <span>Become an Ambassador</span>
                  <ArrowRight className="w-5 h-5 text-sky-600" />
                </button>
              </div>
            ) : (
              <div className="inline-flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full text-xs font-bold text-sky-100 border border-white/20 animate-in fade-in">
                <ChevronDown className="w-4 h-4 animate-bounce" />
                <span>Application Form Opened Below</span>
              </div>
            )}

          </div>

          {/* 5. APPLICATION FORM (REVEALED ON BUTTON CLICK) */}
          {showForm && (
            <div 
              ref={formRef}
              className="max-w-4xl mx-auto bg-white rounded-3xl border border-sky-300 p-6 sm:p-10 shadow-2xl space-y-8 animate-in fade-in slide-in-from-bottom-6 duration-500"
            >
              
              <div className="text-center space-y-3 max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-1.5 bg-sky-50 text-sky-800 text-xs font-extrabold px-3 py-1 rounded-full border border-sky-200">
                  <Mail className="w-3.5 h-3.5 text-sky-600" />
                  <span>Official Email Application</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
                  Submit Your Ambassador Application
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                  Fill out the application form below. Submitting will compose your official application email directly addressed to <strong className="text-slate-900">{CONTACT_LINKS.email}</strong>.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-in fade-in">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 font-heading">Application Prepared</h3>
                  <p className="text-xs text-slate-600 max-w-md mx-auto">
                    Your email client has opened with your prefilled details addressed to <strong className="text-slate-900">{CONTACT_LINKS.email}</strong>. Please click send in your email client to complete your application.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-sky-600 hover:underline"
                  >
                    Edit or Submit Another Application
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  
                  {/* Row 1: Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input 
                          type="text"
                          name="fullName"
                          required
                          placeholder="Dr. Sarah Jenkins"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-900 outline-none focus:border-sky-500 focus:bg-white transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input 
                          type="email"
                          name="email"
                          required
                          placeholder="sarah@medschool.edu"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-900 outline-none focus:border-sky-500 focus:bg-white transition"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: University & Year of Study */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Medical School / University *</label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input 
                          type="text"
                          name="university"
                          required
                          placeholder="e.g. King Edward Medical University"
                          value={formData.university}
                          onChange={handleInputChange}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-900 outline-none focus:border-sky-500 focus:bg-white transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Year of Study *</label>
                      <div className="relative">
                        <GraduationCap className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input 
                          type="text"
                          name="yearOfStudy"
                          required
                          placeholder="e.g. 4th Year Medical Student"
                          value={formData.yearOfStudy}
                          onChange={handleInputChange}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-900 outline-none focus:border-sky-500 focus:bg-white transition"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Country & City */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Country *</label>
                      <div className="relative">
                        <Globe className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input 
                          type="text"
                          name="country"
                          required
                          placeholder="e.g. Pakistan, India, UK"
                          value={formData.country}
                          onChange={handleInputChange}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-900 outline-none focus:border-sky-500 focus:bg-white transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">City *</label>
                      <div className="relative">
                        <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input 
                          type="text"
                          name="city"
                          required
                          placeholder="e.g. Lahore, Mumbai, London"
                          value={formData.city}
                          onChange={handleInputChange}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-900 outline-none focus:border-sky-500 focus:bg-white transition"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 4: WhatsApp & Social Handle */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp Number *</label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input 
                          type="text"
                          name="whatsappNumber"
                          required
                          placeholder="+1234567890"
                          value={formData.whatsappNumber}
                          onChange={handleInputChange}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-900 outline-none focus:border-sky-500 focus:bg-white transition"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Instagram / Social Media Handle</label>
                      <div className="relative">
                        <Instagram className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                        <input 
                          type="text"
                          name="socialHandle"
                          placeholder="@doctor_sarah"
                          value={formData.socialHandle}
                          onChange={handleInputChange}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-900 outline-none focus:border-sky-500 focus:bg-white transition"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Row 5: Approximate Student Reach */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Approximate number of medical students you can reach *</label>
                    <div className="relative">
                      <Users className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input 
                        type="text"
                        name="reachCount"
                        required
                        placeholder="e.g. 200+ students in my university batch and student groups"
                        value={formData.reachCount}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-900 outline-none focus:border-sky-500 focus:bg-white transition"
                      />
                    </div>
                  </div>

                  {/* Row 6: Reason */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Why do you want to become a USMLE Horizon Ambassador? *</label>
                    <textarea
                      name="reason"
                      required
                      rows={4}
                      placeholder="Share your motivation to help fellow medical students and represent The USMLE Horizon..."
                      value={formData.reason}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs text-slate-900 outline-none focus:border-sky-500 focus:bg-white transition"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="btn-primary w-full justify-center py-4 text-sm font-bold shadow-lg shadow-sky-600/20"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Ambassador Application</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1">
                    <MessageSquare className="w-3.5 h-3.5 text-sky-600" />
                    <span>Applications are composed via email to <strong className="text-slate-700">{CONTACT_LINKS.email}</strong>.</span>
                  </p>

                </form>
              )}

            </div>
          )}

        </div>
      </main>

      <Footer onNavigate={onNavigate} currentPath="/ambassador" />

    </div>
  );
}