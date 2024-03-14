document.addEventListener('DOMContentLoaded', () => {
    const birthdateInput = document.getElementById('birthdate');
    const ageDisplay = document.getElementById('age');

    function updateAge() {
        const birthdate = new Date(birthdateInput.value);
        const now = new Date();
        const diffMs = (now - birthdate);
        const diffYears = Math.floor(diffMs / 31536000000); // years
        const diffDays = Math.floor((diffMs % 31536000000) / 86400000); // days
        const diffHrs = Math.floor
