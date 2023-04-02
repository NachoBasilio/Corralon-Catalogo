import Home from "./pages/Home"; // Importar la página "Home"
import Catalogo from "./pages/Catalogo"; // Importar la página "Catálogo"
import Nosotros from "./pages/Nosotros"; // Importar la página "Nosotros"
import Contacto from "./pages/Contacto"; // Importar la página "Contacto"
import Default from "./pages/Default"; // Importar la página "Default"

const homeLink = document.getElementById("home-link"); // Obtener el enlace "home"
const catalogoLink = document.getElementById("catalogo-link"); // Obtener el enlace "catálogo"
const nosotrosLink = document.getElementById("nosotros-link"); // Obtener el enlace "nosotros"
const contactoLink = document.getElementById("contacto-link"); // Obtener el enlace "contacto"
const contenido = document.getElementById("app"); // Obtener el elemento donde se cargará el contenido

function cargarContenido(ruta) {
  switch (ruta) {
    case "home":
      contenido.innerHTML = Home(); // Cargar la página "Home"
      break;
    case "catalogo":
      contenido.innerHTML = Catalogo(); // Cargar la página "Catálogo"
      break;
    case "nosotros":
      contenido.innerHTML = Nosotros(); // Cargar la página "Nosotros"
      break;
    case "contacto":
      contenido.innerHTML = Contacto(); // Cargar la página "Contacto"
      break;
    default:
      contenido.innerHTML = Default(); // Cargar la página "Default"
  }
  window.history.pushState({ ruta }, null, ruta); // Agregar la ruta al historial de navegación
}

// Agregar los eventos de clic a cada enlace del navbar
homeLink.addEventListener("click", () => cargarContenido("home"));
catalogoLink.addEventListener("click", () => cargarContenido("catalogo"));
nosotrosLink.addEventListener("click", () => cargarContenido("nosotros"));
contactoLink.addEventListener("click", () => cargarContenido("contacto"));

// Agregar un evento para detectar cuando se presiona el botón "Atrás" o "Adelante" del navegador
window.addEventListener("popstate", event => {
  const ruta = event.state?.ruta;
  if (ruta) {
    cargarContenido(ruta);
  }
});
