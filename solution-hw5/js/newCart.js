class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
    }
}

let roll1 = new Roll("Original", "Sugar Milk", 1, 2.49);
let roll2 = new Roll("Walnut", "Vanilla", 12, 3.49);
let roll3 = new Roll("Raisin", "Sugar Milk", 3, 2.99);
let roll4 = new Roll("Apple", "Original", 3, 3.49);



let cart = new Set();
cart.add(roll1);
cart.add(roll2);
cart.add(roll3);
cart.add(roll4);


function calculatedPrice (a,b,c){
    return((a+b)*c);
}



for(roll of cart){
    let item = document.getElementsByTagName("template")[0];
    let itemClone = item.content.cloneNode(true);
    itemClone.querySelector("#name").innerText = roll.type;
    itemClone.querySelector("#glazing").innerText = "Glazing:" + " " + roll.glazing;
    itemClone.querySelector("#size").innerText = "Pack Size:" + " " + roll.size;
    itemClone.querySelector("img").src = "./Assets/products/"+roll.type.toLowerCase()+"-cinnamon-roll.jpg";
    
    
    
    
    
    
    document.querySelector(".cartContainer").appendChild(itemClone);
}




