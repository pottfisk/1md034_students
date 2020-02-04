/*let orderButton = document.getElementById("orderButton");

orderButton.addEventListener("click", order);

function order(){
    console.log("Button clicked");
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let street = document.getElementById("street").value;
    let housenumber = document.getElementById("housenumber").value;
    let pay = document.getElementById("paymethod").value;
    let gender = null;
    if(document.getElementById("male").checked){
	gender = document.getElementById("male").value;
    } 
    if(document.getElementById("female").checked){
	gender = document.getElementById("female").value;
    }
    if(document.getElementById("chopper").checked){
	gender = document.getElementById("chopper").value;
    }
    if(document.getElementById("other").checked){
	gender = document.getElementById("other").value;
    }
    console.log(name);
    console.log(email);
    console.log(street);
    console.log(housenumber);
    console.log(pay);
    console.log(gender);
}
*/

/*function menuItem(name, desc, kcal, allergies, imgPath){
    this.name = name;
    this.desc = desc;
    this.kcal = kcal;
    this.allergies = allergies;
    this.imgPath = imgPath;
    this.info = () => this.name + ": " + this.kcal + " kcal";
    this.allInfo = function(){
   	let str = "";
	for(let x in this.allergies){
    	    str+="<li>"+allergies[x]+"<\li>";
	}
	return str;
    }
}

let b1 = new menuItem("The purger", "Pulled pork with hot sauce", 2002, ["Lactose", "Gluten"], "het food = [
  {
  "name": "Ostburgare",
  "kCal": 850,
  "lactose": true,
  "gluten": false,
  "img": "url/to/your/img"
  }
]
         ttps://cdn.whatsgabycooking.com/wp-content/uploads/2016/12/Pork-Board-Pulled-Pork-5-copy.jpg");
let b2 = new menuItem("The sturger", "Sturgeon burger with fishy sauce", 2030, ["Lactose", "Gluten"], "https://media-cdn.tripadvisor.com/media/photo-s/10/3b/40/7b/sturgeon-burger.jpg");
let b3 = new menuItem("The mürger", "Müsli burger with yoghurt", 2004, ["Lactose", "Gluten"], "https://irepo.primecp.com/2016/03/270700/recipe-27807_ArticleImage-CategoryPage_ID-1541467.jpg?v=1541467");
let b4 = new menuItem("The lurger", "Tasty", 2005, ["Lactose", "peanuts"],"https://irepo.primecp.com/2016/03/270700/recipe-27807_ArticleImage-CategoryPage_ID-1541467.jpg?v=1541467");
let b5 = new menuItem("The urger", "Tasty", 2006, ["Lactose", "Gluten"],"https://irepo.primecp.com/2016/03/270700/recipe src={{burger.imgP-27807_ArticleImage-CategoryPage_ID-1541467.jpg?v=1541467");
let menu = [b1,b2,b3,b4,b5];


let wrapper = document.getElementById("wrapper")
let str = "" + 100/menu.length + "% "
wrapper.style.gridTemplateColumns = str.repeat(menu.length); 

for(let i = 0; i < menu.length; i++){
    let burgerItem = document.createElement("div");
    let burgerTitle = document.createElement("h3");
    burgerTitle.innerHTML = menu[i].name;
    let burgerImg  = document.createElement("img");
    burgerImg.setAttribute('src', menu[i].imgPath);
    let burgerValue = document.createElement("h4");
    burgerValue.innerHTML = menu[i].desc;
    let burgerAllergy = document.createElement("ul");
    for(let x in menu[i].allergies){
	let listItem = document.createElement("li");
	listItem.innerHTML = menu[i].allergies[x];
	burgerAllergy.appendChild(listItem);
    }
    burgerItem.appendChild(burgerTitle);
    burgerItem.appendChild(burgerImg);
    burgerItem.appendChild(burgerValue);
    burgerItem.appendChild(burgerAllergy);
    wrapper.appendChild(burgerItem);
}


console.log(b1.info());
console.log(b2.info());
console.log(b3.info());
console.log(b4.info());
console.log(b5.info());

document.getElementById("burg1").innerHTML = b1.info();
document.getElementById("burg2").innerHTML = b2.info();
document.getElementById("burg3").innerHTML = b3.info();
document.getElementById("burg4").innerHTML = b4.info();
document.getElementById("burg5").innerHTML = b5.info();



let myElement = document.getElementById("test");
for(let i = 0; i < menu.length; i++){
  let listItem = document.createElement("p");
  let listValue = document.createTextNode(menu[i].info() + " " + menu[i].allInfo());
  listItem.appendChild(listValue);
  myElement.appendChild(listItem);
}
*/
