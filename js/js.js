const container = document.querySelector(".container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (i = 0; i < (rows * cols); i++) {
    let cell = document.createElement("div");
    cell.innerText = (i + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16)

function couleur() {
    let div = document.querySelectorAll(".container div")
    div.forEach(div => {
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "red"
        })
    });
}


const boutton = document.querySelector("button")

boutton.addEventListener("click", () => {
   let value = prompt("Combien de bloc voulez vous ?")
   if(isNaN(value)){
    prompt("merci de mettre un chiffre")
   }
   else if(value <= 0 || value > 100){
    prompt("Surprise ! Le chiffre ne doit pas être inéférieur à 0 ou supérieur à 100 !")
}

    let div = document.querySelectorAll(".container div")
    div.forEach(div => {
        div.remove()
    });

    makeRows(value, value)

    couleur();

})

couleur();