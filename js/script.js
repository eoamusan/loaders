const bars = document.querySelectorAll(".progress-indicator");

function moveToValue(value) {
  bars.forEach((bar) => {
    bar.style.width = `${value}%`;
    bar.innerHTML = `<b>${value}</b>%`;
  });
}

moveToValue(50);
