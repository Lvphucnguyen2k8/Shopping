function Generate_Something () {
    let div = document.getElementById("boring")
    let myArray = [
        {
            content: "TỔNG GIÁ GỐC :",
            id: "originPrice"
        },
        {
            content: "TỔNG GIÁ SAU KHI GIẢM :",
            id: "totalAfterReducing"
        },
        {
            content: "- 5 sản phẩm đầu giảm 20%</",
            id: "discount1"
        },
        {
            content: "- 5 sản phẩm sau giảm 20%",
            id: "discount2"
        },
        {
            content: "- 2 sản phẩm tiếp giá 0 đồng",
            id: "free"
        },
        {
            content: "- Còn lại",
            id: "rest"
        },
        {
            content: "THÀNH TIỀN :",
            id: "total"
        },
    ];
    for (let i = 0; i < myArray.length; i++){
        div.innerHTML += `
        <tr>
                        <th></th>
                        <th></th>
                        <th>` + myArray[i].content + `</th>
                        <th></th>
                        <th id="` + myArray[i].id + `"></th>
        </tr>
        `
    }
}
function Generate_Something_2() {
    let div = document.getElementById("header")
    let myStupidArray = ["ID", "CATEGORY", "DESCRIPTION", "IMAGE", "PRICE", "TITLE"]
    for (let i = 0; i < myStupidArray.length; i++) {
        div.innerHTML += "<th>"+ myStupidArray[i] +"</th>"
    }
}
function callApi() {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
            productsGenerator(json)
        })
}
function productsGenerator(array) {
    for (let i = 0; i < array.length; i++) {
        document.getElementById("products").innerHTML += `
          <tr>
                        <td>` + array[i].id + `</td>
                        <td>` + array[i].category + `</td>
                        <td>` + array[i].description + `</td>
                        <td> <img src="` + array[i].image +`" height="150" /> </td>
                        <td>` + array[i].price + `</td>
                        <td>` + array[i].title + `</td> 
          </tr>
        `
    }
    totalPriceBeforeReducing(array)
}
function totalPriceBeforeReducing(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i].price
    }
    document.getElementById("originPrice").textContent = Math.round(total).toLocaleString("us") + '$'
    totalPriceAfterReducing(array)
}

function totalPriceAfterReducing(array) {
    let F5 = first5products(array)
    let S5 = following5products(array, F5.index)
    let ItsFree = free(array, S5.index)
    let TheRest = totalOfTheRest(array, ItsFree.index)
    var totalList = [F5.total, S5.total, ItsFree.total, TheRest.total]
    var total = ""
    for (let i = 0; i < totalList.length; i++){
        total = eval(total += totalList[i])
    }
    document.getElementById("total").textContent = Math.round(total).toLocaleString("us") + '$'
}
function first5products(array) {
    let total = 0
    let i = 0
    for ( i = 0; i < 5; i++){
        total = eval(total += array[i].price * (4/5))
    }
    let ifm = {
        total: total,
        index: i,
    }
    document.getElementById("discount1").textContent = total.toLocaleString("us") + "$"
    return ifm
}
function following5products(array, CurrentIndex){
    let total = 0
    let i = CurrentIndex
    for (i = CurrentIndex; i < eval(CurrentIndex + 5); i++) {
        total = eval(total += array[i].price * (4 / 5))
    }
    let ifm = {
        total: total,
        index: i,
    }
    document.getElementById("discount2").textContent = total.toLocaleString("us") + "$"

    return ifm
}
function free(arr, CurrentIndex) {
    let total = 0
    let i = CurrentIndex
    for (i = CurrentIndex; i < eval(CurrentIndex + 2); i++) {
        arr[i].price = 0
        total = 0
    }
    let ifm = {
        total: total,
        index: i,
    }
    document.getElementById("free").textContent = total.toLocaleString("us") + "$"

    return ifm
}
function totalOfTheRest(arr, CurrentIndex) {
    let total = 0
    let i = CurrentIndex
    for (i = CurrentIndex; i < arr.length; i++) {
        total = eval(total += arr[i].price )
    }
    let ifm = {
        total: total,
        index: i,

    }
    document.getElementById("rest").textContent = total.toLocaleString("us") + "$"

    return ifm
}


Generate_Something()
Generate_Something_2()
callApi()
