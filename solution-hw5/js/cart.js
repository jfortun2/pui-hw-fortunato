//Hw 5









class Roll {

    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.image = imageFile;
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
        this.calculatedPrice = ((basePrice + rollGlazing) * packSize).toFixed(2);
        // this.element = null;//zoya said do not need this?
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
    const clone = template.textContent.cloneNode(true);

    //connecting to roll.element
    let element = clone.querySelector(".itemdescription"); 

    //delete
    const btnRemove = roll.element.querySelector(".caption");
    console.log(btnRemove);
    btnRemove.addEventListener('click', () => {
        deleteNote(roll);
    });


    //adding roll to the DOM 
    //finding parent

    const rollListElement = document.querySelector("#templateCart");
    rollListElement.prepend(element);

    //populating the roll clone with the actual notecard content
    updateElement(roll);

}

function updateElement(roll) {
    let rollImageElement = roll.element.querySelector(".roll-thumbnail");
    let rollNameElement = roll.element.querySelector("#roll-name");
    let rollGlazingElement = roll.element.quearySelector("#roll-glazing");
    let rollPackSizeElement = roll.element.quearySelector("#roll-packsize");
    let rollCalculatedPricElement = roll.element.querySelector(".itemprice");


    rollImageElement.src = roll.
    rollNameElement.innerHTML = roll.rollType;
    rollGlazingElement.innerHTML = roll.rollGlazing;
    rollPackSizeElementElement.innerHTML = roll.packSize;
    rollCalculatedPricElement.innerHTML = roll.calculatedPrice;

    
}

function removeRoll(roll) {
    //remove DOM object
    roll.element.remove();
    //Remove from cart set
    cartSet.delete(roll);
}

const rollOne = createNewRoll(
    "./Assets/products/original-cinnamon-roll.jpg",
    "Original Cinnamon Roll",
    "Glazing: Keep Original",
    "Pack Size: 1",
    "pretend price"

);




