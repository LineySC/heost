const Permissions = {
  directeur_technique: {
    finance: ["create", "read", "update", "delete"],
    rh: ["create", "read", "update", "delete"],
    stocks: ["create", "read", "update", "delete"],
    ventes: ["create", "read", "update", "delete"],
    achats: ["create", "read", "update", "delete"],
    production: ["create", "read", "update", "delete"],
    logistique: ["create", "read", "update", "delete"],
    projet: ["create", "read", "update", "delete"],
    relation_client: ["create", "read", "update", "delete"],
  },
  rh: {
    rh: ["create", "read", "update", "delete"],
  },
  chef_atelier: {
    stocks: ["create", "read", "update", "delete"],
    logistique: ["create", "read", "update", "delete"],
    production: ["create", "read", "update", "delete"],
    projet: ["create", "read", "update", "delete"],
    relation_client: ["read", "update", "delete"],
  },
  comptable: {
    finance: ["create", "read", "update", "delete"],
    stocks: ["read"],
    rh: ["read"],
    achats: ["read"],
  },
  deviseur: {
    projet: ["create", "read", "update", "delete"],
  },
  magasinier: {
    stocks: ["create", "read", "update", "delete"],
    logistique: ["read", "update", "delete"],
    production: ["read", "update", "delete"],
    projet: ["read", "update"],
  },
  approvisionneur: {
    achats: ["create", "read", "update", "delete"],
    stocks: ["create", "read", "update", "delete"],
    logistique: ["create", "read", "update", "delete"],
  },
  BE: {
    projet: ["create", "read", "update", "delete"],
    stocks: ["read", "update", "delete"],
    production: ["create", "read", "update", "delete"],
    relation_client: ["create", "read", "update", "delete"],
  },
};

export default Permissions;
