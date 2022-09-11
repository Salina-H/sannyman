const MAN = "manager";
const PASS = "password";
const EMP = "employee"

const loginForm = document.getElementById('loginForm');
const submit = document.getElementById('submit');

submit.addEventListener("click", (e) => {
    e.preventDefault();

    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username !== MAN || username !== EMP || password !== PASS) {
        location.href = "LoginError.html";
    }
    if (username === MAN && password === PASS) {
        location.href = "ManagerOverview.html";
    } else if (username === EMP && password === PASS) {
        location.href = "UserOverview.html";
    }
})