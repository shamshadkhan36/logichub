/**
 * LogicHub - F.Z.E
 * Corporate Website Data Layer
 * Source of Truth: Business License No. 57090 | Ajman Free Zone, UAE
 */

const COMPANY_INFO = {
  name: "LogicHub - F.Z.E",
  shortName: "LogicHub",
  legalForm: "Free Zone Establishment - Limited Liability",
  licenseNo: "57090",
  location: "Ajman Free Zone, Ajman, United Arab Emirates",
  country: "United Arab Emirates",
  emirate: "Ajman",
  jurisdiction: "Ajman Free Zone Authority (AFZA)",
  email: "info@logichub.ae",
  whatsappNumber: "971588828318",
  whatsappDisplay: "+971 58 882 8318",
  phone: "+971 58 882 8318",
  whatsappUrl: "https://wa.me/971588828318?text=Hello%20LogicHub%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.",
  coordinates: {
    lat: 25.4111,
    lng: 55.4350,
    label: "Ajman Free Zone, UAE"
  }
};

const SERVICES_DATA = [
  {
    id: "event-management",
    number: "01",
    title: "Organization & Event Management",
    shortDesc: "End-to-end planning, production, and execution for corporate summits, product launches, galas, and high-profile brand experiences across the UAE.",
    icon: `<svg class="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>`,
    category: "Events & Exhibitions",
    highlights: [
      "Corporate Conferences & Summits",
      "Product Launches & Brand Activations",
      "Gala Dinners & Award Ceremonies",
      "Audiovisual & Stage Production Coordination",
      "Venue Sourcing & Vendor Management"
    ],
    image: "assets/images/hero_bg.jpg"
  },
  {
    id: "photography",
    number: "02",
    title: "Photographic Activities",
    shortDesc: "Comprehensive commercial, corporate, architectural, and live event photography delivered with high-end optics and post-production precision.",
    icon: `<svg class="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><circle cx="12" cy="13" r="4" stroke-width="1.5"/></svg>`,
    category: "Media & Creative",
    highlights: [
      "Executive & Corporate Headshots",
      "High-Profile Event & Conference Capture",
      "Commercial & Industrial Photography",
      "Architectural & Interior Imaging",
      "Digital Asset Delivery & Color Grading"
    ],
    image: "assets/images/photography.jpg"
  },
  {
    id: "gifts-trading",
    number: "03",
    title: "Gifts Trading",
    shortDesc: "Curated corporate gifting, premium branded executive merchandise, bespoke VIP gift hampers, and tailored celebratory collections for organizations.",
    icon: `<svg class="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v13m0-13V4a2 2 0 112 2h-2zm0 0V4a2 2 0 10-2 2h2zm-7 4h14v9a2 2 0 01-2 2H7a2 2 0 01-2-2v-9z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 12H3a1 1 0 01-1-1V9a1 1 0 011-1h18a1 1 0 011 1v2a1 1 0 01-1 1h-2"/></svg>`,
    category: "Commerce & Trading",
    highlights: [
      "Bespoke Corporate Executive Gifts",
      "Branded Promotional Items & Giveaways",
      "Luxury VIP Gift Hampers & Keepsakes",
      "Event Merchandise & Delegate Kits",
      "Custom Packaging & Presentation Design"
    ],
    image: "assets/images/corporate_gifts.jpg"
  },
  {
    id: "ecommerce",
    number: "04",
    title: "E-Commerce",
    shortDesc: "Commercial digital commerce solutions, online catalog management, multi-channel retail infrastructure, and seamless transaction workflows.",
    icon: `<svg class="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"/></svg>`,
    category: "Digital Commerce",
    highlights: [
      "E-Commerce Strategy & Frameworks",
      "Digital Catalog & Inventory Coordination",
      "Online Payment Gateway Integration Advisory",
      "Digital Merchandising & Store Operations",
      "B2B & BC Digital Trade Enablement"
    ],
    image: "https://images.unsplash.com/photo-1556742049-0a67e55722c0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "hospitality",
    number: "05",
    title: "Hospitality Services",
    shortDesc: "Professional guest management, VIP concierge coordination, executive hospitality staffing, and specialized corporate reception support.",
    icon: `<svg class="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 15.5a5 5 0 01-7 0m-7 0a5 5 0 01-7 0M19 12V7a2 2 0 00-2-2H7a2 2 0 00-2 2v5m12 0a2 2 0 012 2v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1a2 2 0 012-2m14 0H5"/></svg>`,
    category: "Hospitality",
    highlights: [
      "VIP Delegate & Guest Relations",
      "Corporate Hospitality Staffing",
      "Event Protocol & Welcoming Services",
      "Banqueting & Catering Coordination",
      "Executive Concierge Logistics"
    ],
    image: "assets/images/hospitality.jpg"
  },
  {
    id: "exhibitions",
    number: "06",
    title: "Exhibitions Organization & Management",
    shortDesc: "Turnkey exhibition management, trade pavilion coordination, custom booth oversight, registration systems, and on-site exhibitor operations.",
    icon: `<svg class="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>`,
    category: "Events & Exhibitions",
    highlights: [
      "Trade Show & Expo Management",
      "Exhibitor Pavilion Coordination",
      "Stand Design & Fabrication Supervision",
      "Visitor Registration & Badge Processing",
      "On-Site Operational Protocol"
    ],
    image: "assets/images/exhibition.jpg"
  },
  {
    id: "facility-management",
    number: "07",
    title: "Facility Management",
    shortDesc: "Operational oversight, physical workspace management, service vendor coordination, and infrastructure support for corporate environments.",
    icon: `<svg class="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>`,
    category: "Corporate Support",
    highlights: [
      "Workspace Operations & Maintenance Oversight",
      "Third-Party Vendor Management",
      "Health, Safety & Environment (HSE) Compliance",
      "Space Planning & Office Upkeep",
      "Commercial Facility Coordination"
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "tourism-consulting",
    number: "08",
    title: "Tourism & Leisure Consulting",
    shortDesc: "Strategic advisory for leisure concepts, tourist itinerary planning, destination programming, and hospitality experience development across the Emirates.",
    icon: `<svg class="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
    category: "Consultancy",
    highlights: [
      "Destination Experience Consulting",
      "Corporate Leisure & Retreat Planning",
      "Cultural & Heritage Program Strategy",
      "Tourism Flow & Attraction Advisory",
      "UAE Regional Leisure Concepts"
    ],
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "logistics-consultancy",
    number: "09",
    title: "Logistics Consultancy",
    shortDesc: "Expert advisory on supply chain optimization, transportation management, inventory systems, and distribution channel strategies.",
    icon: `<svg class="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"/></svg>`,
    category: "Consultancy",
    highlights: [
      "Supply Chain Workflow Assessment",
      "Freight & Transportation Routing Advisory",
      "Warehouse & Inventory Strategy",
      "Event & Exhibition Freight Logistics Coordination",
      "Operational Cost Optimization"
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "document-support",
    number: "10",
    title: "Document Preparation & Office Support",
    shortDesc: "Accurate corporate documentation, photocopying, transcription, filing management, and specialized administrative support for business operations.",
    icon: `<svg class="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>`,
    category: "Corporate Support",
    highlights: [
      "Executive Document Formatting & Preparation",
      "High-Volume Photocopying & Printing Support",
      "Transcription & Data Compilation",
      "Corporate Filing & Administrative Workflows",
      "Specialized Back-Office Assistance"
    ],
    image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80"
  }
];

const PORTFOLIO_DATA = [
  {
    id: "project-1",
    title: "Corporate Leadership Summit",
    category: "Events",
    categorySlug: "events",
    description: "Full-scale staging, audiovisual integration, speaker coordination, and delegate management for a corporate executive forum.",
    scope: "Event Organization, AV Staging, Protocol Management",
    image: "assets/images/hero_bg.jpg",
    location: "UAE Convention Venue"
  },
  {
    id: "project-2",
    title: "Commercial Pavilion & Expo Stand",
    category: "Exhibitions",
    categorySlug: "exhibitions",
    description: "Custom modular exhibition booth supervision, interactive display elements, and on-site exhibitor management.",
    scope: "Booth Coordination, Visitor Registration, Display Logistics",
    image: "assets/images/exhibition.jpg",
    location: "UAE Exhibition Centre"
  },
  {
    id: "project-3",
    title: "Executive VIP Hospitality Suite",
    category: "Hospitality",
    categorySlug: "hospitality",
    description: "Curated guest relations, concierge welcoming protocols, and tailored hospitality management for international corporate delegations.",
    scope: "VIP Concierge, Hostess Management, Protocol Oversight",
    image: "assets/images/hospitality.jpg",
    location: "Luxury UAE Hospitality Center"
  },
  {
    id: "project-4",
    title: "Commercial & Executive Media Shoot",
    category: "Photography",
    categorySlug: "photography",
    description: "High-resolution corporate headshots, architectural facility documentation, and marketing visual library production.",
    scope: "Commercial Photography, Studio Lighting, High-Res Delivery",
    image: "assets/images/photography.jpg",
    location: "Corporate Facility & Studio"
  },
  {
    id: "project-5",
    title: "Bespoke Corporate Gifting Program",
    category: "Corporate Services",
    categorySlug: "corporate",
    description: "Concept curation, premium gift box packaging, custom branding, and distribution of executive gift hampers.",
    scope: "Gifts Trading, Brand Customization, Presentation Packaging",
    image: "assets/images/corporate_gifts.jpg",
    location: "Corporate Distribution Hub"
  },
  {
    id: "project-6",
    title: "Enterprise Logistics & Flow Advisory",
    category: "Corporate Services",
    categorySlug: "corporate",
    description: "Supply chain mapping, inventory routing strategy, and event freight coordination for multi-hub operations.",
    scope: "Logistics Consultancy, Supply Chain Strategy",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    location: "Ajman & Northern Emirates"
  },
  {
    id: "project-7",
    title: "Corporate Brand Gala & Awards",
    category: "Events",
    categorySlug: "events",
    description: "End-to-end banquet stage coordination, lighting ambiance, guest reception, and awards ceremony sequencing.",
    scope: "Event Planning, Lighting & Sound, Hospitality Protocol",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80",
    location: "Grand Ballroom, UAE"
  },
  {
    id: "project-8",
    title: "Facility Operations & Office Support Program",
    category: "Corporate Services",
    categorySlug: "corporate",
    description: "Structured back-office administration, document preparation workflows, and ongoing workspace facility management.",
    scope: "Facility Management, Document Preparation, Admin Support",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    location: "Ajman Free Zone Operations"
  }
];

const WHY_US_PILLARS = [
  {
    title: "Diverse Business Capabilities",
    desc: "Licensed across 10 strategic activities spanning events, hospitality, media, trading, e-commerce, facility management, and advisory.",
    icon: `<svg class="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>`
  },
  {
    title: "Professional Service Delivery",
    desc: "Rigorous standards of execution, clear deliverables, transparent coordination, and strict adherence to agreed project timelines.",
    icon: `<svg class="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`
  },
  {
    title: "Integrated Solutions",
    desc: "Seamless synergy across events, logistics, photography, gifting, and corporate support—providing clients with single-source convenience.",
    icon: `<svg class="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"/></svg>`
  },
  {
    title: "UAE-Based Operations",
    desc: "Strategically registered in Ajman Free Zone (License No. 57090), ideally positioned to serve clients across all seven Emirates.",
    icon: `<svg class="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`
  },
  {
    title: "Client-Focused Approach",
    desc: "Customized engagement tailored to each corporate entity's exact operational requirements, aesthetic expectations, and budget parameters.",
    icon: `<svg class="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/></svg>`
  }
];
