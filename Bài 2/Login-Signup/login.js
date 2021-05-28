const dom_usrname = document.getElementById("uname")
const dom_psw = document.getElementById("psw")
var users = [];

function getUser(){
	return fetch('https://fakestoreapi.com/users')
		.then(response => response.json())
		.then((json) => {
			return json
		})
}

getUser()
	.then(results => users = results)

function checkUser(arr){
	var size = arr.length
	for (var i = 0; i < size; ++i){
		if (dom_usrname.value == arr[i].username){
			if (dom_psw.value == arr[i].password){
				if (!alert("Login thành công")){
					window.location.href = "https://fakestoreapi.com"
				}
			}
		}
	}
	alert("Username hoặc password sai")
}

function login(){
	checkUser(users)
}
