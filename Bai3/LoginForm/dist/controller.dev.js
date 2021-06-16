"use strict";

renderInput();

function renderInput() {
  var information = [{
    "class": "field",
    placeholder: "Tên đăng nhập",
    id: "loginName",
    errorText: {
      textContent: "Tên đăng nhập sai",
      "class": "required",
      id: "usernameErrorText"
    }
  }, {
    "class": "field",
    placeholder: "Mật khẩu",
    id: "loginPassword",
    errorText: {
      textContent: "Sai mật khẩu",
      "class": "required",
      id: "passwordErrorText"
    }
  }];
  information.forEach(function (element) {
    var div = document.getElementById("inputDiv");
    div.innerHTML += "\n        <div class=\"thisIsAnInput\">\n              <input\n                type=\"input\"\n                class=\"" + element["class"] + "\"\n                placeholder=\"" + element.placeholder + "\"\n                id=\"" + element.id + "\"/>\n            <label for=\"name\" class=\"label\">" + element.placeholder + "</label>\n              <small class=\"" + element.errorText["class"] + "\" id=\"" + element.errorText.id + "\"  style=\"display: none\">\n            " + element.errorText.textContent + "</small>\n        ";
  });
}

function inputChecker() {
  var point = 0;
  var username = document.getElementById('loginName').value;
  var password = document.getElementById('loginPassword').value;
  var hideBoth = [UsernameErrorText("hide"), PasswordErrorText("hide")];

  if (areBothEmpty(username, password) == "notEmpty") {
    point += 1;
    hideBoth;
  }
} //check is it empty


function isEmpty(input) {
  if (input.length == 0 || input == "" || input == " ") {
    return true;
  } else {
    return false;
  }
}

function areBothEmpty(username, password) {
  var test1 = [isEmpty(username), isEmpty(password)];

  if (!test1.includes(true)) {
    return "notEmpty";
  } else {
    if (test1[0] == true) {
      UsernameErrorText("show");
    }

    if (test1[1] == true) {
      PasswordErrorText("show");
    }

    return "Empty";
  }
} // hide/show error text


function UsernameErrorText(a) {
  if (a == "show") {
    document.getElementById("usernameErrorText").style.display = "block";
  }

  if (a == "hide") {
    document.getElementById("usernameErrorText").style.display = "none";
  }
}

function PasswordErrorText(a) {
  if (a == "show") {
    document.getElementById("passwordErrorText").style.display = "block";
  }

  if (a == "hide") {
    document.getElementById("passwordErrorText").style.display = "none";
  }
} //work in progress...