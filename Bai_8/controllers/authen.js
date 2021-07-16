import {loadHome} from "./menu.js"
let SignUp = () => {
    let email = document.getElementById("SignUpEmail").value
    let password = document.getElementById("SignUpPassword").value
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log(userCredential)
            document.getElementById("btnSignUp").style.display = "none"
            document.getElementById("btnLogIn").style.display = "none"
            document.getElementsByClassName("text-end")[0].textContent = userCredential.user.bc.email
            loadHome()

        })
        .catch((error) => {
            document.getElementById("signUpErrorText").textContent = error.message;
    })
}

let SignIn = () => {
    let email = document.getElementById("loginEmail").value
    let password = document.getElementById("loginPassword").value
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            document.getElementById("btnSignUp").style.display = "none"
            document.getElementById("btnLogIn").style.display = "none"
            document.getElementsByClassName("text-end")[0].textContent = userCredential.user.bc.email
            loadHome()
        })
        .catch((error) => {
            document.getElementById("loginErrorText").textContent = error.message
        })
    
}

export {SignUp, SignIn} 