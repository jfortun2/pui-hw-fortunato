
//inspiration from https://github.com/interactive-structures/teach-pui/tree/main/in-lab-examples/puinote-lab04/select-example

let allGlaze = [

    {
        glaze: 'Keep original',
        price: 0.00,
    },

    {
        glaze: 'Sugar milk',
        price: 0.00,
    },

    {
        glaze: 'Vanilla milk',
        price: 0.50,
    },

    {
        glaze: 'Double chocolate',
        price: 1.50,
    }
];


//Inspiration from https://www.geeksforgeeks.org/how-to-create-a-dropdown-list-with-array-values-using-javascript/


//Populating the Glazing Drop Down
let glazeOptions = document.querySelector('#glaze-select');


for (let i = 0; i < allGlaze.length; i++) {
    let glazeSelection = document.createElement("option");
    glazeSelection.textContent = allGlaze[i].glaze;
    console.log(document.querySelector('#glaze-select'));
    glazeOptions.appendChild(glazeSelection);

}

//having proble with null 

let allPackSize = [

    {
        number: "1",
        multiple: 1
    },

    {
        number: "3",
        multiple: 3,
    },

    {
        number: "6",
        multiple: 5,
    },

    {
        number: "12",
        multiple: 10,
    }

];


//Inspiration from https://www.geeksforgeeks.org/how-to-create-a-dropdown-list-with-array-values-using-javascript/

//Populating the Pack Size
let packOptions = document.querySelector('#number-select');

for (let i = 0; i < allGlaze.length; i++) {
    let packSelection = document.createElement("option");
    packSelection.textContent = allPackSize[i].number;
    packOptions.appendChild(packSelection);
}


//create variables for price calculation
let basePrice = 2.49;
let glazeChoice = 0;
let packChoice = 1;
let finalPrice;

//final price update
function glazingChange(element) {

    const priceChange = element.value;

    //glaze dropdown menu

    for (i = 0; i < allGlaze.length; i++) {

        if (allGlaze[i].glaze == element.value) {

            glazeChoice = allGlaze[i].price;

        }
    }


    //price dropdown menu

    for (i = 0; i < allPackSize.length; i++) {

        if (allPackSize[i].number == element.value) {

            packChoice = allPackSize[i].multiple;

        }
    }


    //final price after selections

    finalPrice = (((rolls[rollType].basePrice) + glazeChoice) * packChoice).toFixed(2);
    //updating the text

    document.querySelector("#price").innerHTML = "$" + finalPrice;
}





//HW 4


class Roll {

    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
        this.calculatedPrice = ((basePrice + rollGlazing) * packSize).toFixed(2);
        // this.element = null;
    }

}



//Talked to Joy Mukherjee about item selection

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get("roll");

console.log(rollType)

document.querySelector("#detailsheader").innerHTML = rollType + " " + "Cinnamon Roll";
document.querySelector("#applepicture").src = rolls[rollType].imageFile;
document.querySelector("#price").innerText = "$" + rolls[rollType].basePrice;


//Creating new roll object in cart
function toCart() {

    let r1 = new Roll(rollType, glazeChoice, packChoice, rolls[rollType].basePrice)
    console.log(r1);

    //add to cart
    cart.push(r1);

}


// //Hw 5

// //make cart set 
// let cartSet = new Set();


// //Creating roll objects

// let calculatedPrice = (Roll.basePrice + glazeChoice) * packChoice.toFixed(2);

// //Creating roll objects

// function createNewRoll() {
//     let roll = new Roll(rollType, glazeChoice, packChoice, rolls[rollType].basePrice, calculatedPrice)
//     cartSet.add(roll);
//     console.log(roll);
//     return roll;

// }


// function createElement(roll) {
//     //cloning the roll template
//     const template = document.querySelector("#templateCart");
//     const clone = template.textContent.cloneNode(true);

//     //connecting to roll.element
//     let element = clone.querySelector(".itemdescription"); //WHAT IS MY ROLL ELEMENT
//     //roll.element = clone.querySelector(".roll"); //WHAT IS MY ROLL ELEMENT

//     //delete
//     const btnRemove = roll.element.querySelector(".caption");
//     console.log(btnRemove);
//     btnRemove.addEventListener('click', () => {
//         deleteNote(roll);
//     });


//     //adding roll to the DOM 
//     //finding parent

//     const rollListElement = document.querySelector("#templateCart");
//     rollListElement.prepend(element);

//     //populating the roll clone with the actual notecard content
//     updateElement(roll);

// }

// function updateElement(roll) {
//     const rollImageElement = roll.element.querySelector(".roll-thumbnail");
//     let rollNameElement = roll.element.querySelector()
//     let rollGlazingElement
//     let rollPackSizeElement
//     let rollCalculatedPricElement

// }

// function removeRoll(roll) {
//     roll.element.remove();
//     cartSet.delete(roll);
// }






