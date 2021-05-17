const urlWomen = "https://fakestoreapi.com/products/category/women's%20clothing"
const urlMen = "https://fakestoreapi.com/products/category/men's%20clothing"
var sum = 0;

class Product{
    constructor(){

    }
    getPrice(){
        return this.price
    }
    static toObject(json){
        return Object.assign(new Product(), json)
    }
}

class ProductMen extends Product{
    getPrice(){
        return this.price * 0.90
    }
    static toObject(json){
        return Object.assign(new ProductMen(), json)
    }
}

class ProductWomen extends Product{
    getPrice(){
        return this.price * 0.85
    }
    static toObject(json){
        return Object.assign(new ProductWomen(), json)
    }
}

function toSum(array){
    var sum = 0;
    for (var i = 0; i < array.length; ++i){
        sum += array[i].getPrice();
    }
    return sum;
}

function handleData(json){
    var objects = []
    if (json[0].category == "men's clothing"){
        for (var i = 0; i < json.length; ++i){
            const product = ProductMen.toObject(json[i])
            objects.push(product);
        }
        return toSum(objects)
    }
    else if (json[0].category == "women's clothing"){
        for (var i = 0; i < json.length; ++i){
            const product = ProductWomen.toObject(json[i])
            objects.push(product);
        }
        return toSum(objects)
    }
}

function getData(url){
    return fetch(url)
        .then(res=>res.json())
            .then(json=>handleData(json))
}

getData(urlMen)
    .then(results => sum += results)

getData(urlWomen)
    .then(results => sum += results)
    .then(sum => console.log(sum))