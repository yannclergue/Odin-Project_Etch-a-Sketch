
function boucleDiv(repeat){
    for (let i = 0; i < repeat; i++){
        let div = document.createElement("div");
        div.style.height = "50px"
        div.style.width = "50px"
        div.style.border = "1px solid black"
        document.querySelector(".container").appendChild(div)
    }
}

let nombreDiv = boucleDiv(256)

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

    boucleDiv(value)

    couleur();

})

couleur();