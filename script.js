const chapters = {
  acceuil: {
    titre: "Le commencement",
    description:
      "Tu es un astronaute envoyé en mission sur une autre planète. Mais la mission prend court, tu dois retourner sur Terre en faisant un voyage retour de 3 ans. On te dit que des aliens ont envahis la terre et ont chnagé l'atmosphère. Des nuages d'acide apparaîssent désormais à 22h chaque jour. En court de route, les communications sont soudainement coupées.",
    image: "./assets/img/cloud.jpg",
    video: "",
    son: "",
    boutons: [{ titre: "Commencer", destination: "debut" }],
  },

  debut: {
    titre: "10h",
    description:
      "Il est 10h00, tu atteris sur la planète Terre. La planète semble vide, tu as deux destinations proches de toi.",
    image: "",
    video: "./assets/videos/pluie.mp4",
    son: "./assets/audio/rain.mp3",
    boutons: [
      { titre: "Aller chez toi", destination: "maison" },
      { titre: "Aller à la base", destination: "base" },
      { titre: "Recommencer", destination: "acceuil" }
    ],
  },

  maison: {
    titre: " Au bercaille",
    description: "Des créatures aliens présentes dans la maison te tuent.",
    image: "./assets/img/aliens-death.jpg",
    video: "",
    son: "./assets/audio/aliens.mp3",
    boutons: [{ titre: "Recommencer", destination: "acceuil" }],
  },

  base: {
    titre: "La base militaire",
    description:
      "La base est abandonnée mais tu y trouves plein de ressources. Tu trouves une carte pour aller à un camp de survivants à 9h de temps et deux véhicules disponibles. Une Mustang : bruyant mais rapide et une Corolla, subtile mais plus lente.",
    image: "./assets/img/base.jpg",
    video: "",
    son: "",
    boutons: [
      { titre: "Mustang", destination: "mustang" },
      { titre: "Corolla", destination: "corolla" },
      { titre: "Recommencer", destination: "acceuil" }
    ],
  },

  mustang: {
    titre: "20h",
    description:
      "Le véhicule émet beaucoup de bruits de moteur, cela attire les créatures aliens et ils bloquent le chemin tu te retrouves coincé à mi-chemin de la destination, tu lâches ta voirture pour continuer à pied mais perd ta carte, tu va à la mémoire. Il est 20h00, après une longue marche tu vois un groupe de créature dévorer le cadavre d'une fillette, ils bloquent le chemin. ",
    image: "./assets/img/mustang.jpg",
    video: "",
    son: "./assets/audio/mustang.mp3",
    boutons: [
      { titre: "Affronter", destination: "affrontement" },
      { titre: "Demi-tour", destination: "detour" },
      { titre: "Recommencer", destination: "acceuil" }
    ],
  },

  affrontement: {
    titre: "Monté en courage",
    description: "Tu finis par mourir, ils étaient trop nombreux pour toi",
    image: "./assets/img/fight.jpg",
    video: "",
    son: "./assets/audio/aliens.mp3",
    boutons: [{ titre: "Recommencer", destination: "acceuil" }],
  },

  detour: {
    titre: "Stratégie de retrait",
    description:
      "Tu arrives juste à temps aux portes du camp vers 21h58 mais les survivants déja inquiets de la disparition d'un de leur membre te font pas confiance et te laisse dehors. Tu meurs brûlé par l'acide.",
    image: "./assets/img/road.jpg",
    video: "",
    son: "",
    boutons: [
      { titre: "Recommencer", destination: "acceuil" },],
  },

  corolla: {
    titre: "18h ",
    description:
      "Tu arrives proche de la destination mais le réservoir se vide rapidement tu n'a plus de gas. Il est 18h00 tu  continues le chemin à pied et trouve un enfant seul se faire poursuivre par une créature.",
    image: "",
    video: "assets/videos/corolla.mp4",
    son: "",
    boutons: [
      { titre: "Intervenir", destination: "gamine" },
      { titre: "Continuer", destination: "enfant" },

    ],
  },

  enfant: {
    titre: "Concentré",
    description:
      "Tu continues ton chemin et laisse la gamine toute seule. Après 30 minutes de marches, tu trouves finalement devant les portes du camp!",
    image: "./assets/img/camp.jpg",
    video: "",
    son: "assets/audio/door.mp3",
    boutons: [
      { titre: "Cognez", destination: "twist" },
      { titre: "Recommencer", destination: "acceuil" }],
  },

  twist: {
    titre: "Réussite",
    description:
      "La fille que tu avais laissé à son sort te répond à travers l'ouverture de la porte. Elle te reconnaît et les autres réfugiés te refusent l'accès. Tu te retrouves seul dehors et il est 10h... Le nuage commence à faire son apparition.",
    image: "./assets/img/fille-camp.jpg",
    video: "",
    son: "",
    boutons: [{ titre: "Recommencer", destination: "acceuil" }],
  },

  gamine: {
    titre: "Une nouvelle amie",
    description:
      "Tu sauves la fille. Elle te remercie et elle te guide vers le camp de survivants, tu y arrive à 19h30 sans problème. Les survivants t'acceuillent dans leur groupe car tu as sauvé la gamine du camp. Tu survis. Félicitations! ",
    image: "./assets/img/good-camp.jpg",
    video: "",
    son: "",
    boutons: [{ titre: "Recommencer", destination: "acceuil" }],
  },
};



const song = new Audio("./assets/audio/background.mp3");

let twist = false;

let buttonsContainer;

function save(chapterKey) {
  localStorage.setItem("currentChapter", chapterKey);
}

function loadProgress() {
  return localStorage.getItem("currentChapter");
}
function save(chapterKey) {
  const chapter = chapters[chapterKey];
  song.addEventListener(
    "ended",
    function () {
      this.currentTime = 0;
      this.play();
    },
    false
  );
  if (!chapter) {
    console.error("Le chapitre n'existe pas.");
    return;
  }

  const titleElement = document.getElementById("chapter-title");
  const descriptionElement = document.getElementById("chapter-description");
  const imageElement = document.getElementById("chapter-image");
  const videoElement = document.getElementById("video");
  const sonElement = document.getElementById("son");
  titleElement.textContent = chapter.titre;
  descriptionElement.textContent = chapter.description;
  imageElement.src = chapter.image;

  videoElement.src = chapter.video;
  sonElement.src = chapter.son;

  while (buttonsContainer.firstChild) {
    buttonsContainer.removeChild(buttonsContainer.firstChild);
  }


  chapter.boutons.forEach((button) => {

    song.play();

    const nouveauBtn = document.createElement("button");
    nouveauBtn.textContent = button.titre;
    nouveauBtn.addEventListener("click", () => {
      save(button.destination);
    });
    buttonsContainer.appendChild(nouveauBtn);
  });

  chapter.boutons.forEach((button) => {
    console.log(button.destination);
  });
  if (chapterKey === "twist") {
    twist = true;
  }
}

function Réinitialiser() {
  localStorage.clear();
  save("acceuil");
  goToChapter("acceuil");
}


const boutonRecommencer = document.createElement("button");
boutonRecommencer.textContent = "Recommencer";
boutonRecommencer.addEventListener("click", Réinitialiser);
buttonsContainer = document.getElementById("chapter-buttons");
if (buttonsContainer) {
  buttonsContainer.appendChild(boutonRecommencer);
}





const savedChapter = loadProgress();
if (savedChapter) {
  save(savedChapter);
} else {
  save("acceuil");
}



