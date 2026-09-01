import React, { useState } from 'react';
import { Calculator, Trophy, ArrowRight } from 'lucide-react';

export default function ScoreCalculator({ onOpenRegisterModal }) {
  const [uworldPercent, setUworldPercent] = useState(68);
  const [targetSpecialty, setTargetSpecialty] = useState('Internal Medicine');

  const specialties = [
    { name: 'Internal Medicine', minScore: 235, competitive: 245 },
    { name: 'General Surgery', minScore: 240, competitive: 252 },
    { name: 'Pediatrics', minScore: 230, competitive: 240 },
    { name: 'Anesthesiology', minScore: 242, competitive: 250 },
    { name: 'Diagnostic Radiology', minScore: 245, competitive: 255 },
    { name: 'Neurology', minScore: 232, competitive: 242 },
    { name: 'Orthopedic Surgery', minScore: 248, competitive: 258 },
  ];

  const selectedSpec = specialties.find(s => s.name === targetSpecialty) || specialties[0];
  
  // Calculate predicted score based on UWorld %
  const estimatedStep2 = Math.min(275, Math.max(190, Math.round(180 + (uworldPercent * 0.95))));
  const passProbability = uworldPercent >= 60 ? 'HIGH PASS (95%+)' : uworldPercent >= 52 ? 'MODERATE PASS (80%)' : 'NEEDS REVISION';

  return (
    <section id="score-predictor" className="py-16 relative bg-slate-50 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-sky-200 bg-white shadow-xl relative overflow-hidden">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-8">
            <div className="badge-cyan inline-flex items-center gap-1.5">
              <Calculator className="w-3.5 h-3.5" />
              <span>Interactive Student Utility</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
              USMLE Pass & Target Score Predictor
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm">
              Adjust your average UWorld % correct to estimate your USMLE exam preparedness and match competitiveness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Input Controls */}
            <div className="space-y-6 bg-slate-50 p-6 rounded-2xl border border-slate-200">
              
              <div>
                <div className="flex justify-between items-center text-xs font-bold mb-2">
                  <span className="text-slate-700">UWorld QBank % Correct:</span>
                  <span className="text-sky-700 font-extrabold text-base">{uworldPercent}%</span>
                </div>
                <input 
                  type="range"
                  min="40"
                  max="95"
                  value={uworldPercent}
                  onChange={(e) => setUworldPercent(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Target Residency Specialty:
                </label>
                <select 
                  value={targetSpecialty}
                  onChange={(e) => setTargetSpecialty(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900 outline-none focus:border-sky-500"
                >
                  {specialties.map(s => (
                    <option key={s.name} value={s.name}>{s.name}</option>
                  ))}
                </select>
              </div>

            </div>

            {/* Prediction Output Display */}
            <div className="space-y-4 text-center md:text-left">
              
              <div className="bg-sky-50 p-5 rounded-2xl border border-sky-200 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-600 font-semibold">Predicted Step 2 CK Score</div>
                  <div className="text-3xl font-extrabold text-sky-700 font-heading">{estimatedStep2}</div>
                </div>
                <Trophy className="w-10 h-10 text-amber-500" />
              </div>

              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-600">Step 1 Readiness:</span>
                  <span className="font-bold text-emerald-700">{passProbability}</span>
                </div>

                <div className="flex justify-between text-xs">
                  <span className="text-slate-600">{targetSpecialty} Target:</span>
                  <span className="font-bold text-slate-900">{selectedSpec.competitive}+</span>
                </div>
              </div>

              <button
                onClick={onOpenRegisterModal}
                className="btn-primary w-full justify-center text-xs py-3"
              >
                <span>Boost Your Score with VIP iMD Access</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
