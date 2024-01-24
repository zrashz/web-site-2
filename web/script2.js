function register() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var errorMessage = document.getElementById("error-message");
    var mobilenumber=document.getElementById("mobile number").value;

    // Simple validation (you should perform server-side validation in a real application)
    if (password !== confirmPassword) {
        errorMessage.innerHTML = "Passwords do not match";
    } else {
        // Successful registration
        errorMessage.innerHTML = "";
        alert("Registration successful!\nUsername: " + username + "\nEmail: " + email);
    }
}
