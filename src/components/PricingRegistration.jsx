import React, { useState } from 'react';
import { IMD_PLANS, IMD_DURATIONS } from '../data/siteData';
import { Check, ShieldCheck, Zap, MessageCircle, X, Sparkles, Send, User, Mail, Key, Clock, Calendar, BookOpen } from 'lucide-react';

export default function PricingRegistration({ isModalOpen, onCloseModal, selectedPlanName }) {
  const [activeDuration, setActiveDuration] = useState('12m'); // default 12 Months
  const [formData, setFormData] = useState({
    name: '',
    accessType: selectedPlanName || 'VIP Premium Plan',
    duration: '12 Months (1 Year)',
    email: '',
    username: '',
    password: ''
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const selectedDurationObj = IMD_DURATIONS.find(d => d.id === activeDuration) || IMD_DURATIONS[1];

  const handleWhatsAppRegister = (e) => {
    e.preventDefault();
    
    // Construct friendly WhatsApp pricing request & subscription message
    const textMessage = `Hello Dr. Abdullah! I would like to complete my subscription for THE USMLE HORIZON.

Name: ${formData.name || 'N/A'}
Email: ${formData.email || 'N/A'}
Selected Plan: ${formData.accessType}
Duration Required: ${formData.duration}
Desired Username: ${formData.username || 'N/A'}
Desired Password: ${formData.password || 'N/A'}

Please send me the price details and payment instructions so I can finalize my subscription. Thank you!`;

    const encodedText = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/923414517833?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
    if (onCloseModal) onCloseModal();
  };

  return (
    <section id="pricing" className="py-24 relative bg-slate-50 border-t border-slate-200">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <div className="badge-emerald inline-flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5" />
            <span>iMD Subscription & Access Duration</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Choose Your <span className="text-gradient">iMD Plan & Duration</span>
          </h2>

          <p className="text-slate-600 text-sm">
            Select your preferred iMD access duration below. All plans include 50,000+ QBanks, videos, and multi-device installation assistance.
          </p>
        </div>

        {/* Duration Selector Tabs for iMD ONLY */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {IMD_DURATIONS.map((dur) => (
            <button
              key={dur.id}
              onClick={() => {
                setActiveDuration(dur.id);
                setFormData(prev => ({ ...prev, duration: dur.label }));
              }}
              className={`px-5 py-3 rounded-2xl text-xs font-bold transition flex items-center gap-2 ${
                activeDuration === dur.id
                  ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/30 scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200 shadow-sm'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>{dur.label}</span>
              {dur.badge && (
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold ${
                  activeDuration === dur.id ? 'bg-white/20 text-white' : 'bg-sky-50 text-sky-700 border border-sky-200'
                }`}>
                  {dur.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* iMD Pricing Cards Grid (2 Clean Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto items-stretch">
          {IMD_PLANS.map((plan, idx) => (
            <div 
              key={idx}
              className={`glass-panel p-8 rounded-3xl flex flex-col justify-between relative transition duration-300 bg-white ${
                plan.highlight 
                  ? 'border-2 border-sky-500 shadow-xl shadow-sky-500/10' 
                  : 'border border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sky-500 to-emerald-500 text-white font-extrabold text-[11px] px-4 py-1 rounded-full uppercase tracking-wider shadow flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Recommended VIP Plan
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 font-heading">{plan.name}</h3>
                  <p className="text-xs text-slate-500 mt-1">{plan.tagline}</p>
                </div>

                <div className="py-3 px-4 bg-sky-50/70 rounded-2xl border border-sky-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-sky-800">Selected Duration:</span>
                  <span className="text-xs font-extrabold text-sky-700 bg-white px-3 py-1 rounded-full border border-sky-200 shadow-sm flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {selectedDurationObj.label}
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
                  onClick={() => {
                    setFormData({ 
                      ...formData, 
                      accessType: plan.name,
                      duration: selectedDurationObj.label 
                    });
                    if (onCloseModal) onCloseModal(true);
                  }}
                  className={`w-full text-sm font-bold py-3.5 px-6 rounded-full transition flex items-center justify-center gap-2 ${
                    plan.highlight 
                      ? 'btn-primary' 
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

        {/* Standalone Research Mentorship Card */}
        <div className="bg-gradient-to-r from-purple-50 via-white to-sky-50 rounded-3xl p-8 border border-purple-200 shadow-md max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-3 text-center md:text-left">
              <div className="badge-gold inline-flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5" />
                <span>PubMed & Scopus Publication</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-heading">
                Research Mentorship ("Scratch to Match")
              </h3>
              <p className="text-xs text-slate-600 max-w-xl">
                Looking for 1-on-1 publication guidance with Dr. Abdullah? From Letter to Editor (LTE) to Meta-Analysis until published in indexed medical journals.
              </p>
            </div>

            <button
              onClick={() => {
                setFormData({ 
                  ...formData, 
                  accessType: 'Research Mentorship Scratch to Match',
                  duration: 'Until Published' 
                });
                if (onCloseModal) onCloseModal(true);
              }}
              className="px-6 py-3.5 rounded-full bg-purple-700 hover:bg-purple-800 text-white font-bold text-xs shadow-md transition flex items-center gap-2 shrink-0"
            >
              <Send className="w-4 h-4" />
              <span>Inquire Research Pricing</span>
            </button>
          </div>
        </div>

      </div>

      {/* Account Registration & Price Inquiry Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white w-full max-w-lg p-6 sm:p-8 rounded-3xl border border-sky-300 shadow-2xl relative">
            
            {/* Close Button */}
            <button 
              onClick={() => onCloseModal(false)}
              className="absolute top-5 right-5 text-slate-500 hover:text-slate-900 p-1.5 rounded-lg bg-slate-100 border border-slate-200"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Title */}
            <div className="space-y-2 mb-6">
              <div className="badge-cyan inline-flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Subscription & Pricing Inquiry</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 font-heading">
                Complete Your Subscription
              </h3>
              <p className="text-xs text-slate-500">
                Enter your details to generate your direct WhatsApp request to Dr. Abdullah for exact pricing and payment instructions.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleWhatsAppRegister} className="space-y-4">
              
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input 
                    type="text"
                    name="name"
                    required
                    placeholder="Dr. John Doe"
                    value={formData.name}
                    onChange={handleFormChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-900 outline-none focus:border-sky-500 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Access Type / Plan</label>
                  <select
                    name="accessType"
                    value={formData.accessType}
                    onChange={handleFormChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs text-slate-900 outline-none focus:border-sky-500 focus:bg-white"
                  >
                    <option value="VIP Premium Plan">VIP Premium Plan</option>
                    <option value="iMD Basic Access">iMD Basic Access</option>
                    <option value="Research Mentorship Scratch to Match">Research Mentorship "Scratch to Match"</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Duration Required</label>
                  <select
                    name="duration"
                    value={formData.duration}
                    onChange={handleFormChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-xs text-slate-900 outline-none focus:border-sky-500 focus:bg-white font-semibold text-sky-700"
                  >
                    <option value="6 Months Access">6 Months Access</option>
                    <option value="12 Months (1 Year)">12 Months (1 Year)</option>
                    <option value="2 Years (24 Months)">2 Years (24 Months)</option>
                    <option value="Until Published (Research)">Until Published (Research)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input 
                    type="email"
                    name="email"
                    required
                    placeholder="doctor@example.com"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-900 outline-none focus:border-sky-500 focus:bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Desired Username</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input 
                      type="text"
                      name="username"
                      required
                      placeholder="drjohn"
                      value={formData.username}
                      onChange={handleFormChange}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-900 outline-none focus:border-sky-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Desired Password</label>
                  <div className="relative">
                    <Key className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input 
                      type="text"
                      name="password"
                      required
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleFormChange}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-9 pr-3 py-2.5 text-xs text-slate-900 outline-none focus:border-sky-500 focus:bg-white"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="btn-whatsapp w-full justify-center text-sm py-3 font-bold"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Ask Pricing & Complete via WhatsApp</span>
                </button>
              </div>

              <p className="text-[10px] text-center text-slate-500 pt-1">
                Your request is sent directly to Dr. Abdullah (+92 341 4517833) to send price details & activate your account.
              </p>

            </form>

          </div>
        </div>
      )}

    </section>
  );
}
