var shop_menu = document.createElement("div")
var shop_content = document.createElement("div")
let initHTML = function () {
    shop_menu.id = 'shop_menu'
    document.body.appendChild(shop_menu) // noi vao body

    shop_content.id = 'shop_content'
    shop_content.className = "container"
    document.body.appendChild(shop_content)

    getMenu();
    getProducts()
}
let getMenu = async function () {
    let response = await fetch("../Views/menu.html") //lay du lieu tu menu.html
    let result = await response.text()
    document.getElementById("shop_menu").innerHTML += result 
}
let getProducts= async function () {
    let response = await fetch("../Views/product.html")
    let result = await response.text()
    document.getElementById("shop_content").innerHTML += result
}

export {initHTML}