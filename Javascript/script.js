// function to validate password to be the same

function checkPassSame() {
    let aPass = document.forms["signUpForm"]["pass"].value
    let bPass = document.forms["signUpForm"]["conPass"].value

    if (bPass !== aPass) {
        alert("Password is not the same")
        return false
    }
}
