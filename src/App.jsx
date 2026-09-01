import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GlobalTextMarquee from './components/GlobalTextMarquee';
import ImdResources from './components/ImdResources';
import ExamTracks from './components/ExamTracks';
import ScoreCalculator from './components/ScoreCalculator';
import PricingRegistration from './components/PricingRegistration';
import StepwisePricing from './components/StepwisePricing';
import ResearchMentorship from './components/ResearchMentorship';
import PubmedOpportunities from './components/PubmedOpportunities';
import ClinicalRotations from './components/ClinicalRotations';
import AmbassadorBannerCTA from './components/AmbassadorBannerCTA';
import AmbassadorPage from './components/AmbassadorPage';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

import { CONTACT_LINKS } from './data/siteData';
import { MessageSquare } from 'lucide-react';

export default function App() {
  const getInitialPath = () => {
    if (typeof window === 'undefined') return '/';
    if (window.location.pathname.startsWith('/ambassador') || window.location.hash === '#ambassador') {
      return '/ambassador';
    }
    return '/';
  };

  const [currentPath, setCurrentPath] = useState(getInitialPath);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [selectedPlanName, setSelectedPlanName] = useState('VIP Premium Plan');

  useEffect(() => {
    const handleLocationChange = () => {
      if (window.location.pathname.startsWith('/ambassador') || window.location.hash === '#ambassador') {
        setCurrentPath('/ambassador');
      } else {
        setCurrentPath('/');
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigate = (path) => {
    if (path === '/ambassador' || path === '#ambassador') {
      window.history.pushState({}, '', '/ambassador');
      setCurrentPath('/ambassador');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.history.pushState({}, '', path.startsWith('#') ? '/' + path : path);
      setCurrentPath('/');
      if (path.startsWith('#')) {
        setTimeout(() => {
          const el = document.querySelector(path);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleOpenRegisterModal = (planName = 'VIP Premium Plan') => {
    setSelectedPlanName(planName);
    setIsRegisterModalOpen(true);
  };

  const handleCloseRegisterModal = (shouldOpen = false) => {
    setIsRegisterModalOpen(shouldOpen);
  };

  if (currentPath === '/ambassador') {
    return (
      <AmbassadorPage 
        onNavigate={navigate}
        onOpenRegisterModal={() => handleOpenRegisterModal('VIP Premium Plan')}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-white">
      
      {/* Sticky Header */}
      <Header 
        onOpenRegisterModal={() => handleOpenRegisterModal('VIP Premium Plan')}
        onNavigate={navigate}
        currentPath={currentPath}
      />

      <main>
        {/* 1. Hero Section — unchanged */}
        <Hero onOpenRegisterModal={() => handleOpenRegisterModal('VIP Premium Plan')} />

        {/* Global Continuous Text Marquee Visual */}
        <GlobalTextMarquee />

        {/* 2. Medical Resources Intro & QBank Hub */}
        <ImdResources onOpenRegisterModal={() => handleOpenRegisterModal('iMD Basic Access')} />

        {/* 3. Global Medical Pathways Supported */}
        <ExamTracks onOpenRegisterModal={() => handleOpenRegisterModal('USMLE Tutoring Prep')} />

        {/* 4. Interactive Student Utility (USMLE Pass & Target Score Predictor) */}
        <ScoreCalculator onOpenRegisterModal={() => handleOpenRegisterModal('VIP Premium Plan')} />

        {/* 5. iMD Subscription & Access Duration */}
        <PricingRegistration 
          isModalOpen={isRegisterModalOpen} 
          onCloseModal={handleCloseRegisterModal}
          selectedPlanName={selectedPlanName}
        />

        {/* 6. StepWiseMD Subscription */}
        <StepwisePricing 
          onOpenRegisterModal={(planName) => handleOpenRegisterModal(planName)}
        />

        {/* 7 & 8. Medical Research Mentorship & How Dr. Abdullah Mentors You */}
        <ResearchMentorship onOpenRegisterModal={() => handleOpenRegisterModal('Research Mentorship Scratch to Match')} />

        {/* 9. Medical Research OPPURTUNITIES */}
        <PubmedOpportunities />

        {/* 10, 11 & 12. US Clinical Rotations, Why Choose Us & Visa Assistance */}
        <ClinicalRotations 
          onOpenRegisterModal={(planName) => handleOpenRegisterModal(planName)}
        />

        {/* 13. Compact Homepage Ambassador CTA Banner */}
        <AmbassadorBannerCTA onNavigate={navigate} />

        {/* 14. Frequently Asked Questions (FAQ) */}
        <FaqSection />

        {/* 15 & 16. Connect with Abdullah & Team (Contact Channels) */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={navigate} currentPath={currentPath} />

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
