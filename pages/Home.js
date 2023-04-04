import "../styles/home.css"


const contenido = document.getElementById("app"); 
const homeLink = document.getElementById("home-link");
const catalogoLink = document.getElementById("catalogo-link");
const nosotrosLink = document.getElementById("nosotros-link");
const contactoLink = document.getElementById("contacto-link");

export default function(){
    homeLink.classList = "onLi"
    catalogoLink.classList = "offLi"
    nosotrosLink.classList = "offLi"
    contactoLink.classList = "offLi"
    contenido.innerHTML = "<h1>Home<h1>"
}