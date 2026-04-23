export const categories = [
  'Intimité & Vis-à-vis',
  'Donner du style & cacher',
  'Lumière en second jour',
  "Séparation d'espace",
  'Rénovations pour nouveaux châssis',
  'Patrimoine & Restauration',
  'Tableau en vitrail',
  'Trophée, objet déco, cadeaux sur-mesure',
] as const

export type Category = (typeof categories)[number]

export type Work = {
  slug: string
  title: string
  year?: string
  location: string
  categories: Category[]
  description: string
  image: string
}

export const works: Work[] = [
  {
    slug: 'gouttes-dor-et-dambre',
    title: "Gouttes d'Or et d'Ambre",
    year: '2025',
    location: 'Couloir, Résidence privée, Paris 7ᵉ',
    categories: ['Intimité & Vis-à-vis', 'Lumière en second jour'],
    description:
      'Une composition verticale qui fait ruisseler la lumière dorée le long d\'un couloir haussmannien, comme des gouttes d\'ambre suspendues dans le verre soufflé. Préserve l\'intimité tout en amenant de la lumière en second jour.',
    image:
      'https://i.ibb.co/B5d8bn2x/Gouttes-d-Or-et-d-Ambres-couloir-1152x1536.webp',
  },
  {
    slug: 'fusion-ancien-modernite',
    title: 'Fusion, Ancien & Modernité',
    year: '2024',
    location: 'Salon, Appartement bourgeois, Paris 17ᵉ',
    categories: [
      'Donner du style & cacher',
      "Séparation d'espace",
      'Patrimoine & Restauration',
    ],
    description:
      'Dialogue subtil entre motifs Art Déco et géométrie contemporaine. Les verres texturés, cathédrales et pressés s\'assemblent au plomb fin pour réinventer l\'esprit d\'origine tout en cachant une vue peu flatteuse.',
    image:
      'https://i.ibb.co/YBcv55YJ/Vitrail-fusion-ancien-et-modernite-scaled.webp',
  },
  {
    slug: 'chemin-de-lumiere',
    title: 'Chemin de Lumière',
    year: '2024',
    location: "Cage d'escalier, Hôtel particulier",
    categories: [
      'Lumière en second jour',
      'Donner du style & cacher',
      'Rénovations pour nouveaux châssis',
    ],
    description:
      'Un vitrail haussmannien rehaussé d\'un liseré jaune orangé, qui trace un chemin de lumière dans l\'escalier de nuit comme de jour. Adapté à un nouveau châssis en bois massif sur-mesure.',
    image:
      'https://i.ibb.co/zhSGv7y9/Chemin-de-Lumiere-de-nuit-1-scaled.webp',
  },
  {
    slug: 'iris-de-mediterranee',
    title: "L'Iris de Méditerranée",
    year: '2023',
    location: 'Villa provençale, Côte d\'Azur',
    categories: ['Tableau en vitrail', 'Trophée, objet déco, cadeaux sur-mesure'],
    description:
      'Un iris stylisé aux bleus profonds, offert pour 25 ans de mariage. La fleur typique du pourtour méditerranéen, symbole d\'espoir et de fidélité. Pièce encadrée, présentée comme un tableau.',
    image:
      'https://i.ibb.co/jZD5w6g7/Iris-bleu-de-mediterranee-scaled-1200x1600.jpg',
  },
  {
    slug: 'des-ronds-dans-leau',
    title: "Des Ronds dans l'Eau",
    year: '2023',
    location: "Salle de bain, Maison d'architecte, Dinard",
    categories: ['Intimité & Vis-à-vis', 'Tableau en vitrail'],
    description:
      'Courbes concentriques et cabochons bullés évoquent le mouvement lent d\'une pierre jetée à la surface de l\'étang. Un vitrail contemporain, minimal et vibrant, qui cache la vue sans occulter la lumière.',
    image: 'https://i.ibb.co/6q13ykw/Des-Ronds-dans-l-Eau-Vitrail-1-scaled.webp',
  },
  {
    slug: 'un-salon-cosy',
    title: 'Un Salon Cosy',
    year: '2022',
    location: "Hôtel particulier, Nantes",
    categories: [
      "Séparation d'espace",
      'Intimité & Vis-à-vis',
      'Rénovations pour nouveaux châssis',
    ],
    description:
      'Quatre panneaux jumeaux qui ferment un salon tout en laissant filtrer la lumière. Motifs floraux, verres mouchetés, cadres en plomb patiné à l\'ancienne, montés sur menuiseries neuves.',
    image: 'https://i.ibb.co/b5DDRY7W/Un-Salon-Cosy-scaled.webp',
  },
]

export const workImages = works.map((w) => w.image)

// Compte d'œuvres par catégorie (pour afficher les filtres pertinents)
export function worksByCategory(category: Category): Work[] {
  return works.filter((w) => w.categories.includes(category))
}
