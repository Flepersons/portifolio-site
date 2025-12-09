document.addEventListener('DOMContentLoaded', function() {
  const visitasEl = document.getElementById('visitas');
  if (visitasEl) {
    let visitas = localStorage.getItem('visitas') || 0;
    visitas = parseInt(visitas) + 1;
    localStorage.setItem('visitas', visitas);
    visitasEl.textContent = `Visitas: ${visitas}`;
  }
});
