/* ══════════════════════════════════════════════════════════════
   GENERADOR DE PÁGINAS DE BLOG
   --------------------------------------------------------------
   Crea una carpeta por post en  /blog/<slug>/index.html
   a partir de los datos de  js/posts-data.js

   Uso:   node generate-posts.js

   Es solo andamiaje: una vez generadas, podés editar cada
   index.html a mano. Volvé a correrlo solo si querés regenerar.
   ══════════════════════════════════════════════════════════════ */

const fs = require('fs');
const path = require('path');

const POSTS = require('./js/posts-data.js');

// Bloque de media: video (placeholder + <video> comentado) o imagen
function mediaBlock(post) {
  if (post.video) {
    return `    <!-- ════════════════════════════════════════════════════════
         VIDEO DESTACADO
         Cuando tengas el archivo, descomentá el bloque <video> de
         abajo y borrá el .video-placeholder. Poné el archivo en
         /video/${post.slug}.mp4 (creá la carpeta /video en la raíz).
         ════════════════════════════════════════════════════════ -->
    <figure class="articulo-media">
      <div class="video-placeholder" style="background-image: linear-gradient(rgba(26,46,30,0.55), rgba(26,46,30,0.75)), url('../../img/${post.img}');">
        <span class="play-circ">▶</span>
        <p>Video próximamente — el material se sube acá.</p>
      </div>
      <!--
      <video controls poster="../../img/${post.img}" preload="metadata">
        <source src="../../video/${post.slug}.mp4" type="video/mp4" />
        Tu navegador no soporta el reproductor de video.
      </video>
      -->
      <figcaption>${post.titulo} — Santuario Vida Verde.</figcaption>
    </figure>`;
  }
  return `    <figure class="articulo-media">
      <img src="../../img/${post.img}" alt="${post.titulo}" />
      <figcaption>${post.titulo} — Santuario Vida Verde.</figcaption>
    </figure>`;
}

function pageHTML(post) {
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${post.titulo} · Santuario Vida Verde</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=DM+Sans:wght@300;400;500&display=swap" rel="stylesheet" />
  <link rel="icon" href="../../img/front-view-tiger-head-isolated-on-transparent-background-tiger-face-png.webp" />
  <link rel="stylesheet" href="../../css/styles.css" />
  <link rel="stylesheet" href="../../css/modal.css" />
  <link rel="stylesheet" href="../../css/proyectos.css" />
  <link rel="stylesheet" href="../../css/blog.css" />
</head>
<body>

  <!-- NAV -->
  <nav id="navbar">
    <a class="nav-logo" href="../../index.html">Santuario <span>Vida Verde</span></a>
    <ul class="nav-links">
      <li><a href="../../index.html">Inicio</a></li>
      <li><a href="../../nosotros.html">Sobre nosotros</a></li>
      <li><a href="../../proyectos.html" class="nav-active">¿Qué hacemos?</a></li>
      <li><a href="../../contacto.html">Contacto</a></li>
    </ul>
    <button class="nav-cta" id="btn-donar-nav">Doná ahora</button>
    <button class="nav-burger" id="burger" aria-label="Abrir menú">☰</button>
  </nav>

  <!-- MENÚ MÓVIL -->
  <div class="nav-mobile" id="mobile-menu">
    <a href="../../index.html">Inicio</a>
    <a href="../../nosotros.html">Sobre nosotros</a>
    <a href="../../proyectos.html">¿Qué hacemos?</a>
    <a href="../../contacto.html">Contacto</a>
    <button class="nav-cta" id="btn-donar-mobile">Doná ahora</button>
  </div>

  <!-- ARTÍCULO -->
  <article class="articulo">
    <div class="articulo-head">
      <a class="articulo-volver" href="../../proyectos.html">Volver a proyectos</a>

      <p class="articulo-tag">${post.tag}</p>
      <h1 class="articulo-titulo">${post.titulo}</h1>

      <div class="articulo-meta">
        <span>${post.fecha}</span>
        <span>·</span>
        <span>${post.lugar}</span>
        <span class="estado">${post.estado}</span>
      </div>
    </div>

${mediaBlock(post)}

    <div class="articulo-cuerpo">${post.cuerpo}
    </div>

    <!-- CTA -->
    <div class="articulo-cta">
      <h3>Tu apoyo hace posible cada liberación</h3>
      <p>Sumate al santuario y ayudanos a devolverle la libertad a más animales.</p>
      <button class="btn-primary" id="btn-donar-hero">Doná ahora</button>
    </div>
  </article>

  <!-- MODAL DONACIÓN -->
  <div class="modal-overlay" id="modal-overlay">
    <div class="modal" id="modal-donar" role="dialog" aria-modal="true" aria-labelledby="modal-titulo">
      <button class="modal-close" id="modal-close" aria-label="Cerrar">✕</button>
      <div class="modal-header">
        <p class="modal-eyebrow">Hacé la diferencia hoy</p>
        <h2 class="modal-titulo" id="modal-titulo">Tu donación rescata vidas</h2>
        <p class="modal-subtitulo">Cada peso va directo al cuidado de los animales en nuestro santuario.</p>
      </div>
      <div class="modal-montos">
        <button class="monto-btn" data-monto="500">$500</button>
        <button class="monto-btn" data-monto="1000">$1.000</button>
        <button class="monto-btn active" data-monto="2500">$2.500</button>
        <button class="monto-btn" data-monto="5000">$5.000</button>
      </div>
      <p class="modal-monto-label">Monto seleccionado: <strong id="monto-seleccionado">$2.500</strong></p>
      <form class="modal-form" id="form-donacion">
        <div class="modal-form-row">
          <input type="text" placeholder="Nombre completo" required />
          <input type="email" placeholder="Email" required />
        </div>
        <input type="text" placeholder="Número de tarjeta" maxlength="19" />
        <div class="modal-form-row">
          <input type="text" placeholder="MM/AA" maxlength="5" />
          <input type="text" placeholder="CVV" maxlength="3" />
        </div>
        <button type="submit" class="modal-submit">Donar ahora</button>
      </form>
      <p class="modal-seguro">Pago seguro · Sin compromisos</p>
    </div>
  </div>

  <!-- FOOTER -->
  <footer class="footer">
    <div class="footer-top">
      <div class="footer-brand">
        <p class="footer-logo">Santuario <span>Vida Verde</span></p>
        <p class="footer-tagline">Cada animal merece ser libre.</p>
        <p class="footer-desc">ONG sin fines de lucro dedicada al rescate, rehabilitación y liberación de fauna silvestre en cautiverio ilegal.</p>
      </div>
      <div class="footer-col">
        <p class="footer-col-title">Navegación</p>
        <ul>
          <li><a href="../../index.html">Inicio</a></li>
          <li><a href="../../nosotros.html">Sobre nosotros</a></li>
          <li><a href="../../proyectos.html">¿Qué hacemos?</a></li>
          <li><a href="../../contacto.html">Contacto</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <p class="footer-col-title">Contacto</p>
        <ul>
          <li>hola@vidaverde.org</li>
          <li>+54 11 4000-0000</li>
          <li>Buenos Aires, Argentina</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 Santuario Vida Verde. Todos los derechos reservados.</p>
      <p>Hecho con amor para los que no tienen voz.</p>
    </div>
  </footer>

  <script src="../../js/burger.js"></script>
  <script src="../../js/modal.js"></script>

</body>
</html>
`;
}

// ── Generar ──
const baseDir = path.join(__dirname, 'blog');
fs.mkdirSync(baseDir, { recursive: true });

POSTS.forEach(function (post) {
  const dir = path.join(baseDir, post.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), pageHTML(post), 'utf8');
  console.log('  ✓ blog/' + post.slug + '/index.html');
});

console.log('\nListo: ' + POSTS.length + ' páginas generadas.');
