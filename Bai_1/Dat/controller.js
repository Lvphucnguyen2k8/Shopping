//req:
// - Danh sách sản phẩm
// - Tính tổng phụ giá tiền sản phẩm ( tổng chưa tính giảm giá)
// - Tính tổng sản phẩm:
// -> 5 sản phẩm đầu giảm 20%
// -> 5 sản phẩm sau giảm 20,%
// -> 2 sản phẩm tiếp giá 0 đồng

window.onload = getProducts
                buyTotalNoChange
                buyTotalReduced;





var getProducts = () => {
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


var buyTotalNoChange = () =>{
    fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((json) => {
        let total = 0;
        json.forEach(element =>{
            total += element.price

        })

        console.log(element.price)})

    }

var buyTotalReduced = () =>{
    fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((json) => {
    let arrPrices = [];
    let total = 0;
    json.forEach(element =>{
        arrPrices.push(element.price)
    })
    for(let i = 0; i < i + 9; i++){
        arrPrices[i] *= 1/2
        
    }
    for(let i = 10; i < i + 1; i++){
        arrPrices[i] = 0;
    }
    for(let i =0; i< arrPrices; i++){
        total += arrPrices[i]
    }
    console.log(total)})

}








