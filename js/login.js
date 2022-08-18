
// step-1 -- add click addevent listenr 
document.getElementById('submit-btn').addEventListener('click', function () {
    // step2  get the email id
    // alwaus remeber to use .value to ger text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;

    //    step 3 get password

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // step4 verify
    if (email == "sontan@baperhotel.com" && password === "secret") {
        window.location.href = 'Bank.html';
    }
    else { alert("toke ami teejjo sontan kore dilam tui pass vule gesosh") };

})