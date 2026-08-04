import React, { useState } from 'react';
import { PROOF_IMAGES } from '../data/siteData';
import { Eye, X, Award, ExternalLink } from 'lucide-react';

export default function ProofGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="proofs" className="py-20 relative bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="badge-gold inline-flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Results & Success Proofs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
            Student Achievements & PubMed <span className="text-gradient-gold">Acceptances</span>
          </h2>
          <p className="text-slate-600 text-sm">
            Real score reports, journal acceptance letters, and student portal setups from Dr. Abdullah's candidates.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROOF_IMAGES.map((img, idx) => (
            <div 
              key={idx}
              onClick={() => setSelectedImage(img)}
              className="glass-panel rounded-2xl overflow-hidden cursor-pointer group border border-slate-200 hover:border-amber-400 transition duration-300 relative bg-white shadow-sm"
            >
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <span className="btn-secondary text-xs py-2 px-4 shadow-xl flex items-center gap-1.5 font-bold">
                    <Eye className="w-4 h-4 text-amber-600" />
                    <span>View Full Proof</span>
                  </span>
                </div>
              </div>

              <div className="p-4 space-y-1 bg-white">
                <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">{img.category}</span>
                <h3 className="font-bold text-slate-900 text-sm font-heading">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md animate-in fade-in">
          <div className="bg-white p-4 rounded-3xl border border-amber-300 max-w-3xl w-full relative shadow-2xl">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-slate-600 hover:text-slate-900 p-2 rounded-full bg-slate-100 border border-slate-200 z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-3">
              <div className="p-2 bg-slate-50 rounded-xl max-h-[75vh] overflow-auto flex items-center justify-center border border-slate-200">
                <img src={selectedImage.url} alt={selectedImage.title} className="max-h-[70vh] w-auto rounded-lg object-contain" />
              </div>

              <div className="flex justify-between items-center px-2">
                <div>
                  <span className="text-xs text-amber-600 font-bold uppercase">{selectedImage.category}</span>
                  <h4 className="text-base font-bold text-slate-900">{selectedImage.title}</h4>
                </div>

                <a 
                  href={selectedImage.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-sky-600 hover:text-sky-800 font-semibold flex items-center gap-1"
                >
                  <span>Original Link</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
