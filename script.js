function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12; // Umwandeln in 12-Stunden-Format
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDegrees = ((hours + minutes / 60) / 12) * 360;
    const minuteDegrees = (minutes / 60) * 360;
    const secondDegrees = (seconds / 60) * 360;

    document.getElementById('hour-hand').style.transform = `rotate(${hourDegrees}deg)`;
    document.getElementById('minute-hand').style.transform = `rotate(${minuteDegrees}deg)`;
    document.getElementById('second-hand').style.transform = `rotate(${secondDegrees}deg)`;

    document.getElementById('digital-clock').textContent = now.toLocaleTimeString('de-DE');
}

// Initialer Aufruf, um die Uhr sofort zu aktualisieren
updateClock();
// Uhr jede Sekunde aktualisieren
setInterval(updateClock, 1000);

// EventListener für den "Next"-Button
document.getElementById('next-button').addEventListener('click', function() {
    // Benutzer zur login.html-Seite weiterleiten
    window.location.href = 'home.html';
});
function updateDateAndTime() {
    const now = new Date();
    const dateString = now.toLocaleDateString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
    const timeString = now.toLocaleTimeString('de-DE', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  
    document.getElementById('date').textContent = dateString;
    document.getElementById('digital-clock').textContent = timeString;
  }
  
  // Initialisiere die Funktion beim Laden der Seite und aktualisiere jede Sekunde
  updateDateAndTime();
  setInterval(updateDateAndTime, 1000);
  