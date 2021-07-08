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
    SignUp()
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
  export { initHtml, getMenu, loadCard, renderCard, loadHome };