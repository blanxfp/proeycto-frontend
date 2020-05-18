// media queries
var mediaqueryList = window.matchMedia("(max-width: 767px)");

// Add Even or odd class to elements
const proyectos = document.querySelectorAll('.projects .row > div');

for (var i = 0; i < proyectos.length; i++) {
   var proyecto = proyectos[i];
   var parent = proyecto.parentNode;
   var child = parent.firstChild;
   var index = 0;
   var breakk = true;

   while (breakk) {
      if (child.nodeType === Node.ELEMENT_NODE) {
         index++;
      }
      if (child === proyecto || !child.nextSibling) {
        breakk = false;
      }
      child = child.nextSibling;
   }

   if (index % 2 == 0) proyecto.classList.add('par') 
   else proyecto.classList.add('impar')
}

// Cargar iframe on hover
function loadIframe(event) {
  const projectHovered = event.currentTarget;

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

// filter hover
const filter = document.querySelector('.filter');
function showFilterMenu (event) {
  event.currentTarget.classList.add('show-filters');
}
function hideFilterMenu (event) {
  event.currentTarget.classList.remove('show-filters');
}
filter.addEventListener('mouseenter', showFilterMenu);
filter.addEventListener('mouseleave', hideFilterMenu);


// Modals
const contactButton = document.querySelector('header .contact');
const modalOuter = document.querySelectorAll('#contact, #upload');
const modalInner = document.querySelector('.contact-wrapper');
const header = document.querySelector('header');
const modalOuterUpload = document.querySelector('#upload');
const modalOuterContact = document.querySelector('#contact');

header.addEventListener('click', function (evt) {
  if (evt.detail === 3) {
      modalOuterUpload.classList.add('open');
  }
});

function handleContactButtonClick(event) {
  // show the modal
  modalOuterContact.classList.add('open');
}

contactButton.addEventListener('click', handleContactButtonClick);

function closeModal() {
  modalOuter.forEach(modal => modal.classList.remove('open'));
}

modalOuter.forEach(modal => modal.addEventListener('click', function(event) {
  const isOutside = !event.target.closest('.contact-wrapper');
  if (isOutside) {
    closeModal();
  }
}));

window.addEventListener('keydown', event => {
  console.log(event);
  if (event.key === 'Escape') {
    closeModal();
  }
});

