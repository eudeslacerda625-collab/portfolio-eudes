const projetos = [
    {
        nome: "Formatação de Computadores",
        descricao: "Serviço completo de formatação e instalação de programas essenciais.",
        link: "#"
    },
    {
        nome: "Limpeza de Notebook",
        descricao: "Limpeza interna para melhorar desempenho e evitar superaquecimento.",
        link: "#"
    },
    {
        nome: "Remoção de Vírus",
        descricao: "Eliminação de vírus e otimização do sistema.",
        link: "#"
    },
    {
        nome: "Suporte Remoto",
        descricao: "Atendimento remoto para resolução de problemas.",
        link: "#"
    }
];

const container = document.getElementById("lista-projetos");

projetos.forEach(projeto => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <h3>${projeto.nome}</h3>
        <p>${projeto.descricao}</p>
        <a href="${projeto.link}" target="_blank">Ver mais</a>
    `;

    container.appendChild(card);
});