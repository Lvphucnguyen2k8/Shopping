import { initProducts, loadProductCategory } from "./db.js";
import { SignUp, SignIn } from "./authen.js"
// Bước 1: Khởi tạo các thành phần
var shop_menu = document.createElement('div');
var shop_content = document.createElement('div');

let initHtml = function () {
  shop_menu.id = 'shop_menu';
  document.body.appendChild(shop_menu);

  shop_content.id = 'shop_content';
  document.body.appendChild(shop_content);

  getMenu()
  loadHome()
}

let getMenu = async function () {
  let response = await fetch("./views/menu.html");
  let result = await response.text()
  shop_menu.innerHTML = result;
  //
  document.getElementById('btnHome').addEventListener('click', () => {
    // this.prev_image();   
    console.log('pressed Home');
    loadHome()
  });

  document.getElementById('btnCategory').addEventListener('click', async () => {
    // this.prev_image();   
    console.log('pressed Category');
    await loadCategory()

    clickMenClothing()
    clickWomenClothing()
    clickJewelry()
    clickElectronics()
  });

  document.getElementById('btnSupport').addEventListener('click', () => {
    // this.prev_image();   
    console.log('pressed Support');
    loadSupport()
  });

  document.getElementById('btnLogIn').addEventListener('click', async () => {
    // this.prev_image();   
    console.log('pressed Log In');
    await loadLogIn()
    LoggingIn()
  });

  document.getElementById('btnSignUp').addEventListener('click', async () => {
    // this.prev_image();   
    console.log('pressed');
    await loadSignUp()
    // await verifyName()
    Registering()
  });


}

let loadHome = async function () {
  let response = await fetch("../views/home.html");
  let result = await response.text()
  shop_content.innerHTML = result;


  initProducts()
}

let loadCategory = async function () {
  let response = await fetch("./views/category.html");
  let result = await response.text()
  shop_content.innerHTML = result;
}

let loadSupport = async function () {
  let response = await fetch("./views/support.html");
  let result = await response.text()
  shop_content.innerHTML = result;
}

let loadLogIn = async function () {
  let response = await fetch("./views/login.html");
  let result = await response.text()
  shop_content.innerHTML = result;

  document.getElementById('btnHome').addEventListener('click', () => {
    // this.prev_image();   
    console.log('pressed Home');
    loadHome()
  });
}

let loadSignUp = async function () {
  let response = await fetch("./views/signup.html");
  let result = await response.text()
  shop_content.innerHTML = result;


}

let loadCard = async function () {
  let response = await fetch("./views/card.html");
  return response.text()
}

let renderCard = async function (card) {
  document.getElementById("lstCard").innerHTML += card
}
let Registering = () => {
  document.getElementById('signUpBtn').addEventListener('click', () => {
    document.getElementById("signUpErrorText").textContent = ""
    let pts = 0
    pts += verifyName()
    pts += verifyPass(document.getElementById("SignUpPassword").value)
    pts += verifyRetypePass()
    pts += verifyPhoneNumber()
    if (pts == 4) {
      var db = firebase.firestore();
      db.collection("Users Information").add({
        username: document.getElementById("SignUpname").value,
        password: document.getElementById("SignUpPassword").value,
        phoneNumber: document.getElementById("phoneNumber").value,
        email: document.getElementById("SignUpEmail").value
      }).then((document) => {
        console.log(document.id)
      }).catch((error) => {
        console.log(error.message)
      })
      SignUp()
    }
  })
}

let LoggingIn = () => {
  document.getElementById("loginBtn").addEventListener('click', () => {
    document.getElementById("loginErrorText").textContent = ""
    SignIn()
  })
}

let clickMenClothing = () => {
  document.getElementById("men-clothing").addEventListener("click", async () => {
    let response = await fetch("../views/home.html");
    let result = await response.text()
    shop_content.innerHTML = result;


    loadProductCategory("men's clothing")
  })
}
let clickWomenClothing = () => {
  document.getElementById("women-clothing").addEventListener("click", async () => {
    let response = await fetch("../views/home.html");
    let result = await response.text()
    shop_content.innerHTML = result;


    loadProductCategory("women's clothing")
  })
}

let clickJewelry = () => {
  document.getElementById("jewelry").addEventListener("click", async () => {
    let response = await fetch("../views/home.html");
    let result = await response.text()
    shop_content.innerHTML = result;


    loadProductCategory("jewelery")
  })
}

let clickElectronics = () => {
  document.getElementById("electronics").addEventListener("click", async () => {
    let response = await fetch("../views/home.html");
    let result = await response.text()
    shop_content.innerHTML = result;


    loadProductCategory("electronics")
  })
}

let verifyName = () => {
  let username = document.getElementById("SignUpname").value;
  let err = document.getElementById("signUpErrorText")
  let specialChars = "!@#$%^&*()~`=+{}|:<>? []\;',./".split("")
  if (username.length > 20) {
    err.textContent = "Tên phải ngắn hơn 20 ký tự"
    return false
  }
  else if (username.length == 0 || username == "") {
    err.textContent = "Tên không được bỏ trống"
    return false
  }
  specialChars.forEach(element => {
  if (username.includes(element)) {
      err.textContent = "Tên không được chứa các ký tự đặc biệt"
      return false
    }
  })
  if (username.length < 5) {
    err.textContent = "Tên phải dài hơn 5 kí tự"
    return false
  }
  return 1
  
}
let verifyPass = (pass) => {
  let err = document.getElementById("signUpErrorText")
  let specialChars = ["'", '"', "&", ]
  if (pass.length == 0 || pass == " ") {
    err.textContent = "Mật khẩu không được để trống"
    return false
  }
  specialChars.forEach((element) => {
    if (pass.includes(element)) {
      err.textContent = "Mật khẩu không được chứa khoảng trống các kí tự đặc biệt như nháy đơn, nháy kép, kí hiệu & "
      return false
    }
  })
  if (pass.length < 7) {
    err.textContent = "Độ dài mật khẩu phải lớn hơn 7"
    return false;
  }
  if (pass.length > 30) {
    err.textContent = "Mật khẩu không được quá 30 kí tự"
    return false;
  }
  return 1
}
let verifyRetypePass = () => {
  let retypePass = document.getElementById("SUretypePass").value
  let originPass = document.getElementById("SignUpPassword").value
  if (retypePass != originPass) {
    document.getElementById("signUpErrorText").textContent = "Mật khẩu nhập lại không khớp"
    return false
  }
  return 1
}
let verifyPhoneNumber = () => {
  let phonenum = document.getElementById("phoneNumber").value
  let err = document.getElementById("signUpErrorText")
  let invalidChars = "qwertyuiopasdfghjklzxcvbnm~`!@#$%^&*()_+-={}|: <>? []\;',./".split("")
  invalidChars.forEach((element) => {
    if (phonenum.includes(element)) {
      err.textContent = "Số điện thoại không hợp lệ"
      return false
    }
  })
  if (phonenum.length == 0 || phonenum == " ") {
    err.textContent = "SĐT không được để trống"
    return false
  }
  if (phonenum.length < 7) {
    err.textContent = "Độ dài số điện thoại không hợp lệ"
    return false
  }
  if (phonenum.length > 12) {
    err.textContent = "Độ dài số điện thoại không hợp lệ"
    return false
  }
  return 1
}
export { initHtml, getMenu, loadCard, renderCard, loadHome };
