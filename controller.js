let products = []
window.onload = function() {
    getProducts()
}


function getProducts() {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> console.log(json))
}

function getProduct(id){

}

function getCategories() {
   
}