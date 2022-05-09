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

//fadeIn pour le titre
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
//les rubriques du menu doivent être surligné
let navmenu = document.querySelectorAll('a');

navmenu.forEach(function(a) {
    a.addEventListener('mouseover', () => {
        a.style.textDecoration = 'underline';
    });
    a.addEventListener('mouseout', () => {
        a.style.textDecoration = 'none';
    });
});
/*Animation de la card*/
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
//Effet sur le footer icones
let footericones = document.getElementsByClassName('footer-icones');
for (let i = 0; i < footericones.length; i++) {
    footericones[i].addEventListener('mouseover', () => {
        footericones[i].style.color = '#ffff00';
    });
    footericones[i].addEventListener('mouseout', () => {
        footericones[i].style.color = 'white';
    });
}