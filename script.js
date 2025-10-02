const obituaryData = [
  // Homens
  { name: "Marcos Ferreira", img: "homem (1).jpg" },
  { name: "Pedro Silva", img: "homem (2).jpg" },
  { name: "André Moreira", img: "homem (3).jpg" },
  { name: "João Campos", img: "homem (4).jpg" },
  { name: "Ricardo Nunes", img: "homem (5).jpg" },
  { name: "Carlos Henrique", img: "homem (6).jpg" },
  { name: "Roberto Carvalho", img: "homem (7).jpg" },
  { name: "Felipe Araújo", img: "homem (8).jpg" },
  { name: "Eduardo Correia", img: "homem (9).jpg" },
  { name: "Kin Saint Ramires", img: "homem (10).jpg" },
  { name: "Kin Jr Rodrigues", img: "homem (11).jpg" },

  // Mulheres (com "(1)" nos arquivos)
  { name: "Luciana Alves", img: "mulher(1).jpeg" },
  { name: "Carolina Duarte", img: "mulher(2).jpeg" },
  { name: "Fernanda Ribeiro", img: "mulher(3).jpg" },
  { name: "Patrícia Mendes", img: "mulher(4).jpeg" },
  { name: "Tatiane Souza", img: "mulher(5).jpg" },
  { name: "Juliana Torres", img: "mulher(6).jpg" },
  { name: "Vanessa Martins", img: "mulher(7).jpeg" },
  { name: "Gabriela Pinto", img: "mulher(8).jpg" },
  { name: "Hana Alvez Rodrigues", img: "mulher(9).jpeg" }
];

function generateObituary() {
  const container = document.getElementById("obituary");
  obituaryData.forEach(entry => {
    const card = document.createElement("div");
    card.classList.add("obit-card");

    card.innerHTML = `
      <img src="${entry.img}" alt="Foto de ${entry.name}">
      <p>${entry.name}</p>
    `;
    container.appendChild(card);
  });
}

generateObituary();

// Efeito de jornal "tremendo"
setInterval(() => {
  const container = document.querySelector('.container');
  const x = Math.random() * 2 - 1;
  const y = Math.random() * 2 - 1;
  container.style.transform = `translate(${x}px, ${y}px)`;
}, 120);



