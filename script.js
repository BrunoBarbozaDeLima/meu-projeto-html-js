// Capturando os elementos
const titulo = document.getElementById("titulo");
const listaNaoOrdenada = document.querySelector("ul");
const link = document.querySelector("a");
const listaOrdenada = document.getElementById("lista-ordenada");

// Adicionando conteúdo ao título e ao link
titulo.innerText = "Bem-vindo ao meu projeto!";
link.innerText = "Visite a Prozeducação";

// Adicionando itens à lista não ordenada
listaNaoOrdenada.innerHTML = `
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
`;

// Adicionando itens à lista ordenada com links
listaOrdenada.innerHTML = `
    <li><a href="https://google.com" target="_blank">Google</a></li>
    <li><a href="https://github.com" target="_blank">GitHub</a></li>
    <li><a href="https://stackoverflow.com" target="_blank">Stack Overflow</a></li>
`;
