// Obtener las referencias a los elementos del temporizador
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

// Establecer la fecha de finalización del temporizador
const endDate = new Date();
endDate.setDate(endDate.getDate() + 14); // Sumar 14 días a la fecha actual

// Función para actualizar el temporizador
function updateTimer() {
  const currentDate = new Date();
  const timeDifference = endDate - currentDate;

  // Calcular los días, horas, minutos y segundos restantes
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Actualizar los elementos del temporizador en el HTML
  daysElement.textContent = days.toString().padStart(2, '0');
  hoursElement.textContent = hours.toString().padStart(2, '0');
  minutesElement.textContent = minutes.toString().padStart(2, '0');
  secondsElement.textContent = seconds.toString().padStart(2, '0');
}

// Actualizar el temporizador cada segundo
setInterval(updateTimer, 1000);