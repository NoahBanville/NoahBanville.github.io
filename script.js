document.addEventListener('DOMContentLoaded', () => {
    const birthdateInput = document.getElementById('birthdate');
    const clockDisplay = document.getElementById('clock');

    function updateClock() {
        const birthdate = new Date(birthdateInput.value);
        const now = new Date();
        const diffMs = (now - birthdate);
        const diffDays = Math.floor(diffMs / 86400000); // days
        const diffHrs = Math.floor((diffMs % 86400000) / 3600000); // hours
        const diffMins = Math.round(((diffMs % 864000
