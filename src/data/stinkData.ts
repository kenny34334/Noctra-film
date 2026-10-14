export type DivisionType = 'commercial' | 'fiction';

export interface StinkProject {
  id: string;
  title: string;
  client: string;
  director: string;
  directorSlug: string;
  division: DivisionType;
  category: 'commercials' | 'music_video' | 'fashion' | 'film' | 'narrative_short' | 'feature' | 'episodic';
  categoryLabel: string;
  width: 'full' | 'half' | 'third';
  thumbnail: string;
  year: string;
  synopsis: string;
  laurels?: string[];
  credits: {
    director: string;
    dop: string;
    editor: string;
    colorist: string;
    production: string;
  };
}

export interface StinkDirector {
  name: string;
  slug: string;
  city: string;
  bio: string;
  avatar: string;
  divisions: DivisionType[];
  awards: string[];
}

export const STINK_DIRECTORS: StinkDirector[] = [
  {
    name: 'Douglas Bernardt',
    slug: 'douglas-bernardt',
    city: 'London / São Paulo',
    bio: 'Renowned for emotive, tactile storytelling and kinetic visual choreography. Winner of the Grand Prix at Cannes Lions and Official Selection at Cannes Film Festival.',
    avatar: '/src/assets/images/vertical_fashion_reel_1792011908448.jpg',
    divisions: ['commercial', 'fiction'],
    awards: ['Cannes Lions Grand Prix', 'Cannes Film Festival Official Selection', 'UKMVA Best Director'],
  },
  {
    name: 'Colin Solal Cardo',
    slug: 'colin-solal-cardo',
    city: 'Paris / London',
    bio: 'French auteur known for raw live performance staging, intimate pop portraiture, and high-energy music cinema.',
    avatar: '/src/assets/images/vertical_tech_creator_1792011909808.jpg',
    divisions: ['commercial'],
    awards: ['Grammy Nomination', 'UKMVA Best Pop Video', 'Victoires de la Musique'],
  },
  {
    name: 'Felix Brady',
    slug: 'felix-brady',
    city: 'London',
    bio: 'Pioneer of in-camera experimental rigs, robotic motion control, and hyper-contemporary neo-noir fiction.',
    avatar: '/src/assets/images/showreel_centerpiece_1792011907359.jpg',
    divisions: ['commercial', 'fiction'],
    awards: ['Sundance Grand Jury Nominee', 'British Arrows Gold', 'Cannes Lions Silver'],
  },
  {
    name: 'Fredrik Bond',
    slug: 'fredrik-bond',
    city: 'London / Los Angeles',
    bio: 'Prolific cinematic director with signature world-building for global brands and independent cinema. DGA Director of the Year.',
    avatar: '/src/assets/images/hero_social_agency_1792011267704.jpg',
    divisions: ['commercial', 'fiction'],
    awards: ['DGA Director of the Year', 'Tribeca Best Narrative Premiere', 'Cannes Titanium Lion'],
  },
  {
    name: 'Eoin Glaister',
    slug: 'eoin-glaister',
    city: 'London',
    bio: 'Celebrated for deadpan British comedy, surreal narrative turns, and razor-sharp dramatic dialogue.',
    avatar: '/src/assets/images/vertical_beverage_macro_1792011908689.jpg',
    divisions: ['commercial', 'fiction'],
    awards: ['BAFTA Short Film Nominee', 'British Arrows Gold', 'Creative Circle Gold'],
  },
  {
    name: 'Matilda Finn',
    slug: 'matilda-finn',
    city: 'London',
    bio: 'Visionary director crafting dark psychological lighting, poetic underworlds, and visceral sensory films.',
    avatar: '/src/assets/images/vertical_beauty_glow_1792011908528.jpg',
    divisions: ['commercial'],
    awards: ['UKMVA Best Director 2x', 'Cannes Bronze Lion', 'Vimeo Best of the Year'],
  },
];

export const STINK_PROJECTS: StinkProject[] = [
  // --- COMMERCIAL DIVISION ---
  {
    id: 'kura-cypher',
    title: 'Sub-Level Cypher',
    client: 'KURA Official',
    director: 'Felix Brady',
    directorSlug: 'felix-brady',
    division: 'commercial',
    category: 'fashion',
    categoryLabel: 'Fashion Cinema',
    width: 'full',
    thumbnail: '/src/assets/images/showreel_centerpiece_1792011907359.jpg',
    year: '2026',
    synopsis:
      'Engineered camera rigs track street dancers performing unbroken technical routines in an industrial Tokyo logistics hangar.',
    credits: {
      director: 'Felix Brady',
      dop: 'Mauro Chiarello',
      editor: 'Billy Mead',
      colorist: 'Matt Turner',
      production: 'NOCTRA Films London',
    },
  },
  {
    id: 'miss-me-too',
    title: 'Miss Me Too',
    client: 'Griff',
    director: 'Colin Solal Cardo',
    directorSlug: 'colin-solal-cardo',
    division: 'commercial',
    category: 'music_video',
    categoryLabel: 'Music Video',
    width: 'half',
    thumbnail: '/src/assets/images/vertical_fashion_reel_1792011908448.jpg',
    year: '2026',
    synopsis:
      'An electric, synchronized midnight journey through rain-slicked city streets, capturing the frantic pulse of youth pop culture.',
    credits: {
      director: 'Colin Solal Cardo',
      dop: 'David Procter BSC',
      editor: 'Gwen Ghelid',
      colorist: 'Arthur Paux',
      production: 'NOCTRA Films Paris / London',
    },
  },
  {
    id: 'botanical-pour',
    title: 'The Alchemist Harvest',
    client: 'Aethel Aperitifs',
    director: 'Eoin Glaister',
    directorSlug: 'eoin-glaister',
    division: 'commercial',
    category: 'commercials',
    categoryLabel: 'Commercial',
    width: 'half',
    thumbnail: '/src/assets/images/campaign_beverage_1792011268577.jpg',
    year: '2026',
    synopsis:
      'A dryly comic study of bespoke ice-carvers, carbonation micro-bubbles, and the solemn ritual of pouring non-alcoholic botanical liquids.',
    credits: {
      director: 'Eoin Glaister',
      dop: 'Daniel Landin BSC',
      editor: 'Leo King',
      colorist: 'Jack McGinity',
      production: 'NOCTRA Films London',
    },
  },
  {
    id: 'sound-isolation',
    title: 'Subway Blind Reaction',
    client: 'Nexus Audio Labs',
    director: 'Douglas Bernardt',
    directorSlug: 'douglas-bernardt',
    division: 'commercial',
    category: 'commercials',
    categoryLabel: 'Commercial',
    width: 'third',
    thumbnail: '/src/assets/images/vertical_tech_creator_1792011909808.jpg',
    year: '2026',
    synopsis:
      'Documentary real-time reactions of commuters placed inside the loudest acoustic chambers on the planet, enveloped in total silence.',
    credits: {
      director: 'Douglas Bernardt',
      dop: 'Adolpho Veloso',
      editor: 'Lucas Camargo',
      colorist: 'Company 3',
      production: 'NOCTRA Films London',
    },
  },
  {
    id: 'skin-luminescence',
    title: 'The Dew Protocol',
    client: 'Terra Radiance',
    director: 'Matilda Finn',
    directorSlug: 'matilda-finn',
    division: 'commercial',
    category: 'fashion',
    categoryLabel: 'Beauty & Fashion',
    width: 'third',
    thumbnail: '/src/assets/images/vertical_beauty_glow_1792011908528.jpg',
    year: '2026',
    synopsis:
      'An intimate, cinematic celebration of real skin textures, sunlight refraction through botanicals, and clinical purity.',
    credits: {
      director: 'Matilda Finn',
      dop: 'Patrick Meller',
      editor: 'James Forbes-Robertson',
      colorist: 'Simona Cristea',
      production: 'NOCTRA Films London',
    },
  },
  {
    id: 'stage-four-commercial',
    title: 'Behind The Master Monitor',
    client: 'NOCTRA Stage 04',
    director: 'Fredrik Bond',
    directorSlug: 'fredrik-bond',
    division: 'commercial',
    category: 'film',
    categoryLabel: 'Brand Film',
    width: 'third',
    thumbnail: '/src/assets/images/hero_social_agency_1792011267704.jpg',
    year: '2026',
    synopsis:
      'Behind the lens with the cinematographers, gaffers, and directors shaping modern commercial culture across London and Los Angeles.',
    credits: {
      director: 'Fredrik Bond',
      dop: 'John Mathieson BSC',
      editor: 'Russell Icke',
      colorist: 'Jean-Clément Soret',
      production: 'NOCTRA Studios & NOCTRA Films',
    },
  },

  // --- FICTION & NARRATIVE DIVISION ---
  {
    id: 'the-rainkeeper',
    title: 'The Rainkeeper',
    client: 'Feature Drama',
    director: 'Douglas Bernardt',
    directorSlug: 'douglas-bernardt',
    division: 'fiction',
    category: 'feature',
    categoryLabel: 'Dramatic Feature',
    width: 'full',
    thumbnail: '/src/assets/images/fiction_narrative_cinema_1792018265965.jpg',
    year: '2026',
    laurels: ['Official Selection — Festival de Cannes', 'Best Cinematography — Camerimage'],
    synopsis:
      'Set against a relentless winter deluge in a northern coastal port, an estranged archivist uncovers a series of forgotten phonograph recordings that re-frame her family legacy.',
    credits: {
      director: 'Douglas Bernardt',
      dop: 'Adolpho Veloso ABC',
      editor: 'Lucas Camargo',
      colorist: 'Company 3 London',
      production: 'NOCTRA Fiction / Film4',
    },
  },
  {
    id: 'inside-the-blind-iris',
    title: 'Inside The Blind Iris',
    client: 'Narrative Short',
    director: 'Douglas Bernardt',
    directorSlug: 'douglas-bernardt',
    division: 'fiction',
    category: 'narrative_short',
    categoryLabel: 'Narrative Short',
    width: 'half',
    thumbnail: '/src/assets/images/showreel_centerpiece_1792011907359.jpg',
    year: '2025',
    laurels: ['Venice Biennale Premiere', 'BFI London Film Festival'],
    synopsis:
      'A nocturnal psychological drama exploring memory dissociation through physical performance and concrete architecture.',
    credits: {
      director: 'Douglas Bernardt',
      dop: 'Mauro Chiarello',
      editor: 'Billy Mead',
      colorist: 'Arthur Paux',
      production: 'NOCTRA Fiction London',
    },
  },
  {
    id: 'night-shift-shinjuku',
    title: 'Echoes After Midnight',
    client: 'Episodic Pilot',
    director: 'Felix Brady',
    directorSlug: 'felix-brady',
    division: 'fiction',
    category: 'episodic',
    categoryLabel: 'Episodic Pilot',
    width: 'half',
    thumbnail: '/src/assets/images/campaign_fashion_1792011268418.jpg',
    year: '2026',
    laurels: ['Sundance Film Festival — Episodic Section'],
    synopsis:
      'A stylized neo-noir thriller following an underground courier who inadvertently intercepts an encoded neural transmission across Tokyo.',
    credits: {
      director: 'Felix Brady',
      dop: 'John Mathieson BSC',
      editor: 'Russell Icke',
      colorist: 'Matt Turner',
      production: 'NOCTRA Fiction & Television',
    },
  },
  {
    id: 'the-last-commute',
    title: 'Silence on the 3rd Track',
    client: 'Dramatic Short',
    director: 'Eoin Glaister',
    directorSlug: 'eoin-glaister',
    division: 'fiction',
    category: 'narrative_short',
    categoryLabel: 'Dramatic Short',
    width: 'third',
    thumbnail: '/src/assets/images/vertical_tech_creator_1792011909808.jpg',
    year: '2026',
    laurels: ['Clermont-Ferrand Special Mention'],
    synopsis:
      'A quiet, darkly comic character piece about two strangers on the last delayed subterranean express train out of the city.',
    credits: {
      director: 'Eoin Glaister',
      dop: 'Daniel Landin BSC',
      editor: 'Leo King',
      colorist: 'Jack McGinity',
      production: 'NOCTRA Fiction',
    },
  },
  {
    id: 'nocturne-solitude',
    title: 'Nocturne in Amber',
    client: 'Cinema Essay',
    director: 'Fredrik Bond',
    directorSlug: 'fredrik-bond',
    division: 'fiction',
    category: 'feature',
    categoryLabel: 'Documentary Feature',
    width: 'third',
    thumbnail: '/src/assets/images/hero_social_agency_1792011267704.jpg',
    year: '2025',
    laurels: ['Tribeca Film Festival', 'IDFA Amsterdam'],
    synopsis:
      'An intimate visual essay on the solitary craft of cinema lighting technicians and analog master tape restoration.',
    credits: {
      director: 'Fredrik Bond',
      dop: 'Patrick Meller',
      editor: 'Gwen Ghelid',
      colorist: 'Jean-Clément Soret',
      production: 'NOCTRA Studios London',
    },
  },
  {
    id: 'radiance-monologue',
    title: 'Aura',
    client: 'Short Film',
    director: 'Matilda Finn',
    directorSlug: 'matilda-finn',
    division: 'fiction',
    category: 'narrative_short',
    categoryLabel: 'Psychological Drama',
    width: 'third',
    thumbnail: '/src/assets/images/vertical_beauty_glow_1792011908528.jpg',
    year: '2026',
    laurels: ['SXSW Narrative Spotlight'],
    synopsis:
      'A young botanical chemist isolates an uncatalogued spore in a greenhouse that alters sensory perception of light and sound.',
    credits: {
      director: 'Matilda Finn',
      dop: 'David Procter BSC',
      editor: 'James Forbes-Robertson',
      colorist: 'Simona Cristea',
      production: 'NOCTRA Fiction',
    },
  },
];

export const REGIONS = [
  { code: 'UK', name: 'United Kingdom', city: 'London' },
  { code: 'US', name: 'United States', city: 'Los Angeles / New York' },
  { code: 'FR', name: 'France', city: 'Paris' },
  { code: 'DE', name: 'Germany', city: 'Berlin' },
  { code: 'CN', name: 'China', city: 'Shanghai' },
  { code: 'BR', name: 'Brazil', city: 'São Paulo' },
  { code: 'CZ', name: 'Czech Republic', city: 'Prague' },
];
