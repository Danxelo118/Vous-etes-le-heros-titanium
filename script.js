chapters = {
   acceuil: {
      titre: "Le commencement",
      description: "Tu es un astronaute envoyé en mission sur une autre planète. Mais la mission prend court, tu dois retourner sur Terre en faisant un voyage retour de 3 ans. On te dit que des aliens ont envahis la terre et ont chnagé l'atmosphère. Des nuages d'acide apparaîssent désormais à 22h chaque jour. En court de route, les communications sont soudainement coupées.",
      image: "./assets/img/cloud.jpg",
      boutons:
         [{ titre: 'Commencer, destination: Type goToChapter("debut")' },]
   },


   debut: {
      titre: "10h",
      description: "Il est 10h00, tu atteris sur la planète Terre. La planète semble vide, tu as deux destinations proches de toi.",
      image: "./assets/img/alone.jpg",
      boutons:
         [{ titre: 'Aller chez toi, destination: Type goToChapter("maison")' },
         { titre: 'Aller à la base, destination: Type goToChapter("base")' }]
   },


   maison: {
      titre: " Au bercaille",
      description: "Des créatures aliens présentes dans la maison te tuent.",
      image: "./assets/img/aliens-death.jpg",
      boutons:
         [{ titre: 'Recommencer, destination: Type goToChapter("acceuil")' }]
   },


   base: {
      titre: "La base militaire",
      description: "La base est abandonnée mais tu y trouves plein de ressources. Tu trouves une carte pour aller à un camp de survivants à 9h de temps et deux véhicules disponibles.",
      image: "./assets/img/base.jpg",
      boutons:
         [{ titre: 'Mustang, destination: Type goToChapter("mustang")' },
         { titre: 'Corolla, destination: Type goToChapter("corolla")' }]
   },

   mustang: {
      titre: "20h",
      description: "Le véhicule émet beaucoup de bruits de moteur, cela attire les créatures aliens et ils bloquent le chemin tu te retrouves coincé à mi-chemin de la destination, tu lâches ta voirture pour continuer à pied mais perd ta carte, tu va à la mémoire. Il est 20h00, après une longue marche tu vois un groupe de créature dévorer le cadavre d'une fillette, ils bloquent le chemin. ",
      image: "./assets/img/mustang.jpg",
      boutons:
         [{ titre: 'Affronter, destination: Type goToChapter("affrontement")' },
         { titre: 'Demi-tour, destination: Type goToChapter("detour")' }]

   },

   affrontement: {
      titre: "Monté en courage",
      description: "Tu finis par mourir, ils étaient trop nombreux pour toi",
      image: "./assets/img/fight.jpg",
      boutons:
         [{ titre: 'Recommencer, destination: Type goToChapter("acceuil")' }]
   },

   detour: {
      titre: "Stratégie de retrait",
      description: "Tu arrives juste à temps aux portes du camp vers 21h58 mais les survivants déja inquiets de la disparition de la gamine te font pas confiance et te laisse dehors. Tu meurs brûlé par l'acide.",
      image: "./assets/img/road.jpg",
      boutons:
         [{ titre: 'Recommencer, destination: Type goToChapter("acceuil")' }]
   },


   corolla: {
      titre: "18h ",
      description: "Tu arrives proche de la destination mais le réservoir se vide rapidement tu n'a plus de gas. Il est 18h00 tu  continues le chemin à pied et trouve un enfant seul se faire poursuivre par une créature.",
      image: "./assets/img/corolla.jpg",
      boutons:
         [{ titre: 'Intervenir, destination: Type goToChapter("acceuil")' },
         { titre: 'Continuer, destination: Type goToChapter("acceuil")' }]
   },

   enfant: {
      titre: "Dévorée",
      description: "Tu continues ton chemin et laisse la gamine toute seule. Après 30 minutes de marches, tu trouves finalement devant les portes du camp!",
      image: "./assets/img/camp.jpg",
      boutons:
         [{ titre: 'Cognez, destination: Type goToChapter("twist")' }]
   },

   twist: {
      titre: "Réussite",
      description: "La fille que tu avais laissé à son sort te répond à travers l'ouverture de la porte. Elle te reconnaît et les autres réfugiés te refusent l'accès. Tu te retrouves seul dehors et il est 10h... Le nuage commence à faire son apparition.",
      image: "./assets/img/fille-camp.jpg",
      boutons:
         [{ titre: 'Recommencer, destination: Type goToChapter("acceuil")' }]
   },

   gamine: {
      titre: "Une nouvelle amie",
      description: "Elle te remercie et elle te guide vers le camp de survivants, tu y arrive à 19h30 sans problème. Les survivants t'acceuillent dans leur groupe car tu as sauvé la gamine du camp. Tu survis. Félicitations! ",
      image: "./assets/img/good-camp.jpg",
      boutons:
         [{ titre: 'Recommencer, destination: Type goToChapter("acceuil")' }]
   },


};

function goToChapter(chapterKey) {

   const chapter = chapters[chapterKey];

   if (!chapter) {
      console.error("Le chapitre n'existe pas.");
      return;
   }

   console.log(chapter.titre);
   console.log(chapter.description);
   console.log(chapter.image);
   console.log("boutons:");

   chapter.boutons.forEach((bouton) => {
      console.log("" + bouton.titre);
   });

}
goToChapter("acceuil");

