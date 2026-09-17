const imageModules = import.meta.glob(
  [
    './assets/gallery/*.{jpg,jpeg,png,webp,avif}',
    './assets/gallery/*.{JPG,JPEG,PNG,WEBP,AVIF}'
  ],
  { eager: true, import: 'default' }
);

const metadata = {
  'M31-Andromeda-Galaxy': {
    title: 'M31 – Andromedagalaksen',
    type: 'Galakse',
    description: 'Vår nærmeste store spiralgalakse og et av de mest markante deep-sky-objektene på nordhimmelen.'
  },
  'M45-Pleiades': {
    title: 'M45 – Pleiadene',
    type: 'Åpen stjernehop',
    description: 'En lyssterk og lett gjenkjennelig stjernehop, også kjent som Sjustjernen.'
  },
  'M16-Eagle-Nebula': {
    title: 'M16 – Ørnetåken',
    type: 'Emisjonståke',
    description: 'Et stort område med glødende gass og aktiv stjernedannelse i stjernebildet Slangen.'
  },
  'M27-Dumbbell-Nebula': {
    title: 'M27 – Dumbbell Nebula',
    type: 'Planetarisk tåke',
    description: 'En av de mest lyssterke planetariske tåkene på himmelen, dannet av en døende stjerne.'
  },
  'NGC-281-Pacman-Nebula': {
    title: 'NGC 281 – Pacman-tåken',
    type: 'Emisjonståke',
    description: 'Et stjernedannende område i Cassiopeia med den karakteristiske Pacman-formen.'
  },
  'NGC-6888-Crescent-Nebula': {
    title: 'NGC 6888 – Crescent Nebula',
    type: 'Emisjonståke',
    description: 'En boblelignende tåke skapt av kraftig stjernevind fra en Wolf–Rayet-stjerne.'
  },
  'NGC-7000-North-America-Nebula-01': {
    title: 'NGC 7000 – Nord-Amerika-tåken',
    type: 'Emisjonståke',
    description: 'En stor emisjonståke i Svanen med en form som minner om kontinentet Nord-Amerika.'
  },
  'NGC-7000-North-America-Nebula-02': {
    title: 'NGC 7000 – Nord-Amerika-tåken',
    type: 'Emisjonståke',
    description: 'En stor emisjonståke i Svanen med en form som minner om kontinentet Nord-Amerika.'
  },
  'NGC-7023-Iris-Nebula': {
    title: 'NGC 7023 – Iris-tåken',
    type: 'Refleksjonståke',
    description: 'En blå refleksjonståke omgitt av mørke støvskyer i stjernebildet Kefeus.'
  },
  'NGC-7380-Wizard-Nebula': {
    title: 'NGC 7380 – Wizard Nebula',
    type: 'Emisjonståke',
    description: 'Et aktivt stjernedannende område i Kefeus med en form som har gitt tåken kallenavnet Wizard.'
  },
  'NGC-7635-Bubble-Nebula-01': {
    title: 'NGC 7635 – Bubble Nebula',
    type: 'Emisjonståke',
    description: 'En nesten kuleformet gassboble blåst ut av en massiv og energirik stjerne.'
  },
  'NGC-7635-Bubble-Nebula-02': {
    title: 'NGC 7635 – Bubble Nebula',
    type: 'Emisjonståke',
    description: 'En nesten kuleformet gassboble blåst ut av en massiv og energirik stjerne.'
  },
  'IC-1805-Heart-Nebula': {
    title: 'IC 1805 – Hjertetåken',
    type: 'Emisjonståke',
    description: 'En stor hydrogenrik emisjonståke i Cassiopeia, kjent for sin karakteristiske hjerteform.'
  },
  'IC-5070-Pelican-Nebula': {
    title: 'IC 5070 – Pelikantåken',
    type: 'Emisjonståke',
    description: 'En del av det samme store stjernedannende området som Nord-Amerika-tåken.'
  },
  'IC-1396-Elephants-Trunk-Nebula-01': {
    title: 'IC 1396 – Elephant’s Trunk',
    type: 'Emisjonståke',
    description: 'En mørk støvstruktur inne i det store IC 1396-komplekset i Kefeus.'
  },
  'IC-1396-Elephants-Trunk-Nebula-02': {
    title: 'IC 1396 – Elephant’s Trunk',
    type: 'Emisjonståke',
    description: 'En mørk støvstruktur inne i det store IC 1396-komplekset i Kefeus.'
  },
  'Sh2-101-Tulip-Nebula': {
    title: 'Sh2-101 – Tulip Nebula',
    type: 'Emisjonståke',
    description: 'En emisjonståke i Svanen, fotografert som et rikt felt av hydrogen og mørkt støv.'
  },
  'Sh2-136-Ghost-Nebula': {
    title: 'Sh2-136 – Ghost Nebula',
    type: 'Refleksjons- og mørketåke',
    description: 'Et komplekst område med støv og refleksjonståke i Kefeus.'
  },
  'Horsehead-and-Flame-Nebula': {
    title: 'Horsehead & Flame Nebula',
    type: 'Mørketåke / emisjonståke',
    description: 'Et ikonisk område i Orion med Hestehodet som mørk silhuett og den lysende Flammetåken ved siden av.'
  },
  'Veil-Nebula-01': {
    title: 'Veil Nebula',
    type: 'Supernovarest',
    description: 'Fine filamenter av glødende gass fra restene etter en eksplodert stjerne.'
  },
  'Veil-Nebula-02': {
    title: 'Veil Nebula',
    type: 'Supernovarest',
    description: 'Fine filamenter av glødende gass fra restene etter en eksplodert stjerne.'
  },
  'Veil-Nebula-03': {
    title: 'Veil Nebula',
    type: 'Supernovarest',
    description: 'Fine filamenter av glødende gass fra restene etter en eksplodert stjerne.'
  },
  'Comet-C-2025-A6-Lemmon': {
    title: 'C/2025 A6 (Lemmon)',
    type: 'Komet',
    description: 'En komet fotografert mot stjernebakgrunnen.'
  },
  'Sun-01': {
    title: 'Solen',
    type: 'Solen',
    description: 'Et detaljbilde av vår egen stjerne.'
  },
  'Sun-02': {
    title: 'Solen',
    type: 'Solen',
    description: 'Et detaljbilde av vår egen stjerne.'
  },
  'Moon-01': {
    title: 'Månen',
    type: 'Månen',
    description: 'Et detaljbilde av Månens overflate og kraterlandskap.'
  },
  'Moon-02': {
    title: 'Månen',
    type: 'Månen',
    description: 'Et detaljbilde av Månens overflate og kraterlandskap.'
  },
  'Moon-03': {
    title: 'Månen',
    type: 'Månen',
    description: 'Et detaljbilde av Månens overflate og kraterlandskap.'
  },
  'Moon-04': {
    title: 'Månen',
    type: 'Månen',
    description: 'Et detaljbilde av Månens overflate og kraterlandskap.'
  },
  'Partial-Solar-Eclipse-01': {
    title: 'Delvis solformørkelse',
    type: 'Solformørkelse',
    description: 'Den delvise solformørkelsen 12. august 2026.'
  },
  'Partial-Solar-Eclipse-02': {
    title: 'Delvis solformørkelse',
    type: 'Solformørkelse',
    description: 'Den delvise solformørkelsen 12. august 2026.'
  },
  'Partial-Solar-Eclipse-03': {
    title: 'Delvis solformørkelse',
    type: 'Solformørkelse',
    description: 'Den delvise solformørkelsen 12. august 2026.'
  },
  'Partial-Solar-Eclipse-04': {
    title: 'Delvis solformørkelse',
    type: 'Solformørkelse',
    description: 'Den delvise solformørkelsen 12. august 2026.'
  },
  'Partial-Solar-Eclipse-05': {
    title: 'Delvis solformørkelse',
    type: 'Solformørkelse',
    description: 'Den delvise solformørkelsen 12. august 2026.'
  },
  'Partial-Solar-Eclipse-06': {
    title: 'Delvis solformørkelse',
    type: 'Solformørkelse',
    description: 'Den delvise solformørkelsen 12. august 2026.'
  },
  'Partial-Solar-Eclipse-07': {
    title: 'Delvis solformørkelse',
    type: 'Solformørkelse',
    description: 'Den delvise solformørkelsen 12. august 2026.'
  }
};

function cleanName(filename) {
  return filename
    .replace(/\.[^.]+$/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function getMeta(base) {
  if (/^Nova-\d+$/i.test(base) || /^DJI_/i.test(base)) {
    return {
      title: 'Nova',
      type: 'Observatoriet · dronefoto',
      description: 'Nova sett fra luften.'
    };
  }

  if (metadata[base]) return metadata[base];

  return {
    title: cleanName(base),
    type: 'Astrofotografi',
    description: ''
  };
}

const imageItems = Object.entries(imageModules)
  .map(([path, image], index) => {
    const filename = path.split('/').pop();
    const base = filename.replace(/\.[^.]+$/, '');
    const meta = getMeta(base);

    return {
      id: `${base}-${index}`,
      image,
      filename,
      ...meta
    };
  })
  .sort((a, b) => {
    const order = [
      'NGC-7000-North-America-Nebula-01',
      'Nova-01',
      'M31-Andromeda-Galaxy',
      'Moon-01',
      'Horsehead-and-Flame-Nebula',
      'Partial-Solar-Eclipse-01',
      'IC-1805-Heart-Nebula',
      'Nova-02',
      'NGC-6888-Crescent-Nebula',
      'Sun-01',
      'M45-Pleiades',
      'Moon-02',
      'NGC-281-Pacman-Nebula',
      'Partial-Solar-Eclipse-02',
      'IC-5070-Pelican-Nebula',
      'Nova-03',
      'Sh2-101-Tulip-Nebula',
      'Sun-02',
      'NGC-7380-Wizard-Nebula',
      'Moon-03',
      'IC-1396-Elephants-Trunk-Nebula-01',
      'Partial-Solar-Eclipse-03',
      'M16-Eagle-Nebula',
      'Veil-Nebula-01',
      'Moon-04',
      'NGC-7635-Bubble-Nebula-01',
      'Partial-Solar-Eclipse-04',
      'NGC-7023-Iris-Nebula',
      'Veil-Nebula-02',
      'M27-Dumbbell-Nebula',
      'Partial-Solar-Eclipse-05',
      'Sh2-136-Ghost-Nebula',
      'IC-1396-Elephants-Trunk-Nebula-02',
      'Partial-Solar-Eclipse-06',
      'NGC-7635-Bubble-Nebula-02',
      'Veil-Nebula-03',
      'Comet-C-2025-A6-Lemmon',
      'Partial-Solar-Eclipse-07',
      'Dust-Nebula-Uncertain',
      'NGC-7000-North-America-Nebula-02'
    ];

    const rank = item => {
      const f = item.filename.replace(/\.[^.]+$/, '');
      const i = order.indexOf(f);
      return i === -1 ? 999 : i;
    };

    const ra = rank(a);
    const rb = rank(b);
    return ra !== rb ? ra - rb : a.title.localeCompare(b.title, 'nb');
  });

const videoItems = [
  {
    id: 'nova-youtube',
    title: 'Nova',
    type: 'Dronefilm',
    description: 'Dronefilm av Nova-observatoriet.',
    isVideo: true,
    youtubeId: 'Dz_Pn7RU4vY',
    thumbnail: 'https://img.youtube.com/vi/Dz_Pn7RU4vY/maxresdefault.jpg'
  }
];

export const galleryItems = [...imageItems, ...videoItems];
