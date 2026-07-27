import { FeatureModule, UserRole, ProgressItem, ScreenshotItem } from '../types';

export const PROJECT_INFO = {
  name: "EMBERC",
  fullName: "Église Mission Baptiste Évangélique Royaume du Christ",
  subTitle: "Plateforme Numérique Paroissiale Centralisée",
  leadAuthor: "Isaac DJIMADJO",
  developerTitle: "Développeur indépendant & concepteur du projet",
};

export const SCRIPTURE_QUOTES = [
  {
    text: "Que tout se fasse avec ordre, dignité et pour l'édification commune de l'Église.",
    reference: "1 Corinthiens 14:40 & 26",
  },
  {
    text: "Ne cessons pas de nous réunir, comme c'est la coutume de quelques-uns ; mais exhortons-nous réciproquement.",
    reference: "Hébreux 10:25",
  },
  {
    text: "Il y a diversité de dons, mais le même Esprit. Chacun reçoit le don de manifester l'Esprit pour l'utilité commune.",
    reference: "1 Corinthiens 12:4,7",
  },
  {
    text: "Portez les fardeaux les uns des autres, et accomplissez ainsi la loi de Christ.",
    reference: "Galates 6:2",
  },
  {
    text: "Que votre parole soit toujours accompagnée de grâce, assaisonnée de sel, afin que vous sachiez comment répondre à chacun.",
    reference: "Colossiens 4:6",
  },
  {
    text: "Ainsi que vous l'avez appris de nous, comment il faut se conduire et plaire à Dieu, en progressant toujours.",
    reference: "1 Thessaloniciens 4:1",
  },
];

export const FEATURE_MODULES: FeatureModule[] = [
  {
    id: "programmes",
    title: "Programmes des cultes",
    subtitle: "Consulter le déroulement de chaque culte",
    description: "Horaires, prédicateurs, type de culte, officiants et ordre précis des cérémonies pour chaque paroisse.",
    iconName: "Calendar",
    tag: "Vie de l'église"
  },
  {
    id: "chants",
    title: "Chants & Bibliothèque audio",
    subtitle: "Accéder aux paroles et écouter les mélodies",
    description: "Recueil complet de cantiques avec paroles intégrales et fichiers audio pour apprendre et se préparer à chanter.",
    iconName: "Music",
    tag: "Chants partagés"
  },
  {
    id: "lectures",
    title: "Lectures bibliques",
    subtitle: "Textes prévus et assignation des lecteurs",
    description: "Passages bibliques du jour avec identification des lecteurs assignés et la langue d'expression retenue.",
    iconName: "BookOpen",
    tag: "Sainte Bible"
  },
  {
    id: "annonces",
    title: "Annonces de paroisse",
    subtitle: "Rester informé des nouvelles importantes",
    description: "Mariages, réunions d'ouvriers, assemblées et informations essentielles diffusées instantanément aux fidèles.",
    iconName: "Bell",
    tag: "Information"
  },
  {
    id: "evenements",
    title: "Événements à venir",
    subtitle: "Participer aux temps forts de la communauté",
    description: "Conférences, concerts spirituels, semaines de la jeunesse, formations et rassemblements inter-paroissiaux.",
    iconName: "Sparkles",
    tag: "Agenda"
  },
  {
    id: "mediathere",
    title: "Médiathèque paroissiale",
    subtitle: "Photos, enregistrements et documents",
    description: "Consulter les souvenirs photos des cultes, réécouter les prédications audio ou télécharger les bulletins.",
    iconName: "FolderAudio",
    tag: "Ressources"
  },
  {
    id: "actualites",
    title: "Actualités & Éditoriaux",
    subtitle: "Suivre la vie et les témoignages de l'église",
    description: "Articles inspirants, mots du pasteur, récits de mission et réflexions pour nourrir la foi au quotidien.",
    iconName: "Newspaper",
    tag: "Édification"
  },
  {
    id: "favoris",
    title: "Espace Favoris personnel",
    subtitle: "Retrouver facilement ses cantiques et lectures",
    description: "Chaque fidèle peut marquer d'une étoile ses chants préférés et ses textes de méditation pour un accès immédiat.",
    iconName: "Bookmark",
    tag: "Personnalisé"
  }
];

export const USER_ROLES: UserRole[] = [
  {
    id: "fidele",
    title: "Le Fidèle",
    badge: "Accès Tous Membres",
    description: "Pour tous les membres de la communauté, jeunes et anciens, sans aucune barrière technique.",
    capabilities: [
      "Consulter librement les programmes de cultes et les prédicateurs",
      "Accéder au recueil de chants avec paroles et écoute audio",
      "Lire les annonces importantes et l'agenda des événements",
      "Consulter la médiathèque (photos, vidéos, prédications audio)",
      "Sauvegarder ses chants et lectures préférés dans ses favoris"
    ],
    iconName: "User"
  },
  {
    id: "responsable-musical",
    title: "Le Responsable musical",
    badge: "Gestion des Cantiques",
    description: "Pour le chef de chœur, le maestro et les conducteurs de louange de la paroisse.",
    capabilities: [
      "Toutes les fonctionnalités de l'espace Fidèle",
      "Ajouter de nouveaux chants et cantiques à la bibliothèque partagée",
      "Renseigner les paroles complètes et associer la version audio",
      "Organiser la liste et l'ordre des chants retenus pour chaque culte"
    ],
    iconName: "Music2"
  },
  {
    id: "responsable-lecteurs",
    title: "Le Responsable des lecteurs",
    badge: "Organisation des Lectures",
    description: "Pour la personne chargée de coordonner les lectures bibliques durant les cultes.",
    capabilities: [
      "Toutes les fonctionnalités de l'espace Fidèle",
      "Programmer les passages bibliques du culte",
      "Designer les lecteurs assignés pour chaque passage",
      "Spécifier la langue de lecture (français, langues locales, etc.)"
    ],
    iconName: "BookMarked"
  },
  {
    id: "admin-paroisse",
    title: "L'Administrateur de paroisse",
    badge: "Autonomie de Paroisse",
    description: "Pour le responsable local ou le pasteur qui supervise le contenu de sa paroisse.",
    capabilities: [
      "Publier et modifier les programmes de culte de SA paroisse",
      "Rédiger les annonces, créer les événements et publier des actualités",
      "Enrichir la médiathèque locale (photos, vidéos, documents)",
      "Attribuer les rôles et permissions aux responsables de sa paroisse",
      "Garantie stricte : ne peut jamais altérer le contenu d'une autre paroisse"
    ],
    iconName: "Church"
  },
  {
    id: "super-admin",
    title: "Le Super administrateur",
    badge: "Pilote du Projet",
    description: "La personne qui a conçu et maintient la plateforme globale pour l'EMBERC.",
    capabilities: [
      "Superviser l'ensemble de la plateforme et des paroisses raccordées",
      "Assurer la stabilité, la sécurité et la bonne évolution de l'outil",
      "Accompagner les administrateurs de paroisses dans la prise en main"
    ],
    iconName: "ShieldCheck"
  }
];

export const PROGRESS_ITEMS: ProgressItem[] = [
  // Déjà réalisés
  {
    id: "done-chants",
    title: "Bibliothèque de chants avec paroles et version audio à écouter",
    description: "Recherche par numéro ou titre, affichage clair des paroles et lecteur audio fonctionnel pour s'entraîner.",
    status: "done",
    category: "Cœur du système"
  },
  {
    id: "done-programmes",
    title: "Gestion des programmes de cultes complets",
    description: "Création des fiches de culte avec horaires, intervenants, et ordonnancement précis des chants et lectures.",
    status: "done",
    category: "Cœur du système"
  },
  {
    id: "done-lectures",
    title: "Lectures bibliques multilingues",
    description: "Programmation des passages saints et attribution de plusieurs lecteurs par lecture selon la langue choisie.",
    status: "done",
    category: "Cœur du système"
  },
  {
    id: "done-annonces",
    title: "Publication des annonces paroissiales",
    description: "Diffusion des communiqués importants de paroisse (mariages, réunions, rassemblements) avec niveau de priorité.",
    status: "done",
    category: "Communication"
  },
  {
    id: "done-evenements",
    title: "Module d'événements et cérémonies",
    description: "Affichage des conférences, semaines de la jeunesse et grands cultes à venir avec dates et lieux.",
    status: "done",
    category: "Vie de l'église"
  },
  {
    id: "done-medias",
    title: "Médiathèque partagée",
    description: "Stockage et consultation organisée des photos, vidéos, enregistrements audio et documents de paroisse.",
    status: "done",
    category: "Ressources"
  },
  {
    id: "done-actualites",
    title: "Articles et actualités de la communauté",
    description: "Espace éditorial pour partager les témoignages, le mot du pasteur et la vie des différentes paroisses.",
    status: "done",
    category: "Édification"
  },
  {
    id: "done-favoris",
    title: "Système de favoris personnel",
    description: "Espace dédié à chaque fidèle pour retrouver instantanément ses cantiques et méditations préférées.",
    status: "done",
    category: "Expérience Fidèle"
  },
  {
    id: "done-connexion",
    title: "Connexion simplifiée par identifiant (sans email)",
    description: "Système d'accès universel pensé pour les personnes sans adresse email, avec contrôle strict des rôles par paroisse.",
    status: "done",
    category: "Sécurité & Accès"
  },
  {
    id: "done-interfaces",
    title: "Premières pages fidèles et espace administration",
    description: "Interfaces de consultation et de gestion opérationnelles, fluides et responsive sur ordinateur et tablette.",
    status: "done",
    category: "Design & UI"
  },

  // Bientôt
  {
    id: "upcoming-finalization",
    title: "Finalisation globale de toutes les pages",
    description: "Peaufinage ergonomique et derniers ajustements visuels pour offrir une navigation 100% intuitive.",
    status: "upcoming",
    category: "Prochaine étape"
  },
  {
    id: "upcoming-mobile",
    title: "Application mobile dédiée (iOS & Android)",
    description: "Adaptation sous forme d'application téléchargeable pour consulter les chants et cultes facilement depuis un téléphone.",
    status: "upcoming",
    category: "Mobilité"
  },
  {
    id: "upcoming-notifications",
    title: "Système de notifications instantanées",
    description: "Avertir directement les fidèles sur leur appareil lors d'une annonce urgente ou d'un changement de programme.",
    status: "upcoming",
    category: "Interaction"
  },
  {
    id: "upcoming-live",
    title: "Diffusion des cultes en direct",
    description: "Permettre aux fidèles malades, âgés ou en déplacement de suivre la parole de Dieu en temps réel.",
    status: "upcoming",
    category: "Communion à distance"
  },
  {
    id: "upcoming-rollout",
    title: "Raccordement progressif de toutes les paroisses EMBERC",
    description: "Déploiement graduel dans l'ensemble des paroisses de l'Église Mission Baptiste Évangélique Royaume du Christ.",
    status: "upcoming",
    category: "Extension"
  }
];

export const SCREENSHOTS: ScreenshotItem[] = [
  {
    id: "screen-home",
    title: "Accueil & Prochain Culte",
    category: "fidele",
    badge: "Fidèle — Consultation",
    description: "Vue principale avec le prochain culte programmé, les annonces récentes de la paroisse et les dernières actualités.",
    imageSrc: "capture-accueil.png",
    aspectRatio: "desktop",
    highlights: [
      "Affichage clair de la paroisse active",
      "Accès rapide au programme du dimanche",
      "Résumé des annonces prioritaires"
    ]
  },
  {
    id: "screen-programmes",
    title: "Liste des Programmes de Cultes",
    category: "fidele",
    badge: "Programmes de Culte",
    description: "Page regroupant les cultes passés et à venir, avec prédicateurs, thèmes et types de rassemblement.",
    imageSrc: "capture-programme-culte.png",
    aspectRatio: "desktop",
    highlights: [
      "Calendrier des cultes du dimanche et réunions",
      "Filtre par type de culte",
      "Détail du prédicateur et du conducteur"
    ]
  },
  {
    id: "screen-chants",
    title: "Bibliothèque de Chants & Paroles",
    category: "fidele",
    badge: "Chants & Audio",
    description: "Consultation d'un cantique avec ses paroles complètes et son lecteur audio intégré pour écouter la mélodie.",
    imageSrc: "capture-chants.png",
    aspectRatio: "desktop",
    highlights: [
      "Numéro de cantique officiel (ex: TEST-02)",
      "Lecteur audio intégré avec barre de progression",
      "Support des paroles en français et langues locales"
    ]
  },
  {
    id: "screen-annonces",
    title: "Annonces de Paroisse",
    category: "fidele",
    badge: "Annonces Officielle",
    description: "Cartes d'annonces avec badge de priorité 'Important', dates de validité et corps du communiqué.",
    imageSrc: "capture-annonces.png",
    aspectRatio: "desktop",
    highlights: [
      "Distinction visuelle des urgences",
      "Mention précise de la paroisse concernée",
      "Dates de diffusion de l'annonce"
    ]
  },
  {
    id: "screen-evenements",
    title: "Événements à Venir",
    category: "fidele",
    badge: "Vie de l'Église",
    description: "Présentation illustrée des conférences, semaines de la jeunesse et rassemblements spirituels.",
    imageSrc: "capture-evenements.png",
    aspectRatio: "desktop",
    highlights: [
      "Affiche illustrée et dates de l'événement",
      "Lieu précis et paroisse hôte",
      "Description détaillée de la rencontre"
    ]
  },
  {
    id: "screen-medias",
    title: "Médiathèque & Fichiers",
    category: "fidele",
    badge: "Photos, Audios, Docs",
    description: "Filtres par type (Audio, Vidéo, Photo, Document) pour consulter les souvenirs et supports paroissiaux.",
    imageSrc: "capture-medias.png",
    aspectRatio: "desktop",
    highlights: [
      "Onglets de filtrage par média",
      "Aperçu visuel des photos de culte",
      "Téléchargement direct des bulletins"
    ]
  },
  {
    id: "screen-connexion",
    title: "Connexion par Identifiant Simple",
    category: "fidele",
    badge: "Accès Universel",
    description: "Interface de connexion épurée par identifiant et mot de passe, accessible à tous sans besoin d'adresse email.",
    imageSrc: "capture-connexion.png",
    aspectRatio: "desktop",
    highlights: [
      "Aucun email requis",
      "Interface simple à utiliser",
      "Redirection selon les rôles"
    ]
  },
  {
    id: "screen-admin-dashboard",
    title: "Espace de Gestion / Administration",
    category: "admin",
    badge: "Espace Responsable",
    description: "Tableau de bord donnant accès aux modules de gestion selon les rôles de l'utilisateur.",
    imageSrc: "capture-espace-gestion.png",
    aspectRatio: "desktop",
    highlights: [
      "Cartes de raccourcis par module",
      "Gestion des chants, programmes et annonces",
      "Respect strict de l'autonomie paroissiale"
    ]
  },
  {
    id: "screen-admin-chants",
    title: "Édition d'un Chant (Chanter & Audio)",
    category: "responsable",
    badge: "Responsable Musical",
    description: "Formulaire d'ajout et modification des numéros de chant, titres, auteurs, paroles et fichiers audio rattachés.",
    imageSrc: "capture-modifier-chant.png",
    aspectRatio: "desktop",
    highlights: [
      "Numéro personnalisé",
      "Saisie des paroles complètes",
      "Association des fichiers audio"
    ]
  },
  {
    id: "screen-admin-lectures",
    title: "Gestion des Lectures Bibliques",
    category: "responsable",
    badge: "Responsable Lecteurs",
    description: "Interface de saisie du passage biblique, date du culte, texte saint et assignation des lecteurs par langue.",
    imageSrc: "capture-lectures.png",
    aspectRatio: "desktop",
    highlights: [
      "Référence biblique & date",
      "Affectation des lecteurs par langue",
      "Validation immédiate des modifications"
    ]
  }
];
