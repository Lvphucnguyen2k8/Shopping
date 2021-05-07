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
    myArray.forEach((element) => {
        div.innerHTML += `
        <tr>
                        <th></th>
                        <th></th>
                        <th>` + element.content + `</th>
                        <th></th>
                        <th id="` + element.id + `"></th>
        </tr>
        `
    })
}
function Generate_Something_2() {
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
    totalPriceBeforeReducing(array)
    array.forEach((element) => {
        document.getElementById("products").innerHTML += `
          <tr>
                        <td>` + element.id + `</td>
                        <td>` + element.category + `</td>
                        <td>` + element.description + `</td>
                        <td> <img src="` + element.image + `" height="150" /> </td>
                        <td>` + element.price + `</td>
                        <td>` + element.title + `</td> 
          </tr>
        `
    })
}
function totalPriceBeforeReducing(array) {
    let total = 0;
    array.forEach((element, index) => {
        total += element.price
    })
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
    totalList.forEach((element, index) => {
        total = eval(total += element)
    
    })
    document.getElementById("total").textContent = Math.round(total).toLocaleString("us") + '$'
}
function first5products(array) {
    let total = 0
    let ifm = {
        total: "",
        index: "",
    }
    array.forEach((element, index) => {
        if (index < 5) {
            total = eval(total += array[index].price * (4 / 5))
            ifm = {
                total: total,
                index: index,
            }
        }
    })

    document.getElementById("discount1").textContent = total.toLocaleString("us") + "$"
    return ifm
}
function following5products(array, CurrentIndex) {
    let total = 0
    let ImMadNow = []
    let ifm = {
        total: "",
        index: "",
    }
    array.forEach((element, index) => {
        if (index < eval(CurrentIndex + 6) && index > 4) {
            ImMadNow.push(element)
            ifm = {
                total: "",
                index: index
            }
        }
    })
    ImMadNow.forEach((element, index) => {
        total += element.price
        ifm.total = total
    })

    document.getElementById("discount2").textContent = total.toLocaleString("us") + "$"
    return ifm
}
function free(arr, CurrentIndex) {
    console.log(CurrentIndex)
    let ImMadNow = []
    let ifm = {}
    arr.forEach((element, index) => {
        if (index < CurrentIndex + 3 && index > 9) {
            ImMadNow.push(element)
             ifm = {
                total: 0,
                index: index,
            }
        }
    })
    ImMadNow.forEach((element, index) => {
        total += element.price
        ifm.total = 0
    })

    document.getElementById("free").textContent = ifm.total.toLocaleString("us") + "$"
    console.log(ifm)
    return ifm
}
function totalOfTheRest(arr, CurrentIndex) {
    let total = 0
    let ImMadNow = []
    let ifm = {}
    arr.forEach((element, index) => {
        if (index < arr.length  && index > CurrentIndex) {
            ImMadNow.push(element)
            ifm = {
                total: "",
                index: index,
            }
        }
    })
    ImMadNow.forEach((element, index) => {
        total += element.price
        ifm.total = total
    })
    document.getElementById("rest").textContent = total.toLocaleString("us") + "$"

    return ifm
}


Generate_Something()
Generate_Something_2()
callApi()
