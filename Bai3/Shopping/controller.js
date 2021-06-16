"use strict";
class SanPham {
    constructor(price) {
        this.price = price
    }
}
class TrangPhucNam extends SanPham {
    constructor(price) {
        super(price)
    }
    Giam10PhanTram() {
        return this.price * 0.9
    }
}
class TrangPhucNu extends SanPham {
    constructor(price) {
        super(price)
    }
    Giam15PhanTram() {
        return this.price * (85/100)
    }
}

function CreateHeader() {
    let div = document.getElementById("header")
    let myStupidArray = ["ID", "CATEGORY", "DESCRIPTION", "IMAGE", "PRICE", "TITLE"]
    myStupidArray.forEach(element => {
        div.innerHTML += "<th>"+ element +"</th>"
    })
}
function callApi() {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
            productsGenerator(json)
        })
}
function productsGenerator(array) {
    array.forEach((element) => {
        if (element.category == "men's clothing") {
            let newPrice = new TrangPhucNam(element.price)
            newPrice = Math.round(newPrice.Giam10PhanTram())
            document.getElementById("products").innerHTML += `
          <tr>
                        <td>` + element.id + `</td>
                        <td>` + element.category + `</td>
                        <td>` + element.description + `</td>
                        <td> <img src="` + element.image + `" height="150" /> </td>
                        <td>`  + element.price + `$<br> Gỉam 10% còn: <br>` + newPrice + `$</td>
                        <td>` + element.title + `</td> 
          </tr>
        `
        }
        if (element.category == "women's clothing") {
            let newPrice = new TrangPhucNu(element.price)
            newPrice = Math.round(newPrice.Giam15PhanTram())
            document.getElementById("products").innerHTML += `
          <tr>
                        <td>` + element.id + `</td>
                        <td>` + element.category + `</td>
                        <td>` + element.description + `</td>
                        <td> <img src="` + element.image + `" height="150" /> </td>
                        <td>` + element.price + `$<br> Gỉam 15% còn: <br>` + newPrice +`$</td>
                        <td>` + element.title + `</td>
          </tr>
        `
        }
        if (element.category.includes('elec') || element.category.includes('jewelery') ) {
            document.getElementById("products").innerHTML += `
          <tr>
                        <td>` + element.id + `</td>
                        <td>` + element.category + `</td>
                        <td>` + element.description + `</td>
                        <td> <img src="` + element.image + `" height="150" /> </td>
                        <td>` + element.price + `$</td>
                        <td>` + element.title + `</td> 
          </tr>
        `
        }
    })
}

CreateHeader()
callApi()
