const carrusel = document.querySelector(".carrusel-items");
const descriptionContainer = document.getElementById("description-container");
const descriptionText = document.getElementById("description-text");

let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null;
let step = 1;

const start = () => {
  intervalo = setInterval(function () {
    carrusel.scrollLeft = carrusel.scrollLeft + step;
    if (carrusel.scrollLeft === maxScrollLeft) {
      step = step * -1;
    } else if (carrusel.scrollLeft === 0) {
      step = step * -1;
    }
  }, 10);
};

const stop = () => {
  clearInterval(intervalo);
};

carrusel.addEventListener("mouseover", () => {
  stop();
});

carrusel.addEventListener("mouseout", () => {
  start();
});

const items = document.querySelectorAll('.carrusel-item');

items.forEach(item => {
  item.addEventListener('mouseover', () => {
    const description = item.querySelector('.descripcion').textContent;
    descriptionText.textContent = description;
    descriptionContainer.style.display = 'block';
  });

  item.addEventListener('mouseout', () => {
    descriptionContainer.style.display = 'none';
  });
});

start();



