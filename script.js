let email = document.getElementById("email");
let password = document.getElementById("password");
let loginButton = document.getElementById("loginButton");
let errormessage = document.getElementById("error");
function validateForm() {
    if (email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)){
        window.location.href = "home.html";
        localStorage.setItem("userName", email.value)
    }else{
        errormessage.innerHTML = "<span style='color: red;'>Invalid email format</span>";
    }
}

loginButton.addEventListener("click",validateForm)

// let user1 = document.getElementById("user");
// if (user1) {
//     user1.innerHTML = `Welcome, ${localStorage.getItem("userName")}`;
// }