var url = "https://fakestoreapi.com/products/"
var sum = 0;
var discount = 0;


class Product{
    constructor(){

    }
    getPrice(){
        return this.pri
    }
    static toObject(json){
        return Object.assign(new Product(), json)
    }
    static toObject(json){
        return Object.assign(new ProductMen(), json)
    }
}

class ProductMen extends Product{
    getPrice(){
        return this.price * 0.90
    }
    static toObject(json){
        return Object.assign(new ProductMen(), json)
    }
}

class ProductWomen extends Product{
    getPrice(){
        return this.price * 0.85
    }
    static toObject(json){
        return Object.assign(new ProductWomen(), json)
    }
}

function toSum(array){
    var sum = 0;
    for (var i = 0; i < array.length; ++i){
        sum += array[i].getPrice();
    }
    return sum;
}




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
    var img = document.createElement("IMG");
    var imgContainer = document.createElement("TD");
    imgContainer.appendChild(img);
    img.src = object.image;
    td.innerHTML = object.id;
    td2.innerHTML = object.title;
    td3.innerHTML = object.price;
    tr.appendChild(td);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(imgContainer);
    document.getElementById("table").appendChild(tr);
}

function handleData(json){
    createTable()
    var objects = []
    var size = json.length;
    for (var i = 0; i < size; i++){
        createRow(json[i])
        if (json[i].category == "men's clothing"){
                const product = ProductMen.toObject(json[i])
                objects.push(product);
        }
        else if (json[i].category == "women's clothing"){
                const product = ProductWomen.toObject(json[i])
                objects.push(product);
        }
    }
    createRow({title: "Sum", id: size + 1, price: toSum(objects).toFixed(2), image: "#"})
    return json
}


function getData(url){
    return fetch(url)
        .then(results => results.json())
            .then(json => handleData(json).results)
}

getData(url)