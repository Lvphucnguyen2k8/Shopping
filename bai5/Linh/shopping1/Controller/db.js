const CATEGORY_MEN = "men's clothing";
const CATEGORY_WOMEN = "women's clothing";
class Product {
    #name
    #price
    constructor(name, price) {
        this.#name = name;
        this.#price = price
    }
    toPrice() {
        return this.#price
    }
    getName() {
        return this.#name
    }
}

class MenClothing extends Product {
    //ko can #
    constructor(name, price) {
        super(name, price) // product Constructor
    }
    toPrice() {
        return super.toPrice() * 0.9   // lay gia goc (product)
    }
}

class WomenClothing extends Product {
    //ko can #
    constructor(name, price) {
        super(name, price) // product Constructor
    }
    toPrice() {
        return super.toPrice() * 0.85   // lay gia goc (product)
    }
}
let loadData = async function () {
    let response = await fetch('https://fakestoreapi.com/products')
    let result = await response.json()
    // console.log(result)
    return result
}

let initProducts = async function () {
    let data = await loadData() // kieu du lieu json luu vao trong nay ...
    let products = data.map(initProduct) //for
    // console.log(data)
    // console.log(products)

    //render san pham
    for (let i = 0; i < products.length; i++) {
        renderProducts(Math.round(products[i].toPrice()), i)
    }
}

//json => Products
//object (json) => products
let initProduct = function (data) {
    let temp = data["category"]
    if (temp.localeCompare(CATEGORY_MEN) == 0) {
        return new MenClothing(data["title"], data["price"])
    }
    if (temp.localeCompare(CATEGORY_WOMEN) == 0) {
        return new WomenClothing(data["title"], data["price"])
    }
    return new Product(data["title"], data["price"])
}

let renderProducts = async function (price, index) {
    let div = document.getElementById("shop_content")
    let data = await loadData()
    div.innerHTML += `
            <div class="col-12 col-sm-8 col-md-6 col-lg-4">
                <div class="card" style="float:left;">
                    <img class="card-img"
                        src="`+ data[index].image + `"
                        alt="Vans" style="max-width: 200px; margin:auto;">
                    <div class="card-img-overlay d-flex justify-content-end">
                        <a href="#" class="card-link text-danger like">
                            <i class="fas fa-heart"></i>
                        </a>
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">`+ data[index].title + `</h4>
                        <h6 class="card-subtitle mb-2 text-muted">ID: ` + data[index].id +` | Category: ` + data[index].category + `</h6>
                        <p class="card-text">
                        `+ data[index].description +`
                             </p>
                        <div class="buy d-flex justify-content-between align-items-center">
                            <div class="price text-success">
                                <h5 class="mt-4">`+ price + `$</h5>
                            </div>
                            <a href="#" class="btn btn-danger mt-3"><i class="fas fa-shopping-cart"></i> Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>

        `
}
export { loadData, initProducts }