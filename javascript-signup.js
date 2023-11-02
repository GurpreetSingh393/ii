document.getElementById('signupform').addEventListener('submit', function(e) {
            e.preventDefault();

            var password = document.getElementById('password').value;
            var confirmPassword = document.getElementById('confirmpassword').value;

            if (password === confirmPassword) {
                // Passwords match, navigate to signup.html
                window.location.href = 'mainpage.html';
            } else {
                // Passwords do not match
                document.getElementById('message').textContent = 'Error: Passwords do not match. Please enter the correct password!';
            }
});