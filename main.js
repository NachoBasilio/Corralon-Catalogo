const homeLink = document.getElementById("home-link");
const catalogoLink = document.getElementById("catalogo-link");
const nosotrosLink = document.getElementById("nosotros-link");
const contactoLink = document.getElementById("contacto-link");
const contenido = document.getElementById("app");

function cargarContenido(ruta) {
  switch (ruta) {
    case "home":
      contenido.innerHTML = "<h1>¡Bienvenido a la página de inicio!</h1>";
      break;
    case "catalogo":
      contenido.innerHTML = "<h1>Este es nuestro catálogo de productos</h1>";
      break;
    case "nosotros":
      contenido.innerHTML = "<h1>Conócenos un poco más</h1>";
      break;
    case "contacto":
      contenido.innerHTML = "<h1>Contacta con nosotros</h1>";
      break;
    default:
      contenido.innerHTML = "<h1>Ruta no válida</h1>";
  }
  window.history.pushState({ ruta }, null, ruta);
}

// Agregar los eventos de clic a cada link del navbar
homeLink.addEventListener("click", () => cargarContenido("home"));
catalogoLink.addEventListener("click", () => cargarContenido("catalogo"));
nosotrosLink.addEventListener("click", () => cargarContenido("nosotros"));
contactoLink.addEventListener("click", () => cargarContenido("contacto"));

window.addEventListener("popstate", event => {
  const ruta = event.state?.ruta;
  if (ruta) {
    cargarContenido(ruta);
  }
});