export type Testimonial = {
  name: string
  role: string
  location: string
  date: string
  text: string
  stars: number
  pro?: boolean
}

export const testimonials: Testimonial[] = [
  {
    name: 'Sylvia Maucuer',
    role: 'Particulier',
    location: 'Paris',
    date: '02 / 2024',
    text: "L'Énergie des Couleurs, juste un mot pour tirer mon chapeau à cet atelier et surtout à sa dirigeante qui, par son professionnalisme, a su restaurer un bar en verre. Départ : problème compliqué. Arrivée : travail parfait. Étapes : savoir écouter, savoir faire. Bravo.",
    stars: 5,
  },
  {
    name: 'Élisabeth Simon',
    role: 'Particulier',
    location: 'Puteaux',
    date: '12 / 2023',
    text: "Un défi relevé à merveille. J'avais une envie de vitrail pour faire rentrer de la lumière dans une entrée, mais : immeuble moderne, portes en PVC ou équivalent, cela serait-il possible ? J'ai été accueillie très aimablement, madame Casse est venue chez moi pour examiner la faisabilité du projet et s'imprégner de l'ambiance. Plusieurs projets m'ont été proposés. Le résultat est celui attendu en tous points. J'ai apprécié les conseils, la disponibilité, la rigueur et bien sûr l'artiste.",
    stars: 5,
  },
  {
    name: 'Isabelle Parisot',
    role: 'Particulier',
    location: 'Paris 13',
    date: '10 / 2023',
    text: "Un rêve devenu réalité. L'équipe d'Énergie des Couleurs a rendu réel avec brio un de mes rêves : avoir un vitrail chez moi. Personnalisation, travail soigné, sur-mesure, à l'écoute de mon histoire. Je suis émerveillée par le résultat. Belle rencontre et beaucoup de professionnalisme. MERCI !",
    stars: 5,
  },
  {
    name: 'Diane Bacquart',
    role: 'Particulier',
    location: 'Paris 7',
    date: '04 / 2023',
    text: "Je suis allée à l'atelier lors des Journées Internationales des Métiers d'Art. Très bon accueil. Une personne passionnée qui m'a expliqué clairement son métier, les diverses techniques de vitraux, le travail du verre selon les époques et bien d'autres choses. J'ai vu ses vitraux qui sont magnifiques. Je suis sortie de là, les yeux remplis de couleurs, de textures et de beauté.",
    stars: 5,
  },
  {
    name: 'Gil Fontbonne',
    role: 'Particulier',
    location: 'Paris 12',
    date: '01 / 2023',
    text: "Nous avons apprécié votre travail de par votre écoute et la réalisation du projet. Très beau résultat. Merci.",
    stars: 5,
  },
  {
    name: 'Jean-Pierre Bourbonneux',
    role: 'Particulier',
    location: 'Paris 8',
    date: '03 / 2022',
    text: "Je suis très satisfait de la prestation de madame Casse Sandre. Une grande professionnelle. Un travail soigné et de très grande qualité. Le résultat est impressionnant. Je n'hésiterai pas une seconde, dans le futur, à refaire appel à ses services et je peux sans crainte la conseiller à mon entourage.",
    stars: 5,
  },
  {
    name: 'Odile de Préval',
    role: 'Particulier',
    location: 'Paris 7',
    date: '02 / 2022',
    text: "Sandre Casse, qui dirige l'atelier, nous a réalisé un très beau vitrail sur-mesure pour la fenêtre d'une salle de bains, dans les tons du lieu. La composition et les couleurs ont été d'emblée parfaites. Sandre est de très bon conseil et perfectionniste. Résultat magnifique. Merci.",
    stars: 5,
  },
  {
    name: 'Serge Baranes',
    role: "SB Investissements, Agence de rénovation et de décoration",
    location: 'Paris',
    date: '12 / 2021',
    text: "Merci madame pour votre disponibilité et votre travail remarquable.",
    stars: 5,
    pro: true,
  },
  {
    name: 'Anna Taurino',
    role: 'AT Studio, Architecte',
    location: 'Paris',
    date: '11 / 2021',
    text: "Le savoir-faire de l'artisanat d'art est à protéger et à valoriser. Le beau travail que vous avez réalisé, vos compétences et votre professionnalisme le confirment. Merci.",
    stars: 5,
    pro: true,
  },
]
