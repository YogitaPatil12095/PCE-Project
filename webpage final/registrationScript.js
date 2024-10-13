document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('Name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    
    if (!name || !phone || !email || !username || !password || !confirmPassword) {
        alert('All fields must be filled out!');
        return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    alert('Registration successful!');

    
   /// localStorage.setItem('name', name);
///    localStorage.setItem('phone', phone);
   /// localStorage.setItem('email', email);
///    localStorage.setItem('username', username);
///localStorage.setItem('password', password);


    this.reset();

    window.close();
    setTimeout(function() {
        if (!window.closed) {
            window.location.href = 'index.html'; 
        }
    }, 1);
});
