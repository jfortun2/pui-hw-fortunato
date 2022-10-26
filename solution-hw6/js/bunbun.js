
//inspiration from https://github.com/interactive-structures/teach-pui/tree/main/in-lab-examples/puinote-lab04/select-example

let allGlaze = [

    {
        glaze: 'Keep Original',
        price: 0.00,
    },

    {
        glaze: 'Sugar Milk',
        price: 0.00,
    },

    {
        glaze: 'Vanilla Milk',
        price: 0.50,
    },

    {
        glaze: 'Double Chocolate',
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
let glazing = "Keep Original";
let packChoice = 1;
let finalPrice;

//final price update
function glazingChange(element) {

    const priceChange = element.value;

    //glaze dropdown menu

    for (i = 0; i < allGlaze.length; i++) {

        if (allGlaze[i].glaze == element.value) {

            glazeChoice = allGlaze[i].price;
            glazing = allGlaze[i].glaze;

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
        
    }

}



//Talked to Joy Mukherjee about item selection

const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get("roll");

let cart = [];
retrieveFromLocalStorage();


document.querySelector("#detailsheader").innerHTML = rollType + " " + "Cinnamon Roll";
document.querySelector("#applepicture").src = rolls[rollType].imageFile;
document.querySelector("#price").innerText = "$" + rolls[rollType].basePrice;



//Creating new roll object in cart
function toCart() {

    let r1 = new Roll(rollType, glazing, packChoice, rolls[rollType].basePrice)
    console.log(r1);

    //add to cart
    cart.push(r1);

    saveToLocalStorage();

    console.log(cartSet);


}





function saveToLocalStorage(){
    //local storage and changing my cart array into a string
    localStorage.setItem('storedRolls', JSON.stringify(cart));
}


function retrieveFromLocalStorage(){
    const cartArrayString = localStorage.getItem('storedRolls');
    if (cartArrayString) cart = Array.from(JSON.parse(cartArrayString));``
}





















