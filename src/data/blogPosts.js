export const blogPosts = [
  {
    slug: "sector-150-early-movers-win",
    img: "/img/projects/1.png",
    date: "April 2026",
    author: "BookMyAcre Team",
    tags: ["noida land", "sector 150", "investment"],
    title: "Sector 150: Why early movers win on social infrastructure",
    excerpt:
      "Metro-ready corridors, green belts, and verified paperwork make this pocket the most future-proof bet in Noida.",
    body: [
      {
        type: "p",
        text: "Sector 150 is fast becoming a preferred address for land buyers who want both strong infrastructure and long-term value growth. The new expressways, planned metro corridors, and established educational hubs are drawing investors who want certainty and scale.",
      },
      {
        type: "quote",
        text: "Early movers in Sector 150 capture the best plots, the strongest connectivity, and the highest resale appeal.",
      },
      {
        type: "gallery",
        images: [
          { src: "/img/blog/1-760x514.jpg", alt: "Sector 150 land parcel" },
          { src: "/img/projects/1.png", alt: "Noida project development" },
        ],
      },
      {
        type: "p",
        text: "These buyers are not chasing cheap land; they are prioritising legal clarity, planned neighbourhoods, and a strong ecosystem. With schools, hospitals, and retail already in the pipeline, this micro-market is set up for sustainable demand.",
      },
    ],
    recentPosts: [1, 2],
  },
  {
    slug: "title-checks-for-smooth-registrations",
    img: "/img/projects/2.png",
    date: "March 2026",
    author: "BookMyAcre Team",
    tags: ["title checks", "registration", "documents"],
    title: "Title checks that keep registrations smooth",
    excerpt:
      "Our 9-point checklist on Khatauni, mutation, and approach roads helps land buyers avoid costly delays in Noida.",
    body: [
      {
        type: "p",
        text: "A clean title is the single most important factor when buying land in Noida. From Khatauni records to mutation status and access permissions, every paper trail must be verified before you sign.",
      },
      {
        type: "quote",
        text: "Sellers may promise a smooth handover, but only a documented title review secures your investment.",
      },
      {
        type: "gallery",
        images: [
          { src: "/img/blog/2-760x514.jpg", alt: "Title verification process" },
          { src: "/img/projects/2.png", alt: "Noida site survey" },
          {
            src: "/img/projects/3.png",
            alt: "Legal documents for land purchase",
          },
        ],
      },
      {
        type: "p",
        text: "The best approach is to engage experts early, compare land records with registry entries, and verify that the plot has clear access. That way, your registration can proceed quickly and without unexpected objections.",
      },
    ],
    recentPosts: [0, 2],
  },
  {
    slug: "how-expressways-reshape-land-values",
    img: "/img/projects/3.png",
    date: "February 2026",
    author: "BookMyAcre Team",
    tags: ["expressways", "land values", "Noida"],
    title: "How new expressways reshape land values",
    excerpt:
      "Learn how upcoming connectors shift demand pockets and what to watch before you block a plot.",
    body: [
      {
        type: "p",
        text: "New expressways are not just roads; they are value corridors. In Noida, each new connector changes the preferred direction of demand, making some land parcels far more attractive overnight.",
      },
      {
        type: "quote",
        text: "Location is fixed, but connectivity can turn a hidden parcel into a high-demand address.",
      },
      {
        type: "gallery",
        images: [
          {
            src: "/img/blog/3-760x514.jpg",
            alt: "Noida expressway development",
          },
          { src: "/img/projects/4.png", alt: "Land parcel near highway" },
        ],
      },
      {
        type: "p",
        text: "If you are buying land today, map the proposed transport network and choose plots that are poised to benefit from the next wave of infrastructure. This is the key factor that separates speculative purchases from smart investments.",
      },
    ],
    recentPosts: [0, 1],
  },
];

export function getPostBySlug(slug) {
  return blogPosts.find((p) => p.slug === slug) || null;
}
