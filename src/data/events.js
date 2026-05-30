export const EVENT_TYPES = {
  // "sales-marketing": "Sales & Marketing Events",
  // "corporate-industry": "Corporate & Industry Events",
  // "community-client": "Community & Client Relations Events",
  // "construction-milestone": "Project Construction Milestones",

  "investors": "Inverstors Event",
  "channel-partners": "Channel Partners Event",
};

export const PLATFORM_LABELS = {
  onsite: "On-site",
  Register: "Register Now",
  instagram: "Instagram",
  youtube: "YouTube",
  linkedin: "LinkedIn",
  facebook: "Facebook",
};

export const events = [
  {
    slug: "BookMyAcre-Jammu-Event-Info",
    type: "channel-partners",
    platform: "Register",
    date: "2026-05-31",
    dateLabel: "31 May 2026",
    location: "Jammu",
    title: "Property Buyers Meet in Jammu",
    excerpt:
      "Join us for a property buyers meet in Jammu, where you can explore premium farmhouse plots with verified titles.",
    cover: "/img/events/event1.jpeg",
    highlight: true,
    featured: true,
    gallery: [
      { src: "/img/projects/1.png", alt: "Veda Farms site entrance" },
      { src: "/img/blog/1-760x514.jpg", alt: "Investors on site walkthrough" },
      { src: "/img/projects/neo_farms.png", alt: "Plot layout overview" },
    ],
    body: [
      "BookMyAcre is bringing an exclusive Property Buyer Meet in Jammu on 31st May 2026 at Zone By The Park, Jammu.",
      "Explore premium investment opportunities across Noida, Greater Noida & Dholera Smart City with expert guidance, future growth insights & high appreciation projects.",
      "This event is specially designed for investors, channel partners & property buyers looking for smart real estate opportunities in India’s fastest-growing investment corridors.",
    ],
    externalUrl:
      "/gwen.html",
    tags: ["bookmyacre", "jammu", "property buyers meet", "event"],
  },
  {
    slug: "BookMyAcre-Veda-Event-Info",
    type: "channel-partners",
    platform: "Register",
    date: "--",
    dateLabel: "upcoming",
    location: "Tech Zone, Greater Noida",
    title: "Channel Partner - Event At Veda",
    excerpt:
      "Give Your Partners The Opportunity To Connect, Grow & Explore Premium Real Estate Opportunities.",
    cover: "/img/events/event2.jpeg",
    highlight: true,
    featured: false,
    gallery: [
      { src: "/img/projects/8.png", alt: "Sector 150 project overview" },
      { src: "/img/projects/7.png", alt: "Expressway connectivity briefing" },
      { src: "/img/blog/1-760x514.jpg", alt: "Investor consultation desk" },
    ],
    body: [
      "BookMyAcre hosted an Open Plot Day for Sector 150, one of Noida's fastest-appreciating corridors.",
      "Attendees received personalised investment briefings, connectivity maps, and end-to-end documentation guidance from our advisory team.",
    ],
    externalUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSddKidHWeEU5lohhKGNuKc16RH_VEEOLFlYSRDIzmnjylK2VA/viewform",
    tags: ["Greater Noida", "Event", "BookMyAcre", "Real Estate"],
  },
  {
    slug: "noida-property-expo-2026",
    type: "corporate-industry",
    platform: "onsite",
    date: "2026-03-15",
    dateLabel: "15 March 2026",
    location: "Greater Noida",
    title: "Noida Property Expo 2026",
    excerpt:
      "Our team showcased verified land parcels and connected with 200+ prospective investors at the expo.",
    cover: "/img/projects/4.png",
    highlight: true,
    featured: false,
    gallery: [
      { src: "/img/projects/4.png", alt: "BookMyAcre expo stall" },
      { src: "/img/projects/5.png", alt: "Investor conversations at expo" },
      { src: "/img/projects/6.png", alt: "Project display boards" },
      { src: "/img/blog/2-760x514.jpg", alt: "Expo floor overview" },
    ],
    body: [
      "BookMyAcre participated in the Noida Property Expo 2026, presenting a curated portfolio of farmland, plotted developments, and investment corridors.",
      "Visitors received free title-check consultations and site visit scheduling on the spot.",
    ],
    tags: ["expo", "greater noida", "investment"],
  },
  {
    slug: "jewar-corridor-reel",
    type: "sales-marketing",
    platform: "instagram",
    date: "2026-05-02",
    dateLabel: "2 May 2026",
    location: "Jewar",
    title: "Jewar corridor growth — Instagram reel",
    excerpt:
      "A quick aerial-style look at why Jewar-linked land parcels are drawing investor attention.",
    cover: "/img/projects/3.png",
    highlight: true,
    featured: false,
    gallery: [
      { src: "/img/projects/3.png", alt: "Jewar corridor development" },
      { src: "/img/blog/3-760x514.jpg", alt: "Infrastructure growth map" },
    ],
    body: [
      "Our latest Instagram reel breaks down the Jewar corridor opportunity — connectivity upgrades, airport influence zones, and what buyers should verify before investing.",
    ],
    externalUrl: "https://www.instagram.com/bookmyacreofficial/",
    tags: ["jewar", "instagram", "reel"],
  },
  {
    slug: "2000-investors-milestone",
    type: "community-client",
    platform: "linkedin",
    date: "2026-02-01",
    dateLabel: "1 February 2026",
    location: "Delhi NCR",
    title: "2000+ happy investors milestone",
    excerpt:
      "Celebrating a growing community of land investors who trust BookMyAcre for transparent transactions.",
    cover: "/img/projects/2.png",
    highlight: true,
    featured: false,
    gallery: [
      { src: "/img/projects/2.png", alt: "Team celebration" },
      { src: "/img/final-icons/14.png", alt: "2000 investors milestone badge" },
    ],
    body: [
      "We crossed 2000+ satisfied investors — a milestone built on verified land parcels, clear documentation, and dedicated post-sale support.",
      "Thank you to every client who made this journey possible.",
    ],
    externalUrl: "https://in.linkedin.com/company/bookmyacreofficial",
    tags: ["milestone", "community", "trust"],
  },
  {
    slug: "ace-hive-site-visit",
    type: "community-client",
    platform: "onsite",
    date: "2026-01-18",
    dateLabel: "18 January 2026",
    location: "Greater Noida",
    title: "Guided tour — ACE Hive",
    excerpt:
      "Weekend site visit with live Q&A on registry, mutation, and resale potential.",
    cover: "/img/projects/2.png",
    highlight: false,
    featured: false,
    gallery: [
      { src: "/img/projects/2.png", alt: "ACE Hive project site" },
      { src: "/img/projects/6.png", alt: "Plot walkthrough" },
    ],
    body: [
      "Investors explored ACE Hive with our documentation experts, reviewing layout plans, connectivity, and registration readiness for each shortlisted parcel.",
    ],
    tags: ["ace hive", "site visit"],
  },
  {
    slug: "dholera-velotech-preview",
    type: "construction-milestone",
    platform: "youtube",
    date: "2025-12-08",
    dateLabel: "8 December 2025",
    location: "Dholera",
    title: "Velotech City — Dholera preview",
    excerpt:
      "Launch preview of a strategic Dholera IST corridor project with long-term growth potential.",
    cover: "/img/projects/3.png",
    highlight: false,
    featured: false,
    gallery: [
      { src: "/img/projects/3.png", alt: "Velotech City master plan" },
      { src: "/img/blog/3-760x514.jpg", alt: "Dholera corridor context" },
    ],
    body: [
      "Our Dholera launch preview introduced investors to Velotech City — covering master plan zones, infrastructure pipeline, and entry pricing for early movers.",
    ],
    externalUrl: "https://velotechcity.com/",
    tags: ["dholera", "velotech", "launch"],
  },
  {
    slug: "registry-day-success-stories",
    type: "community-client",
    platform: "facebook",
    date: "2025-11-20",
    dateLabel: "20 November 2025",
    location: "Noida",
    title: "Registry day — client success stories",
    excerpt:
      "Photos from a smooth registration day with clients who completed their land purchase journey with us.",
    cover: "/img/blog/2-760x514.jpg",
    highlight: false,
    featured: false,
    gallery: [
      { src: "/img/blog/2-760x514.jpg", alt: "Registry day celebration" },
      { src: "/img/projects/1.png", alt: "Client handover moment" },
    ],
    body: [
      "Another successful registry day in Noida — clients completed their documentation with full transparency and expert hand-holding throughout the process.",
    ],
    externalUrl: "https://www.facebook.com/bookmyacreofficial/",
    tags: ["registry", "clients", "success"],
  },
];

export const socialLinks = [
  {
    platform: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/bookmyacreofficial/",
    icon: "fab fa-instagram",
  },
  {
    platform: "linkedin",
    label: "LinkedIn",
    href: "https://in.linkedin.com/company/bookmyacreofficial",
    icon: "fab fa-linkedin-in",
  },
  {
    platform: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/bookmyacreofficial/",
    icon: "fab fa-facebook-f",
  },
];

export function getEventBySlug(slug) {
  return events.find((e) => e.slug === slug) || null;
}

export function getHighlightEvents() {
  return events.filter((e) => e.highlight);
}

export function getFeaturedEvent() {
  return events.find((e) => e.featured) || events[0] || null;
}

export function getRelatedEvents(currentSlug, limit = 3) {
  const current = getEventBySlug(currentSlug);
  if (!current) return events.slice(0, limit);
  return events
    .filter((e) => e.slug !== currentSlug && e.type === current.type)
    .slice(0, limit);
}
