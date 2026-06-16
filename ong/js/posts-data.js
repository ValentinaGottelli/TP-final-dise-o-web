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
    titulo: 'Libertad para el Aguará Guazú',
    tag: 'Campaña · Video',
    fecha: '30 ene 2026',
    lugar: 'Esteros del Ibera',
    estado: 'Finalizado',
    desc: 'Yarará, un Aguará Guazú rescatado de cautiverio, regresa a los humedales tras meses de rehabilitación. Seguimiento en tiempo real.',
    img: 'videoplayback (1).mp4',
    video: true,
    cuerpo: `
      <p>Hace un año rescatamos a <strong>Yarará</strong>, un Aguará Guazú macho que fue encontrado en cautiverio tras ser vendido como animal exótico. Sus patas habían sido lastimadas durante años de encierro. Hoy, después de meses de rehabilitación y fisioterapia, finalmente regresa a donde pertenece.</p>
      <h2>El cazador de los esteros</h2>
      <p>El Aguará Guazú es el cánido más grande de Sudamérica, un cazador solitario que habita los humedales y esteros del norte argentino. Con sus largas patas adaptadas para moverse entre la vegetación acuática, Yarará pasó sus primeros años libres recorriendo los Esteros del Ibera.</p>
      <h2>De vuelta a la naturaleza</h2>
      <p>En una calida mañana de enero, con el equipo de veterinarios y biólogos en alerta máxima, abrimos la puerta del corral. Yarará dudó apenas un segundo antes de salir corriendo hacia el humedal, sus patas recuperadas encontrando nuevamente su ritmo natural.</p>
      <blockquote>"Verlo desaparecer entre los juncos con esa energía en cada paso fue el momento que validó cada esfuerzo. El Aguará Guazú volvía a ser salvaje."</blockquote>
      <p>Está equipado con un collar de GPS que monitoreamos semanalmente. Ya ha establecido un territorio de más de 40 kilómetros cuadrados, cazando y explorando como debe ser. La libertad tiene un precio, pero Yarará ya la está pagando correctamente: cazando de noche, descansando en el monte, viviendo como los suyos.</p>`
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
