 chapters = {
   acceuil : {
      titre : "Le commencement" ,
      description : "Tu es un astronaute envoyé en mission sur une autre planète. Mais la mission prend court, tu dois retourner sur Terre en faisant un voyage retour de 3 ans. On te dit que des aliens ont envahis la terre et ont chnagé l'atmosphère. Des nuages d'acide apparaîssent désormais à 22h chaque jour. En court de route, les communications sont soudainement coupées.",
      image : "./assets/img/city abandon.jpg",
      boutons :
      [{titre : 'Commencer, destination: Type goToChapter("debut")'},]
  },


 debut : {
    titre : "10h" ,
    description : "Il est 10h00, tu atteris sur la planète Terre. La planète semble vide, tu as deux destinations proches de toi.",
    image : "./assets/img/city abandon.jpg",
    boutons :
    [{titre : 'Aller chez toi, destination: Type goToChapter("maison")'},]
    [{titre : 'Aller à la base, destination: Type goToChapter("base")'}]
},


maison : {
   titre : " Au bercaille",
   description : "Des créatures aliens présentes dans la maison te tuent.",
   image : [],
   boutons : 
   [{titre : 'Recommencer, destination: Type goToChapter("debut")'}]
},


 base : {
    titre : "La base militaire" ,
    description : "La base est abandonnée mais tu y trouves plein de ressources. Tu trouves une carte pour aller à un camp de survivants à 9h de temps et deux véhicules disponibles.",
    image : [],
    boutons : 
    [{titre : 'Mustang, destination: Type goToChapter("mustang")'},]
    [{titre : 'Corolla, destination: Type goToChapter("corolla")'}]
 },


 corolla : {
    titre : "18h ",
    description : "Tu arrives proche de la destination mais le réservoir se vide rapidement tu n'a plus de gas. Il est 18h00 tu  continues le chemin à pied et trouve un enfant seul se faire poursuivre par une créature.",
    image : [],
    boutons : 
   [{titre : 'Intervenir, destination: Type goToChapter("acceuil")'},]
   [{titre : 'Continuer, destination: Type goToChapter("acceuil")'}]
 },


 mustang : {
    titre : "20h",
    description : "Le véhicule émet beaucoup de bruits de moteur, cela attire les créatures aliens et ils bloquent le chemin tu te retrouves coincé à mi-chemin de la destination, tu lâches ta voirture pour continuer à pied mais perd ta carte, tu va à la mémoire. Il est 20h00, après une longue marche tu vois un groupe de créature dévorer le cadavre d'une fillette, ils bloquent le chemin. ",
    image : [],
    boutons : 
    [{titre : 'Recommencer, destination: Type goToChapter("acceuil")'}]
              
 },

};

 function goToChapter(chapterKey) {
    
    const chapter = chapters[chapterKey];

    if (!chapter)  {
      console.error("Le chapitre n'existe pas.");
      return;
    }

    console.log(chapter.titre);
    console.log(chapter.description);
    console.log(chapter.image);
    console.log("boutons:");

    chapter.boutons.forEach((bouton) =>  {
      console.log("" + bouton.titre);
    });
  
 }
 goToChapter("acceuil");

