let roseButton = document.querySelector("button.rose");
let lambButton = document.querySelector("button.lamb");
let foxButton = document.querySelector("button.fox");
let alternativeText = document.querySelector("h3");
let alternativeHeading = document.querySelector("h1");

roseButton.addEventListener("click", askRose);
lambButton.addEventListener("click", askLamb);
foxButton.addEventListener("click", askFox);

function askRose() {
  let name = prompt("What is your name?");
  let question = prompt("Are you in love with someone? y/n");
  if (question === "y") {
    alternativeText.innerHTML =
      "I am really happy for you! However, do not take love for granted. Relationships have to be watered like flowers. 🌹💕";
  } else {
    alternativeText.innerHTML =
      "Never mind " +
      name +
      ", love will find a way in your life. Remember that you have to trust your heart. 💕";
  }
}

function askLamb() {
  let name = prompt("What is your name?");
  let language = prompt("What is your native language?");
  switch (language) {
    case "German":
      alternativeHeading.innerHTML = "Der Kleine Prinz";
      alternativeText.innerHTML =
        "Man sieht nur mit dem Herzen gut. Das Wesentliche ist für die Augen unsichtbar. 💙";
      break;
    case "French":
      alternativeHeading.innerHTML = "Le Petit Prince";
      alternativeText.innerHTML =
        "On ne voit bien qu'avec le coeur, l'essentiel est invisible pour les yeux. 💙";
      break;
    case "Spanish":
      alternativeHeading.innerHTML = "El Principito";
      alternativeText.innerHTML =
        "Solo se ve bien con el corazón, lo esencial es invisible a los ojos. 💙";
      break;
    case "Portuguese":
      alternativeHeading.innerHTML = "O Pequeno Principe";
      alternativeText.innerHTML =
        "Só se vê bem com o coração. O essencial é invisível para os olhos. 💙";
      break;
    case "Czech":
      alternativeHeading.innerHTML = "Malý princ";
      alternativeText.innerHTML =
        "Správně vidíme jen srdcem. Co je důležité, je očím neviditelné. 💙";
      break;
    case "Polish":
      alternativeHeading.innerHTML = "Mały Książę";
      alternativeText.innerHTML =
        "Dobrze widzi się tylko sercem. Najważniejsze jest niewidoczne dla oczu. 💙";
      break;
    case "Italian":
      alternativeHeading.innerHTML = "Il Piccolo Principe";
      alternativeText.innerHTML =
        "Non si vede bene che col cuore, l'essenziale è invisibile agli occhi. 💙";
      break;
    case "Dutch":
      alternativeHeading.innerHTML = "De Kleine Prins";
      alternativeText.innerHTML =
        "Alleen met het hart kun je goed zien. Het wezenlijke is voor de ogen onzichtbaar. 💙";
      break;
    case "Hungarian":
      alternativeHeading.innerHTML = "A Kis Herceg";
      alternativeText.innerHTML =
        "Csak szívvel lehet jól látni; ami lényeges, az láthatatlan a szem számára. 💙";
      break;
    case "Japanese":
      alternativeHeading.innerHTML = "星の王子様";
      alternativeText.innerHTML = "大切な物は目に見えないんだ 💙";
      break;
    case "Finish":
      alternativeHeading.innerHTML = "Pikku prinssi";
      alternativeText.innerHTML =
        "Vain sydämestä voi nähdä oikein; mikä on välttämätöntä, on näkymätöntä silmälle. 💙";
    default:
      alternativeText.innerHTML =
        "Sorry, " +
        name +
        ", looks like I have forgotten to include <em>The Little Prince</em> in your language. But the book has been translated into more than 250 languages, so I bet you'll find it on Google!";
      break;
  }
}

function askFox() {
  let name = prompt("What is your name?");
  let pet = prompt("Do you have a pet? y/n");
  if (pet === "y") {
    alert(
      "Dear " +
        name +
        ", remember that you are forever responsible for your pet. You have established a tie, which means you are special and important to each other. 🐾"
    );
  } else {
    alert(
      "Dear " +
        name +
        ", having a pet is a good thing. To you, it would be unique in all the world. And to it, you would be unique in all the world. 🦊"
    );
  }
}
