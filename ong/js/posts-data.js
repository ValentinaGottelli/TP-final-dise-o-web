const POSTS = [
  {
    slug: 'rescate-ruta-14',
    titulo: 'Rescate en la Ruta 14',
    tag: 'Operativo',
    fecha: '11 feb 2026',
    lugar: 'Corrientes, Argentina',
    estado: 'Finalizado',
    desc: 'Intervención de emergencia tras el vuelco de un camión que transportaba fauna de forma ilegal.',
    img: 'ROV2339122814_1004-1024x680.jpg',
    video: false,
    cuerpo: `
      <p>Un llamado de madrugada activó al equipo de emergencias: un camión que transportaba fauna de manera ilegal volcó sobre la <strong>Ruta 14</strong>.</p>
      <h2>Contra reloj</h2>
      <p>En pocas horas estabilizamos a los animales sobrevivientes y coordinamos su traslado al santuario.</p>
      <blockquote>“El tráfico de fauna mata mucho antes de llegar a destino.”</blockquote>
      <p>El operativo terminó con varios ejemplares recuperados y una causa judicial en curso.</p>`
  },
  {
    slug: 'liberacion-delta',
    titulo: 'Liberación en el Delta',
    tag: 'Campaña · Video',
    fecha: '30 ene 2026',
    lugar: 'Delta del Paraná',
    estado: 'Finalizado',
    desc: 'El cierre soñado: un grupo de animales rehabilitados regresa a la naturaleza. Lo filmamos todo.',
    img: 'videoplayback (1).mp4',
    video: true,
    cuerpo: `
      <p>Después de meses de rehabilitación, llegó el día que justifica todo el trabajo: la <strong>liberación</strong>.</p>
      <h2>De vuelta a casa</h2>
      <p>En el Delta del Paraná soltamos a un grupo de animales recuperados, bajo seguimiento por GPS durante los meses siguientes.</p>
      <blockquote>“Ver alejarse a un animal que llegó al borde de la muerte no tiene precio.”</blockquote>
      <p>El video de la jornada estará disponible acá muy pronto.</p>`
  },
  {
    slug: 'censo-2026',
    titulo: 'Censo de fauna 2026',
    tag: 'Informe',
    fecha: '15 ene 2026',
    lugar: 'Programa nacional',
    estado: 'Activo',
    desc: 'Presentamos los resultados del relevamiento anual de especies protegidas en nuestras áreas de trabajo.',
    img: '84q4j480z_2000x1500__1.jpg',
    video: false,
    cuerpo: `
      <p>Cada año relevamos las poblaciones de especies protegidas en las zonas donde trabajamos. El <strong>censo 2026</strong> trae buenas y malas noticias.</p>
      <h2>Lo que dicen los datos</h2>
      <p>Algunas poblaciones muestran signos de recuperación, mientras otras siguen bajo fuerte presión por la pérdida de hábitat.</p>
      <p>Estos datos guían nuestras prioridades para el resto del año.</p>`
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = POSTS;
}
