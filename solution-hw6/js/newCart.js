class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
    }
}


// let allGlaze = [

//     {
//         glaze: 'Keep original',
//         price: 0.00,
//     },

//     {
//         glaze: 'Sugar milk',
//         price: 0.00,
//     },

//     {
//         glaze: 'Vanilla milk',
//         price: 0.50,
//     },

//     {
//         glaze: 'Double chocolate',
//         price: 1.50,
//     }
// ];

let allGlaze = {
    'Keep Original': 0.0,
    'Sugar Milk': 0.0,
    'Vanilla Milk': 0.5,
    'Double Chocolate': 1.5,
}

let roll1 = new Roll("Original", "Sugar Milk", 1, 2.49);
let roll2 = new Roll("Walnut", "Vanilla Milk", 12, 3.49);
let roll3 = new Roll("Raisin", "Sugar Milk", 3, 2.99);
let roll4 = new Roll("Apple", "Keep Original", 3, 3.49);



let cart = new Set();

cart.add(roll1);
cart.add(roll2);
cart.add(roll3);
cart.add(roll4);

let totalPrice = 0

function calculatedPrice (rollGlazing,rollPrice, packSize){ 
    console.log(rollGlazing, rollPrice, packSize);
   
    total = ((rollGlazing+packSize)*rollPrice);

    totalPrice = totalPrice + total;

    return total.toFixed(2);

 }


 //fix small text of total

// function createElement()
for(roll of cart){
    let item = document.getElementsByTagName("template")[0];
    let itemClone = item.content.cloneNode(true);
    itemClone.querySelector("#name").innerText = roll.type;
    itemClone.querySelector("#glazing").innerText = "Glazing:" + " " + roll.glazing;
    itemClone.querySelector("#size").innerText = "Pack Size:" + " " + roll.size;
    itemClone.querySelector(".itemprice").innerText = calculatedPrice(allGlaze[roll.glazing],roll.basePrice, roll.size);
    
    //site a source


    itemClone.querySelector("img").src = "./Assets/products/"+roll.type.toLowerCase()+"-cinnamon-roll.jpg";
    
    

    const btnRemove = itemClone.querySelector(".caption");
    console.log(btnRemove);
    btnRemove.addEventListener('click', () => {
        removeRoll(itemClone, roll);
    });
    
    
    
    
    document.querySelector(".cartContainer").appendChild(itemClone);
}



document.querySelector(".cartnumber").innerText = "$" + totalPrice.toFixed(2);






function removeRoll(itemClone, roll) {
    //remove DOM object
    document.querySelector(".cartContainer").removeChild(itemClone);

    //Remove from cart set
    cart.remove(roll);
}
