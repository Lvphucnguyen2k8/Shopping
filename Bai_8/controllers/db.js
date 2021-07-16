import { WomenCloth } from "../models/womenCloth.js"
import { MenCloth } from "../models/menCloth.js"
import { Product } from "../models/product.js"
import { jewelry } from "../models/jewelry.js"
import { Electronics} from "../models/electronics.js"
import { loadCard, renderCard, loadHome } from "../controllers/menu.js"
const CATEGORY_MEN = "men's clothing"
const CATEGORY_WOMEN = "women's clothing"
const CATEGORY_JEWELRY = "jewelery"
const CATEGORY_ELECTRONICS = "electronics"

let loadData = async function() {
    let response = await fetch("https://fakestoreapi.com/products");
    let result = await response.json()
    console.log(result)
    return result
}

let initProducts = async function() {
    let data = await loadData()
    let products = data.map(initProduct)
    let card = await loadCard()

    for (let i = 0; i < products.length; i++) {
        let name = products[i].GetName().slice(0, 20) + "..."
        let price = products[i].ToPrice().toLocaleString() + "$"
        let image = products[i].GetImage()
        let category = products[i].GetCategory()
       let product = card.replace("{#TITLE}", name).replace("{#IMAGE}", image).replace("{#PRICE}", price).replace("{#CATEGORY}", category)
       renderCard(product)
    }
}

let initProduct = function(data) {
    if (data["category"].localeCompare(CATEGORY_MEN) == 0) {
        return new MenCloth(data["title"], data["price"], data["image"], data["category"])
    }
    if (data["category"].localeCompare(CATEGORY_WOMEN) == 0) {
        return new WomenCloth(data["title"], data["price"], data["image"], data["category"])
    }
    if (data["category"].localeCompare(CATEGORY_JEWELRY) == 0) {
        return new jewelry(data["title"], data["price"], data["image"], data["category"])
    }
    if (data["category"].localeCompare(CATEGORY_ELECTRONICS) == 0) {
        return new Electronics(data["title"], data["price"], data["image"], data["category"])
    }
    //electronic, jewelry
    return new Product(data["title"], data["price"], data["image"], data["category"])
}

let loadProductCategory = async (category) => {
    let data = await loadData()
    let products = data.map(initProduct)
    let card = await loadCard()

    for (let i = 0; i < products.length; i++) {
    
        if (products[i].GetCategory() == category) {
            
            let name = products[i].GetName().slice(0, 20) + "..."
            let price = products[i].ToPrice().toLocaleString() + "$"
            let image = products[i].GetImage()
            let category = products[i].GetCategory()
            let product = card.replace("{#TITLE}", name).replace("{#IMAGE}", image).replace("{#PRICE}", price).replace("{#CATEGORY}", category)
            renderCard(product)
        }
    }
}

export {initProducts, loadProductCategory}