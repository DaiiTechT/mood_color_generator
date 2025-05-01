const moods = [
  { color: "#3498db", message: "Tranquilidad en cada respiro" },
  { color: "#e74c3c", message: "¡Activa tu energía!" },
  { color: "#2ecc71", message: "Relájate y sonríe" },
  { color: "#f1c40f", message: "Brilla con alegría" },
  { color: "#9b59b6", message: "Inspírate hoy" },
];

function changeMood() {
  const mood = moods[Math.floor(Math.random() * moods.length)];
  document.body.style.backgroundColor = mood.color;
  const msg = document.getElementById("message");
  msg.textContent = mood.message;
  msg.style.animation = "none";
  void msg.offsetWidth; // Reiniciar animación
  msg.style.animation = "fadeIn 0.5s ease";
}