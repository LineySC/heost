/** Exemple d'objet pour la sidebar
{
  id: 1,              // Identifiant de la catégorie
  icon: "euro",       // Icône associée à la catégorie
  name: "Finance",    // Nom de la catégorie
  subnav: [            // Sous-navigation de la catégorie
    {
      subnavName: "Nouveau",          // Nom de la première sous-section
      link: "/business/new",          // Lien vers la première sous-section
    },
    {
      subnavName: "Liste des affaires",  
      link: "/business/all",            
    },
    {
      subnavName: "Devis",              
      link: "",                         
    },
  ],
  link: "",           // Lien associé à la catégorie principale
}
*/

const itemSidebar = [
  {
    id: 0,
    name: "Acceuil",
    subnav: [
      {
        subnavName: "Vue d'ensemble",
        link: "/",
      },
    ],
    link: "/",
  },
  {
    id: 1,
    name: "Ressources Humaines",
    subnav: [
      {
        subnavName: "Crée un accès employé",
        link: "/employees/new",
      },
      {
        subnavName: "Employés",
        link: "/employees/all",
      },
      {
        subnavName: "Pointage",
        link: "/employees/tally",
      },
      {
        subnavName: "Vacances",
        link: "/employee/vacation",
      },
    ],
    link: "",
  },
  {
    id: 2,
    name: "Finance",
    subnav: [
      {
        subnavName: "Rentabilité",
        link: "/profitability",
      },
    ],
    link: "",
  },
  {
    id: 3,
    name: "Stocks",
    link: "/stock",
    subnav: [
      {
        subnavName: "Nouveau",
        link: "/stock/new",
      },
      {
        subnavName: "Liste des stocks",
        link: "/stock/all",
      },
      {
        subnavName: "Réception marchandise",
        link: "/stock/all",
      },
    ],
  } /*
  {
    id: 4,
    icon: "point_of_sale",
    name: "Ventes",
    link: "",
    subnav: [
      {
        subnavName: "Nouveau",
        link: "/business/new",
      },
      {
        subnavName: "Liste des affaires",
        link: "/business/all",
      },
      {
        subnavName: "Devis",
        link: "",
      },
    ],
  },*/,
  {
    id: 5,
    name: "Achats",
    link: "",
    subnav: [
      {
        subnavName: "Création d'un bon",
        link: "/purchase_order/create",
      },
      {
        subnavName: "Toutes les commandes",
        link: "/purchase_order/all",
      },
      {
        subnavName: "Récéptionner ",
        link: "/purchase_order/received",
      },
    ],
  },
  {
    id: 6,
    name: "Production",
    link: "",
    subnav: [
      {
        subnavName: "Accueil",
        link: "/business/new",
      },
      {
        subnavName: "Non-Conformité",
        link: "/noncompliance",
      } /*
      {
        subnavName: "",
        link: "/business/all",
      },*/,
    ],
  } /*
  {
    id: 7,
    icon: "local_shipping",
    name: "Logistique",
    link: "",
    subnav: [
      {
        subnavName: "Récéption marchandise",
        link: "/business/new",
      },
      {
        subnavName: "Liste des affaires",
        link: "/business/all",
      },
    ],
  },*/,
  {
    id: 8,
    name: "Affaire",
    link: "",
    subnav: [
      {
        subnavName: "Nouveau",
        link: "/business/new",
      },
      {
        subnavName: "Liste des affaires",
        link: "/business/",
      },
      {
        subnavName: "Devis",
        link: "/estimate",
      },
    ],
  },
  {
    id: 9,
    name: "Relation clients",
    link: "/client",
    subnav: [
      {
        subnavName: "Nouveau client",
        link: "/client/new",
      },
      {
        subnavName: "Tous les clients",
        link: "/client/",
      },
    ],
  },
];

export default itemSidebar;
