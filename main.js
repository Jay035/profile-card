function updateUTC() {
    const currentTimeElement = document.getElementById('currentTimeUTC');
    const now = new Date();
    currentTimeElement.textContent = `Current UTC Time: ${now.toUTCString()}`;
}

updateUTC();
setInterval(updateUTC, 1000);