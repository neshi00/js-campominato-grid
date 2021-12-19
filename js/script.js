// creo una funzione per la creazione di nuovi box
function createNewBox(doveLoMetto) {
  const newBox = document.createElement("div");
  newBox.className = "box";
  doveLoMetto.append(newBox);
  // al click del box, quello specifico box (this)
  // si colorerà di blu attraverso l'aggiunta di una nuova classe
  newBox.addEventListener("click", function () {
    this.classList.toggle("blue");
  });
}

// creo il collegamento col DOM con button e container
const buttonFirst = document.querySelector(".livello-primo");
const buttonSecond = document.querySelector(".livello-secondo");
const buttonThird = document.querySelector(".livello-terzo");
const containerHtml = document.querySelector(".container");

// al click del button associo un ciclo for che al suo interno
// va a richiamare la funzione per la creazione di nuovi box.
buttonFirst.addEventListener("click", function () {
  // prima del ciclo aggiungo una classe a container con cui determino
  // una grandezza particolare per l'insieme dei blocchi
  containerHtml.classList.add("easy-mode");
  containerHtml.classList.remove("medium-mode");
  containerHtml.classList.remove("hard-mode");

  for (i = 1; i < 101; i++) {
    createNewBox(containerHtml);
  }
});

buttonSecond.addEventListener("click", function () {
  containerHtml.classList.remove("easy-mode");
  containerHtml.classList.add("medium-mode");
  containerHtml.classList.remove("hard-mode");

  for (i = 0; i < 81; i++) {
    createNewBox(containerHtml);
  }
});

buttonThird.addEventListener("click", function () {
  containerHtml.classList.remove("easy-mode");
  containerHtml.classList.remove("medium-mode");
  containerHtml.classList.add("hard-mode");

  for (i = 0; i < 49; i++) {
    createNewBox(containerHtml);
  }
});
