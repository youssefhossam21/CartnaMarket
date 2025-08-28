document.getElementById("togglePass").addEventListener("click", function () {
    let passField = document.getElementById("pass");
    let icon = this.querySelector("i");
    if (passField.type === "password") {
        passField.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        passField.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
});

function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let email = document.getElementById("email").value.trim();
    let pass = document.getElementById("pass").value.trim();

    if (!email) {
        Swal.fire({
            title: "Email Required",
            text: "You must enter your email address!",
            icon: "warning",
            timer: 2000,
            showConfirmButton: false
        });
        return;
    }

    if (!isValidEmail(email)) {
        Swal.fire({
            title: "Invalid Email",
            text: "Please enter a valid email address!",
            icon: "warning",
            timer: 2000,
            showConfirmButton: false
        });
        return;
    }

    let correctemail = "youssef@gmail.com";
    let correctpass = "2182005";

    if (email === correctemail && pass === correctpass) {
        Swal.fire({
            title: "Welcome back!",
            text: "Have a nice day",
            icon: "success",
            timer: 2000,
            showConfirmButton: false
        }).then(() => {
            localStorage.setItem("loggedIn", "true");
            window.location.href = "home.html";
        });
    } else {
        Swal.fire({
            title: "Oops!",
            text: "Check your Email or Password!",
            icon: "error",
            timer: 2000,
            showConfirmButton: false
        });
    }
});


