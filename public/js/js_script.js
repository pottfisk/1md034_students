function menuItem(name, desc, kcal, allergies, imgPath){
    this.name = name;
    this.desc = desc;
    this.kcal = kcal;
    this.allergies = allergies;
    this.imgPath = imgPath;
    this.info = () => this.name + ": " + this.kcal + " kcal";
}

let b1 = new menuItem("The purger", "Tasty", 2002, ["Lactose", "Gluten"]);
let b2 = new menuItem("The sturger", "Tasty", 2030, ["Lactose", "Gluten"]);
let b3 = new menuItem("The mürger", "Tasty", 2004, ["Lactose", "Gluten"]);
let b4 = new menuItem("The lurger", "Tasty", 2005, ["Lactose", "peanuts"]);
let b5 = new menuItem("The urger", "Tasty", 2006, ["Lactose", "Gluten"]);
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
