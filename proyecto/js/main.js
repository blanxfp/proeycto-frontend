// media queries
var mediaqueryList = window.matchMedia("(max-width: 767px)");

// Even odd
const proyectos = document.querySelectorAll('.projects .row > div');

for (var i = 0; i < proyectos.length; i++) {
   var proyecto = proyectos[i];
   var parent = proyecto.parentNode;
   var child = parent.firstChild;
   var index = 0;

   while (true) {
      if (child.nodeType === Node.ELEMENT_NODE) {
         index++;
      }
      if (child === proyecto || !child.nextSibling) {
         break;
      }
      child = child.nextSibling;
   }

   if (index % 2 == 0) {
        proyecto.classList.add('par')
   }
   else {
        proyecto.classList.add('impar')
    }
}

// Cargar iframe on hover
// const proyectos = document.querySelectorAll('.row > div');
// make out delete function
function loadIframe(event) {
    const projectHovered = event.currentTarget;
    // buttonThatGotClicked.parentElement.remove();
    
    if(!mediaqueryList.matches) {
        if(projectHovered.classList.contains('par')){
            projectHovered.previousElementSibling.classList.remove('col-md-5');
            projectHovered.previousElementSibling.classList.add('col-md-3');
        } else {
            projectHovered.nextElementSibling.classList.remove('col-md-5');
            projectHovered.nextElementSibling.classList.add('col-md-3');
        }

        projectHovered.classList.remove('col-md-5');
        projectHovered.classList.add('col-md-9');
    }

    if(!projectHovered.classList.contains('loaded')) {
        // if(mediaqueryList.matches) {
        //     window.location.href = projectHovered.querySelector('iframe').dataset['src'];
        // } else {
            projectHovered.querySelector('iframe').src = projectHovered.querySelector('iframe').dataset['src'];
            projectHovered.querySelector('iframe').onload = function() {
                projectHovered.classList.add('hide-image');
                projectHovered.classList.add('loaded');        ;
            }
        //}
    } else {
        projectHovered.classList.add('hide-image');
    }

  }

  function hideIframe(event) {
    const projectHovered = event.currentTarget;
    // buttonThatGotClicked.parentElement.remove();
    if(!mediaqueryList.matches) {
        if(projectHovered.classList.contains('par')){
            projectHovered.previousElementSibling.classList.remove('col-md-3');
            projectHovered.previousElementSibling.classList.add('col-md-5');
        } else {
            projectHovered.nextElementSibling.classList.remove('col-md-3');
            projectHovered.nextElementSibling.classList.add('col-md-5');
        }
        projectHovered.classList.remove('col-md-9');
        projectHovered.classList.add('col-md-5');
    }
    projectHovered.classList.remove('hide-image');

  }
  // loop over them and attach a listener
  proyectos.forEach(proyecto => proyecto.addEventListener('mouseenter', loadIframe));
  proyectos.forEach(proyecto => proyecto.addEventListener('mouseleave', hideIframe));
