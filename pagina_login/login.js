

const header = document.querySelector(".header");
if (header){
    header.addEventListener("mouseenter", () => {
        header.classList.add("header_reto");
    });

    header.addEventListener("mouseleave", () => {
        header.classList.remove("header_reto");
    });
}

const botao_form = document.querySelector(".botao_form");
if (botao_form){
    botao_form.addEventListener("mouseenter", () => {
        botao_form.style.backgroundColor="#38312b";
    });
    botao_form.addEventListener("mouseleave", () => {
        botao_form.style.backgroundColor="#c56d53";
    });
}