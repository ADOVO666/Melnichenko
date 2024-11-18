document.addEventListener("DOMContentLoaded", function () {
    const loginInput = document.getElementById("login2");
    const emailInput = document.getElementById("email2");
    const phoneInput = document.getElementById("phone2");
    const passwordInput = document.getElementById("password2");

    function checkLogin() {
        const loginCheck = document.getElementById("login_Check");
        if (loginInput.value === "") {
            loginCheck.textContent = "Логин не может быть пустым";
        } else {
            loginCheck.textContent = "";
        }
    }

    function checkEmail() {
        const emailCheck = document.getElementById("email_Check");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailCheck.textContent = "Неверный формат email";
        } else {
            emailCheck.textContent = "";
        }
    }

    function checkPhone() {
        const phoneCheck = document.getElementById("phone_Check");
        const phoneRegex = /^\+?\d{10,15}$/; 
        if (!phoneRegex.test(phoneInput.value)) {
            phoneCheck.textContent = "Неправильный формат телефона. Используйте формат +7xxxxxxxxxx";
        } else {
            phoneCheck.textContent = "";
        }
    }


    function checkPassword() {
        const passwordCheck = document.getElementById("password_Check");
        if (passwordInput.value.length < 6) {
            passwordCheck.textContent = "Пароль должен содержать не менее 6 символов";
        } else {
            passwordCheck.textContent = "";
        }
    }

    function handleSubmit(event) {
        checkLogin();
        checkEmail();
        checkPhone();
        checkPassword();

 
        if (
            document.getElementById("login_Check").textContent ||
            document.getElementById("email_Check").textContent ||
            document.getElementById("phone_Check").textContent ||
            document.getElementById("password_Check").textContent
        ) {
            event.preventDefault(); 
        }
    }

    const form = document.querySelector("form");
    form.addEventListener("submit", handleSubmit);
});


document.addEventListener("DOMContentLoaded", function () {
    const mainTitle = document.querySelector(".input-text2");

    mainTitle.addEventListener("mouseenter", function () {
        mainTitle.style.color = "red"; 
    });

    mainTitle.addEventListener("mouseleave", function () {
        mainTitle.style.color = ""; 
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const logo = document.querySelector(".logo");
    logo.style.cursor = "pointer"; 

    logo.addEventListener("click", function () {
        logo.style.visibility = "hidden"; 
    });
});
