
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
let glazeOptions= document.querySelector('#glaze-select');

for (let i = 0; i < allGlaze.length; i++) {
    let glazeSelection = document.createElement("option");
    glazeSelection.textContent = allGlaze[i].glaze;
    glazeOptions.appendChild(glazeSelection);

}


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

//final price update
function glazingChange(element){

    const priceChange = element.value;

    //glaze dropdown menu
    
    for (i = 0; i < allGlaze.length; i++){
        
        if (allGlaze[i].glaze == element.value) {

            glazeChoice = allGlaze[i].price;

        }
    }

    //price dropdown menu

    for (i = 0; i < allPackSize.length; i++){
        
        if (allPackSize[i].number == element.value) {
            
            packChoice = allPackSize[i].multiple;

        }
    }
    
    //final price after selections

    finalPrice = ((basePrice + glazeChoice) * packChoice).toFixed(2);

    //updating the text

    document.querySelector("#price").innerHTML = "$" + finalPrice;
}


document.querySelector("#detailsheader").innerText="Apple Cinnamin Roll";
document.querySelector(".leftdetails").src = 

