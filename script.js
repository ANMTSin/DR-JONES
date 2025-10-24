// ===== Notícias Dinâmicas =====
const newsContainer = document.getElementById('newsContainer');

const noticias = [
  {
    titulo: "Dia das Crianças na Escola",
    imagem: "criancas.png",
    descricao: "O Dia das Crianças foi comemorado das 12h às 15h com muita diversão, brincadeiras e alegria para todos os alunos."
  },
  {
    titulo: "PAEBES 2025",
    imagem: "paebes.png",
    descricao: "A prova do PAEBES foi realizada com dedicação e concentração, permitindo aos alunos demonstrarem seus conhecimentos."
  },
  {
    titulo: "SABES 2025",
    imagem: "sabes.png",
    descricao: "O SABES proporcionou momentos de aprendizado e desenvolvimento, incentivando cada estudante a superar desafios."
  },
  {
    titulo: "7 de Setembro em Baixo Guandu",
    imagem: "7setembro.png",
    descricao: "A celebração do 7 de Setembro foi realizada nas ruas de Baixo Guandu com atividades cívicas, apresentações e aprendizado."
  }
];

noticias.forEach(noticia => {
  const card = document.createElement('div');
  card.className = 'news-card';
  card.innerHTML = `
    <img src="${noticia.imagem}" alt="${noticia.titulo}">
    <h3>${noticia.titulo}</h3>
    <p>${noticia.descricao}</p>
  `;
  newsContainer.appendChild(card);
});

// ===== Informações Interativas =====
const infoCardsContainer = document.getElementById('infoCards');

const infoCards = [
  { titulo: "Ensino Integral", descricao: "Proporciona aos alunos oportunidades únicas de aprendizado e desenvolvimento." },
  { titulo: "Atividades Culturais", descricao: "Promove eventos que incentivam talentos artísticos e criativos." },
  { titulo: "Esportes e Saúde", descricao: "Estimula a prática esportiva e hábitos saudáveis entre os estudantes." },
  { titulo: "Projetos Educativos", descricao: "Envolve os alunos em experiências de aprendizado inovadoras." }
];

infoCards.forEach(info => {
  const card = document.createElement('div');
  card.className = 'info-card';
  card.innerHTML = `
    <h3>${info.titulo}</h3>
    <p>${info.descricao}</p>
  `;
  infoCardsContainer.appendChild(card);
});

// ===== Formulário de Contato via WhatsApp =====
const form = document.getElementById('contactForm');
const feedback = document.getElementById('feedback');
const telefoneEscola = '27995780704'; // número da escola

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;

  if(nome && email && mensagem){
    const texto = `Olá, meu nome é ${nome}. Meu e-mail é ${email}. Mensagem: ${mensagem}`;
    const url = `https://wa.me/${telefoneEscola}?text=${encodeURIComponent(texto)}`;

    // Feedback animado
    feedback.style.color = "green";
    feedback.textContent = "Enviando sua mensagem...";
    
    setTimeout(() => {
      window.open(url, '_blank');
      feedback.textContent = `Obrigado, ${nome}! Você será redirecionado para o WhatsApp da escola.`;
      form.reset();
    }, 1000);

  } else {
    feedback.textContent = "Por favor, preencha todos os campos.";
    feedback.style.color = "red";
  }
});
