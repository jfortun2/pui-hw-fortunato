//Hw 5



class Roll {

    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
        this.element = null;
    }

}

let glazingToPrice = {
    "Keep Original": 0,
    "Sugar Milk": 0,
    "Vanilla Milk": 0.5,
    "Double Chocolate": 1.5
}

let packPricetoSize = {
    1:1,
    3:3,
    5:6,
    10:12
}


//make cart set 
let cartSet = new Set();

//new h6 populating cart
let localCart = localStorage.getItem('storedRolls');
if(localCart) cartSet = new Set(Array.from(JSON.parse(localCart)));




//Creating function to make new rolls and add them to my cart set 
function createNewRoll(rollType, rollGlazing, packSize, rollPrice ) {
    let roll = new Roll(rollType, rollGlazing, packSize, rollPrice)
    cartSet.add(roll);
    return roll;

}


//creating a function to make the DOM element
function createElement(roll) {

    //cloning the roll template
    const template = document.querySelector("#templateCart");
    const clone = template.content.cloneNode(true);

    //connecting to roll.element
    roll.element = clone.querySelector(".itemdescriptionline"); 



    //Selecting remove button and adding event listener, removing roll
    const btnRemove = roll.element.querySelector(".caption");
    btnRemove.addEventListener('click', () => {
        removeRoll(roll);
    });
    

    //populating the roll clone with the actual notecard content
    updateElement(roll);
    const rollListElement = document.querySelector(".cartContainer");
    rollListElement.append(roll.element);
}


//defining glaze values
let allGlaze = [0.0, 0.0, 0.5, 1.5];
const glazings = ["Keep Original", "Sugar Milk", "Vanilla Milk", "Double Chocolate"];

//setting an outside total price variable
let totalPrice = 0

//calculating price per object and updating outside total
function calculatedPrice (rollGlazing,rollPrice, packSize){ 
    total = ((rollGlazing+rollPrice)*packSize);
    console.log(total);
    totalPrice = totalPrice + parseFloat(total);
    return total.toFixed(2);

 }

 //function to replace element items with individual information
function updateElement(roll) {
    
    roll.element.querySelector("#name").innerText = roll.type + ' Cinnamon Roll';
    roll.element.querySelector("#glazing").innerText = "Glazing:" + " " + roll.glazing;
    roll.element.querySelector("#size").innerText = "Pack Size:" + " " + packPricetoSize[roll.size];  
    console.log(roll.glazing);  
    roll.element.querySelector(".itemprice").innerText = calculatedPrice(parseFloat(glazingToPrice[roll.glazing]),roll.basePrice, roll.size);
    roll.element.querySelector("img").src = "./Assets/products/"+roll.type.toLowerCase()+"-cinnamon-roll.jpg";
}

//removing roll from the DOM and cart set
function removeRoll(roll) {
    
    //remove DOM object
    roll.element.remove();

    //Remove from cart set
    cartSet.delete(roll);
    totalPrice =  totalPrice - calculatedPrice(parseFloat(glazingToPrice[roll.glazing]),roll.basePrice, roll.size);
    document.querySelector(".cartnumber").innerText = "$" + totalPrice.toFixed(2);


    localStorage.setItem("storedRolls", JSON.stringify(Array.from(cartSet)));
    
    


}


for (roll of cartSet) {
    createElement(roll);
}

//replacing final price text with calculated total
document.querySelector(".cartnumber").innerText = "$" + totalPrice.toFixed(2);

