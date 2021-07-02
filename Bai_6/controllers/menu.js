import { initProducts } from "./db.js";
// Bước 1: Khởi tạo các thành phần
var shop_menu = document.createElement('div');
var shop_content = document.createElement('div');

let initHtml = function() {
  shop_menu.id = 'shop_menu';
  document.body.appendChild(shop_menu);

  shop_content.id = 'shop_content';
  document.body.appendChild(shop_content);

  getMenu()
  loadHome()
}

let getMenu = async function() {
  let response = await fetch("./views/menu.html");
  let result = await response.text()
  shop_menu.innerHTML = result;
  //
  document.getElementById('btnHome').addEventListener('click', ()=>{
      // this.prev_image();   
      console.log('pressed Home');
      loadHome()
  });

  document.getElementById('btnCategory').addEventListener('click', ()=>{
      // this.prev_image();   
      console.log('pressed Category');
      loadCategory()
  });

  document.getElementById('btnSupport').addEventListener('click', ()=>{
      // this.prev_image();   
      console.log('pressed Support');
      loadSupport()
  });

  document.getElementById('btnLogIn').addEventListener('click', ()=>{
      // this.prev_image();   
      console.log('pressed Log In');
      loadLogIn()
  });

  document.getElementById('btnSignUp').addEventListener('click', ()=>{
      // this.prev_image();   
      console.log('pressed');
      loadSignUp()
  });
}

let loadHome = async function() {
  let response = await fetch("./views/home.html");
  let result = await response.text()
  shop_content.innerHTML = result;
  initProducts()
}

let loadCategory = async function() {
  let response = await fetch("./views/category.html");
  let result = await response.text()
  shop_content.innerHTML = result;
}

let loadSupport = async function() {
  let response = await fetch("./views/support.html");
  let result = await response.text()
  shop_content.innerHTML = result;
}

let loadLogIn = async function() {
  let response = await fetch("./views/login.html");
  let result = await response.text()
  shop_content.innerHTML = result;

  document.getElementById('btnHome').addEventListener('click', ()=>{
      // this.prev_image();   
      console.log('pressed Home');
      loadHome()
  });
}

let loadSignUp = async function() {
  let response = await fetch("./views/signup.html");
  let result = await response.text()
  shop_content.innerHTML = result;

  let email = "hello2@gmail.com"
  let password = "xyzt1234"
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      console.log(user)
      alert(user)
      // ...
  })
  .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error)
      alert(error.message)
      // ..
  });

}

let loadCard = async function() {
  let response = await fetch("./views/card.html");
  return response.text()
}

let renderCard = function(card) {
   document.getElementById("lstCard").innerHTML += card
}

export {initHtml, getMenu, loadCard, renderCard};