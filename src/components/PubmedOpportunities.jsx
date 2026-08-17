import React, { useState } from 'react';
import { PROOF_IMAGES } from '../data/siteData';
import { BookOpen, X, Maximize2 } from 'lucide-react';

export default function PubmedOpportunities() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="pubmed-opportunities" className="py-16 relative bg-slate-50 border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple Visual Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sky-100/80 border border-sky-200 text-sky-800 text-xs font-bold shadow-sm">
            <BookOpen className="w-3.5 h-3.5 text-sky-600" />
            <span>PubMed & Publication Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading tracking-tight">
            PUBMED RESEARCH <span className="text-gradient">OPPORTUNITIES</span>
          </h2>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto">
            Visual showcase of research opportunities, systematic reviews, and PubMed publication achievements provided through our mentorship. Click any image to view full-size.
          </p>
        </div>

        {/* Clean Clickable Visual Image Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {PROOF_IMAGES.map((img, idx) => (
            <div 
              key={idx}
              onClick={() => setSelectedImage(img)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-sky-300 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer group flex flex-col justify-between"
            >
              <div className="h-64 overflow-hidden bg-slate-100 relative">
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <span className="bg-white/95 backdrop-blur text-slate-900 text-xs font-bold py-2 px-4 rounded-full shadow-lg flex items-center gap-1.5 border border-slate-200">
                    <Maximize2 className="w-4 h-4 text-sky-600" />
                    <span>View Full Image</span>
                  </span>
                </div>
              </div>

              <div className="p-4 space-y-1 bg-white border-t border-slate-100">
                <span className="text-[10px] font-bold text-sky-600 uppercase tracking-widest">{img.category}</span>
                <h3 className="font-bold text-slate-900 text-sm font-heading">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Clean Full-Size Lightbox Modal Overlay (NO External Links) */}
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
                alt={selectedImage.title} 
                className="max-h-[78vh] w-auto h-auto rounded-xl object-contain" 
              />
            </div>

            <div className="px-2 pt-1 flex items-center justify-between">
              <div>
                <span className="text-xs text-sky-600 font-bold uppercase tracking-widest">{selectedImage.category}</span>
                <h4 className="text-base font-bold text-slate-900 font-heading">{selectedImage.title}</h4>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
