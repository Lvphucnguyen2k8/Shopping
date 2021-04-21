let products = []
window.onload = function() {
    getProducts()
}

// function addProduct() {
//     console.log("ccgtguj")
//     var node = document.createElement("div")
//     var add = document.createTextNode("Chuyencute");
//     node.appendChild(add);
//     document.getElementById("myList").append(node)
// }
// function addTest() {
//     var myTable = document.getElementById("test");
//     var myTd = document.createElement("td");
//     myTable.appendChild(myTd);
// }
function test() {
    var a = document.getElementById("tr");
    console.log(a)
}
function getProducts() {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> {
                var list = document.getElementById("tr");
                let str='';
                json.forEach(element => {
                    str+=`<tr>
                        <td>${element.id}</td>
                        <td>${element.category}</td>
                        <td>${element.description}</td>
                        <td>${element.image}</td>
                        <td>${element.price}</td>
                        <td>${element.title}</td>
                    </tr>`
                });
                list.outerHTML=str;
                console.log(json)
                // console.log(json[0])
            })
}



function getProduct(id){

}

function getCategories() {
   
}