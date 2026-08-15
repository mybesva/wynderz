export const company = {
  name: "WYNDERZ Pvt. Ltd.",
  shortName: "WYNDERZ",
  legalName: "WYNDERZ Pvt. Ltd.",
  tagline: "Filament Winding Machines and Accessories",
  description:
    "WYNDERZ is a leading manufacturer of advanced Filament Winding Machines and high-performance accessories, delivering reliable and innovative solutions for modern composite manufacturing.",
  about:
    "Established in the year of 2013. We “WYNDERZ Pvt. Ltd.” are a leading Manufacturer, Trader, Distributor and Wholesaler of a wide range of Filament Winder And Hydraulic Extractor etc.",
  aboutExtended:
    "We direct all our activities to cater the expectations of customers by providing them excellent quality products as per their gratification. Moreover, we follow moral business policies and crystal pure transparency in all our transactions to keep healthy relations with the customers.",
  phone: "+91 96765 43322",
  phoneHref: "tel:+919676543322",
  address:
    "Plot No: 32 & 33A, SVCIE, Bachupally, Hyderabad, Telangana 500118, India",
  city: "Bachupally, Hyderabad, Telangana",
  mapsUrl:
    "https://www.google.com/maps/place/WYNDERZ/@17.5361969,78.3522576,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb8d002f2e3309:0x5831a93f630c18e0!8m2!3d17.5361969!4d78.3522576",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.5!2d78.3496827!3d17.5361969!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8d002f2e3309%3A0x5831a93f630c18e0!2sWYNDERZ!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin",
  mapsShortUrl: "https://maps.app.goo.gl/FTqxFxgy6NgYh7baA",
  plusCode: "G9P2+FW Hyderabad, Telangana",
  businessHours: [
    { day: "Monday", hours: "10:00 am – 6:30 pm" },
    { day: "Tuesday", hours: "10:00 am – 6:30 pm" },
    { day: "Wednesday", hours: "10:00 am – 6:30 pm" },
    { day: "Thursday", hours: "10:00 am – 6:30 pm" },
    { day: "Friday", hours: "10:00 am – 6:30 pm" },
    { day: "Saturday", hours: "10:00 am – 6:30 pm" },
    { day: "Sunday", hours: "Closed" },
  ],
  hoursSummary: "Mon–Sat 10:00 am – 6:30 pm · Sunday Closed",
  gst: "36ANLPK8378F1ZH",
  iec: "0912015667",
  established: "2013",
  natureOfBusiness: "Trader - Wholesaler/Distributor",
  additionalBusiness: "Factory / Manufacturing",
  employees: "11 to 25 People",
  legalStatus: "Private Limited",
  annualTurnover: "40 L - 1.5 Cr",
  gstRegistrationDate: "01-07-2017",
  existingSite: "https://www.wynderz.in/",
  enquiryUrl: "https://www.wynderz.in/enquiry.html",
  logo: "/images/brand/logo.png",
  favicon: "/images/brand/favicon.ico",
} as const;

/** Landing hero backgrounds — enterprise facility photography */
export const heroSlides = [
  {
    id: "hero-4",
    name: "Composite cylinder filament winding",
    image: "/images/hero/hero-4.png",
  },
  {
    id: "hero-5",
    name: "CNC filament winding production line",
    image: "/images/hero/hero-5.png",
  },
] as const;

/** Paste live profile URLs when ready — empty href keeps the icon visible without redirect. */
export const socialLinks = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/919676543322?text=Hello%20Wynderz%2C%20I%20would%20like%20to%20enquire%20about%20filament%20winding%20machines.",
  },
  { id: "youtube", label: "YouTube", href: "https://www.youtube.com/@wynderz2157" },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/wynderz/" },
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/wynderzindia/" },
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com/wynderz" },
  { id: "twitter", label: "Twitter", href: "https://x.com/wynderzindia" },
] as const;

export const contactPerson = {
  name: "Pavan Kumar Kulkarni",
  title: "CEO",
  about:
    "Pavan Kumar Kulkarni is the Visionary Founder & CEO of WYNDERZ a world class Machine Manufacturing Company specialising in CNC Filament Winding Machines & its Accessories and providing cutting edge solutions to the Composite Industry. With a Proven track record of over 25 years of Experience in Machine Manufacturing Industry Pavan Kumar has been instrumental in driving company's growth and Innovation.",
} as const;

export type NavIcon =
  | "home"
  | "machines"
  | "trust"
  | "company"
  | "leadership"
  | "credentials"
  | "gallery"
  | "images"
  | "videos"
  | "winding"
  | "pipe"
  | "spindle"
  | "composite"
  | "cnc"
  | "range"
  | "factory"
  | "handshake"
  | "quote"
  | "map"
  | "phone";

export type NavDropdownItem = {
  label: string;
  href: string;
  description: string;
  icon: NavIcon;
};

export type NavLink = {
  label: string;
  href: string;
  /** Always present — empty arrays still open a dropdown panel */
  items: readonly NavDropdownItem[];
  /** Products: Gallery → Images / Videos nested headlines */
  gallery?: boolean;
  footerLabel?: string;
};

export const navLinks: readonly NavLink[] = [
  {
    label: "Home",
    href: "/#home",
    footerLabel: "Go to home",
    items: [
      {
        label: "Overview",
        href: "/#home",
        description: "Company snapshot and filament winding focus",
        icon: "home",
      },
      {
        label: "Featured machines",
        href: "/#carousel",
        description: "Highlighted CNC winding systems from the catalogue",
        icon: "machines",
      },
      {
        label: "Trust highlights",
        href: "/#home",
        description: "Established year, GST, IEC and team size",
        icon: "trust",
      },
    ],
  },
  {
    label: "About Us",
    href: "/about",
    footerLabel: "About WYNDERZ",
    items: [
      {
        label: "Company profile",
        href: "/about",
        description: "Manufacturer, trader and distributor since 2013",
        icon: "company",
      },
      {
        label: "Leadership",
        href: "/about#leadership",
        description: "Vision and experience guiding Wynderz",
        icon: "leadership",
      },
      {
        label: "Credentials",
        href: "/about#credentials",
        description: "GST, IEC and registered business details",
        icon: "credentials",
      },
    ],
  },
  {
    label: "Products",
    href: "/products",
    gallery: true,
    footerLabel: "All products",
    items: [
      {
        label: "Gallery",
        href: "/products",
        description: "Browse product images and machine videos",
        icon: "gallery",
      },
    ],
  },
  {
    label: "Applications",
    href: "/#applications",
    footerLabel: "All applications",
    items: [
      {
        label: "Filament winding",
        href: "/#applications",
        description: "CNC winding machines and accessories",
        icon: "winding",
      },
      {
        label: "FRP pipe production",
        href: "/#applications",
        description: "Pipe and FRP filament winding systems",
        icon: "pipe",
      },
      {
        label: "Multi-spindle production",
        href: "/#applications",
        description: "3-spindle and multi-spindle configurations",
        icon: "spindle",
      },
      {
        label: "Composite industry",
        href: "/#applications",
        description: "Solutions for composite manufacturing needs",
        icon: "composite",
      },
    ],
  },
  {
    label: "Our Capabilities",
    href: "/#capabilities",
    footerLabel: "View capabilities",
    items: [
      {
        label: "CNC filament winding",
        href: "/#capabilities",
        description: "Specialised CNC winding machines and accessories",
        icon: "cnc",
      },
      {
        label: "Product range",
        href: "/#capabilities",
        description: "Winders, multi-spindle systems and extractors",
        icon: "range",
      },
      {
        label: "Manufacturing",
        href: "/#capabilities",
        description: "Factory and manufacturing capability in Hyderabad",
        icon: "factory",
      },
      {
        label: "Engagement",
        href: "/#capabilities",
        description: "Transparent policies and long-term customer relations",
        icon: "handshake",
      },
    ],
  },
  {
    label: "Contact",
    href: "/#contact",
    footerLabel: "Contact us",
    items: [
      {
        label: "Request a quotation",
        href: "/#contact",
        description: "Send company details and technical requirements",
        icon: "quote",
      },
      {
        label: "Location & map",
        href: "/#contact",
        description: "Bachupally, Hyderabad facility and directions",
        icon: "map",
      },
      {
        label: "Call sales",
        href: "tel:+919676543322",
        description: "Speak directly with the Wynderz sales team",
        icon: "phone",
      },
    ],
  },
] as const;

export const galleryNavItems: readonly NavDropdownItem[] = [
  {
    label: "Images",
    href: "/products",
    description: "Machine photos and catalogue visuals",
    icon: "images",
  },
  {
    label: "Videos",
    href: "/products",
    description: "Process and product demonstration videos",
    icon: "videos",
  },
] as const;

export type Product = {
  id: string;
  name: string;
  category: string;
  image: string;
  sourceUrl: string;
  href: string;
  summary: string;
};

/** Homepage carousel — 8 real Wynderz catalogue images */
export const carouselProducts: Product[] = [
  {
    id: "4-axis-5-spindle",
    name: "4 Axis, 5-Spindle CNC Filament Winding Machine",
    category: "5 Spindle Winding Machine",
    image: "/images/products/4-axis-5-spindle-filament-winding-machine.png",
    sourceUrl:
      "https://www.wynderz.in/5-spindle-winding-machine.html#4-axis-5-spindle-cnc-filament-winding-machine",
    href: "/products/4-axis-5-spindle",
    summary:
      "Five-spindle CNC filament winding machine from the Wynderz 5 Spindle Winding Machine range.",
  },
  {
    id: "cnc-filament",
    name: "Cnc Filament Winding Machine",
    category: "Filament Winder",
    image: "/images/products/cnc-filament-winding-machine.jpg",
    sourceUrl:
      "https://www.wynderz.in/filament-winder.html#cnc-filament-winding-machine",
    href: "/products/cnc-filament",
    summary: "CNC filament winding machine offered in the Filament Winder range.",
  },
  {
    id: "4-axis-2-spindle",
    name: "4 Axis Filament Winding Machine - 2Spindle",
    category: "Winding Machine",
    image: "/images/products/4-axis-filament-winding-machine-2-spindle.jpeg",
    sourceUrl:
      "https://www.wynderz.in/winding-machine.html#4-axis-filament-winding-machine-2spindle",
    href: "/products/4-axis-2-spindle",
    summary: "4-axis, 2-spindle filament winding machine from the Winding Machine range.",
  },
  {
    id: "cnc-3-spindle",
    name: "Cnc Filament Winding Machine 3 Spindle",
    category: "Multi Spindle Winding Machine",
    image: "/images/products/cnc-filament-winding-machine-3-spindle.jpeg",
    sourceUrl:
      "https://www.wynderz.in/multi-spindle-winding-machine.html#cnc-filament-winding-machine-3-spindle",
    href: "/products/cnc-3-spindle",
    summary: "Three-spindle CNC filament winding machine for multi-spindle production.",
  },
  {
    id: "pipe-winding",
    name: "Filament Winding Machines for Pipe",
    category: "Winding Machine",
    image: "/images/products/filament-winding-machines-for-pipe.jpg",
    sourceUrl:
      "https://www.wynderz.in/winding-machine.html#filament-winding-machines-for-pipe",
    href: "/products/pipe-winding",
    summary: "Filament winding machines for pipe applications from the Wynderz catalogue.",
  },
  {
    id: "frp-pipe",
    name: "FRP Pipe Filament Winding Machines",
    category: "Hydraulic Extractor",
    image: "/images/products/frp-pipe-filament-winding-machines.jpg",
    sourceUrl:
      "https://www.wynderz.in/hydraulic-extractor.html#frp-pipe-filament-winding-machines",
    href: "/products/frp-pipe",
    summary: "FRP pipe filament winding machines listed under the Wynderz product range.",
  },
  {
    id: "3-spindle-cnc",
    name: "3 Spindle Cnc Filament Winding Machine",
    category: "Filament Winder",
    image: "/images/products/3-spindle-cnc-filament-winding-machine.jpeg",
    sourceUrl:
      "https://www.wynderz.in/filament-winder.html#3-spindle-cnc-filament-winding-machine",
    href: "/products/3-spindle-cnc",
    summary: "3-spindle CNC filament winding machine from the Filament Winder range.",
  },
  {
    id: "hydraulic-extractor",
    name: "Hydraulic Extractor",
    category: "Hydraulic Extractor",
    image: "/images/products/hydraulic-extractor.jpg",
    sourceUrl: "https://www.wynderz.in/hydraulic-extractor.html",
    href: "/products/hydraulic-extractor",
    summary: "Hydraulic extractor from the Wynderz accessories and machinery range.",
  },
];

export const allProducts: Product[] = [
  ...carouselProducts,
  {
    id: "4-axis-2-spindle-hydraulic",
    name: "4 Axis Filament Winding Machine 2 Spindle",
    category: "Hydraulic Extractor",
    image: "/images/products/4-axis-filament-winding-machine.png",
    sourceUrl:
      "https://www.wynderz.in/hydraulic-extractor.html#4-axis-filament-winding-machine-2-spindle",
    href: "/products/4-axis-2-spindle-hydraulic",
    summary: "4-axis filament winding machine (2 spindle) listed with Hydraulic Extractor range.",
  },
  {
    id: "cnc-3-spindle-alt",
    name: "Cnc Filament Winding Machine - 3 Spindle",
    category: "Multi Spindle Winding Machine",
    image: "/images/products/cnc-filament-winding-machine-3-spindle-alt.jpg",
    sourceUrl:
      "https://www.wynderz.in/multi-spindle-winding-machine.html#cnc-filament-winding-machine-3-spindle",
    href: "/products/cnc-3-spindle-alt",
    summary: "CNC filament winding machine — 3 spindle configuration.",
  },
];

/** Keep alias for older imports */
export const featuredProducts = carouselProducts;

export const productCategories = [
  {
    id: "winding-machine",
    name: "Winding Machine",
    href: "https://www.wynderz.in/winding-machine.html",
    items: [
      "4 Axis Filament Winding Machine - 2Spindle",
      "4-Axis, 2-Spindle CNC Filament Winding Machine",
      "Filament Winding Machines for Pipe",
    ],
    image: "/images/products/4-axis-filament-winding-machine-2-spindle.jpeg",
    summary: "4-axis and pipe filament winding machines.",
  },
  {
    id: "filament-winder",
    name: "Filament Winder",
    href: "https://www.wynderz.in/filament-winder.html",
    items: [
      "Cnc Filament Winding Machine",
      "3 Spindle Cnc Filament Winding Machine",
      "Frp Filament Winding Machine",
    ],
    image: "/images/products/cnc-filament-winding-machine.jpg",
    summary: "CNC and FRP filament winders.",
  },
  {
    id: "multi-spindle",
    name: "Multi Spindle Winding Machine",
    href: "https://www.wynderz.in/multi-spindle-winding-machine.html",
    items: [
      "Cnc Filament Winding Machine 3 Spindle",
      "Cnc Filament Winding Machine - 3 Spindle",
    ],
    image: "/images/products/3-spindle-cnc-filament-winding-machine.jpeg",
    summary: "Multi-spindle CNC winding systems.",
  },
  {
    id: "hydraulic-extractor",
    name: "Hydraulic Extractor",
    href: "https://www.wynderz.in/hydraulic-extractor.html",
    items: [
      "4 Axis Filament Winding Machine 2 Spindle",
      "FRP Pipe Filament Winding Machines",
    ],
    image: "/images/products/hydraulic-extractor.jpg",
    summary: "Hydraulic extractors and related equipment.",
  },
  {
    id: "5-spindle",
    name: "5 Spindle Winding Machine",
    href: "https://www.wynderz.in/5-spindle-winding-machine.html",
    items: ["4 Axis, 5-Spindle CNC Filament Winding Machine"],
    image: "/images/products/4-axis-5-spindle-filament-winding-machine.png",
    summary: "5-spindle CNC filament winding machines.",
  },
] as const;

/** Applications supported by wynderz.in product naming and company copy */
export const applications = [
  {
    title: "Filament Winding",
    description:
      "CNC filament winding machines and accessories for winding operations.",
  },
  {
    title: "FRP Pipe Production",
    description:
      "FRP pipe filament winding machines and filament winding machines for pipe.",
  },
  {
    title: "Multi-Spindle Production",
    description:
      "Multi-spindle and 3-spindle CNC filament winding machine configurations.",
  },
  {
    title: "Composite Industry",
    description:
      "Solutions for the composite industry through CNC filament winding machines and accessories.",
  },
] as const;

/** Value points grounded in published Wynderz content only */
export const whyWynderz = [
  {
    title: "CNC filament winding focus",
    description:
      "Specialising in CNC Filament Winding Machines and accessories for industrial use.",
  },
  {
    title: "Broad product range",
    description:
      "Winding machines, filament winders, multi-spindle systems, hydraulic extractors, and 5-spindle machines.",
  },
  {
    title: "Manufacturing capability",
    description:
      "Nature of business includes Trader — Wholesaler/Distributor with additional Factory / Manufacturing.",
  },
  {
    title: "Transparent engagement",
    description:
      "Moral business policies and transparency in transactions to keep healthy relations with customers.",
  },
] as const;

export const trustHighlights = [
  { label: "Established", value: company.established },
  { label: "Employees", value: "11–25" },
  { label: "GST No.", value: company.gst },
  { label: "IEC", value: company.iec },
] as const;

export const galleryImages = [
  {
    id: "multi-spindle-facility",
    src: "/images/gallery/multi-spindle-winding-machine.png",
    alt: "Multi-spindle CNC filament winding machine",
    href: "/products",
  },
  {
    id: "cnc-winding-head",
    src: "/images/gallery/cnc-winding-head-detail.png",
    alt: "CNC filament winding head and carriage detail",
    href: "/products",
  },
  ...carouselProducts.map((product) => ({
    id: product.id,
    src: product.image,
    alt: product.name,
    href: product.href,
  })),
];

export const productVideos = [
  { title: "Cnc Filament Winding Machine", youtubeId: "fwjbMVpPW-I" },
  { title: "3 Spindle Cnc Filament Winding Machine", youtubeId: "-0DUncqRR44" },
  { title: "Cnc Filament Winding Machine - 3 Spindle", youtubeId: "yLmzhOFsS-M" },
  { title: "4 Axis Filament Winding Machine 2 Spindle", youtubeId: "99FdM6WcMTU" },
  { title: "FRP Pipe Filament Winding Machines", youtubeId: "WrFkWV6kZCk" },
] as const;

export function getProductById(id: string) {
  return allProducts.find((product) => product.id === id);
}
