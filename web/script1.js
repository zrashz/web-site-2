function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("error-message");

    // Simple validation (you should perform server-side validation in a real application)
    if (username === "user" && password === "pass") {
        // Successful login
        errorMessage.innerHTML = "";
        alert("Login successful!");
    } else {
        // Failed login
        errorMessage.innerHTML = "Invalid username or password";
    }
}
