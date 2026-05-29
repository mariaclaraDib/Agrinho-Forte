// MENSAGEM AO CLICAR NO MENU

const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", () => {
        alert("Você clicou no menu: " + link.innerText);
    });
});


// ANIMAÇÃO NOS CARDS

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mouseover", () => {
        card.style.transform = "scale(1.05)";
    });

    card.addEventListener("mouseout", () => {
        card.style.transform = "scale(1)";
    });

});


// MENSAGEM DE BOAS-VINDAS

window.onload = () => {

    alert("Bem-vindo ao site Agrinho Agro Forte 🌱");

};
