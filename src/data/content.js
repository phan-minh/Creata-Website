// ---------------------------------------------------------------------------
// Single source of truth for all site copy.
// Edit here to update the website — no component changes required.
// ---------------------------------------------------------------------------

export const company = {
  name: 'Creata Communications',
  legalName: 'CREATA COMMUNICATIONS COMPANY LIMITED',
  legalNameVi: 'Công Ty TNHH Truyền Thông Creata',
  slogan: 'Creating Clarity. Cultivating Confidence.',
  tagline: 'We map the market, so you can master it.',
  yearEstablished: 2026,
}

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Products', href: '#products' },
  { label: 'Meet our Founder', href: '#leadership' },
  { label: 'Contact', href: '#contact' },
]

export const about = {
  intro:
    'In a landscape overwhelmed by noise, Creata serves as your definitive signal. We are a specialized market intelligence advisory engineered to decode complex business ecosystems. At Creata, we believe that great decisions begin with meaningful insights. By fusing empirical data, technological rigor, and deep hyperlocal expertise, we transform raw metrics into strategic clarity — empowering visionary leaders to navigate uncertainty and dictate the future.',
  mission:
    'To empower organizations with trusted intelligence that transforms complexity into clarity, enabling confident decisions and sustainable growth.',
  vision:
    'To be the apex intelligence partner in the region, setting the gold standard for how data, consumer behavior, and market foresight are synthesized to shape the industries of tomorrow.',
}

// The CREATA DNA — core values (acrostic)
export const values = [
  {
    letter: 'C',
    title: 'Curiosity',
    text: 'We ask deeper questions to uncover hidden opportunities.',
  },
  {
    letter: 'R',
    title: 'Reliability',
    text: 'Trusted intelligence built on rigorous research.',
  },
  {
    letter: 'E',
    title: 'Excellence',
    text: 'Pursuing the highest standards in every engagement.',
  },
  {
    letter: 'A',
    title: 'Adaptability',
    text: 'Evolving with markets, technologies, and client needs.',
  },
  {
    letter: 'T',
    title: 'Trust',
    text: 'Building long-term relationships through transparency and integrity.',
  },
  {
    letter: 'A',
    title: 'Actionability',
    text: 'Delivering insights that lead to measurable business impact.',
  },
]

// At a glance — headline stats
export const stats = [
  { value: '2026', label: 'Founded — a new standard in advisory' },
  { value: '8+', label: 'Industry sectors covered' },
  { value: '99%', label: 'Client partnership retention' },
  { value: 'SEA', label: 'Regional footprint across Southeast Asia' },
]

export const industries = [
  {
    title: 'Consumer & Retail',
    text: 'Consumer behavior, retail intelligence, pricing, and demand analysis.',
    icon: 'retail',
  },
  {
    title: 'E-Commerce & Digital Platforms',
    text: 'Marketplace dynamics, seller performance, customer journey, and growth opportunities.',
    icon: 'ecommerce',
  },
  {
    title: 'Technology & Innovation',
    text: 'Competitive intelligence, emerging trends, product positioning, and market adoption.',
    icon: 'tech',
  },
  {
    title: 'Logistics & Mobility',
    text: 'Operational intelligence, ecosystem monitoring, and market performance analysis.',
    icon: 'logistics',
  },
  {
    title: 'Financial Services',
    text: 'Customer insights, market segmentation, and strategic opportunity assessment.',
    icon: 'finance',
  },
  {
    title: 'Healthcare & Life Sciences',
    text: 'Market potential, stakeholder insights, and industry landscape research.',
    icon: 'health',
  },
  {
    title: 'Food & Beverage',
    text: 'Brand perception, customer preferences, and competitive benchmarking.',
    icon: 'food',
  },
  {
    title: 'Industrial & Manufacturing',
    text: 'Supply chain intelligence, distributor landscape, and market expansion analysis.',
    icon: 'industry',
  },
]

export const services = [
  {
    title: 'Market Entry Intelligence',
    text: 'Supporting international companies in evaluating market readiness and expansion opportunities across Southeast Asia.',
  },
  {
    title: 'Competitive Benchmarking',
    text: "Delivering continuous intelligence on competitors' commercial strategies, operational performance, and innovation initiatives.",
  },
  {
    title: 'Consumer Decision Journey Research',
    text: 'Identifying behavioral patterns that improve customer acquisition, retention, and lifetime value.',
  },
  {
    title: 'Brand Health Measurement',
    text: 'Providing ongoing assessment of brand equity, customer perception, and competitive positioning.',
  },
  {
    title: 'Industry Intelligence Programs',
    text: 'Developing long-term monitoring frameworks that enable organizations to anticipate market change.',
  },
]

export const products = [
  {
    title: 'Executive Advisory Briefs',
    text: 'Curated strategic intelligence designed to support high-impact executive decision making.',
  },
  {
    title: 'Sector Horizon Outlooks',
    text: 'Authoritative market analysis uncovering future trends, competitive shifts, and latent opportunities.',
  },
  {
    title: 'Market Dynamics Dashboard',
    text: 'An integrated analytics platform providing continuous ecosystem visibility and business insights.',
  },
  {
    title: 'Strategic Intelligence Programs',
    text: "End-to-end research engagements tailored to each organization's strategic ambitions and evolving competitive realities.",
  },
]

// Signature engagements / case studies
export const projects = [
  {
    kicker: 'Ride-Hailing',
    title: 'The New Rules of Customer Loyalty',
    text: 'Examining evolving customer expectations, engagement patterns, and competitive dynamics to strengthen long-term loyalty in the ride-hailing industry.',
  },
  {
    kicker: 'Quick Commerce',
    title: 'The Future of On-Demand Commerce',
    text: 'Exploring the evolving behaviors, market shifts, and emerging opportunities shaping the next generation of quick commerce.',
  },
  {
    kicker: 'FMCG',
    title: 'Unlocking Premium Market Potential',
    text: 'Evaluating strategic moats, consumer friction, and market entry dynamics to successfully penetrate the high-margin prestige segment.',
  },
]

export const leadership = {
  name: 'Pham My Linh',
  alias: 'Alese',
  role: 'Founder & Principal Advisor',
  // Founder portrait — file lives in /public. Falls back to initials if missing.
  photo: '/founder.jpg',
  bio: "A high-impact Strategic Intelligence and Platform Growth Leader with over 16 years of expertise translating complex market data into decisive commercial triumphs. At GHN Express — Vietnam's leading e-logistics provider — she weaponized marketplace insights to orchestrate a nationwide brand repositioning that secured the #1 position in Share of Voice, captured 27% SME market share, and anchored the industry's highest retention rate within the highest-value merchant segment.",
  bioExtended:
    "A proven platform architect, she pioneered the strategic corporate collaboration between GHN and Ahamove to launch same-day delivery, and previously steered platform dynamics as Head of Operations at Be Group. At PNJ Group, she leveraged CRM analytics from 1.8M+ premium consumers to accelerate both retention and new-user acquisition for PNJ Watch. Grounded in Nielsen's rigorous multi-market research pedigree, she delivers the brand-health mastery and predictive intelligence that fuel ecosystem-scale growth.",
  highlights: [
    { value: '16+', label: 'Years of expertise' },
    { value: '#1', label: 'Share of Voice secured at GHN' },
    { value: '27%', label: 'SME market share captured' },
    { value: '1.8M+', label: 'Premium consumers analyzed at PNJ' },
  ],
}

export const clients = {
  title: 'Trusted by Industry Leaders',
  subtitle: 'Powering the decisions of those who shape the market.',
  // Placeholder logos — replace names/logos when provided by the client.
  logos: ['GHN Express', 'Be Group', 'PNJ Group', 'Ahamove', 'Nielsen'],
}

export const process = {
  title: 'How We Work',
  subtitle: 'A disciplined path from raw signal to decisive action.',
  steps: [
    {
      no: '01',
      title: 'Frame',
      text: 'We align on the strategic question, defining the decisions your intelligence must inform.',
    },
    {
      no: '02',
      title: 'Gather',
      text: 'We fuse empirical data, field research, and hyperlocal expertise across the ecosystem.',
    },
    {
      no: '03',
      title: 'Synthesize',
      text: 'We apply technological rigor to transform raw metrics into clear, defensible insight.',
    },
    {
      no: '04',
      title: 'Activate',
      text: 'We deliver actionable recommendations and monitoring frameworks that drive measurable impact.',
    },
  ],
}

export const contact = {
  address:
    'Floor 12 — Tower A2, Viettel Building, 285 Cach Mang Thang Tam, Hoa Hung Ward, District 10, Ho Chi Minh City, Vietnam.',
  emails: ['connect@creata-lab.com'],
  phone: '',
  // Google Maps embed for the Viettel Building address above.
  mapQuery: '285 Cách Mạng Tháng Tám, Phường Hòa Hưng, Quận 10, Hồ Chí Minh',
  social: {
    facebook: '',
    zalo: '',
    linkedin: '',
  },
}
