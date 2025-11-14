function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

document.querySelector(".form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Pedido enviado! Entraremos em contato ❤️");
});
