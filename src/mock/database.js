const data = {
  sermons: [
    {
      id: 1,
      title: "El Poder de la Fe",
      date: "2023-10-15",
      pastor: "Pastor Juan Pérez",
      youtubeId: "Iru0s0eDw24",
      description: "Exploramos cómo la fe puede mover montañas...",
      theme: "Fe",
      verses: ["Juan 3:16", "Romanos 8:28"]
    }
  ],
  events: [
    {
      id: 1,
      title: "Retiro Espiritual",
      date: "25-27 Noviembre 2023",
      description: "Un fin de semana de renovación espiritual...",
      image: ""
    }
  ],
  users: [
    {
      id: 1,
      email: "admin@lagrancomision.com",
      password: "Admin123!",
      name: "Administrador",
      role: "admin"
    }
  ]
};

export const db = {
  getSermons: () => [...data.sermons],
  addSermon: (sermon) => {
    const id = Math.max(0, ...data.sermons.map(s => s.id)) + 1;
    data.sermons.push({...sermon, id});
    return [...data.sermons];
  },
  getEvents: () => [...data.events],
  addEvent: (event) => {
    const id = Math.max(0, ...data.events.map(e => e.id)) + 1;
    data.events.push({...event, id});
    return [...data.events];
  },
  getUser: (email) => data.users.find(u => u.email === email),
  verifyUser: (email, password) => {
    const user = data.users.find(u => u.email === email);
    return user?.password === password ? user : null;
  }
};