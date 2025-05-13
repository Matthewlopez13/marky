document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#subscribe form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            if (email) {
                alert('Thank you for subscribing, ' + email + '!');
            }
        });
    }
});