
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
/* jslint es6:true, indent: 2 */
/* global Vue, io */
/* exported vm */
'use strict';
const socket = io();



const vm2 = new Vue({
    el: '#info',
    data: {
	name: "",
	email: "",
	pay: "Mastercard/Visa",
	gender: "male",
	orders: {},
	burgers: [],
	localOrders: {orderId: "T", details: {x:0, y:0}, orderItems: [], personalInfo:[]},
	orderCount: 0
    },
    methods: {
	getNext: function() {
	    /* This function returns the next available key (order number) in329,90
	     * the orders object, it works under the assumptions that all keys
	     * are integers. */
	    /*let lastOrder = Object.keys(this.orders).reduce(function(last, next) {
		return Math.max(last, next);
		}, 0);*/
	    this.orderCount++;
	    return this.orderCount;
	},
	addOrder: function() {
	    /* When you click in the map, a click event object is sent as parameter
	     * to the function designated in v-on:click (i.e. this one).
	     * The click event object contains among other things different
	     * coordinates that we need when calculating where in the map the click
	     * actually happened. */
	   
	    socket.emit('addOrder', {
		orderId: this.getNext(),
		details: {
		    x: this.localOrders.details.x,
		    y: this.localOrders.details.y,
		},
		orderItems: vm.getBurgers(),
		personalInfo: this.localOrders.personalInfo
	    });
	},
	markDone: function(name, email, pay, gender) {
	    if(name && email && pay && gender){
		let burgers = vm.getBurgers();
		let info = document.getElementById("customerInfo");
		info.innerHTML = "";
		let nameEl = document.createElement("p");
		nameEl.innerHTML = "Name: " + name + "<br>" + "Email: " + email + "<br>" + "Payment method: " + pay + "<br>" + "Gender: " + gender + "<br>" + "Order: " + burgers;
		info.appendChild(nameEl);
		this.localOrders.personalInfo = [name, email, pay, gender];
		this.addOrder();
	    }
	    else {
		alert("Please fill in the form.");
	    }
	},
	displayOrder: function(event) {
	    /* When you click in the map, a click event object is sent as parameter
	     * to the function designated in v-on:click (i.e. this one).
	     * The click event object contains among other things different
	     * coordinates that we need when calculating where in the map the click
	     * actually happened. */
	    let offset = {
		x: event.currentTarget.getBoundingClientRect().left,
		y: event.currentTarget.getBoundingClientRect().top,
	    };
	    this.localOrders = {
		orderId: "T",
		details: {
		    x: event.clientX - 10 - offset.x,
		    y: event.clientY - 10 - offset.y,
		},
		orderItems: vm.getBurgers()
	    }
	}	
    }
})

