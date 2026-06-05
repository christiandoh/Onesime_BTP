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
      id: 'domotique',
      title: 'Domotique & Maison Connectée',
      desc: 'Nous concevons et déployons des solutions intelligentes permettant la gestion centralisée des bâtiments modernes. Nos systèmes offrent le contrôle à distance de l\'éclairage, de la climatisation, des ouvrants, de la sécurité, de la vidéosurveillance et de la consommation énergétique via smartphone, tablette ou ordinateur. Grâce à notre expertise en BTP et en technologies connectées, nous accompagnons les particuliers, entreprises et promoteurs immobiliers dans la réalisation de bâtiments intelligents, sécurisés et économes en énergie.',
      icon: 'Monitor',
      image: '/images/services/domotique_principal.jpg',
    },
    {
      id: 'tce',
      title: 'Tous Corps d\'État (TCE)',
      desc: 'Notre entreprise assure la réalisation complète de projets de construction, de rénovation et d\'aménagement de bâtiments en coordonnant l\'ensemble des corps de métier nécessaires à leur exécution. Grâce à notre expertise en Tous Corps d\'État (TCE), nous prenons en charge toutes les phases du chantier, depuis les études techniques jusqu\'à la livraison finale de l\'ouvrage. Nos prestations couvrent notamment : le gros œuvre et le génie civil, la maçonnerie et le béton armé, la charpente et la couverture, la plomberie et les sanitaires, l\'électricité bâtiment, la climatisation, les revêtements, la menuiserie, la peinture, les aménagements, la domotique et la sécurité.',
      icon: 'Building',
      image: '/images/services/tce_btp.jpg',
    },
    {
      id: 'gros-oeuvre',
      title: 'Gros Œuvre BTP',
      desc: 'Le service Gros Œuvre prend en charge la réalisation des éléments structurels essentiels d\'un projet de construction. Il garantit la conformité des ouvrages aux normes techniques, la sécurité des utilisateurs et la durabilité des bâtiments. Prestations incluses : études techniques, terrassement, fondations, semelles, longrines, radiers, murs porteurs, voiles en béton armé, poteaux, poutres, dalles, structures en béton armé, planchers, escaliers, maçonnerie générale, charpentes en béton et mise hors d\'eau.',
      icon: 'Building2',
      image: '/images/chantier/chantier_bingerville.jpg',
    },
    {
      id: 'eclairage',
      title: 'Éclairage Public',
      desc: 'Notre entreprise assure l\'étude, la fourniture, l\'installation, la rénovation et la maintenance des systèmes d\'éclairage public destinés aux infrastructures urbaines, routières, industrielles et résidentielles. Nos prestations comprennent : études techniques et dimensionnement des réseaux, fourniture et pose de candélabres, mâts et luminaires, installation de lampadaires LED, réseaux électriques souterrains et aériens, armoires de commande et de gestion, éclairage solaire autonome, éclairage des voiries, parkings, espaces publics, génie civil associé, maintenance préventive et corrective, modernisation et mise aux normes.',
      icon: 'Sun',
      image: '/images/services/eclairage_principal.jpg',
    },
    {
      id: 'electricite',
      title: 'Électricité Industrielle',
      desc: 'L\'entreprise intervient dans la conception, l\'exécution, l\'installation, la maintenance et la réhabilitation d\'infrastructures industrielles et techniques. Ses activités comprennent : réalisation de bâtiments industriels, usines et entrepôts, génie civil industriel, fondations spéciales, structures métalliques, installation et maintenance des réseaux électriques haute et basse tension, automatisation industrielle, tuyauterie industrielle, systèmes de sécurité et contrôle d\'accès, vidéosurveillance, protection incendie, solutions de domotique et gestion technique des bâtiments, maintenance préventive et corrective.',
      icon: 'Zap',
      image: '/images/services/electricite_industrielle.jpg',
    },
    {
      id: 'camions',
      title: 'Location Camions Benne',
      desc: 'Notre entreprise met à la disposition de ses clients un service de location de camions-bennes adapté aux besoins des chantiers de bâtiment, de génie civil et de travaux publics. Nos véhicules sont conçus pour assurer le transport efficace et sécurisé de matériaux tels que le sable, le gravier, la latérite, les déblais, les gravats, les déchets de chantier et autres agrégats. Nous proposons des solutions flexibles de location avec ou sans contrat de longue durée, accompagnées d\'opérateurs qualifiés, afin d\'assurer une gestion optimale du transport des matériaux sur les chantiers.',
      icon: 'Truck',
      image: '/images/transport_machine_BTP/camion_beine.jpg',
    },
    {
      id: 'gravier',
      title: 'Fourniture de Gravier',
      desc: 'Nous assurons l\'approvisionnement, la commercialisation et la livraison de sable, gravier, gravillons, latérite et autres matériaux de carrière destinés aux travaux de bâtiment, de génie civil et d\'aménagement urbain. Notre engagement est de fournir des matériaux de qualité dans le respect des délais et des exigences techniques de nos clients.',
      icon: 'Layers',
      image: '/images/services/gravier.jpg',
    },
    {
      id: 'sable',
      title: 'Fourniture de Sable',
      desc: 'Nous assurons l\'approvisionnement, la commercialisation et la livraison de sable, gravier, gravillons, latérite et autres matériaux de carrière destinés aux travaux de bâtiment, de génie civil et d\'aménagement urbain. Notre engagement est de fournir des matériaux de qualité dans le respect des délais et des exigences techniques de nos clients.',
      icon: 'Wind',
      image: '/images/services/sable.jpg',
    },
    {
      id: 'laterite',
      title: 'Fourniture de Latérite',
      desc: 'Nous assurons l\'approvisionnement, la commercialisation et la livraison de sable, gravier, gravillons, latérite et autres matériaux de carrière destinés aux travaux de bâtiment, de génie civil et d\'aménagement urbain. Notre engagement est de fournir des matériaux de qualité dans le respect des délais et des exigences techniques de nos clients.',
      icon: 'Box',
      image: '/images/services/laterite.jpg',
    },
    {
      id: 'construction',
      title: 'Construction Complète',
      desc: 'Réalisation de bâtiments résidentiels et commerciaux, du gros œuvre aux finitions.',
      icon: 'Building',
      image: '/images/services/maison_fini.jpeg',
    },
    {
      id: 'genie-civil',
      title: 'Génie Civil',
      desc: 'Le génie civil constitue l\'un des principaux domaines d\'intervention de notre entreprise. Nous réalisons des études, la conception, la construction, la réhabilitation et la maintenance d\'ouvrages de génie civil destinés aux secteurs public et privé. Nos compétences couvrent notamment la réalisation de bâtiments, routes, voiries et réseaux divers (VRD), ouvrages d\'assainissement, ouvrages hydrauliques, fondations, plateformes industrielles, murs de soutènement, ouvrages d\'art et infrastructures diverses. Grâce à une équipe qualifiée et à des équipements adaptés, nous assurons l\'exécution des travaux dans le respect des normes techniques, des exigences de qualité, des délais contractuels et des règles de sécurité.',
      icon: 'Building2',
      image: '/images/services/genicivil.jpg',
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
      role: 'Promoteur immobilier, Yamoussoukro',
      text: 'Livraison rapide et ponctuelle. Le sable était de très bonne qualité. Je recommande Onesime BTP sans hésitation pour vos chantiers à Abidjan.',
      image: '/images/testimonials/avatar-6.jpg',
    },
    {
      name: 'Don Kapeu Josias',
      role: 'Ingénieure BTP, Man',
      text: 'Prix compétitifs et équipe très professionnelle. On a eu notre commande de gravier en moins de 24 heures. Excellent service !',
      image: '/images/testimonials/avatar-5.jpg',
    },
    {
      name: "kouakou Ange Mari",
      role: 'Chef de chantier, Bingerville',
      text: "Disponibles le week-end, c'est rare ! Nous avons besoin de latérite en urgence et ils ont livré le samedi matin. Très satisfait.",
      image: '/images/testimonials/avatar-3.jpeg',
    },
    {
      name: 'Fatima Ouattara',
      role: 'Directrice des opérations, Gagnoa',
      text: 'Un service fiable et ponctuel. La qualité des matériaux est constante et les livraisons toujours à l\'heure. Je recommande vivement.',
      image: '/images/testimonials/avatar-4.jpeg',
    },
  ] as Testimonial[],

  projects: [
    { title: 'Construction Siège Social – Groupe SIFCA', category: 'Génie Civil', image: '/images/projects/project-24.jpeg' },
    { title: 'Maison en finission', category: 'Génie Civil', image: '/images/projects/project-25.jpeg' },
    { title: 'Installation Tableau Électrique – Bâtiment', category: 'Génie Civil', image: '/images/electricite/electrique-1.jpeg' },
    { title: 'Maintenance Électrique – Industrie', category: 'Génie Civil', image: '/images/electricite/electrique-2.jpeg' },
    { title: 'Réseaux Haute Tension – Industriels', category: 'Génie Civil', image: '/images/electricite/electrique-3.jpeg' },
    { title: 'Armoire Électrique – Site Industriel', category: 'Génie Civil', image: '/images/electricite/electrique-4.jpeg' },
    // { title: 'Lotissement 500 Parcelles', category: 'Gros Œuvre', image: '/images/projects/project-26.jpeg' },
    // Fourniture
    { title: 'Fourniture de Matériaux – Autoroute du Nord', category: 'Fourniture', image: '/images/projects/project-29.jpeg' },
    { title: 'Fourniture de Ciment – Chantier Résidentiel', category: 'Fourniture', image: '/images/fourniture_materiaux/ciment.jpg' },
    { title: 'Matériaux de Construction – Stock', category: 'Fourniture', image: '/images/fourniture_materiaux/materiaux.jpg' },
    { title: 'Lot de Matériel BTP', category: 'Fourniture', image: '/images/fourniture_materiaux/materiel_en_une_image.jpg' },
    { title: 'Outillage – Perceuse Industrielle', category: 'Fourniture', image: '/images/fourniture_materiaux/metriaux_perceuse.jpg' },
    { title: 'Fourniture de Peinture – Bâtiment', category: 'Fourniture', image: '/images/fourniture_materiaux/peinture.jpg' },
    { title: 'Tuyauterie – Assainissement', category: 'Fourniture', image: '/images/fourniture_materiaux/tuyeau.jpg' },
    { title: "Transport d'Engins Lourds – Port de San Pedro", category: 'Génie Civil', image: '/images/projects/project-31.jpeg' },
    { title: 'Logistique Chantier – San Pedro', category: 'Génie Civil', image: '/images/projects/project-44.jpeg' },
    // Électricité
    { title: 'Installation Électrique – Bâtiment Commercial', category: 'Électricité', image: '/images/electricite/electrique-5.jpeg' },
    { title: 'Tableau Électrique – Industrie', category: 'Électricité', image: '/images/electricite/electrique-6.jpeg' },
    { title: 'Câblage Industriel – Haute Tension', category: 'Électricité', image: '/images/electricite/electrique-7.jpeg' },
    // Éclairage
    // { title: 'Éclairage Public – Boulevard Lagunaire', category: 'Éclairage', image: '/images/projects/project-35.jpeg' },
    // { title: 'Éclairage Public – Ville de Bouaké', category: 'Éclairage', image: '/images/projects/project-41.jpeg' },
    { title: 'Éclairage LED – Voirie Urbaine', category: 'Éclairage', image: '/images/eclairage/eclairage-1.jpeg' },
    { title: 'Éclairage Public Connecté', category: 'Éclairage', image: '/images/eclairage/eclairage-2.jpeg' },
    { title: 'Lampadaires Intelligents', category: 'Éclairage', image: '/images/eclairage/eclairage-3.jpeg' },
    // Domotique
    // { title: 'Villa Domotique – Riviera', category: 'Domotique', image: '/images/projects/project-36.jpeg' },
    { title: 'Système Domotique Complet', category: 'Domotique', image: '/images/domotique/domotique-1.jpeg' },
    { title: 'Automatisation Résidentielle', category: 'Domotique', image: '/images/domotique/domotique-2.jpeg' },
    { title: 'Smart Home – Contrôle Centralisé', category: 'Domotique', image: '/images/domotique/domotique-4.jpeg' },
    { title: 'Système d\'Alarme Connecté', category: 'Domotique', image: '/images/domotique/alarme.jpeg' },
    { title: 'Caméra de Surveillance – Villa', category: 'Domotique', image: '/images/domotique/camera_de_surveillance.jpeg' },
    { title: 'Installation Caméras Connectées', category: 'Domotique', image: '/images/domotique/camera.jpeg' },
    { title: 'Sécurité Intelligente – Caméras', category: 'Domotique', image: '/images/domotique/camera1.jpeg' },
    { title: 'Domotique – Gestion Accès', category: 'Domotique', image: '/images/domotique/camera2.jpeg' },
    { title: 'Smart Home – Maison Connectée', category: 'Domotique', image: '/images/domotique/smart_Home.jpeg' },
    { title: 'Domotique – Contrôle Intelligent', category: 'Domotique', image: '/images/domotique/smart_home1.jpeg' },
    { title: 'Construction Immeuble R+8 – Plateau', category: 'Génie Civil', image: '/images/projects/project-38.jpeg' },
    { title: 'Terrassement – Zone d\'Activités', category: 'Gros Œuvre', image: '/images/chantier/project-39.jpeg' },
    // Chantiers
    { title: 'Chantier de Bingerville', category: 'Gros Œuvre', image: '/images/chantier/bingerville.jpg' },
    { title: 'Chantier Résidentiel – Bingerville', category: 'Gros Œuvre', image: '/images/chantier/chantier_bingerville.jpg' },
    { title: 'Chantier – Ville de Man', category: 'Gros Œuvre', image: '/images/chantier/chantier_ville_de_MAN.jpg' },
    { title: 'Tunnel – Abobo', category: 'Génie Civil', image: '/images/chantier/tunnel_abobo.jpg' },
    // Engins & Machines BTP
    { title: 'Applatisseur Goudron – Voirie', category: 'Transport', image: '/images/transport_machine_BTP/applatissuer_goudron.jpg' },
    { title: 'Camion Benne – Transport', category: 'Transport', image: '/images/transport_machine_BTP/camion_beine.jpg' },
    { title: 'Machine Caterpillar – Terrassement', category: 'Transport', image: '/images/transport_machine_BTP/MACHINE_CATEPILA.jpeg' },
    { title: 'Engin de Chantier – Nivellement', category: 'Transport', image: '/images/transport_machine_BTP/MACHINE1.jpeg' },
    { title: 'Pelleteuse – Excavation', category: 'Transport', image: '/images/transport_machine_BTP/paileteuse.jpg' },
    // Sécurité Incendie
    { title: 'Détecteur de Fumée – Installation', category: 'Sécurité Incendie', image: '/images/securite_incendi/detecteur_de_fumer.jpg' },
    { title: 'Extincteur – Équipement Sécurité', category: 'Sécurité Incendie', image: '/images/securite_incendi/inxtincteur.jpg' },
    { title: 'Système d\'Alarme Incendie – Bâtiment', category: 'Sécurité Incendie', image: '/images/securite_incendi/systeme_alarme_incendie.jpg' },
  ] as Project[],

  gallery: [
    { src: '/images/gallery/gallery-1.jpeg', category: 'Chantier', title: 'Grue au coucher du soleil' },
    { src: '/images/gallery/gallery-2.jpeg', category: 'Chantier', title: 'Échafaudage sur chantier' },
    { src: '/images/gallery/gallery-3.jpeg', category: 'Construction', title: 'Bâtiment en construction' },
    { src: '/images/gallery/gallery-6.jpeg', category: 'Infrastructure', title: 'Pont en construction' },
    { src: '/images/gallery/gallery-7.jpeg', category: 'Engins', title: 'Engin de chantier' },
    { src: '/images/gallery/gallery-8.jpeg', category: 'Architecture', title: 'Immeuble moderne' },
    { src: '/images/gallery/gallery-9.jpeg', category: 'Engins', title: 'Pelleteuse Caterpillar en action' },
    { src: '/images/gallery/gallery-10.jpeg', category: 'Ingénierie', title: 'Ingénieur avec plans' },
    { src: '/images/gallery/gallery-11.jpeg', category: 'Architecture', title: 'Façade en verre moderne' },
    { src: '/images/gallery/gallery-12.jpeg', category: 'Outillage', title: 'Équipement de chantier' },
    { src: '/images/chantier/bingerville.jpg', category: 'Chantier', title: 'Chantier à Bingerville' },
    { src: '/images/chantier/tunnel_abobo.jpg', category: 'Chantier', title: 'Tunnel en construction à Abobo' },
    { src: '/images/transport_machine_BTP/paileteuse.jpg', category: 'Engins', title: 'Pelleteuse sur chantier' },
    { src: '/images/transport_machine_BTP/MACHINE_CATEPILA.jpeg', category: 'Engins', title: 'Machine Caterpillar' },
    { src: '/images/transport_machine_BTP/camion_beine.jpg', category: 'Engins', title: 'Camion benne pour chantier' },
    { src: '/images/fourniture_materiaux/materiaux.jpg', category: 'Fourniture', title: 'Matériaux de construction' },
    { src: '/images/fourniture_materiaux/ciment.jpg', category: 'Fourniture', title: 'Fourniture de ciment' },
    { src: '/images/fourniture_materiaux/tuyeau.jpg', category: 'Fourniture', title: 'Tuyauterie BTP' },
    { src: '/images/securite_incendi/detecteur_de_fumer.jpg', category: 'Sécurité', title: 'Détecteur de fumée' },
    { src: '/images/securite_incendi/inxtincteur.jpg', category: 'Sécurité', title: 'Extincteur incendie' },
    { src: '/images/securite_incendi/systeme_alarme_incendie.jpg', category: 'Sécurité', title: "Système d'alarme incendie" },
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
