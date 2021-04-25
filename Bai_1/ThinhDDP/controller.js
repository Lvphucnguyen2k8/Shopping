var product = 1;
var sum = 0;
var discount = 0;

function createTable(){
    var tr = document.createElement("TR");
    var th = document.createElement("TH");
    var th2 = document.createElement("TH");
    var th3 = document.createElement("TH");
    th.innerHTML = "ID";
    th2.innerHTML = "Title";
    th3.innerHTML = "Price";
    tr.appendChild(th);
    tr.appendChild(th2);
    tr.appendChild(th3);
    document.getElementById("table").appendChild(tr);
}

function createRow(object){
    var tr = document.createElement("TR");
    var td = document.createElement("TD");
    var td2 = document.createElement("TD");
    var td3 = document.createElement("TD");
    td.innerHTML = object.id;
    td2.innerHTML = object.title;
    td3.innerHTML = object.price;
    tr.appendChild(td);
    tr.appendChild(td2);
    tr.appendChild(td3);
    document.getElementById("table").appendChild(tr);
}

function handleData(json){
    createTable();
    for (var i = 0; i < json.length; ++i){
        createRow(json[i]);
        debugger;
        sum += json[i].price;
        discount += (i <= 9 ? (json[i].price - json[i].price * 0.2) : ((i > 9 && i <= 11) ? 0 : json[i].price));
    }
    createRow({id: "", title: "Sum", price: sum.toFixed(2)})
    createRow({id: "", title: "Sum Discounted", price: (discount).toFixed(2)});
}


function getUserData(){
        fetch(`https://fakestoreapi.com/products/`)
            .then(response => response.json())
            .then(json => handleData(json));
    }

getUserData();