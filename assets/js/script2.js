

  let selectedColor = '';
const messageElement = document.getElementById('message');

document.addEventListener('keydown', function(event) {
  const key = event.key.toLowerCase();

  if (key === 'a') {
    selectedColor = 'purple';
    messageElement.textContent = "Presiona la tecla 'a' para asignar el color morado.";
  } else if (key === 's') {
    selectedColor = 'orange';
    messageElement.textContent = "Presiona la tecla 's' para asignar el color naranja.";
  } else if (key === 'd') {
    selectedColor = 'pink';
    messageElement.textContent = "Presiona la tecla 'd' para asignar el color rosa.";
  } else {
    selectedColor = '';
    messageElement.textContent = "Por favor, ingrese letras válidas (a, s, d).";
  }
});

document.addEventListener('click', function(event) {
  if (event.target.id && selectedColor) {
    event.target.style.backgroundColor = selectedColor;
  }
});

  