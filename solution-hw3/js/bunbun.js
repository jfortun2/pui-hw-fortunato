

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



//Populating the Glazing Drop Down
let glazeOptions= document.querySelector('#glaze-select');

for (let i = 0; i < allGlaze.length; i++) {
    let glazeSelection = document.createElement("option");
    glazeSelection.textContent = allGlaze[i].glaze;
    glazeOptions.appendChild(glazeSelection);

}


//display the value from the selected glaze
// function onSelectValueChange() {
//     console.log("you selected" + this.value);
//     let glazeIndex = parseInt(this.value);
//     let glazeToDisplay = allGlaze[glazeIndex];
//     displayValue(glazeToDisplay);

// }

// //update text on drop-down menu change
// let selectElement = document.querySelector ('#glaze-select');
// selectElement.addEventListener('change', onSelectValueChange);


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


//Populating the Pack Size
let packOptions= document.querySelector('#number-select');

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

//final price computation

function glazingChange(element){
    console.log("hello")
    const priceChange = element.value;

    //glaze dropdown menu
    
    for (i = 0; i < allGlaze.length; i++){
        console.log("in 1st loop")
        if (allGlaze[i].glaze == element.value) {

            glazeChoice = allGlaze[i].price;

        }
    }

    //price dropdown menu

    for (i = 0; i < allPackSize.length; i++){
        console.log("in 2nd loop")
        if (allPackSize[i].packSize == element.value) {
            
            packChoice = allPackSize[i].multiple;
        }
    }
    
    //final price after selections

    finalPrice = ((basePrice + glazeChoice) * packChoice).toFixed(2)
    console.log("in finalprice");

    //updating the text

    document.querySelector("#price").innerHTML = "$" + finalPrice;
}




