 chapters = {
 debut : {
    titre : "10h" ,
    description : "Tu es un astronaute envoyé en mission sur une autre planète. Mais la mission prend court, tu dois retourner sur Terre en faisant un voyage retour de 3 ans. On te dit que des aliens ont envahis la terre et ont chnagé l'atmosphère. Des nuages d'acide apparaîssent désormais à 22h chaque jour. En court de route, les communications sont soudainement coupées. Il est 10h00, tu atteris sur la planète Terre. La planète semble vide, tu as deux destinations proches de toi.",
    image : city,
    boutons : "aller  chez toi, aller à la base militaire",
},
 base : {
    titre : "9h" ,
    description : "La base est abandonnée mais tu y trouves plein de ressources. Tu trouves une carte pour aller à un camp de survivants à 9h de temps et deux véhicules disponibles.",
    image : city ,
    boutons : "Prendre une corolla, Prendre une mustange",
 },
 route : {
    titre : "18h ",
    description : "Tu arrives proche de la destination mais le réservoir se vide rapidement tu n'a plus de gas. Il est 18h00 tu  continues le chemin à pied et trouve un enfant seul se faire poursuivre par une créature.",
    image : [],
    boutons : "Tu décides de la sauver, Tu continue ton chemin et n'intervient pas",
 },
 chemin : {
    titre : "20h",
    description : "Le véhicule émet beaucoup de bruits de moteur, cela attire les créatures aliens et ils bloquent le chemin tu te retrouves coincé à mi-chemin de la destination, tu lâches ta voirture pour continuer à pied mais perd ta carte, tu va à la mémoire. Il est 20h00, après une longue marche tu vois un groupe de créature dévorer le cadavre d'une fillette, ils bloquent le chemin. ",
    image : [],
    boutons : "Tu les affrontes pour dégager le chemin, Tu fais demi-tour et trouves un détour",
 },
};

 function goToChapter(chapter) {
    // Si le chapitre existe dans le code
    //On affiche avec la console.log() son titre, sa description et ses boutons (clés)
    // Sinon 
    // Afficher un message d'erreur
 }

 // Ici on doit appeler la fonction pour faire apparaître le premier chapitre au chargement de la page.