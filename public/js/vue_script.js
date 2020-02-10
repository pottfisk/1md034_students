
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
	burgers: []
    },
    methods: {
	getNext: function() {
	    /* This function returns the next available key (order number) in329,90
	     * the orders object, it works under the assumptions that all keys
	     * are integers. */
	    let lastOrder = Object.keys(this.orders).reduce(function(last, next) {
		return Math.max(last, next);
	    }, 0);
	    return lastOrder + 1;
	},
	addOrder: function(event) {
	    /* When you click in the map, a click event object is sent as parameter
	     * to the function designated in v-on:click (i.e. this one).
	     * The click event object contains among other things different
	     * coordinates that we need when calculating where in the map the click
	     * actually happened. */
	    let offset = {
		x: event.currentTarget.getBoundingClientRect().left,
		y: event.currentTarget.getBoundingClientRect().top,
	    };
	    socket.emit('addOrder', {
		orderId: this.getNext(),
		details: {
		    x: event.clientX - 10 - offset.x,
		    y: event.clientY - 10 - offset.y,
		},
		orderItems: ['Beans', 'Curry'],
	    });
	},
	markDone: function(name, email, pay, gender) {
	    if(name && email && pay && gender){
		let burgers = vm.getBurgers();
		let info = document.getElementById("customerInfo");
		let nameEl = document.createElement("p");
		nameEl.innerHTML = "Name: " + name + "<br>" + "Email: " + email + "<br>" + "Payment method: " + pay + "<br>" + "Gender: " + gender + "<br>" + "Order: " + burgers;
		info.appendChild(nameEl);
	    }
	    else {
		alert("Please fill in the form.");
	}
	}
    },
    created: function() {
	/* When the page is loaded, get the current orders stored on the server.
	 * (the server's code is in app.js) */
	socket.on('initialize', function(data) {
	    this.orders = data.orders;
	}.bind(this));
	
	/* Whenever an addOrder is emitted by a client (every open map.html is
	 * a client), the server responds with a currentQueue message (this is
	 * defined in app.js). The message's data payload is the entire updated
	 * order object. Here we define what the client should do with it.
	 * Spoiler: We replace the current local order object with the new one. */
	socket.on('currentQueue', function(data) {
	    this.orders = data.orders;
	}.bind(this));
    }
})

