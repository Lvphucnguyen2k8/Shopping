// Bước 1: Khởi tạo các thành phần
var shop_menu = document.createElement('div');
var shop_content = document.createElement('div');
let initHtml = function() {
  shop_menu.id = 'shop_menu';
  document.body.appendChild(shop_menu);

  shop_content.id = 'shop_content';
  document.body.appendChild(shop_content);

  getMenu()
  //getHello()
  getProduct()
}

let getMenu = async function() {
  let response = await fetch("./views/menu.html");
  let result = await response.text()
  document.getElementById("shop_menu").innerHTML = result;
}

let getHello = async function() {
  let response = await fetch("./views/hello.html");
  let result = await response.text()
  shop_content.innerHTML = result;
}

let getProduct = async function() {
  let response = await fetch("./views/product.html");
  let result = await response.text()
  shop_content.innerHTML = result;
}

export {initHtml, getMenu, getHello, getProduct};