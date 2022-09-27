function validation() {
    var email = document.form.email.value;
    var password = document.form.Password.value;
    if (email == "" || !regEmail.test(email)) {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;

    }
    if (password.length < 6) {
        alert("Password should be atleast 6 character long");
        password.focus();
        return false;

    }
    return true;
}