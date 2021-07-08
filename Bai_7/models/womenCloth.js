import { Product } from "./product.js"

export class WomenCloth extends Product {
    constructor(name, price, image, category) {
        super(name, price, image, category);
    }
    ToPrice() {
        return super.ToPrice() * (85/100)
    }
}