window.onload = testAPI
function testAPI (){
    fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((json) => {
            let str = '';
            json.forEach(element => {
                str += `<tr>
                        <td>${element.id}</td>
                        <td>${element.title}</td>
                        <td>${element.image}</td>                       
                        <td>${element.price}</td>
                    </tr>`
            });
            document
                .getElementById("products")
                .innerHTML += str;
        })
}
            