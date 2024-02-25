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
    id: 1,
    icon: "people",
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
    ],
    link: "",
  },
  {
    id: 2,
    icon: "euro",
    name: "Finance",
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
    link: "",
  },
  {
    id: 3,
    icon: "inventory",
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
    ],
  },
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
  },
  {
    id: 5,
    icon: "storefront",
    name: "Achats",
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
  },
  {
    id: 6,
    icon: "conveyor_belt",
    name: "Production",
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
  },
  {
    id: 7,
    icon: "local_shipping",
    name: "Logistique",
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
  },
  {
    id: 8,
    icon: "note_alt",
    name: "Affaire",
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
  },
  {
    id: 9,
    icon: "contacts",
    name: "Relation clients",
    link: "/client",
    subnav: [
      {
        subnavName: "Nouveau client",
        link: "/create_client",
      },
      {
        subnavName: "Tous les clients",
        link: "/client",
      },
    ],
  },
];

export default itemSidebar;
