function checkPasswords() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password === confirmPassword) {
        alert('Wachtwoorden komen overeen!');
    } else {
        alert('Wachtwoorden komen niet overeen. Probeer het opnieuw.');
    }
}