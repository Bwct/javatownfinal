window.addEventListener('DOMContentLoaded', () => {
const regForm = document.getElementById("registerForm");
const username = document.getElementById("ignInput");
const email = document.getElementById("EmailInput");
const password = document.getElementById("PasswordInput");
const usernameError = document.getElementById("ignError");
const emailError = document.getElementById("emailError");
const passError = document.getElementById("passwordError");


    regForm.onsubmit = function(event) {

        event.preventDefault();

        
    emailError.textContent = '';
    usernameError.textContent = '';
    passError.textContent = '';

    if (username.value.length < 3) {
        usernameError.textContent = "Username must be at least 3 characters.";
        };
    
    if (!email.checkValidity()) {
        emailError.textContent = "Email is not valid.";
        email.preventDefault();
        };

    if (password.value.length < 6) {
        passError.textContent = "Password must be at least 6 characters.";
        passError.preventDefault();
        };  
                

        const formData = {
            email: email.value,
            username: username.value,
            password: password.value,
            points: 0  // Set initial points to 0
        };
            
        const storedAccounts = JSON.parse(localStorage.getItem('userAccounts')) || [];

        const existingAccounts = storedAccounts.find((account) => account.username === username.value);

        if(existingAccounts) {
            alert('Username already exists. Please choose a different username.');
            return;
        }

        storedAccounts.push(formData);

        localStorage.setItem('userAccounts', JSON.stringify(storedAccounts));
        window.location.href = 'help.html';

    };
    
    const loginForm = document.getElementById("loginForm");
    const loginUsername = document.getElementById("usernameLogin");
    const loginPassword = document.getElementById("passwordLogin");
    
    loginForm.onsubmit = function(event) {
        event.preventDefault();


        const storedAccounts = JSON.parse(localStorage.getItem('userAccounts')) || [];

        const matchedAccount = storedAccounts.find(account => account.username === loginUsername.value && account.password === loginPassword.value);
            
        if (matchedAccount) {

            localStorage.setItem("loggedInUser", JSON.stringify(matchedAccount)); // Store logged-in user information
            alert("Login Successful");

            window.location.href = "webpages/index.html";
        } else {
            alert("Invalid username or password. Please try again.");
        }

    }
        
                 

});
// const loginForm = document.getElementById("Login");
// const loginButton = document.getElementById("btn");
// const loginError = document.getElementById("msg_holder");

// loginButton.addEventListener("click", (e) => {
//     e.preventDefault();

//     const username = loginForm.username.value;
//     const password = loginForm.password.value;

//     if (username === "user@gmail.com" && password === "web_dev") {
//         alert("You have successfully logged in.");
//         location.href = "webpages/index.html";
//     } else {
//         loginError.style.opacity = 1;
//     }
// });

