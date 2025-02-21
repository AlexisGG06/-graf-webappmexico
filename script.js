// Función para actualizar los colores con HSL
function updateColor(section, hue) {
  let color = `hsl(${hue}, 100%, 30%)`;
  let rgb = hslToHex(hue, 100, 30);

  document.getElementById(section + "Box").style.backgroundColor = color;
  document.getElementById(section + "Hex").textContent = rgb;
}

// Convierte de HSL a Hexadecimal
function hslToHex(h, s, l) {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = n => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

// Event Listeners para los sliders
document.getElementById("greenSlider").addEventListener("input", function () {
  updateColor("green", this.value);
});

document.getElementById("redSlider").addEventListener("input", function () {
  updateColor("red", this.value);
});

// Inicializar colores con verde y rojo
updateColor("green", 90); // Verde
updateColor("red", 0);   // Rojo
