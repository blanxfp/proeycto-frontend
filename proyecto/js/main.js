// Cargar iframe on hover
const proyectos = document.querySelectorAll('.row > div');
// make out delete function
function loadIframe(event) {
    const projectHovered = event.currentTarget;
    // buttonThatGotClicked.parentElement.remove();
    if(!projectHovered.classList.contains('loaded')) {
        projectHovered.querySelector('iframe').src = projectHovered.querySelector('iframe').dataset['src'];
        projectHovered.classList.add('loaded');
    }
  }
  // loop over them and attach a listener
  proyectos.forEach(proyecto => proyecto.addEventListener('mouseover', loadIframe));
  