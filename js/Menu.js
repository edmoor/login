document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');
  
    menuIcon.addEventListener('click', function() {
      if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'flex';
      } else {
        menu.style.display = 'none';
      }
    });
  });
  
  window.addEventListener('scroll', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const menu = document.querySelector('.menu');
    const initialTop = 70; // Posición inicial en px
    const scrollPosition = window.scrollY;
    const newTop = initialTop - scrollPosition;

    if (newTop > 20) {
        menuIcon.style.top = `${newTop}px`;
        menu.style.top = `${newTop}px`;
    } else {
        menuIcon.style.top = '0px'; // Posición final fija
        menu.style.top = '0px'; // Posición final fija
    }
});


document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll('.home, .reportes, .herramientas');
  let maxWidth = 0;

  elements.forEach(el => {
      const width = el.offsetWidth;
      if (width > maxWidth) {
          maxWidth = width;
      }
  });

  elements.forEach(el => {
      el.style.width = `${maxWidth}px`;
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const reportesButton = document.querySelector('.reportes');
  const herramientasButton = document.querySelector('.herramientas');
  const homeButton = document.querySelector('.home');
  const containerTodo = document.getElementById('container-todo');
  const containerTodo2 = document.getElementById('container-todo2');
  const containerTodo3 = document.getElementById('container-todo3');

  homeButton.classList.add('homeButtonActive');

  reportesButton.addEventListener('click', () => {
    reportesButton.classList.toggle('reportesButtonActive');
    herramientasButton.classList.remove('herramientasButtonActive');
    homeButton.classList.remove('homeButtonActive');
    containerTodo.style.display = 'none';
    containerTodo2.style.display = 'flex';
    containerTodo3.style.display = 'none';
  });

  herramientasButton.addEventListener('click', () => {
    herramientasButton.classList.toggle('herramientasButtonActive');
    homeButton.classList.remove('homeButtonActive');
    reportesButton.classList.remove('reportesButtonActive');
    containerTodo.style.display = 'none';
    containerTodo2.style.display = 'none';
    containerTodo3.style.display = 'flex';
  });

  homeButton.addEventListener('click', () => {
    homeButton.classList.toggle('homeButtonActive');
    herramientasButton.classList.remove('herramientasButtonActive');
    reportesButton.classList.remove('reportesButtonActive');
    containerTodo.style.display = 'flex';
    containerTodo2.style.display = 'none';
    containerTodo3.style.display = 'none';
  });
});


  // Agrega o quita la clase


