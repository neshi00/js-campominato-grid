// creo una funzione per la creazione di nuovi box
function createNewBox(doveLoMetto) {
  const newBox = document.createElement("div");
  newBox.className = "box";
  doveLoMetto.append(newBox);
}

// creo il collegamento col DOM con button e container
const buttonFirst = document.querySelector(".livello-primo");
const containerHtml = document.querySelector(".container");

// al click del button associo un ciclo for che al suo interno
// va a richiamare la funzione per la creazione di nuovi box.
buttonFirst.addEventListener("click", function () {
  // prima del ciclo aggiungo una classe a container con cui determino
  // una grandezza particolare per l'insieme dei blocchi
  containerHtml.classList.add("easy-mode");
  for (i = 0; i < 100; i++) {
    createNewBox(containerHtml);
  }
});
