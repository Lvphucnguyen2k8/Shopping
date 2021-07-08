import { Product } from './product.js';
export class jewelry extends Product {
    constructor(name, price, image, category) {
        super(name, price, image, category);
    }
    ToPrice() {
        return super.ToPrice() * 0.95
    }
}