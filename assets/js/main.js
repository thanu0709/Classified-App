function showLogInModal() {

    const loginModal = document.getElementById('login-model');
    const bootstrapModal = new bootstrap.Modal(loginModal);
    bootstrapModal.show();
}

function logIn() {
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;

    const form = new FormData();
    form.append("email", email);
    form.append("password", password);

    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            const response = request.responseText;
            if (response === "Success") {
                alert("Log In Sucess")
            }
            else {
                alert(response);
            }
        }
    };
    request.open("post", "loginprocess.php", true);
    request.send(form);
}