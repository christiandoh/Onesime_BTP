export interface Service {
  id: string
  title: string
  desc: string
  icon: string
  image: string
}

export interface Stat {
  value: string
  label: string
}

export interface Feature {
  icon: string
  title: string
  desc: string
}

export interface Material {
  id: string
  title: string
  desc: string
  image: string
}

export interface ProcessStep {
  num: string
  title: string
  desc: string
}

export interface Testimonial {
  name: string
  role: string
  text: string
  image: string
}

export interface Article {
  id: string
  title: string
  excerpt: string
  date: string
  category: string
  image: string
}

export interface Project {
  title: string
  category: string
  location: string
  image: string
}

export interface Client {
  name: string
  logo: string
}

export interface GalleryItem {
  src: string
  category: string
  title: string
}

export interface Contact {
  phone1: string
  phone2: string
  whatsapp: string
  address: string
  email: string
}

export interface EmailContact {
  label: string
  address: string
}

export const ONESIME = {
  name: 'Onesime BTP',
  slogan: "Votre partenaire de confiance en BTP",
  tagline: "Livraison de sable, gravier et latérite pour vos chantiers à Abidjan et en Côte d'Ivoire.",

  contact: {
    phone1: '+225 07 09 45 09 70',
    phone2: '+225 07 79 85 07 81',
    whatsapp: '2250709450970',
    address: 'Abidjan, Côte d\'Ivoire',
    email: 'contact@onesimebtp.com',
  } as Contact,

  emails: [
    { label: 'Direction', address: 'fabrice.krouba@onesime-btp.com' },
    { label: 'Secrétariat', address: 'secretariat@onesime-btp.com' },
    { label: 'Commercial', address: 'reine.poele@onesime-btp.com' },
  ] as EmailContact[],

  heroStats: [
    { value: '500+', label: 'Chantiers livrés' },
    { value: '8+', label: "Années d'expérience" },
    { value: '7j/7', label: 'Disponibilité' },
  ] as Stat[],

  clients: [
    { name: 'Schneider Electric', logo: '/images/partenaire/Schneider Electric_LOGO.webp' },
    { name: 'ABB', logo: '/images/partenaire/ABB.png' },
    { name: 'Legrand', logo: '/images/partenaire/logo-legrand-electricals-brand-vector-graphics-png-favpng-59cQzQaysFiRABpy9zaVnAkYZ.jpg' },
    { name: 'SKF', logo: '/images/partenaire/SKF_logo.png' },
    { name: 'SOTACI', logo: '/images/partenaire/SOTACI_LOGO.jpg' },
    { name: 'SIPPEC', logo: '/images/partenaire/SIPPEC_logo.jpg' },
    { name: 'SPERONI', logo: '/images/partenaire/SPERONI_LOGO.png' },
    { name: 'Bernabe', logo: '/images/partenaire/bernabe_logo.jpg' },
    { name: 'HOF Hydraulic', logo: '/images/partenaire/hof_hydraulic_logo.jpg' },
    { name: 'Bati+PRO', logo: '/images/partenaire/Bati+PRO_LOGO.png' },
  ] as Client[],

  services: [
    {
      id: 'gravier',
      title: 'Fourniture de Gravier',
      desc: 'Gravier concassé de qualité supérieure pour fondations, béton et travaux routiers.',
      icon: 'Layers',
      image: '/images/services/gravier.jpg',
    },
    {
      id: 'sable',
      title: 'Fourniture de Sable',
      desc: 'Sable fin et sable de rivière pour mortier, enduits et tous travaux de maçonnerie.',
      icon: 'Wind',
      image: '/images/services/sable.jpg',
    },
    {
      id: 'laterite',
      title: 'Fourniture de Latérite',
      desc: 'Latérite pour remblai, voiries, fondations et aménagements de terrain.',
      icon: 'Box',
      image: '/images/services/laterite.jpg',
    },
    {
      id: 'camions',
      title: 'Location Camions Benne',
      desc: 'Mise à disposition de camions benne pour le transport de matériaux sur vos chantiers.',
      icon: 'Truck',
      image: '/images/services/service-8.jpeg',
    },
    {
      id: 'gros-oeuvre',
      title: 'Gros Œuvre BTP',
      desc: 'Terrassement, fondations, maçonnerie et béton armé pour tous types de constructions.',
      icon: 'Building2',
      image: '/images/services/batiment.jpeg',
    },
    {
      id: 'construction',
      title: 'Construction Complète',
      desc: 'Réalisation de bâtiments résidentiels et commerciaux, du gros œuvre aux finitions.',
      icon: 'Building',
      image: '/images/services/maison_fini.jpeg',
    },
    {
      id: 'electricite',
      title: 'Électricité Industrielle',
      desc: 'Installation et maintenance électrique pour l\'industrie, le commerce et le résidentiel.',
      icon: 'Zap',
      image: '/images/electricite/electrique-1.jpeg',
    },
    {
      id: 'eclairage',
      title: 'Éclairage Public',
      desc: 'Solutions d\'éclairage public LED, lampadaires intelligents et mise en lumière architecturale.',
      icon: 'Sun',
      image: '/images/eclairage/eclairage-1.jpeg',
    },
    {
      id: 'domotique',
      title: 'Domotique & Maison Connectée',
      desc: 'Automatisation des bâtiments, contrôle à distance, sécurité intelligente et gestion énergétique.',
      icon: 'Monitor',
      image: '/images/domotique/domotique-1.jpeg',
    },
    {
      id: 'genie-civil',
      title: 'Génie Civil',
      desc: 'Construction d\'ouvrages de génie civil, réalisation d\'infrastructures publiques et privées, travaux d\'aménagement et d\'assainissement.',
      icon: 'Building2',
      image: '/images/projects/project-25.jpeg',
    },
    {
      id: 'tce',
      title: 'Tous Corps d\'État (TCE)',
      desc: 'Coordination complète de tous les corps de métier pour vos projets : second œuvre, finitions, suivi et livraison clé en main.',
      icon: 'Building',
      image: '/images/projects/project-26.jpeg',
    },
  ] as Service[],

  materials: [
    {
      id: 'sable',
      title: 'Sable',
      desc: 'Sable fin et propre pour mortier, enduits, béton et travaux de maçonnerie. Disponible en petite ou grande quantité.',
      image: '/images/services/sable.jpg',
    },
    {
      id: 'gravier',
      title: 'Gravier',
      desc: 'Gravier concassé calibré pour fondations, dalles béton, voiries et travaux de génie civil.',
      image: '/images/services/gravier.jpg',
    },
    {
      id: 'laterite',
      title: 'Latérite',
      desc: 'Latérite rouge pour remblai, voiries rurales, fondations légères et aménagements de terrain.',
      image: '/images/services/laterite.jpg',
    },
  ] as Material[],

  features: [
    { icon: 'Clock', title: 'Livraison rapide', desc: 'Livraison sous 24h à Abidjan et dans les localités environnantes.' },
    { icon: 'BadgeCheck', title: 'Qualité certifiée', desc: 'Matériaux rigoureusement sélectionnés et contrôlés avant chaque livraison.' },
    { icon: 'Tag', title: 'Prix compétitifs', desc: 'Meilleurs tarifs du marché avec possibilité de devis personnalisé.' },
  ] as Feature[],

  stats: [
    { value: '500+', label: 'Chantiers approvisionnés' },
    { value: '8+', label: "Années d'expérience" },
    { value: '50+', label: 'Camions disponibles' },
    { value: '7j/7', label: 'Service disponible' },
  ] as Stat[],

  processSteps: [
    { num: '01', title: 'Contact', desc: 'Appelez-nous ou remplissez le formulaire de devis en ligne.' },
    { num: '02', title: 'Devis', desc: 'Nous vous envoyons une offre personnalisée sous 2h.' },
    { num: '03', title: 'Confirmation', desc: 'Validez le devis et confirmez la date de livraison.' },
    { num: '04', title: 'Livraison', desc: 'Livraison sur votre chantier dans les délais convenus.' },
  ] as ProcessStep[],

  testimonials: [
    {
      name: 'Kouadio Alain',
      role: 'Promoteur immobilier, Cocody',
      text: 'Livraison rapide et ponctuelle. Le sable était de très bonne qualité. Je recommande Onesime BTP sans hésitation pour vos chantiers à Abidjan.',
      image: '/images/testimonials/avatar-1.jpeg',
    },
    {
      name: 'Aminata Touré',
      role: 'Ingénieure BTP, Yopougon',
      text: 'Prix compétitifs et équipe très professionnelle. On a eu notre commande de gravier en moins de 24 heures. Excellent service !',
      image: '/images/testimonials/avatar-2.jpeg',
    },
    {
      name: "N'Guessan Didier",
      role: 'Chef de chantier, Bingerville',
      text: "Disponibles le week-end, c'est rare ! Nous avons besoin de latérite en urgence et ils ont livré le samedi matin. Très satisfait.",
      image: '/images/testimonials/avatar-3.jpeg',
    },
    {
      name: 'Fatima Ouattara',
      role: 'Directrice des opérations, Plateau',
      text: 'Un service fiable et ponctuel. La qualité des matériaux est constante et les livraisons toujours à l\'heure. Je recommande vivement.',
      image: '/images/testimonials/avatar-4.jpeg',
    },
  ] as Testimonial[],

  projects: [
    { title: 'Construction Siège Social – Groupe SIFCA', category: 'Génie Civil', location: 'Abidjan, Plateau', image: '/images/projects/project-24.jpeg' },
    { title: 'Pont de Yamoussoukro', category: 'Génie Civil', location: 'Yamoussoukro', image: '/images/projects/project-25.jpeg' },
    { title: 'Installation Électrique – Zone Industrielle', category: 'Électricité', location: 'Abidjan, Zone 3', image: '/images/projects/project-26.jpeg' },
    { title: 'Lotissement 500 Parcelles', category: 'Gros Œuvre', location: 'Cocody, Abidjan', image: '/images/projects/project-29.jpeg' },
    { title: 'Éclairage Public – Ville de Bouaké', category: 'Éclairage', location: 'Bouaké', image: '/images/eclairage/eclairage-1.jpeg' },
    { title: 'Villa Domotique – Riviera', category: 'Domotique', location: 'Abidjan, Riviera', image: '/images/domotique/domotique-1.jpeg' },
    { title: 'Fourniture de Matériaux – Autoroute du Nord', category: 'Fourniture', location: 'Abidjan – Bouaké', image: '/images/services/service-8.jpeg' },
    { title: "Transport d'Engins Lourds – Port de San Pedro", category: 'Transport', location: 'San Pedro', image: '/images/projects/project-31.jpeg' },
    { title: 'Réseau Électrique – Zone Industrielle', category: 'Électricité', location: 'Abidjan, Yopougon', image: '/images/electricite/electrique-1.jpeg' },
    { title: 'Installation Tableau Électrique', category: 'Électricité', location: 'Abidjan, Cocody', image: '/images/electricite/electrique-2.jpeg' },
    { title: 'Câblage Industriel', category: 'Électricité', location: 'Abidjan, Zone 4', image: '/images/electricite/electrique-3.jpeg' },
    { title: 'Éclairage Public LED – Boulevards', category: 'Éclairage', location: 'Abidjan, Plateau', image: '/images/eclairage/eclairage-2.jpeg' },
    { title: 'Éclairage Urbain Connecté', category: 'Éclairage', location: 'Abidjan, Cocody', image: '/images/eclairage/eclairage-3.jpeg' },
    { title: 'Domotique – Villa Intelligente', category: 'Domotique', location: 'Abidjan, Riviera', image: '/images/domotique/domotique-2.jpeg' },
    { title: 'Système Domotique Complet', category: 'Domotique', location: 'Abidjan, Marcory', image: '/images/domotique/domotique-3.jpeg' },
    { title: 'Automatisation de Bâtiment', category: 'Domotique', location: 'Abidjan, Plateau', image: '/images/domotique/domotique-5.jpeg' },
  ] as Project[],

  gallery: [
    { src: '/images/gallery/gallery-1.jpeg', category: 'Chantier', title: 'Grue au coucher du soleil' },
    { src: '/images/gallery/gallery-2.jpeg', category: 'Chantier', title: 'Échafaudage sur chantier' },
    { src: '/images/gallery/gallery-3.jpeg', category: 'Construction', title: 'Bâtiment en construction' },
    { src: '/images/gallery/gallery-4.jpeg', category: 'Équipe', title: 'Équipe de construction' },
    { src: '/images/gallery/gallery-5.jpeg', category: 'Engins', title: 'Pelleteuse sur chantier' },
    { src: '/images/gallery/gallery-6.jpeg', category: 'Infrastructure', title: 'Pont en construction' },
    { src: '/images/gallery/gallery-7.jpeg', category: 'Engins', title: 'Engin de chantier' },
    { src: '/images/gallery/gallery-8.jpeg', category: 'Architecture', title: 'Immeuble moderne' },
    { src: '/images/gallery/gallery-9.jpeg', category: 'Équipe', title: 'Ouvrier sur chantier' },
    { src: '/images/gallery/gallery-10.jpeg', category: 'Ingénierie', title: 'Ingénieur avec plans' },
    { src: '/images/gallery/gallery-11.jpeg', category: 'Architecture', title: 'Façade en verre moderne' },
    { src: '/images/gallery/gallery-12.jpeg', category: 'Outillage', title: 'Équipement de chantier' },
  ],

  actualites: [
    {
      id: 'chantier-2025',
      title: 'Nouveau chantier : Construction du siège social SIFCA',
      excerpt: 'Onesime BTP débute les travaux du nouveau siège social du Groupe SIFCA à Abidjan Plateau. Un projet d\'envergure de 12 mois.',
      date: '15 Mai 2026',
      category: 'Chantier',
      image: '/images/projects/project-24.jpeg',
    },
    {
      id: 'electricite-2025',
      title: 'Installation électrique zone industrielle – Projet achevé',
      excerpt: 'Nous avons livré l\'installation électrique complète d\'une usine de 5000 m² dans la zone industrielle de Yopougon.',
      date: '02 Avril 2026',
      category: 'Réalisation',
      image: '/images/electricite/electrique-5.jpeg',
    },
    {
      id: 'partenariat-2025',
      title: 'Onesime BTP partenaire officiel de Schneider Electric',
      excerpt: 'Un partenariat stratégique pour offrir des solutions électriques de pointe à nos clients dans toute la Côte d\'Ivoire.',
      date: '10 Mars 2026',
      category: 'Partenariat',
      image: '/images/partenaire/Schneider Electric_LOGO.webp',
    },
    {
      id: 'domotique-2025',
      title: 'La domotique au service du confort moderne',
      excerpt: 'Découvrez comment nos solutions domotiques transforment les villas et appartements en espaces connectés et intelligents.',
      date: '20 Février 2026',
      category: 'Conseil',
      image: '/images/domotique/domotique-4.jpeg',
    },
  ],
}
