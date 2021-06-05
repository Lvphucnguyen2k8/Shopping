window.onload = () => {
    console.log("Hello")
    scope()
    assign2Object()
    spread2Array()
    spread2Object()
    spreadSum()
    onMap()
    getProducts()
};

var scope = () => {
    // if (true) {
    //     var foo = 'Buoi!';
    //     let bar = 'Cam!';
    //     const baz = 'Quyt!';

    //     console.log(foo);
    //     console.log(bar);
    //     console.log(baz);
    // }

    // console.log(foo);
    // console.log(bar);
    // console.log(baz);

    //const greetingConst2 = {     message : "Hello",     number : "five" };
    //greetingConst2 = {}; 
    //greetingConst2.message = "say Hello instead";
    //console.log(greetingConst2);
}
    
var assign2Object = () => {
    // const target = {
    //     a: 1,
    //     b: 2
    // };
    // const source = {
    //     b: 4,
    //     c: 5
    // };

    // const returnedTarget = Object.assign(target, source);

    // console.log(target);

    // console.log(source);

    // console.log(returnedTarget);
}

var spread2Array = () => {
    // let arr1 = [1, 2, 3, 4]
    // let arr2 = [5, 6, 7, 8]
    // let concat = [
    //     ...arr1,
    //     ...arr2
    // ]
    // console.log(arr1)
    // console.log(arr2)
    // console.log(concat)

    // let concat2 = [
    //     arr1,
    //     ...arr2
    // ]
    // console.log(concat2)

}

var spread2Object = () => {
    // let obj1 = {
    //     a: 1,
    //     b: 2,
    //     c: 3
    // }
    // let obj2 = {
    //     d: 4,
    //     e: 5,
    //     f: 6
    // }

    // let merge = {
    //     ...obj1,
    //     ...obj2
    // }
    // console.log(obj1)
    // console.log(obj2)
    // console.log(merge)
}

var spreadSum = () => {
    let numbers = [
        1,
        4,
        11,
        6,
        2,
        4,
        7,
        0
    ]
    console.log(Math.max(...numbers))
}

var onMap = () => {
    // const numbers = [1, 2, 3, 4];
    // const doubled = numbers.map(item => item * 2);
    // console.log(doubled); // [2, 4, 6, 8]

    // const evens = numbers.filter(item => item % 2 === 0);
    // console.log(evens); // [2, 4]
}

var callAPI = () => {
    // fetch('https://fakestoreapi.com/products')
    //     .then(res => res.json())
    //     .then(json => {
    //         console.log(json)
    //     })
}

var getProducts = () => {
    // fetch('https://fakestoreapi.com/products')
    //     .then((res) => res.json())
    //     .then((json) => {
    //         let str = '';
    //         json.forEach(element => {
    //             str += `<tr>
    //                     <td>${element.id}</td>
    //                     <td>${element.title}</td>
    //                     <td>${element.image}</td>                       
    //                     <td>${element.price}</td>
    //                 </tr>`
    //         });
    //         document
    //             .getElementById("products")
    //             .innerHTML += str;
    //     })
}
