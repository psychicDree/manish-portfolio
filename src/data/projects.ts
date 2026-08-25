// Single source of truth for the Work index and the /work/<slug> case-study pages.
//
// Provenance for the case-study copy: the LinkedIn profile at
// linkedin.com/in/gamedev-manishjha (roles, dates, platforms and the two hard
// numbers), each Nexenova title's own CLAUDE.md, and the public store listings.
// Anything not covered by one of those is left off rather than guessed at.

export type ProjectStatus = 'Released' | 'Alpha' | 'Open source'

export interface CaseStudy {
  /** One-line positioning, shown under the title on the case-study page. */
  headline: string
  context: string
  /** The engineering problem, stated plainly. */
  challenge: string
  /** What he personally built. The substance of the page. */
  contributions: string[]
  /** Only populated where a sourced, verifiable number exists. */
  outcomes?: string[]
  stack: { label: string; value: string }[]
}

export interface PortfolioItem {
  id: number
  slug: string
  title: string
  category: string
  year: string
  platform: string
  status: ProjectStatus
  featured?: boolean
  image?: string
  imageFit?: 'cover' | 'contain'
  video?: {
    youtubeId: string
    poster: string
    label: string
  }
  gallery?: { src: string; alt: string }[]
  caseStudy?: CaseStudy
  details: {
    title: string
    description: string
    created: string
    technologies: string
    role: string
    view: string
  }
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 11,
    slug: 'park-escape',
    title: 'Park Escape',
    category: 'game',
    year: '2026',
    platform: 'Android',
    status: 'Released',
    image: '/games/park-escape.jpg',
    imageFit: 'cover',
    caseStudy: {
      headline: 'A timed car-untangling puzzle built on Unity 6 with the full Unity Gaming Services stack behind it.',
      context:
        'First title shipped under Nexenova Studios, released on Google Play. Solo build, from the puzzle rules through to the live-services backend and ad monetisation.',
      challenge:
        'A puzzle game lives or dies on its level pipeline. Each level is a graph of paths, gates, poles and buttons that has to be authorable quickly, verifiably solvable, and re-tunable after launch without shipping a new binary.',
      contributions: [
        'Built the core mechanic: tap a car and it drives its path to a matching finish line, resolving collisions with gates, poles and buttons along the way.',
        'Authored the level data as ScriptableObjects so difficulty and layout are edited as data, not code.',
        'Integrated the Unity Gaming Services stack — Authentication, Cloud Save, Economy and Cloud Code — so progression and currency are server-owned rather than trusted to the device.',
        'Wired AdMob for rewarded and interstitial placements against the Economy currency definitions.',
        'Shipped on Unity 6 with URP and the new Input System, targeting mobile portrait.',
      ],
      stack: [
        { label: 'Engine', value: 'Unity 6 · URP · Input System' },
        { label: 'Language', value: 'C#' },
        { label: 'Backend', value: 'UGS — Authentication, Cloud Save, Economy, Cloud Code' },
        { label: 'Monetisation', value: 'Google AdMob' },
        { label: 'Package', value: 'com.nexenova.ParkEscape' },
      ],
    },
    details: {
      title: 'Park Escape - Car Puzzle',
      description: 'Released on Google Play. Tap cars to drive them along their paths to matching finish lines before the timer runs out, working around gates, poles and buttons. Built on Unity 6 with URP and the new Input System, with the full Unity Gaming Services stack behind it.',
      created: '2026',
      technologies: 'Unity 6, C#, URP, Input System, UGS (Auth, Cloud Save, Economy, Cloud Code), AdMob',
      role: 'Founder & Game Developer, Nexenova Studios',
      view: 'https://play.google.com/store/apps/details?id=com.nexenova.ParkEscape'
    }
  },
  {
    id: 12,
    slug: 'last-turn',
    title: 'Last Turn',
    category: 'game',
    year: '2026',
    platform: 'Android',
    status: 'Released',
    image: '/games/last-turn.jpg',
    imageFit: 'contain',
    caseStudy: {
      headline: 'Two game modes, one codebase, one shared platform layer for ads, IAP and live config.',
      context:
        'Second Nexenova release on Google Play. A one-touch 2D car game that ships an endless mode and a finite level mode from the same project.',
      challenge:
        'Endless and level modes want different win conditions, different difficulty curves and different failure states — but duplicating the game loop for each is how a small codebase rots. The modes had to diverge in rules while sharing everything underneath.',
      contributions: [
        'Built both modes off one gameplay core: an endless run with escalating difficulty, and a finite level mode with explicit win/lose states.',
        'Put ads, real-money purchases and remote tuning behind a single shared platform layer, so no gameplay code talks to a vendor SDK directly.',
        'Integrated ironSource LevelPlay for mediated ads and Unity IAP for purchases.',
        'Used UGS Remote Config to retune difficulty and economy values after release without a store update.',
        'Server-owned progression and currency through UGS Authentication, Cloud Save and Economy.',
      ],
      stack: [
        { label: 'Engine', value: 'Unity 6 · URP 2D' },
        { label: 'Language', value: 'C#' },
        { label: 'Backend', value: 'UGS — Authentication, Economy, Cloud Save, Remote Config' },
        { label: 'Monetisation', value: 'ironSource LevelPlay · Unity IAP' },
        { label: 'Package', value: 'com.nexenova.lastturn' },
      ],
    },
    details: {
      title: 'Last Turn - 2D Car Game',
      description: 'Released on Google Play. A one-touch 2D car game shipping two modes from one codebase: an endless run with escalating difficulty, and a finite level mode with win/lose states. Live services, ads and real-money purchases all run through a shared platform layer.',
      created: '2026',
      technologies: 'Unity 6, C#, URP 2D, UGS (Auth, Economy, Cloud Save, Remote Config), ironSource LevelPlay, Unity IAP',
      role: 'Founder & Game Developer, Nexenova Studios',
      view: 'https://play.google.com/store/apps/details?id=com.nexenova.lastturn'
    }
  },
  {
    id: 13,
    slug: 'endless-merge-2048',
    title: 'Endless Merge 2048',
    category: 'game',
    year: '2026',
    platform: 'Android',
    status: 'Released',
    image: '/games/endless-merge.jpg',
    imageFit: 'cover',
    caseStudy: {
      headline: 'A 3D physics merge board, built on an in-house Unity framework rather than a pile of singletons.',
      context:
        'Third Nexenova release on Google Play. Cubes are shot onto a physics board where they collide and combine 2048-style, with bomb and magnet power-ups and a configurable gravity direction.',
      challenge:
        'Merging on a physics board means the merge rule and the simulation disagree constantly — two cubes can touch for one frame mid-bounce. The merge resolution had to be deterministic enough to feel fair while the physics stayed loose enough to feel good.',
      contributions: [
        'Built the merge resolution on top of 3D physics, with bomb and magnet power-ups and a gravity direction that is configurable rather than hard-coded.',
        'Drove all balance values from ScriptableObjects, so tuning is a data edit.',
        'Wrote and reused an in-house framework — LogcatBELLY — covering UI paging, tweening, audio, haptics and save state across the project.',
      ],
      stack: [
        { label: 'Engine', value: 'Unity 6' },
        { label: 'Language', value: 'C#' },
        { label: 'Simulation', value: '3D physics · ScriptableObject-driven balance' },
        { label: 'Framework', value: 'In-house LogcatBELLY — UI, tweening, audio, haptics, save' },
        { label: 'Package', value: 'com.nexenova.endlessmerge' },
      ],
    },
    details: {
      title: 'Endless Merge 2048 - Merge Puzzle',
      description: 'Released on Google Play. A 3D merge game where shot cubes collide and combine 2048-style on a physics board, with bomb and magnet power-ups and a configurable gravity direction. Built on an in-house Unity framework covering UI paging, tweening, audio, haptics and save state.',
      created: '2026',
      technologies: 'Unity 6, C#, 3D physics, ScriptableObject-driven balance, in-house LogcatBELLY framework',
      role: 'Founder & Game Developer, Nexenova Studios',
      view: 'https://play.google.com/store/apps/details?id=com.nexenova.endlessmerge'
    }
  },
  {
    id: 1,
    slug: 'rummy-passion',
    title: 'Rummy Passion',
    category: 'game',
    year: '2024-2025',
    platform: 'Android · iOS',
    status: 'Released',
    caseStudy: {
      headline: 'Tooling, socket architecture and build-size work on a live real-money card platform.',
      context:
        'Senior Software Engineer at Passion Gaming, Gurugram, September 2024 to August 2025. Live product with real money on the table, so correctness and latency are not negotiable.',
      challenge:
        'A live real-money game cannot absorb slow iteration or a fragile network layer. The work was split between shortening the team’s edit-test loop and making the socket and API layer something that could be reasoned about.',
      contributions: [
        'Developed tools and pipelines to streamline development and cut iteration time for the team.',
        'Designed a sustainable architecture for sockets and APIs.',
        'Cut download size using Unity Cloud Content Delivery and Addressables, moving content out of the base build.',
        'Wrote unit and integration tests to keep regressions out of a live money-handling product.',
        'Debugged production issues to root cause and proposed the fixes rather than patching symptoms.',
      ],
      outcomes: ['20% improvement in app response time after optimisation work.'],
      stack: [
        { label: 'Engine', value: 'Unity' },
        { label: 'Language', value: 'C#' },
        { label: 'Networking', value: 'Socket programming · REST APIs' },
        { label: 'Content', value: 'Cloud Content Delivery · Addressables' },
        { label: 'Quality', value: 'Unit and integration tests' },
      ],
    },
    details: {
      title: 'Rummy Passion - Card Game',
      description: 'Developing Tools and Pipelines for Rummy Passion to streamline development and reduce iteration time. Optimized code for maximum performance and efficiency, resulting in a 20% improvement in app response time.',
      created: '2024-2025',
      technologies: 'Unity, C#, Socket Programming, Cloud Content, Addressables',
      role: 'Senior Software Engineer',
      view: 'https://github.com/psychicDree'
    }
  },
  {
    id: 2,
    slug: 'warland-realm',
    title: 'Warland Realm',
    category: 'game',
    year: '2022-2024',
    platform: 'PC · Web',
    status: 'Alpha',
    featured: true,
    image: '/games/warland-realm.jpg',
    imageFit: 'cover',
    video: {
      youtubeId: 'KaD4GlJGOog',
      poster: '/games/video/warland-realm-poster.jpg',
      label: 'Warlands Realms alpha trailer'
    },
    gallery: [
      { src: '/games/gallery/warland-realm-1.jpg', alt: 'Warlands Realms hero selection screen' },
      { src: '/games/gallery/warland-realm-2.jpg', alt: 'Warlands Realms citadel hub environment' },
      { src: '/games/gallery/warland-realm-3.jpg', alt: 'Warlands Realms key art' },
      { src: '/games/gallery/warland-realm-4.png', alt: 'Warlands Realms hero line-up' },
      { src: '/games/gallery/warland-realm-5.png', alt: 'Warlands Realms character card' },
      { src: '/games/gallery/warland-realm-6.png', alt: 'Warlands Realms character card' },
      { src: '/games/gallery/warland-realm-7.png', alt: 'Warlands Realms character card' },
      { src: '/games/gallery/warland-realm-8.png', alt: 'Warlands Realms character card' }
    ],
    caseStudy: {
      headline: 'Locomotion and 5v5 combat systems for a competitive multiplayer title, led as development team lead.',
      context:
        'Development Team Lead on the Warlands project, August 2022 to September 2024. A competitive, blockchain-backed eSports game combining MOBA and battle-royale structure.',
      challenge:
        'Movement is the one system every other system leans on in a 5v5 competitive game. Players, bots and creatures all needed locomotion that stayed synchronised across the network, stayed cheap enough to run at scale, and stayed reusable across three very different kinds of actor.',
      contributions: [
        'Implemented the locomotion systems for players, bots and creatures, designed around network synchronisation, performance and reuse across actor types.',
        'Built MOBA and battle-royale mechanics for 5v5 gameplay.',
        'Engineered play-to-earn systems on top of blockchain infrastructure.',
        'Led the development team across the project.',
      ],
      stack: [
        { label: 'Engine', value: 'Unity · Unreal Engine (Blueprint)' },
        { label: 'Language', value: 'C#' },
        { label: 'Systems', value: 'Networked locomotion · MOBA and battle-royale mechanics' },
        { label: 'Economy', value: 'Blockchain play-to-earn' },
        { label: 'Role', value: 'Development Team Lead' },
      ],
    },
    details: {
      title: 'Warland Realm - NFT eSports Game',
      description: 'NFT-based eSports Competitive Game. Implemented Creatures, Player and Bots Locomotion Systems to support multiplayer aspect like performance, synchronization, and reusability. Worked on MOBA and Battle Royale mechanics for 5v5 gameplay.',
      created: '2022-2024',
      technologies: 'Unity, C#, Unreal Engine, Blueprint, Blockchain',
      role: 'Development Team Lead',
      view: 'https://github.com/psychicDree'
    }
  },
  {
    id: 3,
    slug: 'underground-waifus',
    title: 'Underground Waifus',
    category: 'game',
    year: '2022-2024',
    platform: 'Steam · Epic · Android',
    status: 'Released',
    featured: true,
    image: '/games/underground-waifus.jpg',
    imageFit: 'cover',
    video: {
      youtubeId: 'C1Mb7Z7sQhQ',
      poster: '/games/video/underground-waifus-poster.jpg',
      label: 'Underground Waifus TCG trailer'
    },
    gallery: [
      { src: '/games/gallery/underground-waifus-1.jpg', alt: 'Underground Waifus key art' },
      { src: '/games/gallery/underground-waifus-2.jpg', alt: 'Underground Waifus deck and collection screen' },
      { src: '/games/gallery/underground-waifus-3.jpg', alt: 'Underground Waifus gameplay' },
      { src: '/games/gallery/underground-waifus-4.jpg', alt: 'Underground Waifus gameplay' },
      { src: '/games/gallery/underground-waifus-5.jpg', alt: 'Underground Waifus gameplay' },
      { src: '/games/gallery/underground-waifus-6.jpg', alt: 'Underground Waifus gameplay' }
    ],
    caseStudy: {
      headline: 'A trading card game launched across three storefronts, with a blockchain economy underneath it.',
      context:
        'Shipped as Development Team Lead on the Warlands project, August 2022 to September 2024. Launched on Steam, Epic Games Store and Android.',
      challenge:
        'Three storefronts means three sets of platform requirements, three build targets and three certification passes off one codebase — and a card game that streams a large art set has to open fast on all of them.',
      contributions: [
        'Launched the title on Steam, Epic Games Store and Android.',
        'Engineered the play-to-earn systems on blockchain infrastructure.',
        'Integrated the Steam and Epic platform SDKs alongside the mobile build.',
        'Ran the optimisation pass that brought load times down.',
      ],
      outcomes: ['25% reduction in loading times through optimisation.'],
      stack: [
        { label: 'Engine', value: 'Unity' },
        { label: 'Language', value: 'C#' },
        { label: 'Platforms', value: 'Steam SDK · Epic Games Store · Android' },
        { label: 'Economy', value: 'Blockchain play-to-earn' },
        { label: 'Role', value: 'Development Team Lead' },
      ],
    },
    details: {
      title: 'Underground Waifus - NFT TCG',
      description: 'Successfully launched a NFT-based TCG on Steam, Epic, and Android platforms. Engineered play-to-earn systems using blockchain technology. Reduced loading times by 25% through optimization.',
      created: '2022-2024',
      technologies: 'Unity, C#, Blockchain, Steam SDK, Epic Games Store',
      role: 'Development Team Lead',
      view: 'https://github.com/psychicDree'
    }
  },
  {
    id: 4,
    slug: 'khiladi-adda',
    title: 'Khiladi Adda Games',
    category: 'game',
    year: '2021-2022',
    platform: 'Android',
    status: 'Released',
    caseStudy: {
      headline: 'Real-time multiplayer board and card games for an internal games platform.',
      context:
        'Game Developer at Khiladi Adda, Noida, March 2021 to August 2022. Built multiplayer titles for integration into the company’s own product.',
      challenge:
        'Turn-based multiplayer looks simple until the network is involved: a dropped player still owes a move, a turn timer has to agree on both ends, and the board state has to stay identical for everyone watching it.',
      contributions: [
        'Built multiplayer Ludo and the card game Court Piece for internal product integration.',
        'Shipped a Chess title to the Google Play Store.',
        'Handled the multiplayer problems that turn-based games actually hit — auto moves, turn indicators and the UI state around them.',
        'Integrated third-party SDKs across the titles: Photon, Socket.IO, PlayFab and Firebase.',
      ],
      stack: [
        { label: 'Engine', value: 'Unity' },
        { label: 'Language', value: 'C#' },
        { label: 'Networking', value: 'Photon Engine · Socket.IO' },
        { label: 'Backend', value: 'PlayFab · Firebase' },
        { label: 'Titles', value: 'Ludo · Court Piece · Chess' },
      ],
    },
    details: {
      title: 'Khiladi Adda - Multiplayer Games',
      description: 'Created Multiplayer Ludo and Card Game Court Piece for Internal product Integration. Built Multiplayer Board Games, Ludo for internal product integration, and Chess Game Published on Google Play Store.',
      created: '2021-2022',
      technologies: 'Unity, C#, Photon Engine, Socket.IO, Playfab, Firebase',
      role: 'Game Developer',
      view: 'https://github.com/psychicDree'
    }
  },
  {
    id: 5,
    slug: 'beat-killer',
    title: 'Beat Killer',
    category: 'game',
    year: '2020-2021',
    platform: 'Android',
    status: 'Released',
    caseStudy: {
      headline: 'A rhythm game with no tapping — you aim, the music does the timing.',
      context:
        'Game Developer at Pinktech Design, Delhi, 2020 to 2021. Published to the Google Play Store.',
      challenge:
        'A rhythm game that removes the tap has to earn its timing somewhere else. Bullets are fired to intersect beats, so the difficulty lives in travel time and lead, not in reaction speed — and every one of 30+ tracks has to be authored against that.',
      contributions: [
        'Built the core loop: players destroy beats by guiding bullets to align with the music, using one-touch controls rather than tap timing.',
        'Shipped 30+ songs and 20+ dynamic backgrounds against a 3D presentation.',
        'Researched the demographics and market statistics for the genre to settle the gameplay direction before building it.',
        'Integrated Firebase, the Facebook and Google SDKs, and Google AdMob.',
      ],
      stack: [
        { label: 'Engine', value: 'Unity' },
        { label: 'Language', value: 'C#' },
        { label: 'Content', value: '30+ songs · 20+ dynamic backgrounds' },
        { label: 'Services', value: 'Firebase · Facebook SDK · Google SDK' },
        { label: 'Monetisation', value: 'Google AdMob' },
      ],
    },
    details: {
      title: 'Beat Killer - 3D Audio Game',
      description: 'A mobile arcade-style rhythm game where players destroy beats by guiding bullets to align with musical beats, without tapping. One-touch controls, 3D visuals, over 30 songs and more than 20 dynamic backgrounds. Published on the Google Play Store.',
      created: '2020-2021',
      technologies: 'Unity, C#, Firebase, Facebook SDK, Google SDK, Google Admob',
      role: 'Game Developer',
      view: 'https://github.com/psychicDree'
    }
  },
  {
    id: 6,
    slug: 'unity-script-collection',
    title: 'Unity Script Collection',
    category: 'game',
    year: '2020-2024',
    platform: 'GitHub',
    status: 'Open source',
    details: {
      title: 'Unity Script Collection',
      description: 'Collection of reusable Unity scripts and utilities for game development. Includes various gameplay mechanics, UI systems, and optimization tools.',
      created: '2020-2024',
      technologies: 'Unity, C#, Game Development',
      role: 'Developer',
      view: 'https://github.com/psychicDree/Unity-Script-Collection'
    }
  },
  {
    id: 7,
    slug: 'opengl-tutorials',
    title: 'OpenGL Tutorials',
    category: 'game',
    year: '2020-2024',
    platform: 'GitHub',
    status: 'Open source',
    details: {
      title: 'OpenGL Graphics Programming',
      description: 'Educational content and tutorials for OpenGL graphics programming. Covers shader programming, 3D rendering, and graphics optimization techniques.',
      created: '2020-2024',
      technologies: 'OpenGL, C++, Graphics Programming',
      role: 'Developer',
      view: 'https://github.com/psychicDree/OpenGL-Tutorials'
    }
  },
  {
    id: 8,
    slug: 'multiplayer-unity-sample',
    title: 'Multiplayer Unity Sample',
    category: 'game',
    year: '2019-2024',
    platform: 'GitHub',
    status: 'Open source',
    details: {
      title: 'Multiplayer Unity with Photon',
      description: 'Sample project demonstrating multiplayer game development using Unity and Photon networking. Includes lobby system, matchmaking, and real-time gameplay.',
      created: '2019-2024',
      technologies: 'Unity, C#, Photon, Multiplayer',
      role: 'Developer',
      view: 'https://github.com/psychicDree/Multiplyer-Sample-in-Unity-2019-using-Photon'
    }
  },
  {
    id: 9,
    slug: 'procedural-planet-generator',
    title: 'Procedural Planet Generator',
    category: 'game',
    year: '2020-2024',
    platform: 'GitHub',
    status: 'Open source',
    details: {
      title: 'Procedural Planet Generator',
      description: 'Procedural generation system for creating realistic planets with terrain, atmosphere, and biomes. Uses advanced noise algorithms and shader programming.',
      created: '2020-2024',
      technologies: 'Unity, C#, Shaders, Procedural Generation',
      role: 'Developer',
      view: 'https://github.com/psychicDree/Procedural-Planet'
    }
  },
  {
    id: 10,
    slug: 'game-development-math',
    title: 'Game Development Math',
    category: 'game',
    year: '2020-2024',
    platform: 'GitHub',
    status: 'Open source',
    details: {
      title: 'Game Development Mathematics',
      description: 'Mathematical utilities and algorithms commonly used in game development. Includes vector operations, collision detection, and physics calculations.',
      created: '2020-2024',
      technologies: 'C++, Mathematics, Game Physics',
      role: 'Developer',
      view: 'https://github.com/psychicDree/gamedev-maths-c-'
    }
  }
]

export function getProjectBySlug(slug: string): PortfolioItem | undefined {
  return portfolioItems.find((item) => item.slug === slug)
}
