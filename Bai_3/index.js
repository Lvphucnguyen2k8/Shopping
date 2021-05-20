window.onload = () => {

    getProductsMale();
    getProductsFemale();





}
function getProductsMale() {
    fetch('https://fakestoreapi.com/products/category/men\'s%20clothing')
        .then(res => res.json())
        .then(json => {
            var list = document.getElementById("tr");
            let str = '';
            json.forEach(element => {
                str += `<tr>
                        <td>${element.id}</td>
                        <td>${element.category}</td>
                        <td>${element.description}</td>
                        <td>${element.image}</td>
                        <td>${element.price}</td>
                        <td>${element.title}</td>
                    </tr>`
            });
            list.outerHTML = str;


        })
}

function getProductsFemale() {
    fetch('https://fakestoreapi.com/products/category/women\'s%20clothing')
        .then(res => res.json())
        .then(json => {
            var list = document.getElementById("tr2");
            let str = '';
            json.forEach(element => {
                str += `<tr>
                        <td>${element.id}</td>
                        <td>${element.category}</td>
                        <td>${element.description}</td>
                        <td>${element.image}</td>
                        <td>${element.price}</td>
                        <td>${element.title}</td>
                    </tr>`
            });
            list.outerHTML = str;


        })
}


function calculateMale(id, no) {
    let calculated;
    fetch('https://fakestoreapi.com/products/category/men\'s%20clothing')
        .then(res => res.json())
        .then(json => {
        
            calculated = json[id - 1].price * no

        })

    return calculated;


}

function calculateFemale(id, no) {
    let calculated;
    fetch('https://fakestoreapi.com/products/category/women\'s%20clothing')
        .then(res => res.json())
        .then(json => {
        
            calculated = json[id - 1].price * no

        })

    return calculated;


}

function total(){
    let maleId = document.getElementById("male")
    let maleNo = document.getElementById("maleNo")

    let femaleId = document.getElementById("female")
    let femaleNo = document.getElementById("femaleNo")


    let output = document.getElementById("total")

    output.innerHTML = `<br> 
    <p>${calculateMale(maleId.value, maleNo.value)}+</p>
    <br>
    <p>${calculateFemale(femaleId.value, femaleNo.value)}+</p>
    <br>
    <p>=${calculateMale(maleId.vale, maleNo.value) + calculateFemale(femaleId, femaleNo)}
    `




}