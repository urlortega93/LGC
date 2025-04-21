const sermons = [
  {
    id: 1,
    title: "El Poder de la Fe",
    date: "2023-10-15",
    pastor: "Pastor Juan Pérez",
    youtubeId: "Iru0s0eDw24",
    description: "Exploramos cómo la fe puede mover montañas en nuestras vidas y fortalecer nuestra relación con Dios.",
    theme: "Fe",
    verses: [
      "Juan 3:16 - Porque de tal manera amó Dios al mundo...",
      "Romanos 8:28 - Y sabemos que a los que aman a Dios...",
      "Filipenses 4:13 - Todo lo puedo en Cristo que me fortalece."
    ]
  },
  {
    id: 2,
    title: "El Amor Incondicional",
    date: "2023-10-08",
    pastor: "Pastora María Gómez",
    youtubeId: "dQw4w9WgXcQ",
    description: "Reflexionamos sobre el amor de Dios y cómo aplicarlo en nuestras relaciones diarias.",
    theme: "Amor",
    verses: [
      "1 Corintios 13:4-7 - El amor es paciente, es bondadoso...",
      "Juan 15:13 - Nadie tiene mayor amor que este..."
    ]
  },
  {
    id: 3,
    title: "La Esperanza en Tiempos Difíciles",
    date: "2023-10-01",
    pastor: "Pastor Carlos Rodríguez",
    youtubeId: "9bZkp7q19f0",
    description: "Cómo mantener la esperanza cuando enfrentamos adversidades.",
    theme: "Esperanza",
    verses: [
      "Jeremías 29:11 - Porque yo sé los planes que tengo para vosotros...",
      "Romanos 15:13 - Y el Dios de esperanza os llene de todo gozo y paz..."
    ]
  },
  {
    id: 4,
    title: "La Sabiduría de Dios",
    date: "2023-09-24",
    pastor: "Pastor Juan Pérez",
    youtubeId: "JGwWNGJdvx8",
    description: "Buscando la sabiduría divina para nuestras decisiones diarias.",
    theme: "Sabiduría",
    verses: [
      "Proverbios 3:5-6 - Confía en Jehová con todo tu corazón...",
      "Santiago 1:5 - Y si alguno de vosotros tiene falta de sabiduría..."
    ]
  }
];

export const getSermons = () => sermons;
export const getThemes = () => [...new Set(sermons.map(sermon => sermon.theme))];
export const getSermonById = (id) => sermons.find(sermon => sermon.id === id);