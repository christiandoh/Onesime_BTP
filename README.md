<div align="center">
  <img src="https://github.com/christiandoh/Onesime_BTP/raw/main/public/images/logo/logo.png" alt="Onesime BTP" height="80" />
  <p><strong>Livraison de sable, gravier & latérite — Abidjan, Côte d'Ivoire</strong></p>
  <p>
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
    <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  </p>
  <p>
    <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
    <img src="https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge" alt="MIT License" />
  </p>
</div>

---

## Aperçu

Site vitrine professionnel pour **Onesime BTP**, entreprise de fourniture de matériaux de construction et services BTP basée à Abidjan, Côte d'Ivoire.

### Pages

| Page | Route | Contenu |
|------|-------|---------|
| Accueil | `/` | Orbite 3D animée des 11 services, CTA, statistiques |
| Services | `/services` | 11 prestations détaillées, matériaux, processus |
| Réalisations | `/realisations` | Projets filtrés par catégorie, galerie, témoignages |
| À propos | `/about` | Histoire, valeurs, orbite partenaires |
| Contact | `/contact` | Formulaire → email, WhatsApp, Google Maps |
| Actualités | `/actualites` | Articles et actualités |

---

## Stack technique

| Technologie | Rôle |
|-------------|------|
| **React 19** | Framework front-end |
| **TypeScript** | Typage statique |
| **Vite** | Bundler & dev server |
| **Tailwind CSS** | Styles utilitaires |
| **Framer Motion** | Animations |
| **Lucide React** | Icônes |
| **React Router v7** | Routage |

---

## Fonctionnalités

- **Orbite 3D** — Images qui tournent autour du logo avec effet de profondeur
- **Lightbox** — Toute image cliquable s'affiche en plein écran
- **Formulaire intelligent** — Envoi des données directement par email client
- **Vidéo intégrée** — Facebook Video embed
- **WhatsApp flottant** — Bouton de contact direct
- **Side drawer** — Menu mobile animé avec overlay
- **Design responsive** — Mobile-first, breakpoints 768px / 1024px
- **SEO** — Balises meta, descriptions optimisées

---

## Installation

```bash
# Cloner
git clone https://github.com/christiandoh/Onesime_BTP.git
cd Onesime_BTP

# Installer
npm install

# Lancer
npm run dev
```

Accès : [http://localhost:5173](http://localhost:5173) (ou autre port si occupé)

---

## Build

```bash
npm run build       # Production build
npm run preview     # Preview du build
npm run lint        # ESLint
```

---

## Arborescence

```
public/images/
├── logo/
├── services/
├── projects/
├── gallery/
├── electricite/
├── eclairage/
├── domotique/
├── partenaire/
├── testimonials/
└── clients/

src/
├── components/      # Header, Footer, Icon, Lightbox...
├── pages/           # Home, Services, About, Realisations, Contact, Actualites
├── data/            # content.ts, animations.ts
└── index.css        # Styles globaux + Tailwind
```

---

## License

Distribué sous la licence **MIT**. Voir [LICENSE](LICENSE) pour plus d'informations.

---

## Contact

| Canal | Coordonnées |
|-------|-------------|
| Email | secretariat@onesime-btp.com |
| Téléphone | +225 07 09 45 09 70 |
| WhatsApp | +225 07 09 45 09 70 |
| Adresse | Bingerville, Abidjan, Côte d'Ivoire |

---

<div align="center">
  <p>Développé par <a href="https://github.com/christiandoh">@christiandoh</a></p>
  <p>
    <a href="https://github.com/christiandoh/Onesime_BTP/issues">Signaler un bug</a>
    ·
    <a href="https://github.com/christiandoh/Onesime_BTP/issues">Suggérer une amélioration</a>
  </p>
</div>
