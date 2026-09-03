import React, { useState } from 'react';
import { PROOF_IMAGES } from '../data/siteData';
import { BookOpen, X, MessageCircle } from 'lucide-react';

export default function PubmedOpportunities() {
  const [selectedImage, setSelectedImage] = useState(null);

  const descriptionBlocks = [
    "We have multiple ongoing Research Articles covering Case reports, Cross sectional studies, Systemic reviews and Meta Analysis.",
    "These high yield Paid articles are already written by our professional PhD team.",
    "All the work of these articles have been completed & you have nothing to do except booking the slot.",
    "You will be added in a group with other authors when all the slots are filled.",
    "Manuscript of the article will be shared with you people there so that you can present anywhere you want.",
    "Your account will be created in PubMed journal.",
    "Main author & the coordinators will guide you throughout the whole process till they are published."
  ];

  const researchWhatsAppText = `*Provide your credentials for the Research Paper Participation*

Research Paper Title:
Required position:
Name*:
Designation*:
Department*:
Hospital name/college name*:
City name*:
Email address*:
What'sApp no*:

*If you are not doing job currently plz mention MBBS/MD college name to add in paper.*`;

  const researchWhatsAppLink = `https://wa.me/923414517833?text=${encodeURIComponent(researchWhatsAppText)}`;

  return (
    <section id="pubmed-opportunities" className="py-16 relative overflow-hidden bg-slate-50 border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple Visual Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-xs font-bold shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-sky-600" />
            <span>Medical Research OPPURTUNITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading tracking-tight">
            MEDICAL RESEARCH <span className="text-gradient">OPPORTUNITIES</span>
          </h2>
        </div>

        {/* Formatted Scannable Description Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12">
          {descriptionBlocks.map((blockText, idx) => (
            <div 
              key={idx}
              className={`p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3 ${
                idx === descriptionBlocks.length - 1 ? 'md:col-span-2' : ''
              }`}
            >
              <div className="w-2 h-2 rounded-full bg-sky-500 mt-2 shrink-0" />
              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                {blockText}
              </p>
            </div>
          ))}
        </div>

        {/* Clean Clickable Visual Image Gallery (IMAGE + IMAGE NAME ONLY) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {PROOF_IMAGES.map((img, idx) => (
            <div 
              key={idx}
              onClick={() => setSelectedImage(img)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-sky-300 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group flex flex-col justify-between"
            >
              <div className="h-64 overflow-hidden bg-slate-100 relative flex items-center justify-center p-2">
                <img 
                  src={img.url} 
                  alt={`${img.title} - Medical Research Publication`} 
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition duration-500 rounded-lg"
                />
              </div>

              <div className="p-3.5 bg-white text-center border-t border-slate-100">
                <h3 className="font-bold text-slate-900 text-sm font-heading">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Research Paper Participation WhatsApp CTA */}
        <div className="mt-12 text-center max-w-2xl mx-auto p-6 sm:p-8 rounded-3xl bg-white border-2 border-emerald-300 shadow-md space-y-4">
          <div className="space-y-1.5">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-heading">
              Participate in a Research Paper
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
              Interested in joining one of our ongoing research papers? Send your details directly on WhatsApp.
            </p>
          </div>

          <div className="pt-2 flex justify-center">
            <a
              href={researchWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp py-3 px-6 text-sm font-bold inline-flex items-center gap-2 shadow-lg shadow-emerald-600/20 hover:scale-105 transition transform"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Participate in a Research Paper</span>
            </a>
          </div>
        </div>

      </div>

      {/* Clean Full-Size Lightbox Modal Overlay (IMAGE + IMAGE NAME ONLY) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-in fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="bg-white p-4 sm:p-5 rounded-3xl border border-sky-300 max-w-4xl w-full relative shadow-2xl space-y-3"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-slate-600 hover:text-slate-900 p-2.5 rounded-full bg-slate-100 border border-slate-200 z-10 transition shadow-sm"
              title="Close Full View"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-2 bg-slate-50 rounded-2xl max-h-[82vh] overflow-auto flex items-center justify-center border border-slate-200">
              <img 
                src={selectedImage.url} 
                alt={`${selectedImage.title} - Full View`} 
                className="max-h-[78vh] w-auto h-auto rounded-xl object-contain" 
              />
            </div>

            <div className="px-2 pt-1 text-center">
              <h4 className="text-base font-bold text-slate-900 font-heading">{selectedImage.title}</h4>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
