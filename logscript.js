function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    // Get form field values
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm_password").value;

    // Validation messages
    if (!email) {
        alert("Email is required.");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (!username) {
        alert("Username is required.");
        return;
    }

    if (!password) {
        alert("Password is required.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    alert("Form submitted successfully!");
    document.getElementById("signupForm").submit();
}