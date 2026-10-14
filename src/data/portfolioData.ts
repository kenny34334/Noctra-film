export interface Project {
  id: string;
  client: string;
  title: string;
  category: 'short-form' | 'creator-ugc' | 'paid-performance' | 'brand-relaunch';
  categoryLabel: string;
  year: string;
  image: string;
  tagline: string;
  metrics: {
    label: string;
    value: string;
    subtext: string;
  }[];
  challenge: string;
  strategy: string;
  deliverables: string[];
  platforms: string[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'kura-streetwear',
    client: 'KURA Streetwear',
    title: 'Urban Revival SS26 Viral Launch',
    category: 'short-form',
    categoryLabel: 'Short-Form & Culture Drop',
    year: '2026',
    image: '/src/assets/images/campaign_fashion_1792011268418.jpg',
    tagline: 'High-tempo streetwear drop powered by sound-trend choreography and underground street dance communities.',
    metrics: [
      { label: 'Organic Views', value: '18.4M', subtext: 'Across TikTok & Reels' },
      { label: 'DTC Sales Lift', value: '+310%', subtext: 'First 14 days of drop' },
      { label: 'Average ROAS', value: '4.2×', subtext: 'Blended paid amplification' },
      { label: 'Save Rate', value: '8.7%', subtext: '4× industry benchmark' },
    ],
    challenge:
      'KURA had built prestige among niche fashion editors but struggled to translate that into algorithmic traction among Gen-Z streetwear collectors without heavy discount promotions.',
    strategy:
      'We embedded a film crew in downtown Berlin and Tokyo, developing a bespoke audio snippet with an underground producer. We coordinated 24 mid-tier street dance creators to drop synced choreography within a 4-hour window, igniting an organic trend ripple.',
    deliverables: [
      '36 Custom vertical video assets (9:16 4K)',
      '1 Proprietary trending sound on TikTok & Reels',
      '24 Creator briefs and whitelisted TikTok Spark ads',
      'Interactive Instagram Stories countdown series',
    ],
    platforms: ['TikTok', 'Instagram Reels', 'YouTube Shorts'],
    testimonial: {
      quote:
        'KINETIK completely transformed our organic presence. We went from struggling to reach 5,000 views to generating 18.4 million views and selling out our core outerwear SKU in three days.',
      author: 'Elena Rostova',
      role: 'Global Creative Marketing Director',
      company: 'KURA Official',
    },
  },
  {
    id: 'aethel-botanicals',
    client: 'Aethel Botanicals',
    title: 'Zero-Proof Botanical Spritz Scaling',
    category: 'paid-performance',
    categoryLabel: 'Paid Performance & Content Engine',
    year: '2025–2026',
    image: '/src/assets/images/campaign_beverage_1792011268577.jpg',
    tagline: 'Reframing premium non-alcoholic aperitifs through aesthetic ritual content and direct DTC conversion funnels.',
    metrics: [
      { label: 'New Subscribers', value: '14,200', subtext: 'Monthly recurring cans' },
      { label: 'Customer CPA', value: '$18.40', subtext: 'Down from $41.80 benchmark' },
      { label: 'Retail Inquiries', value: '+185%', subtext: 'Whole Foods & specialty bars' },
      { label: 'Engagement Rate', value: '5.1%', subtext: 'Organic community interactions' },
    ],
    challenge:
      'The non-alcoholic beverage space had become hyper-saturated with generic health claims. Aethel needed an elevated, ritualistic brand world that appealed to evening entertainers.',
    strategy:
      'We produced a 40-asset modular content library focused on cocktail crafting rituals, crystal glassware asmr, and sensory micro-reviews. We combined high-end studio cinematography with relatable founder-led tastings.',
    deliverables: [
      '48 Modular paid social ad variations',
      'Studio ASMR & cocktail recipe reel package',
      'Meta & TikTok multi-tier conversion funnel setup',
      'Wholesaler social proof cutdowns',
    ],
    platforms: ['Instagram', 'Meta Ads', 'TikTok Shop'],
    testimonial: {
      quote:
        'Unlike traditional agencies that talk about fluffy impressions, KINETIK speaks directly in CAC, ROAS, and inventory velocity. Our subscriber base tripled in six months.',
      author: 'Marcus Vance',
      role: 'Co-Founder & CEO',
      company: 'Aethel Beverages',
    },
  },
  {
    id: 'nexus-audio',
    client: 'Nexus Audio Labs',
    title: 'Studio Buds World Sound Challenge',
    category: 'creator-ugc',
    categoryLabel: 'Creator Co-Creation & UGC',
    year: '2026',
    image: '/src/assets/images/campaign_tech_1792011268336.jpg',
    tagline: 'Sound-isolation blind test activations with 42 audio engineers, music producers, and city commuters.',
    metrics: [
      { label: 'Creator Activations', value: '42', subtext: 'Hand-vetted audio authorities' },
      { label: 'Hashtag Reach', value: '29.2M', subtext: '#NexusAudioLab challenge' },
      { label: 'Sell-Out Time', value: '72 Hours', subtext: 'Initial launch batch of 15,000 units' },
      { label: 'Earned Media Value', value: '$1.85M', subtext: 'Tracked third-party mentions' },
    ],
    challenge:
      'Consumer tech hardware launches are routinely drowned out by incumbent tech giants. Nexus needed credible proof of their active noise cancellation prowess without sounding like scripted corporate advertising.',
    strategy:
      'We sent sealed mystery sound-isolation boxes to respected underground beatmakers, subway commuters, and sound engineers. Their genuine real-time reactions were clipped into high-suspense hook formats that held attention through second 3.',
    deliverables: [
      '42 Whitelisted creator partnership agreements',
      'Real-time subway & studio noise test challenge',
      'Paid dark post amplification with targeted retargeting',
      'Creator rights buyout for international ad placement',
    ],
    platforms: ['TikTok Creator Program', 'YouTube Shorts', 'Instagram'],
    testimonial: {
      quote:
        'Their creator whitelisting pipeline and raw reaction briefs drove the fastest product sell-out in our company history. They understand what keeps viewers from swiping.',
      author: 'Sophia Chen',
      role: 'Head of Growth',
      company: 'Nexus Audio Labs',
    },
  },
  {
    id: 'terra-radiance',
    client: 'Terra Radiance Skincare',
    title: 'Clean Formula Transparency Series',
    category: 'brand-relaunch',
    categoryLabel: 'Brand Relaunch & Spark Ads',
    year: '2025–2026',
    image: '/src/assets/images/campaign_beauty_1792011269456.jpg',
    tagline: 'Demystifying clinical active botanical formulations through microscopic zoom cinematography and honest derm reviews.',
    metrics: [
      { label: 'CPA Reduction', value: '-38%', subtext: 'Versus previous agency agency baseline' },
      { label: 'Hook Retention', value: '62.4%', subtext: 'Viewers watching past 3 seconds' },
      { label: 'Repeat Orders', value: '+240%', subtext: 'Driven by post-purchase social education' },
      { label: 'Video Engagements', value: '3.9M', subtext: 'Comments, shares & bookmarks' },
    ],
    challenge:
      'Consumer skepticism towards clean beauty was at an all-time high. Terra Radiance needed to substantiate their active ingredient clinical efficacy in 15 seconds or less.',
    strategy:
      'We pivoted away from airbrushed cosmetic tropes and leaned into microscopic ingredient visuals, dermatological ingredient breakdowns, and split-face skin texture documentation over 28 consecutive days.',
    deliverables: [
      '50 Short-form educational video assets',
      'Dermatologist co-branded TikTok Spark campaign',
      'Retention-focused post-purchase video SMS flow',
      'Interactive cosmetic ingredient glossary on Instagram',
    ],
    platforms: ['TikTok Spark Ads', 'Instagram Reels', 'Meta Paid Social'],
    testimonial: {
      quote:
        'KINETIK proved that you do not need gimmick stunts to go viral. Authentic clinical transparency executed with cinema-grade visuals beat our old creative tests every single week.',
      author: 'Dr. Camille Moreau',
      role: 'Founder & Head of Formulation',
      company: 'Terra Radiance',
    },
  },
];

export const AGENCY_STATS = [
  { value: '142M+', label: 'Organic Impressions', detail: 'Generated for partner brands in 2025–2026' },
  { value: '4.8×', label: 'Average Paid ROAS', detail: 'Across high-growth DTC e-commerce' },
  { value: '380+', label: 'Creator Network', detail: 'Vetted short-form video storytellers' },
  { value: '94.2%', label: 'Annual Retention', detail: 'Partners who renew beyond initial 90-day sprints' },
];

export const SERVICES = [
  {
    id: '01',
    title: 'Short-Form Video Production',
    subtitle: 'Native Content for TikTok, Reels & Shorts',
    description:
      'We script, shoot, and edit high-retention vertical content engineered specifically for the algorithmic feed. Every video features tested hooks, dynamic pacing, and platform-native sound design.',
    tags: ['Hook Pacing Testing', 'Full-Scale Studio & Location Shoots', 'Rapid Batch Turnaround (14 Days)', 'Platform Audio Licensing'],
  },
  {
    id: '02',
    title: 'Creator & Influencer Ecosystems',
    subtitle: 'End-to-End Influencer Partnerships & Whitelisting',
    description:
      'We bypass generic agency middlemen to contract real category authorities. We manage negotiation, creative briefs, usage rights buyouts, and ad-account whitelisting (Spark Ads).',
    tags: ['Authority Creator Vetting', 'Whitelisted Spark Ads', 'Custom Creator Creative Briefs', 'Full Commercial Usage Rights'],
  },
  {
    id: '03',
    title: 'Paid Social & Creative Strategy',
    subtitle: 'Performance Creative with Measurable ROAS',
    description:
      'Creative that serves conversion goals, not just vanity metrics. We construct multi-tiered ad architectures across Meta, TikTok, and YouTube, testing 20+ hooks weekly to fight creative fatigue.',
    tags: ['Algorithmic Creative Testing', 'Dynamic Funnel Retargeting', 'Creative Fatigue Auditing', 'DTC Conversion Optimization'],
  },
  {
    id: '04',
    title: 'Social Identity & Cultural Management',
    subtitle: 'Community Moats and Reactive Culture Commentary',
    description:
      'Building brands that hold cultural weight. We manage real-time social commentary, trending audio adoption, comment section community banter, and editorial feed aesthetic curation.',
    tags: ['Reactive Trend Hijacking', 'Community Comment Engagement', 'Grid & Visual Direction', 'Crisis & Tone Governance'],
  },
];

export const METHODOLOGY_STEPS = [
  {
    step: '01',
    name: 'Audience & Creative Fatigue Audit',
    duration: 'Week 1',
    detail:
      'We dissect your top 10 competitors, past ad account performance, and community comments to pinpoint where viewer drop-off occurs and isolate untouched cultural territory.',
  },
  {
    step: '02',
    name: 'High-Velocity Creative Sprint',
    duration: 'Week 2–3',
    detail:
      'Our in-house production crew scripts and captures 20–40 modular video variants across our studio and on-location sets. We test 3–5 distinct opening hooks for every core product angle.',
  },
  {
    step: '03',
    name: 'Algorithmic Testing & Paid Whitelisting',
    duration: 'Week 4',
    detail:
      'We launch controlled test budgets across organic channels and whitelisted creator ad accounts. Real-time dashboards isolate winning hook rates (>50%) and high ROAS winners.',
  },
  {
    step: '04',
    name: 'Aggressive Scale & Iterative Loops',
    duration: 'Ongoing',
    detail:
      'Winning creative concepts are spun into fresh variations every 14 days, preventing creative burnout while funneling predictable new customer revenue.',
  },
];

export const TESTIMONIALS = [
  {
    quote:
      'KINETIK transformed our organic feed from a static catalog into a culture engine. Their understanding of short-form retention is unmatched in the industry.',
    author: 'Elena Rostova',
    role: 'Global Creative Marketing Director',
    company: 'KURA Streetwear',
  },
  {
    quote:
      'Their team doesn’t just make pretty videos; they understand the math of paid acquisition. We reduced our CPA by 38% in the first 60 days.',
    author: 'Dr. Camille Moreau',
    role: 'Founder & Head Formulator',
    company: 'Terra Radiance',
  },
  {
    quote:
      'They secured and managed 42 top-tier creators for our launch without a single operational hitch. Initial inventory sold out in under 72 hours.',
    author: 'Sophia Chen',
    role: 'VP of Growth',
    company: 'Nexus Audio Labs',
  },
];
