//outra forma de fazer que eu já tinha feito no exercício anterior
const caixa1 = document.querySelector("#caixa1");
const caixa2 = document.querySelector("#caixa2");
const btn = document.querySelector("#btn_copiar");
// const btn2 = document.querySelector("#btn_voltar");
const todosCursos = [...document.querySelectorAll(".cursos")];

todosCursos.map((el) => {
    el.addEventListener("click", (evt) => {
        const curso = evt.target;
        curso.classList.toggle("selecionado");
    });
});

btn.addEventListener("click", () => {
    const cursosSelecionados = [...document.querySelectorAll(".selecionado")];
    const cursosNaoSelecionados = [...document.querySelectorAll(".cursos:not(.selecionado)")]   //isso aqui é novidade
    
    cursosSelecionados.map((el) => {
        caixa2.appendChild(el)
    });
    cursosNaoSelecionados.map((el) => {
        caixa1.appendChild(el)
    });
});
