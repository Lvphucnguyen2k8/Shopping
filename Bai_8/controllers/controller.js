import {initHtml} from './menu.js';
//import { product } from './models/product.js';

window.onload = () => {
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
        apiKey: "AIzaSyADoa68tZuW7aUscDMmBV94mUgSq6i5FZU",
        authDomain: "einkaufe-107a2.firebaseapp.com",
        projectId: "einkaufe-107a2",
        storageBucket: "einkaufe-107a2.appspot.com",
        messagingSenderId: "882599994873",
        appId: "1:882599994873:web:d4d6492bf13e7f0d7dc928",
        measurementId: "G-YY7RMG11HZ"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    initHtml()

    var db = firebase.firestore();

    // lay 1 dong document ra
    // db.collection("users").get().then((results) => {
    //     // console.log(results)
    //     results.forEach((doc) => {
    //         console.log(doc._delegate._document.data.value.mapValue.fields)
    //         // :vvvv
    //         // console.log(doc.data)
    //     })
    // })

    // //xoa document
    // // db.collection("users").doc("scMmT8bj4ye5kA3Q463h").delete()

    // // code dung de tao moi document :>>>>
    // db.collection("users").add({
    //     name: "Benito Mussolini"
    // }).then((document) => {
    //     console.log(document.id)
    // }).catch((error) => {
    //     console.log(error.message)
    // })

    // var btnUpload = document.getElementById("fileInput")
    // var uploader = document.getElementById("loader")
    // btnUpload.addEventListener("change", (e) => {
    //     //lay file anh
    //     var file = e.target.files[0]
    //     // var storage = firebase.storage().ref("sao tay mày toàn mùi rượu thế Ivan.gif")
    //     var storage = firebase.storage().ref(file.name)
    //     var task = storage.put(file)
    //     task.on("stage_change", (snapshot) => {
    //         var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //         uploader.value = percentage
    //     }),
    //         (error) => {

    //         },
    //         (complete) => {

    //         }
    // })
}

