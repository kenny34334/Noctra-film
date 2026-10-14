export interface SandwichFilm {
  id: string;
  title: string;
  client: string;
  category: 'commercials' | 'social' | 'launch' | 'explainer';
  categoryLabel: string;
  duration: string;
  year: string;
  thumbnail: string;
  logline: string;
  backstory: string;
  views: string;
  results: string;
  director: string;
  credits: string[];
}

export const FEATURED_SHOWREEL = {
  title: 'Sandwich 2026 Commercial & Social Reel',
  runtime: '1:14',
  logline: 'Commercials, launch films, and feed-stopping social videos for the products people actually love.',
  thumbnail: '/src/assets/images/showreel_centerpiece_1792011907359.jpg',
  stats: [
    { label: 'Total Views', value: '180M+' },
    { label: 'Products Launched', value: '64' },
    { label: 'Average ROAS Lift', value: '+340%' },
    { label: 'Emmy & Webby Awards', value: '12' },
  ],
};

export const SANDWICH_FILMS: SandwichFilm[] = [
  {
    id: 'kura-runway',
    title: 'The Underground Runway Drop',
    client: 'KURA Streetwear',
    category: 'social',
    categoryLabel: 'Social & TikTok',
    duration: '0:45',
    year: '2026',
    thumbnail: '/src/assets/images/vertical_fashion_reel_1792011908448.jpg',
    logline: 'We took over a midnight Seoul intersection with 20 street dancers and made luxury outerwear look effortless.',
    backstory:
      'KURA had the designs, but traditional fashion ads felt stiff. We ditched the studio runway, hired underground choreographers, and shot on handheld anamorphic lenses at 2 AM. The audio went #1 on TikTok trends.',
    views: '18.4M Views',
    results: 'Sold out 12,000 jackets in 72 hours',
    director: 'Adam & Elena Rostova',
    credits: ['Cinematography: ARRI Mini LF', 'Original Sound: Berlin Metro', 'Cut for: 9:16 & 16:9'],
  },
  {
    id: 'aethel-botanical',
    title: 'Why Would Anyone Pay $24 For Water?',
    client: 'Aethel Aperitifs',
    category: 'commercials',
    categoryLabel: 'Commercials',
    duration: '1:12',
    year: '2026',
    thumbnail: '/src/assets/images/campaign_beverage_1792011268577.jpg',
    logline: 'An honest, slightly self-aware explainer on botanical extracts, ice physics, and why dinner parties got so boring.',
    backstory:
      'Non-alcoholic drinks usually pretend to be alcohol. We took the opposite approach: admitting that modern evenings are loud, and that a botanical elderflower spritz just tastes better than regret tomorrow morning.',
    views: '12.8M Views',
    results: '+310% DTC Subscription Growth',
    director: 'Marcus Vance & Sandwich Crew',
    credits: ['Camera: Macro Probe 24mm', 'Sound: High-Fidelity ASMR Glassware', 'Color: Company 3'],
  },
  {
    id: 'nexus-silence',
    title: 'The Subway Noise Test',
    client: 'Nexus Audio Labs',
    category: 'explainer',
    categoryLabel: 'Explainer & Tech',
    duration: '1:30',
    year: '2026',
    thumbnail: '/src/assets/images/campaign_tech_1792011268336.jpg',
    logline: 'We blindfolded 15 commuters on the loudest train in the world to test if active noise canceling actually works.',
    backstory:
      'Tech specs are boring. "Dual silicon MEMS microphones" means nothing to a tired person riding the subway. We put regular people inside a screeching express train, slipped on the earbuds, and filmed their genuine shock.',
    views: '29.2M Views',
    results: 'Initial production batch sold out in 3 days',
    director: 'Sandwich Tech Lab',
    credits: ['Production: NYC Subway Line', 'Audio: Binaural 3D Capture', 'Format: TikTok Spark Ads & YouTube'],
  },
  {
    id: 'terra-truth',
    title: 'Ingredients You Can Actually Pronounce',
    client: 'Terra Radiance',
    category: 'launch',
    categoryLabel: 'Launch Films',
    duration: '0:58',
    year: '2025',
    thumbnail: '/src/assets/images/campaign_beauty_1792011269456.jpg',
    logline: 'A dermatologist and a comedienne walk through the cosmetic aisle to expose fake clinical jargon.',
    backstory:
      'Skincare commercials love fake CGI water droplets and pseudoscience words. We used real macro lens photography of active botanical oils and broke down the formulation in plain human English.',
    views: '14.1M Views',
    results: '-38% Customer Acquisition Cost',
    director: 'Camille Moreau',
    credits: ['Optics: Leica Summilux-C', 'Location: Joshua Tree Botanical Studio', 'Client: Terra Clean Group'],
  },
  {
    id: 'studio-behind-the-lens',
    title: 'Inside The Sandwich Studio',
    client: 'Sandwich Original',
    category: 'commercials',
    categoryLabel: 'Commercials',
    duration: '2:15',
    year: '2026',
    thumbnail: '/src/assets/images/hero_social_agency_1792011267704.jpg',
    logline: 'How 14 nerds in Los Angeles make the commercials that make the internet stop scrolling.',
    backstory:
      'A documentary love letter to practical props, lighting rigs, good coffee, and why making funny, heartfelt videos is the best job on earth.',
    views: '8.4M Views',
    results: 'Webby Award for Best Agency Self-Promotion',
    director: 'Adam Lisagor',
    credits: ['Shot on location: Sandwich LA Stage', 'Soundtrack: Sandwich Brass Band', 'Release: Worldwide'],
  },
  {
    id: 'creator-sound-drop',
    title: '42 Creators, One Mystery Box',
    client: 'Nexus Sound Labs',
    category: 'social',
    categoryLabel: 'Social & TikTok',
    duration: '0:38',
    year: '2026',
    thumbnail: '/src/assets/images/vertical_tech_creator_1792011909808.jpg',
    logline: 'Unscripted unboxings with music producers who had zero clue what was inside the magnetic case.',
    backstory:
      'Sponsored videos look sponsored. We told creators only one rule: record your honest first reaction, and if you hate it, send it back. Nobody sent it back.',
    views: '22.6M Views',
    results: 'Trend #3 on YouTube Shorts',
    director: 'Social Rapid Response Team',
    credits: ['Platform: TikTok Spark Ads', 'Editing: Fast-Twitch 9:16', 'Whitelisted: 42 Creator Accounts'],
  },
];

export const SANDWICH_CLIENTS = [
  'Slack',
  'Square',
  'Airbnb',
  'Warby Parker',
  'Notion',
  'Descript',
  'Robinhood',
  'KURA',
  'Aethel',
  'Terra Radiance',
  'Nexus Audio',
  'Allbirds',
];

export const SANDWICH_STEPS = [
  {
    num: '01',
    title: 'We understand your thing.',
    body: 'Whether it is a neural network, a pair of sweatpants, or an botanical aperitif, we obsess over how it works and why someone will love it.',
  },
  {
    num: '02',
    title: 'We write it like a human.',
    body: 'No corporate jargon. No "synergy" or "seamless solutions". Just clear, witty, charming storytelling that sounds like a friend talking to a friend.',
  },
  {
    num: '03',
    title: 'We shoot it for real.',
    body: 'We own the cameras, the lights, the stages, and the edit suites. We build practical sets, cast relatable people, and record pristine audio.',
  },
  {
    num: '04',
    title: 'We cut it to stop feeds.',
    body: 'From 90-second cinematic launch films to 15-second fast-twitch TikTok hooks, we deliver an entire modular arsenal ready for paid and organic scale.',
  },
];

export const SANDWICH_FUND = {
  headline: 'The Sandwich Equity Fund',
  subhead: 'Sometimes we trade video production for equity.',
  body: 'If you are an early-stage startup building something truly extraordinary that solves a real problem, we know you might not have a huge production budget yet. For select founders, we invest our creative firepower and production costs directly in exchange for company equity.',
  stats: 'We have invested in over 25 early-stage companies that went on to raise hundreds of millions.',
};
