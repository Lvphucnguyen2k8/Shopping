class Product{
    constructor(){

    }
    getPrice(){
        return this.price * 0.90
    }
    static from(json){
        return Object.assign(new Product(), json)
    }
}

class ProductWoman extends Product{
    getPrice(){
        return this.price * 0.85
    }
}


function Sum(array){
    let sum = 0;
    for (let i = 0; i < array.length; ++i){
        sum += array[i].getPrice()
    }
    console.log("Done")
    return sum
}   

function assignData(json){
    var objects = []
    for (let i = 0; i < json.length; ++i){
        const product = Product.from(json[i])
        objects.push(product)
    }
    return objects
}


function fetchDataMen(){
    fetch("https://fakestoreapi.com/products/category/men's%20clothing")
            .then(res=>res.json())
            .then(json=>assignData(json))
}

function fetchDataWoman(){
    fetch("https://fakestoreapi.com/products/category/men's%20clothing")
            .then(res=>res.json())
            .then(json=>assignData(json))
}

var menClothing = fetchDataMen()
var womanClothing = fetchDataWoman()

