// Centralized Site Data for THE USMLE HORIZON

export const SITE_INFO = {
  name: "THE USMLE HORIZON",
  tagline: "We Serve From Scratch to Match",
  secondaryTagline: "Everything You Need To Ace USMLE & Medical Exams in One Platform",
  founder: "Dr. Abdullah",
  foundedYear: 2015,
  activeStudents: "50,000+",
  totalResources: "45,000+",
  logo: "https://i.postimg.cc/d1dtt8BS/99090909.jpg",
  heroImage: "/hero_doctor.jpg",
  medImage: "https://i.postimg.cc/sf6YJNNb/med.webp",
};

export const CONTACT_LINKS = {
  whatsapp: "https://wa.me/923414517833?text=Hello!%20I%20have%20a%20question%20regarding%20THE%20USMLE%20HORIZON%20services.",
  whatsappNumber: "+92 341 4517833",
  whatsappChannel: "https://whatsapp.com/channel/0029VacszpdDjiOariYlCI1l",
  telegram: "https://t.me/DrAbdullah_iMD",
  telegramHandle: "@DrAbdullah_iMD",
  email: "theusmlehorizon@gmail.com",
  instagram: "https://www.instagram.com/invites/contact/?igsh=1wvlqx0530vzk&utm_content=nm2cg2n",
  facebook: "https://www.facebook.com/share/1FK75zXKUj",
  linkedin: "https://www.linkedin.com/in/the-usmle-horizon-588a17330"
};

export const PROOF_IMAGES = [
  {
    url: "https://i.postimg.cc/Bt9Zxyk1/IMG-20250729-WA0030.jpg",
    title: "PubMed Research Opportunity",
    category: "Research Mentorship"
  },
  {
    url: "https://i.postimg.cc/FFfjVLw9/IMG-20250729-WA0028.jpg",
    title: "Google Scholar Opportunity",
    category: "USMLE Prep"
  },
  {
    url: "/research-opportunities/Embase_Journal.jpg",
    title: "EMBASE Opportunity",
    category: "Research Mentorship"
  },
  {
    url: "/research-opportunities/Annals_of_Med_and_Surg.jpg",
    title: "Annals of Med & Surg",
    category: "Journal Publication"
  },
  {
    url: "/research-opportunities/The_Lancet_Journal.jpg",
    title: "The Lancet Journal",
    category: "High Impact Journal"
  },
  {
    url: "/research-opportunities/Cureus_Journal.jpg",
    title: "Cureus Journal",
    category: "PubMed Indexed"
  }
];

export const IMD_RESOURCES_LIST = [
  {
    name: "UWorld",
    category: "QBank",
    exam: "USMLE Step 1 & Step 2 CK",
    description: "Complete updated question bank with detailed explanations, charts, and clinical images.",
    popular: true
  },
  {
    name: "AMBOSS",
    category: "QBank",
    exam: "USMLE Step 1 & Step 2 CK",
    description: "Interactive clinical database, high-yield learning cards, and exam-simulated QBanks.",
    popular: true
  },
  {
    name: "USMLE-Rx",
    category: "QBank",
    exam: "USMLE Step 1 & Step 2 CK",
    description: "First Aid integrated question bank, flashcards, and high-yield video lectures.",
    popular: false
  },
  {
    name: "Mehlman Medical — PDFs & Resources",
    category: "PDFs & Notes",
    exam: "USMLE Step 1 & Step 2 CK",
    description: "High-yield pathology, internal medicine, and clerkship revision audio/PDF files for Step 1 & Step 2 CK.",
    popular: true
  },
  {
    name: "USMLE Bootcamp Prep & Video Series",
    category: "QBank & Videos",
    exam: "USMLE Step 1",
    description: "High-yield bite-sized video lectures, comprehensive Step 1 question banks, and interactive anatomy tagging.",
    popular: true
  },
  {
    name: "Boards & Beyond (B&B) Video Series",
    category: "Video Lectures",
    exam: "USMLE Step 1",
    description: "Dr. Jason Ryan's comprehensive clinical lectures and companion slide PDFs.",
    popular: true
  },
  {
    name: "Pathoma (Dr. Sattar Fundamentals)",
    category: "Video Lectures",
    exam: "USMLE Step 1 Pathology",
    description: "Complete pathology lectures and textbook notes for core high-yield topics.",
    popular: false
  },
  {
    name: "Kaplan Medical Masterclass Series",
    category: "Video Lectures",
    exam: "USMLE Step 1",
    description: "Full clinical subject reviews by leading US medical faculty.",
    popular: false
  },
  {
    name: "SketchyMedical (Micro & Pharm)",
    category: "Visual Memory",
    exam: "USMLE Step 1",
    description: "High-yield mnemonic memory scenes for Microbiology, Pharmacology, and Internal Medicine.",
    popular: true
  },
  {
    name: "PassMedicine",
    category: "QBank",
    exam: "PLAB (UK)",
    description: "High-yield PLAB 1 & 2 question bank, NHS guideline revisions, knowledge notes, and exam mock modes.",
    popular: true
  },
  {
    name: "PassTest",
    category: "QBank",
    exam: "PLAB (UK)",
    description: "Comprehensive UK medical licensing question bank, clinical recall questions, and detailed explanations.",
    popular: false
  },
  {
    name: "MRCP QBank",
    category: "QBank",
    exam: "PLAB (UK)",
    description: "Membership of the Royal Colleges of Physicians question bank, specialty modules, and clinical case scenarios.",
    popular: true
  },
  {
    name: "MRCS QBank",
    category: "QBank",
    exam: "PLAB (UK)",
    description: "Membership of the Royal College of Surgeons question bank, surgical anatomy, and clinical OSCE revision.",
    popular: false
  },
  {
    name: "AMC Question Banks (AMC Handbook)",
    category: "QBank",
    exam: "AMC (Australia)",
    description: "Australian Medical Council MCQ study packages and clinical recall questions.",
    popular: false
  },
  {
    name: "AMEDEX",
    category: "QBank",
    exam: "AMC (Australia)",
    description: "Official Australian Medical Council exam preparation database, MCQ trial exams, and clinical recall questions.",
    popular: true
  },
  {
    name: "MplusX",
    category: "QBank & Clinical",
    exam: "AMC (Australia)",
    description: "Comprehensive AMC MCQ and clinical exam preparation platform with high-yield case studies.",
    popular: true
  },
  {
    name: "eMedici",
    category: "QBank & Library",
    exam: "AMC (Australia)",
    description: "Australian clinical case library, interactive medical questions, and AMC examination practice modules.",
    popular: false
  }
];

export const RESEARCH_TRACKS = [
  {
    id: "lte",
    title: "Letter to Editor (LTE)",
    level: "Beginner",
    duration: "2 - 3 Weeks",
    journal: "PubMed / Scopus Indexed",
    description: "Ideal first publication for medical students. Learn how to critique clinical literature, frame scholarly commentary, and secure rapid indexed publication."
  },
  {
    id: "cross-sectional",
    title: "Cross-Sectional Studies",
    level: "Intermediate",
    duration: "4 - 6 Weeks",
    journal: "PubMed / Web of Science",
    description: "Design epidemiological surveys, analyze clinical prevalence data using SPSS/Stata, and write full original research articles."
  },
  {
    id: "cohort",
    title: "Cohort & Observational Studies",
    level: "Advanced",
    duration: "6 - 8 Weeks",
    journal: "High-Impact Medical Journals",
    description: "Analyze longitudinal clinical outcome data, compute relative risks/hazard ratios, and draft high-impact clinical manuscripts."
  },
  {
    id: "systematic",
    title: "Systematic Reviews & Meta-Analyses",
    level: "Expert / High-Yield",
    duration: "8 - 12 Weeks",
    journal: "Top-Tier International Journals",
    description: "The gold standard of evidence-based medicine. PRISMA guidelines, RevMan statistical pooling, forest plots, bias risk assessment, and guaranteed publication mentorship."
  }
];

export const EXAM_TRACKS = [
  {
    code: "USMLE",
    name: "United States Medical Licensing Exam",
    flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
    steps: ["Step 1 (Pass/Fail)", "Step 2 CK (Numerical Score)", "Step 3 (Licensure)"],
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30"
  },
  {
    code: "PLAB",
    name: "Professional & Linguistic Assessments Board (UK)",
    flag: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg",
    steps: ["PLAB 1 (MCQ Exam)", "PLAB 2 (Clinical OSCE)", "GMC Registration"],
    badgeColor: "bg-red-500/10 text-red-400 border-red-500/30"
  },
  {
    code: "AMC",
    name: "Australian Medical Council (Australia)",
    flag: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg",
    steps: ["AMC MCQ (CAT Exam)", "AMC Clinical Exam", "AHPRA Registration"],
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
  },
  {
    code: "MCCQE",
    name: "Medical Council of Canada Qualifying Exam",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg",
    steps: ["MCCQE Part I", "NAC OSCE Exam", "Medical Council Registration"],
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30"
  },
  {
    code: "UAE",
    name: "United Arab Emirates Medical Licensing",
    flag: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg",
    steps: ["DHA Exam (Dubai)", "MOH Exam", "HaAD / DoH Exam"],
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30"
  }
];

export const IMD_DURATIONS = [
  { id: "6m", label: "6 Months Access", badge: "Rapid Revision" },
  { id: "12m", label: "12 Months (1 Year)", badge: "Most Popular", default: true },
  { id: "2y", label: "2 Years (24 Months)", badge: "Complete Prep Saver" }
];

export const IMD_PLANS = [
  {
    name: "iMD Basic Access",
    tagline: "Essential QBanks & Core Lecture Videos",
    features: [
      "Access to Top 5 QBanks (UWorld, USMLE-Rx, Kaplan)",
      "Multi-device support (Windows, Android, Mac)",
      "High-speed server downloads",
      "Standard WhatsApp Technical Support"
    ],
    highlight: false,
    ctaText: "Select iMD Basic"
  },
  {
    name: "VIP Premium iMD Plan",
    tagline: "Full Unlimited Medical Hub (50,000+ Resources)",
    features: [
      "Full access to 45,000+ to 50,000+ Medical Resources",
      "All QBanks: UWorld, Amboss, USMLE-Rx, Kaplan",
      "All Video Series: B&B, Pathoma, Sketchy, Ninja Nerd",
      "Seamless cross-device sync (PC, Tablet, Phone)",
      "Priority 24/7 Dr. Abdullah WhatsApp Support",
      "Free updates to 2025/2026 content editions"
    ],
    highlight: true,
    ctaText: "Select VIP iMD"
  }
];

export const STEPWISE_DURATIONS = [
  { id: "6m", label: "6 Months Access", badge: "Rapid Revision" },
  { id: "12m", label: "12 Months (1 Year)", badge: "Most Popular", default: true },
  { id: "2y", label: "2 Years (24 Months)", badge: "Complete Prep Saver" }
];

export const STEPWISE_PLANS = [
  {
    name: "StepWiseMD Basic Plan",
    tagline: "Simple & Accessible Core Question Bank Access",
    features: [
      "Core StepWiseMD Question Bank & High-Yield Explanations",
      "Web Version Also Available (Browser & Mobile)",
      "Essential Practice Tests & Performance Analytics",
      "Standard WhatsApp Technical Support"
    ],
    highlight: false,
    ctaText: "Select StepWiseMD Basic"
  },
  {
    name: "StepWiseMD VIP Pro Plan",
    tagline: "Complete StepWiseMD Suite with Full High-Yield Resources",
    features: [
      "Full StepWiseMD QBank & Comprehensive Explanations",
      "Web Version Also Available + Multi-Device App Sync",
      "Interactive High-Yield Flashcards & Clinical Cases",
      "24/7 Priority Support & Update Assistance",
      "Free 2025/2026 Content Updates Included"
    ],
    highlight: true,
    ctaText: "Select StepWiseMD VIP"
  }
];

export const FAQ_ITEMS = [
  {
    q: "Are both iMD Subscription and StepWiseMD Subscription available?",
    a: "Yes! The USMLE Horizon offers both iMD Subscription (containing 50,000+ QBanks, videos, and multi-device access) and StepWiseMD Subscription (a simple, user-friendly QBank platform). Web Version access is available for both options across your devices."
  },
  {
    q: "What is iMD Medical Resources and how does access work?",
    a: "iMD is the world's largest digital medical resource hub containing over 45,000+ to 50,000+ resources including updated QBanks (UWorld, Amboss, USMLE-Rx), high-yield video lectures, textbooks, and self-assessments. Once registered, you are sent activation credentials and step-by-step setup guides to use on Windows, Mac, iOS, or Android."
  },
  {
    q: "What duration options are available for iMD subscriptions?",
    a: "You can choose between 6 Months Access, 12 Months (1 Year), or 2 Years (24 Months) depending on your study timeline."
  },
  {
    q: "Can I use my iMD account on multiple devices?",
    a: "Yes! You can switch seamlessly between your laptop, tablet, and desktop computer. Your progress and library sync across devices smoothly."
  },
  {
    q: "How does the 'Scratch to Match' Research Mentorship work?",
    a: "Our research mentorship program takes you from zero research background ('Scratch') all the way to peer-reviewed publication in PubMed/Scopus indexed journals ('Match'). Dr. Abdullah directly guides you through study design, statistical analysis (RevMan/SPSS), manuscript writing, and journal submission."
  },
  {
    q: "How do I ask for price details and complete my subscription?",
    a: "Click on 'Select Plan' or 'Get iMD Access'. Fill in your registration details and click 'Send Registration via WhatsApp'. It will generate a pre-filled message asking Dr. Abdullah for the exact price and payment details to complete your subscription smoothly."
  }
];
