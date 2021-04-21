let products = []
window.onload = function() {
    getProducts()
}


function getProducts() {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> products = json)
    
    console.log(products)
}

function getProduct(id){

}

function getCategories() {
   
}