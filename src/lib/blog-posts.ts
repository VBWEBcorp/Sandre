export type BlogCategory =
  | 'Évènements'
  | 'Gestes et Savoir-faire'
  | 'Historiettes autour du Vitrail'
  | "L'Énergie des Couleurs"
  | 'Styles de Vitraux & Mouvements Artistiques'

export const blogCategories: BlogCategory[] = [
  'Évènements',
  'Gestes et Savoir-faire',
  'Historiettes autour du Vitrail',
  "L'Énergie des Couleurs",
  'Styles de Vitraux & Mouvements Artistiques',
]

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  isoDate: string
  category: BlogCategory
  image: string
  author: string
  readMin: number
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'equilibre-de-teyvat',
    title: "L'Équilibre de Teyvat, un vitrail Genshin Impact",
    excerpt:
      "Retour sur la création d'un vitrail hommage à l'univers de Genshin Impact : géométrie sacrée, palette à sept éléments et jeu de lumière pour un jeune collectionneur passionné.",
    date: '13 septembre 2025',
    isoDate: '2025-09-13',
    category: "L'Énergie des Couleurs",
    image:
      'https://i.ibb.co/jZD5w6g7/Iris-bleu-de-mediterranee-scaled-1200x1600.jpg',
    author: 'Sandre Casse',
    readMin: 4,
  },
  {
    slug: 'petite-tour-eiffel-rose',
    title: 'La Petite Tour Eiffel Rose à Paris',
    excerpt:
      'Une commande surprise : miniaturiser la Dame de Fer et la faire briller en nuances roses pour une chambre d\'enfant parisienne. Entre patrimoine et douceur.',
    date: '9 juillet 2025',
    isoDate: '2025-07-09',
    category: 'Historiettes autour du Vitrail',
    image:
      'https://i.ibb.co/b5DDRY7W/Un-Salon-Cosy-scaled.webp',
    author: 'Sandre Casse',
    readMin: 3,
  },
  {
    slug: 'parcours-metiers-dart-paris-7',
    title: "Parcours des Métiers d'Art, Paris 7",
    excerpt:
      "L'atelier ouvre ses portes pour le Parcours des Métiers d'Art du 7ᵉ arrondissement. Démonstrations de coupe, sertissage au plomb, rencontres avec les collectionneurs.",
    date: '3 avril 2024',
    isoDate: '2024-04-03',
    category: 'Évènements',
    image:
      'https://i.ibb.co/YBcv55YJ/Vitrail-fusion-ancien-et-modernite-scaled.webp',
    author: 'Sandre Casse',
    readMin: 2,
  },
  {
    slug: 'jema-2024-azulejos-en-vitrail',
    title: 'JEMA 2024, Les Azulejos en vitrail',
    excerpt:
      "Pour les Journées Européennes des Métiers d'Art 2024, l'atelier présente sa série d'Azulejos contemporains, lecture verrière des carreaux portugais, bleus et or.",
    date: '26 mars 2024',
    isoDate: '2024-03-26',
    category: 'Évènements',
    image:
      'https://i.ibb.co/zhSGv7y9/Chemin-de-Lumiere-de-nuit-1-scaled.webp',
    author: 'Sandre Casse',
    readMin: 5,
  },
  {
    slug: 'plomb-substitut-vitrail',
    title: 'Plomb : bientôt un substitut dans l\'artisanat du vitrail ?',
    excerpt:
      "Recherches, expérimentations, baguettes H sans plomb : l'avenir du vitrail écologique. Un tour d'horizon des alternatives et de leur fiabilité à dix ans.",
    date: '23 février 2023',
    isoDate: '2023-02-23',
    category: 'Gestes et Savoir-faire',
    image: 'https://i.ibb.co/6q13ykw/Des-Ronds-dans-l-Eau-Vitrail-1-scaled.webp',
    author: 'Sandre Casse',
    readMin: 6,
  },
  {
    slug: 'art-deco-une-matiere-qui-chante',
    title: 'Art Déco, une matière qui chante',
    excerpt:
      'Relire l\'Art Déco à la lueur du vitrail contemporain : géométrie, or, bleu profond, et la rigueur du trait qui ne faiblit pas. Histoire d\'un mouvement qui n\'a jamais vieilli.',
    date: '15 janvier 2023',
    isoDate: '2023-01-15',
    category: 'Styles de Vitraux & Mouvements Artistiques',
    image:
      'https://i.ibb.co/B5d8bn2x/Gouttes-d-Or-et-d-Ambres-couloir-1152x1536.webp',
    author: 'Sandre Casse',
    readMin: 7,
  },
]
