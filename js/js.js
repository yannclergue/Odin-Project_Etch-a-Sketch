
for (let i = 0; i < 256; i++){
    let div = document.createElement("div");
    div.style.height = "50px"
    div.style.width = "50px"
    div.style.border = "1px solid black"
    document.querySelector(".container").appendChild(div)
}

function couleur() {
    let div = document.querySelectorAll(".container div")
    div.forEach(div => {
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "red"
        })
    });
    console.log(div)
}

couleur();