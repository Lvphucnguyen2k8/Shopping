let products = []
window.onload = function() {
    getProducts()
}

function getProducts() {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> {
                var list = document.getElementById("tr");
                // let str='';
                json.map(element => {
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