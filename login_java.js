//window.onload(document.getElementById("US").focus());

let timer = setTimeout(() => {
    let have_acc = confirm("Do you even have an account?");
    if (have_acc) {
        document.getElementById("US").focus();
    } else {
        window.close();
    }
}, 3000);

// Form validation on submit
document.getElementById("login_form").addEventListener('submit', function (e) {
    let UserName = document.querySelector("#US").value.trim();
    let password = document.querySelector("#pass").value.trim();

    if (UserName === "" || password === "") {
        e.preventDefault();
        alert("Please fill in all input fields.");
    } else if (UserName.length < 3) {
        e.preventDefault();
        alert("Username must be at least 3 characters long.");
    }
});



