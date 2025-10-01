const obituaryData = [
  // Homens
  { name: "Marcos Ferreira", img: "fotos/homem (1).jpg" },
  { name: "Pedro Silva", img: "fotos/homem (2).jpg" },
  { name: "André Moreira", img: "fotos/homem (3).jpg" },
  { name: "João Campos", img: "fotos/homem (4).jpg" },
  { name: "Ricardo Nunes", img: "fotos/homem (5).jpg" },
  { name: "Carlos Henrique", img: "fotos/homem (6).jpg" },
  { name: "Roberto Carvalho", img: "fotos/homem (7).jpg" },
  { name: "Felipe Araújo", img: "fotos/homem (8).jpg" },
  { name: "Eduardo Correia", img: "fotos/homem (9).jpg" },
  { name: "Kin Saint Ramires", img: "fotos/homem (10).jpg" },
  { name: "Kin Jr Rodrigues", img: "fotos/homem (11).jpg" },

  // Mulheres (com "(1)" nos arquivos)
  { name: "Luciana Alves", img: "fotos/mulher(1).jpeg" },
  { name: "Carolina Duarte", img: "fotos/mulher(2).jpeg" },
  { name: "Fernanda Ribeiro", img: "fotos/mulher(3).jpeg" },
  { name: "Patrícia Mendes", img: "fotos/mulher(4).jpeg" },
  { name: "Tatiane Souza", img: "fotos/mulher(5).jpeg" },
  { name: "Juliana Torres", img: "fotos/mulher(6).jpeg" },
  { name: "Vanessa Martins", img: "fotos/mulher(7).jpeg" },
  { name: "Gabriela Pinto", img: "fotos/mulher(8).jpeg" },
  { name: "Hana Alvez Rodrigues", img: "fotos/mulher(9).jpeg" }
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
