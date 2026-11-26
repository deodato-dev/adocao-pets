const botoes_visto = document.querySelectorAll(".botao-visto");
const campo_nome = document.querySelector("#nome");
const campo_mensagem = document.querySelector("#mensagem");

if (botoes_visto) {
    for (let i = 0; i < botoes_visto.length; i++) {
        botoes_visto[i].addEventListener("click", () => {
            const nome_pet = botoes_visto[i].getAttribute("data-pet");
            campo_mensagem.value = "Eu vi o " + nome_pet + "!";
            campo_nome.focus();
        });
    }
}

const formulario = document.querySelector("#form-contato");
const campo_email = document.querySelector("#email");

if (formulario) {
    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();

        if (campo_nome.value === "" || campo_email.value === "" || campo_mensagem.value === "") {
            alert("Por favor, preencha todos os campos!");
        } else {
            alert("Mensagem enviada com sucesso!");
            formulario.reset();
        }
    });
}

const campo_pesquisa = document.querySelector("#campo-pesquisa");
const cartazes = document.querySelectorAll(".cartaz");

if (campo_pesquisa) {
    campo_pesquisa.addEventListener("input", () => {
        const texto_digitado = campo_pesquisa.value;

        for (let i = 0; i < cartazes.length; i++) {
            const texto_cartaz = cartazes[i].textContent;

            if (texto_cartaz.indexOf(texto_digitado) !== -1) {
                cartazes[i].style.display = "block";
            } else {
                cartazes[i].style.display = "none";
            }
        }
    });
}