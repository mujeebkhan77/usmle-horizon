import React from 'react';
import { CONTACT_LINKS } from '../data/siteData';
import { MessageSquare, Send, Mail, Instagram, Linkedin, Facebook, Clock, ArrowUpRight } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white border-t border-slate-200">
      
      <div className="glow-orb glow-cyan bottom-0 right-0 w-[450px] h-[450px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="badge-emerald inline-flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>24/7 Global Student Support</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-heading">
            Connect With <span className="text-gradient">Dr. Abdullah</span> & Team
          </h2>
          <p className="text-slate-600 text-base">
            Reach out directly for instant account activation, custom research mentorship inquiries, or exam preparation guidance.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          
          {/* WhatsApp Direct */}
          <a
            href={CONTACT_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel glass-panel-hover p-6 rounded-2xl border border-emerald-300 bg-emerald-50/40 flex flex-col justify-between group shadow-sm"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center border border-emerald-300">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">Fastest Response</span>
                <h3 className="text-xl font-bold text-slate-900 font-heading">WhatsApp Direct</h3>
                <p className="text-xs text-slate-600 font-semibold mt-1">{CONTACT_LINKS.whatsappNumber}</p>
              </div>
            </div>
            <div className="pt-6 mt-4 border-t border-emerald-200 flex items-center justify-between text-emerald-700 font-bold text-xs">
              <span>Open WhatsApp Chat</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
            </div>
          </a>

          {/* Telegram Direct */}
          <a
            href={CONTACT_LINKS.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel glass-panel-hover p-6 rounded-2xl border border-sky-300 bg-sky-50/40 flex flex-col justify-between group shadow-sm"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center border border-sky-300">
                <Send className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-sky-700 uppercase tracking-wider">Telegram Channel & Chat</span>
                <h3 className="text-xl font-bold text-slate-900 font-heading">Telegram Support</h3>
                <p className="text-xs text-slate-600 font-semibold mt-1">{CONTACT_LINKS.telegramHandle}</p>
              </div>
            </div>
            <div className="pt-6 mt-4 border-t border-sky-200 flex items-center justify-between text-sky-700 font-bold text-xs">
              <span>Connect on Telegram</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
            </div>
          </a>

          {/* Official Email */}
          <a
            href={`mailto:${CONTACT_LINKS.email}`}
            className="glass-panel glass-panel-hover p-6 rounded-2xl border border-purple-300 bg-purple-50/40 flex flex-col justify-between group shadow-sm"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center border border-purple-300">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-bold text-purple-700 uppercase tracking-wider">Official Email</span>
                <h3 className="text-xl font-bold text-slate-900 font-heading">Email Inquiries</h3>
                <p className="text-xs text-slate-600 font-semibold mt-1">{CONTACT_LINKS.email}</p>
              </div>
            </div>
            <div className="pt-6 mt-4 border-t border-purple-200 flex items-center justify-between text-purple-700 font-bold text-xs">
              <span>Send Mail</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
            </div>
          </a>

        </div>

        {/* Social Network Pills */}
        <div className="glass-panel p-6 rounded-2xl border border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs font-bold text-slate-700">Follow Dr. Abdullah & USMLE Horizon on Socials:</span>
          
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={CONTACT_LINKS.whatsappChannel}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full bg-emerald-100 hover:bg-emerald-200 text-emerald-800 border border-emerald-300 text-xs font-semibold flex items-center gap-1.5 transition"
            >
              <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Channel
            </a>

            <a
              href={CONTACT_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full bg-pink-100 hover:bg-pink-200 text-pink-800 border border-pink-300 text-xs font-semibold flex items-center gap-1.5 transition"
            >
              <Instagram className="w-3.5 h-3.5" /> Instagram
            </a>

            <a
              href={CONTACT_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full bg-sky-100 hover:bg-sky-200 text-sky-800 border border-sky-300 text-xs font-semibold flex items-center gap-1.5 transition"
            >
              <Linkedin className="w-3.5 h-3.5" /> LinkedIn
            </a>

            <a
              href={CONTACT_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 rounded-full bg-indigo-100 hover:bg-indigo-200 text-indigo-800 border border-indigo-300 text-xs font-semibold flex items-center gap-1.5 transition"
            >
              <Facebook className="w-3.5 h-3.5" /> Facebook Page
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
