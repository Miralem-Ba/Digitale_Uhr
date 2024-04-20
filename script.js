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