const CATOGORY_MEN = "men's clothing"
const CATOGORY_WOMEN = "women's clothing"
//===========================
class Product{
    #name
    #price
    constructor(name, price) {
        this.#name = name
        this.#price = price
    }

    GetName() {
        return this.#name
    }

    ToPrice() {
        return this.#price
    }
}
class MenCloth extends Product {
    constructor(name, price) {
        super(name, price)
    }
    ToPrice() {
        return super.ToPrice() * 0.9
    }
}
class WomenCloth extends Product {
    constructor(name, price) {
        super(name, price)
    }
    ToPrice() {
        return super.ToPrice() * (85/100)
    }
}

//===========================
function callApi() {
    // fetch('https://fakestoreapi.com/products')
    //     .then(res => res.json())
    //     .then(json => {
    //         productsGenerator(json)
    //     })
}

let loadData = async function() {
    let response = await fetch("https://fakestoreapi.com/products");
    let result = await response.json()
    return result
}

let initProducts = async function() {
    let data = await loadData()
    let products = data.map(initProduct)
    console.log(products)

    let sum = 0;
    for (let i = 0; i < products.length; i++) {
       sum = products[i].ToPrice()
    }
    console.log(sum)
}

let initProduct = function(data) {
    if (data["category"].localeCompare(CATOGORY_MEN) == 0) {
        return new MenCloth(data["title"], data["price"])
    }
    if (data["category"].localeCompare(CATOGORY_WOMEN) == 0) {
        return new WomenCloth(data["title"], data["price"])
    }
    return new Product(data["title"], data["price"])
}

export {initProducts}