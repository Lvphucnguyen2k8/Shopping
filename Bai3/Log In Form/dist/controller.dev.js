"use strict";

function keyPress() {
  var NameDiv = document.getElementById("loginName");
  NameDiv.addEventListener("keyup", function IsNameValid(name) {
    var point = 0;

    if (isEmpty(name) == true) {
      point += 1;
      console.log("bad name");
      document.getElementById("loginUser").style = "display: block;";
    }
  });
}

function isEmpty(inputValue) {
  if (inputValue.length == 0) {
    return true;
  }

  if (inputValue.length != 0) {
    return false;
  }
}

keyPress();