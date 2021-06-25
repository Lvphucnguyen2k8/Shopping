import { initProducts } from "./db.js"
import {initHTML} from "./menu.js"
//co 2 cach
window.onload = () => {
    // callApi()
    initProducts()
    initHTML()
}

//cach 1 
// function callApi() {
//     fetch('https://fakestoreapi.com/products')
//         .then(res => res.json())
//         .then(json => {
//             console.log(json)
//         })
// }

//cach 2
// let loadData = async function () {
//     let response = await fetch('https://fakestoreapi.com/products')
//     let result = await response.json()
//     console.log(result)
//     return result
// }

