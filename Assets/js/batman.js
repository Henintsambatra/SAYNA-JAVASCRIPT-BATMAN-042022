//Animation General
let menu = document.querySelectorAll(".nav .nav-item");
menu.forEach(men => {
    men.addEventListener("mouseover", () => {
        men.style.textDecoration = "underline";
        men.style.fontWeight = "800";
        men.style.color = "white";

    })
});

menu.forEach(men => {
    men.addEventListener("mouseout", () => {
        men.style.textDecoration = "none";
        men.style.fontWeight = "400";
        men.style.color = "white";
    })
});

//fade in 
let title = document.querySelectorAll("h1")
for (let i = 0; i < title.length; i++) {
    title[i].classList.add("sliders")

}

let para = document.querySelectorAll("p")
for (let i = 0; i < para.length; i++) {
    para[i].classList.add("sliders")

}


let image = document.querySelectorAll("img")
for (let i = 0; i < image.length; i++) {
    image[i].classList.add("slider")

}
/*card*/
/*Les images des trois héros Spiderman doivent zoomer légèrement et individuellement
au passage de la souris */
let all_card = document.querySelectorAll(".card")


all_card.forEach(card => {
    card.addEventListener("mouseover", () => {
        card.style.transform = "scale(1.2)";
        card.style.marginTop = "4%";
        card.querySelector(".cardy").style.display = "block";
    })
});

all_card.forEach(card => {
    card.addEventListener("mouseout", () => {
        card.style.transform = "scale(1)";
        card.style.marginTop = "0%";
        card.querySelector(".cardy").style.display = "none";
    })
});