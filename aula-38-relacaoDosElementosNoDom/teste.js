const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]

// console.log(btn_c.getRootNode())         //dou console em tudo
console.log(btn_c[0].getRootNode())
console.log(btn_c[0].ownerDocument)
// console.log(caixa1.firstElementChild)  //apenas no primeiro elemento filho
// console.log(caixa1.lastElementChild)   //apenas no último elemento filho
// console.log(caixa1.children)           //em todos os filhos da caixa1

// O que é o DOM?
// O DOM (Document Object Model) é a representação em árvore da estrutura HTML de uma página. Cada elemento HTML é um nó (node) e pode ter:

// Pai (parent)

// Filhos (children)

// Irmãos (siblings)

// | Termo DOM                | Significado                              | Exemplo                          |
// | ------------------------ | ---------------------------------------- | -------------------------------- |
// | `parentNode`             | Nó pai do elemento                       | `section.parentNode → main`      |
// | `childNodes`             | Todos os nós filhos (inclui textos, etc) | `section.childNodes`             |
// | `children`               | Somente elementos filhos (tags)          | `section.children`               |
// | `firstChild`             | Primeiro nó filho (pode ser texto)       |                                  |
// | `firstElementChild`      | Primeiro elemento filho                  | `section.firstElementChild → h1` |
// | `lastChild`              | Último nó filho                          |                                  |
// | `lastElementChild`       | Último elemento filho                    | `section.lastElementChild → p`   |
// | `nextSibling`            | Próximo nó (inclui texto)                |                                  |
// | `nextElementSibling`     | Próximo elemento no mesmo nível          | `h1.nextElementSibling → p`      |
// | `previousElementSibling` | Elemento anterior ao atual               | `p.previousElementSibling → h1`  |
