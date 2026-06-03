# <img src="/images/logo/logo.png" alt="Onesime BTP" height="40" /> Onesime BTP

Site internet professionnel pour **Onesime BTP**, entreprise spécialisée dans la fourniture de sable, gravier, latérite et services BTP à Abidjan et en Côte d'Ivoire.

---

## Aperçu

| Page | Description |
|------|-------------|
| **Accueil** | Orbite 3D animée avec les 11 services, indicateur de scroll, statistiques |
| **Services** | 11 prestations détaillées avec images, matériaux, processus en 4 étapes |
| **Réalisations** | 16 projets filtrés par catégorie + galerie photos + témoignages |
| **À propos** | Histoire, valeurs, stats, clients en orbite 3D |
| **Contact** | Formulaire de devis avec envoi par email, WhatsApp, carte Google Maps |
| **Actualités** | Articles et actualités de l'entreprise |

## Technologies

| Stack | Version |
|-------|---------|
| React | 19.x |
| TypeScript | 6.x |
| Vite | 8.x |
| Tailwind CSS | 4.x |
| Framer Motion | \- |
| Lucide React | \- |

## Fonctionnalités

- **Navigation** — Menu desktop + side drawer animé sur mobile
- **Orbite 3D** — Images qui tournent autour du logo (accueil / partenaires)
- **Lightbox** — Toutes les images cliquables en plein écran
- **Formulaire** — Demande de devis avec envoi direct par email
- **Vidéo** — Intégration Facebook Video
- **WhatsApp** — Bouton flottant 7j/7
- **Responsive** — Design adapté mobile, tablette et desktop
- **SEO** — Balises meta, descriptions optimisées

## Installation

```bash
npm install
npm run dev
```

Accès : [http://localhost:5173](http://localhost:5173)

## Build

```bash
npm run build
npm run preview
```

## Structure

```
public/images/
├── logo/            # Logo de l'entreprise
├── services/        # Photos des services
├── projects/        # Photos des projets
├── gallery/         # Galerie photos
├── electricite/     # Électricité
├── eclairage/       # Éclairage public
├── domotique/       # Domotique
├── partenaire/      # Logos partenaires
├── testimonials/    # Photos témoignages
└── clients/         # Logos clients

src/
├── components/      # Composants réutilisables
├── pages/           # Pages du site
├── data/            # Données statiques
└── hooks/           # Hooks personnalisés
```

## Contact

- **Email** : secretariat@onesime-btp.com
- **Téléphone** : +225 07 09 45 09 70
- **WhatsApp** : +225 07 09 45 09 70

---

Développé avec ❤️ par [Christiandoh](https://github.com/christiandoh)
