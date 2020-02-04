
const vm = new Vue({
  el: '#wrapper',
  data: {
      menuCopy: food,
      burgers: []
  },
    methods: {
	getBurgers: function(){
	    return this.burgers;
	}
    }
})

const vm2 = new Vue({
    el: '#info',
    data: {
	name: "",
	email: "",
	street: "",
	number: "",
	pay: "Mastercard/Visa",
	gender: "male"	
    },
    methods: {
	markDone: function(name, email, street, number, pay, gender) {
	    if(name && email && street && number && pay && gender){
		let burgers = vm.getBurgers();
		let info = document.getElementById("customerInfo");
		let nameEl = document.createElement("p");
	    nameEl.innerHTML = "Name: " + name + "<br>" + "Email: " + email + "<br>" + "Street: " +street + "<br>" + "House number: " + number + "<br>" + "Payment method: " + pay + "<br>" + "Gender: " + gender + "<br>" + "Order: " + burgers;
		info.appendChild(nameEl);
	    }
	    else {
		alert("Please fill in the form.");
	    }
	}
    }
})
