renderInput()
function renderInput() {
    let information = [
        {
            class: "field",
            placeholder: "Tên đăng nhập",
            id: "loginName",
            errorText: {
                textContent: "Tên đăng nhập sai",
                class: "required",
                id: "usernameErrorText"
            }
        },
        {
            class: "field",
            placeholder: "Mật khẩu",
            id: "loginPassword",
            errorText: {
                textContent: "Sai mật khẩu",
                class: "required",
                id: "passwordErrorText"
            }
        }
    ]
    information.forEach(element => {
        let div = document.getElementById("inputDiv")
        div.innerHTML += `
        <div class="thisIsAnInput">
              <input
                type="input"
                class="` + element.class + `"
                placeholder="` + element.placeholder + `"
                id="` + element.id + `"/>
            <label for="name" class="label">` + element.placeholder + `</label>
              <small class="` + element.errorText.class + `" id="` + element.errorText.id + `"  style="display: none">
            ` + element.errorText.textContent + `</small>
        `
    })
}

function inputChecker() {
    let point = 0
    let username = document.getElementById('loginName').value
    let password = document.getElementById('loginPassword').value
    let hideBoth = [UsernameErrorText("hide"), PasswordErrorText("hide")]
    
    if (areBothEmpty(username, password) == "notEmpty") {
        point += 1
        hideBoth;
    }
}

//check is it empty
function isEmpty(input) {
    if (input.length == 0 || input == "" || input == " " ) {
        return true
    }
    else {
        return false
    }
}
function areBothEmpty(username, password) {
    let test1 = [isEmpty(username), isEmpty(password)]
    if (!test1.includes(true)) {
        return "notEmpty"
    }
    else {
        if (test1[0] == true) {
            UsernameErrorText("show")
        }
        if (test1[1] == true) {
            PasswordErrorText("show")
        }
        return "Empty"
    }
}

// hide/show error text
function UsernameErrorText(a) {
    if (a == "show") {
        document.getElementById("usernameErrorText").style.display = "block"
    }
    if (a == "hide") {
        document.getElementById("usernameErrorText").style.display = "none"
    }
}
function PasswordErrorText(a) {
    if (a == "show") {
        document.getElementById("passwordErrorText").style.display = "block"
    }
    if (a == "hide") {
        document.getElementById("passwordErrorText").style.display = "none"
    }
}


//work in progress...