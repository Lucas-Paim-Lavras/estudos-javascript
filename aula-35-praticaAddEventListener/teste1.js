const caixa1 = document.querySelector("#caixa1");
const caixa2 = document.querySelector("#caixa2");
const btn = document.querySelector("#btn_copiar");
const btn2 = document.querySelector("#btn_voltar");
const todosCursos = [...document.querySelectorAll(".cursos")];

todosCursos.map((el) => {
    el.addEventListener("click", (evt) => {
        const curso = evt.target;
        curso.classList.toggle("selecionado");
    });
});

btn.addEventListener("click", () => {
    const cursos = [...document.querySelectorAll(".cursos")];
    cursos.map((curso) => {
        if (curso.classList.contains("selecionado") && caixa1.contains(curso)) {
            caixa2.appendChild(curso); // Vai da caixa1 pra caixa2
        }
    });
});

btn2.addEventListener("click", () => {
    const cursos = [...document.querySelectorAll(".cursos")];
    cursos.map((curso) => {
        if (curso.classList.contains("selecionado") && caixa2.contains(curso)) {
            caixa1.appendChild(curso); // Volta pra caixa1 se desmarcado
        }
    });
});
