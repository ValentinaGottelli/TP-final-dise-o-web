const grid = document.getElementById('blog-grid');

function cardHTML(post) {
  const playIcon = post.video
    ? '<div class="blog-card-play"><span>▶</span></div>'
    : '';

  const isVideoFile = post.img && post.img.toLowerCase().endsWith('.mp4');
  const mediaMarkup = isVideoFile
    ? `<video muted autoplay loop playsinline preload="metadata"><source src="img/${post.img}" type="video/mp4">Tu navegador no soporta reproductor de video.</video>`
    : `<img src="img/${post.img}" alt="${post.titulo}" loading="lazy" />`;

  return `
    <a class="blog-card" href="blog/${post.slug}/index.html">
      <div class="blog-card-media">
        <span class="blog-card-badge">${post.tag}</span>
        ${playIcon}
        ${mediaMarkup}
      </div>
      <div class="blog-card-body">
        <p class="blog-card-tag">${post.estado}</p>
        <h3 class="blog-card-titulo">${post.titulo}</h3>
        <p class="blog-card-desc">${post.desc}</p>
        <div class="blog-card-foot">
          <span class="blog-card-fecha">${post.fecha}</span>
          <span class="blog-card-link">${post.video ? 'Ver historia' : 'Leer más'}</span>
        </div>
      </div>
    </a>`;
}

grid.innerHTML = POSTS.slice(0, 3).map(cardHTML).join('');


