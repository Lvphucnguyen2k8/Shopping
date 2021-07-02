export class Product{
    #name
    #price
    #image
    #category
    constructor(name, price, image, category) {
        this.#name = name
        this.#price = price
        this.#image = image
        this.#category = category
    }

    GetName() {
        return this.#name
    }

    GetImage() {
        return this.#image
    }
    
    GetCategory() {
        return this.#category
    }

    ToPrice() {
        return this.#price
    }
}