import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ImdResources from './components/ImdResources';
import ResearchMentorship from './components/ResearchMentorship';
import PubmedOpportunities from './components/PubmedOpportunities';
import ExamTracks from './components/ExamTracks';
import ScoreCalculator from './components/ScoreCalculator';
import PricingRegistration from './components/PricingRegistration';
import StepwisePricing from './components/StepwisePricing';
import ClinicalRotations from './components/ClinicalRotations';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

import { CONTACT_LINKS } from './data/siteData';
import { MessageSquare } from 'lucide-react';

export default function App() {
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [selectedPlanName, setSelectedPlanName] = useState('VIP Premium Plan');

  const handleOpenRegisterModal = (planName = 'VIP Premium Plan') => {
    setSelectedPlanName(planName);
    setIsRegisterModalOpen(true);
  };

  const handleCloseRegisterModal = (shouldOpen = false) => {
    setIsRegisterModalOpen(shouldOpen);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-white">
      
      {/* Sticky Header */}
      <Header onOpenRegisterModal={() => handleOpenRegisterModal('VIP Premium Plan')} />

      <main>
        {/* Hero Section */}
        <Hero onOpenRegisterModal={() => handleOpenRegisterModal('VIP Premium Plan')} />

        {/* iMD Medical Resources & QBank Hub */}
        <ImdResources onOpenRegisterModal={() => handleOpenRegisterModal('iMD Basic Access')} />

        {/* Medical Research Mentorship — From Scratch to Match */}
        <ResearchMentorship onOpenRegisterModal={() => handleOpenRegisterModal('Research Mentorship Scratch to Match')} />

        {/* PUBMED RESEARCH OPPORTUNITIES (Static Gallery) */}
        <PubmedOpportunities />

        {/* International Exam Prep Tracks */}
        <ExamTracks onOpenRegisterModal={() => handleOpenRegisterModal('USMLE Tutoring Prep')} />

        {/* Score Predictor Calculator */}
        <ScoreCalculator onOpenRegisterModal={() => handleOpenRegisterModal('VIP Premium Plan')} />

        {/* Pricing & VIP Registration Plans (iMD) */}
        <PricingRegistration 
          isModalOpen={isRegisterModalOpen} 
          onCloseModal={handleCloseRegisterModal}
          selectedPlanName={selectedPlanName}
        />

        {/* StepWiseMD Plan & Duration */}
        <StepwisePricing 
          onOpenRegisterModal={(planName) => handleOpenRegisterModal(planName)}
        />

        {/* Global Clinical Rotations (Replaces Student Achievements & PubMed Acceptances in exact same position) */}
        <ClinicalRotations 
          onOpenRegisterModal={(planName) => handleOpenRegisterModal(planName)}
        />

        {/* FAQ Section */}
        <FaqSection />

        {/* Contact Channels */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Sticky WhatsApp Button */}
      <a
        href={CONTACT_LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold p-3.5 rounded-full shadow-2xl shadow-emerald-500/50 flex items-center gap-2 group transition duration-300 transform hover:scale-110"
        title="Chat on WhatsApp 24/7"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap text-xs font-extrabold pr-1">
          Chat with Dr. Abdullah
        </span>
      </a>

    </div>
  );
}
