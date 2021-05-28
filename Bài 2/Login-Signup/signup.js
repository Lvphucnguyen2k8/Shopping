const dom_usrname = document.getElementById("uname")
const dom_psw = document.getElementById("psw")
const dom_fname = document.getElementById("fname")
const dom_lname = document.getElementById("lname")
const dom_mail = document.getElementById("mail")
const dom_phone = document.getElementById("phone")

var data = {};
const API_KEY = ""

function getCords(){
	if (navigator.geolocation){
		return navigator.geolocation.getCurrentPosition(usePosition)
	}
}

function usePosition(position){
	let lat = position.coords.latitude
	let lon = position.coords.longitude
	fetch(`https://us1.locationiq.com/v1/reverse.php?key=${API_KEY}&lat=${lat}&lon=${lon}&format=json`)
  	}
  	console.log(obj.address.postcode)
	assignCords(obj)
}

function assignCords(obj){
	data.address = obj.address
	data.address.zipcode = obj.address.postcode
	delete data.address.postcode
}

getCords()

function signup(){
	data.email = dom_mail.value ? dom_mail.value : "NULL"
	data.username = dom_usrname.value ? dom_usrname.value : "NULL"
	data.password = dom_psw.value ? dom_psw.value : "NULL"
	data.name = {}
	data.name.firstname = dom_fname.value ? dom_fname.value : "NULL"
	data.name.lastname = dom_lname ? dom_lname.value : "NULL"
	data.phone = dom_phone ? dom_phone.value : "NULL"
	sendRequest()
}

function sendRequest(){
	fetch('https://fakestoreapi.com/users',{
            method:"POST",
            body:JSON.stringify(data)
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
}
