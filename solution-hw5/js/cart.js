//Hw 5



class Roll {

    constructor(imageFile, rollType, rollGlazing, packSize, rollPrice, basePrice) {
        this.image = imageFile;
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
        this.calculatedPrice = ((basePrice + rollGlazing) * packSize).toFixed(2);
        this.element = null;
    }

}


//make cart set 
let cartSet = new Set();


//Creating roll objects

// let calculatedPrice = (Roll.basePrice + glazeChoice) * packChoice.toFixed(2);

//Creating roll objects


function createNewRoll(imageFile, rollType, rollGlazing, packSize, rollPrice, calculatedPrice ) {
    let roll = new Roll(imageFile, rollType, rollGlazing, packSize, rollPrice, calculatedPrice)
    cartSet.add(roll);
    console.log(roll);
    return roll;

}


function createElement(roll) {
    //cloning the roll template
    const template = document.querySelector("#templateCart");
    const clone = template.content.cloneNode(true);

    //connecting to roll.element
    roll.element = clone.querySelector(".itemdescription"); 
    console.log("cloning");

    //delete
    const btnRemove = roll.element.querySelector(".caption");
    console.log(btnRemove);
    btnRemove.addEventListener('click', () => {
        deleteNote(roll);
    });


    //adding roll to the DOM 
    //finding parent

    const rollListElement = document.querySelector("#templateCart");
    rollListElement.prepend(roll.element);

    //populating the roll clone with the actual notecard content
    updateElement(roll);

}

function updateElement(roll) {
    let rollImageElement = roll.element.querySelector(".roll-thumbnail");
    let rollNameElement = roll.element.querySelector("#roll-name");
    let rollGlazingElement = roll.element.querySelector("#roll-glazing");
    let rollPackSizeElement = roll.element.querySelector("#roll-packsize");
    let rollBasePriceElement = roll.element.querySelector(".itemprice")
    let rollCalculatedPriceElement = roll.element.querySelector(".itemprice");


    rollImageElement.src = roll.image;
    rollNameElement.innerHTML = roll.type;
    rollGlazingElement.innerHTML = roll.glazing;
    rollPackSizeElement.innerHTML = roll.size;
    rollBasePriceElement.innerHTML = roll.rollPrice;
    rollCalculatedPricElement.innerHTML = roll.calculatedPrice;

    
}

// function removeRoll(roll) {
//     //remove DOM object
//     roll.element.remove();
//     //Remove from cart set
//     cartSet.delete(roll);
// }

const rollOne = createNewRoll(

    "./Assets/products/original-cinnamon-roll.jpg",
    "Original Cinnamon Roll",
    "Glazing: Keep Original",
    "Pack Size: 1",
    "pretend price"

);


const rollTwo = createNewRoll(

    "./Assets/products/original-cinnamon-roll.jpg",
    "Original Cinnamon Roll",
    "Glazing: Keep Original",
    "Pack Size: 1",
    "pretend price"

);

const rollThree = createNewRoll(

    "./Assets/products/original-cinnamon-roll.jpg",
    "Original Cinnamon Roll",
    "Glazing: Keep Original",
    "Pack Size: 1",
    "pretend price"

);

const rollFour = createNewRoll(

    "./Assets/products/original-cinnamon-roll.jpg",
    "Original Cinnamon Roll",
    "Glazing: Keep Original",
    "Pack Size: 1",
    "pretend price"

);




for (const roll of cartSet) {
    console.log (roll);
    createElement(roll);

}

// function calculatePriceTotal () {
//     let priceTotal = 0;
//     for (let )

// }

//for loop for set where it calls each element on load
//calculate price 
