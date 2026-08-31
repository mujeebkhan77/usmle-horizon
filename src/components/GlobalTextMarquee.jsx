import React from 'react';

export default function GlobalTextMarquee() {
  const strip1Phrases = [
    "USMLE RESOURCES",
    "MEDICAL RESEARCH",
    "CLINICAL ROTATIONS",
    "iMD",
    "STEPWISEMD",
    "PLAB",
    "AMC",
    "FROM SCRATCH TO MATCH"
  ];

  const strip2Phrases = [
    "GLOBAL CLINICAL ROTATIONS",
    "PUBMED RESEARCH",
    "USMLE PREPARATION",
    "MEDICAL COMMUNITY",
    "RESEARCH OPPORTUNITIES",
    "WE SERVE FROM SCRATCH TO MATCH"
  ];

  // Repeat 4 times for a completely seamless infinite CSS marquee loop
  const list1 = [...strip1Phrases, ...strip1Phrases, ...strip1Phrases, ...strip1Phrases];
  const list2 = [...strip2Phrases, ...strip2Phrases, ...strip2Phrases, ...strip2Phrases];

  return (
    <div className="py-4 overflow-hidden select-none pointer-events-none relative z-10 space-y-2">
      
      {/* Inline Keyframe Animations */}
      <style>{`
        @keyframes marqueeL2R {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        @keyframes marqueeR2L {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-l2r {
          display: flex;
          width: max-content;
          animation: marqueeL2R 42s linear infinite;
        }
        .animate-marquee-r2l {
          display: flex;
          width: max-content;
          animation: marqueeR2L 42s linear infinite;
        }
      `}</style>

      {/* STRIP 1: Left -> Right (Sky Ocean Brand Ribbon) */}
      <div className="w-full overflow-hidden bg-gradient-to-r from-sky-950 via-sky-900 to-slate-900 border-y border-sky-500/30 py-3 shadow-md">
        <div className="animate-marquee-l2r flex items-center gap-7 whitespace-nowrap">
          {list1.map((phrase, idx) => (
            <div key={idx} className="flex items-center gap-7">
              <span className="text-xs sm:text-sm font-black font-heading tracking-widest uppercase">
                {phrase === 'FROM SCRATCH TO MATCH' || phrase === 'USMLE RESOURCES' ? (
                  <span className="text-sky-300 drop-shadow">{phrase}</span>
                ) : phrase === 'MEDICAL RESEARCH' || phrase === 'CLINICAL ROTATIONS' ? (
                  <span className="text-emerald-300 drop-shadow">{phrase}</span>
                ) : (
                  <span className="text-slate-100">{phrase}</span>
                )}
              </span>
              <span className="text-cyan-400 font-black text-sm">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* STRIP 2: Right -> Left (Emerald Teal Brand Ribbon) */}
      <div className="w-full overflow-hidden bg-gradient-to-r from-slate-900 via-emerald-950 to-sky-950 border-y border-emerald-500/30 py-3 shadow-md">
        <div className="animate-marquee-r2l flex items-center gap-7 whitespace-nowrap">
          {list2.map((phrase, idx) => (
            <div key={idx} className="flex items-center gap-7">
              <span className="text-xs sm:text-sm font-black font-heading tracking-widest uppercase">
                {phrase === 'GLOBAL CLINICAL ROTATIONS' || phrase === 'MEDICAL COMMUNITY' ? (
                  <span className="text-sky-300 drop-shadow">{phrase}</span>
                ) : phrase === 'PUBMED RESEARCH' || phrase === 'RESEARCH OPPORTUNITIES' ? (
                  <span className="text-emerald-300 drop-shadow">{phrase}</span>
                ) : (
                  <span className="text-slate-100">{phrase}</span>
                )}
              </span>
              <span className="text-emerald-400 font-black text-sm">•</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}