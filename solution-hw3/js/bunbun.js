

let allGlaze = [

    {
    glaze: 'Keep original',
    value: '0.00',
},

{
    glaze: 'Sugar milk',
    value: '0.00',
},

{
    glaze: 'Vanilla milk',
    value: '0.50',
},

{
    glaze: 'Double chocolate',
    value: '1.50',
}
];



//Populating the Glazing Drop Down
let glazeOptions= document.querySelector('#glaze-select');

for (let i = 0; i < allGlaze.length; i++) {
    let glazeSelection = document.createElement("option");
    glazeSelection.textContent = allGlaze[i].glaze;
    glazeOptions.appendChild(glazeSelection);




    // let glazeValue = document.querySelector('#price');
    // element.text = glazeSelection.glaze;
    // element.value = glazeSelection.value;
    // select.add(element);
}

//updating text to display value
function displayValue(glaze) {
    let glazeValue = document.querySelector('#price');
    glazeValue.innerText = glaze.value;
}


//display the value from the selected glaze
function onSelectValueChange() {
    console.log("you selected" + this.value);
    let glazeIndex = parseInt(this.value);
    let glazeToDisplay = allGlaze[glazeIndex];
    displayValue(glazeToDisplay);

}



//update text on drop-down menu change
let selectElement = document.querySelector ('#glaze-select');
selectElement.addEventListener('change', onSelectValueChange);


let allPackSize = [
   
    {
        number: "1",
        value: "1"
    },

    {
        number: "3",
        value: "3",
    },

    {
        number: "6",
        value: "5",
    },

    {
        number: "12",
        value: "10",
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
let













//display the value from the selected pack size
function onSelectNumberChange() {
    console.log("you selected" + this.value);

    let sizeIndex = parseInt(this.value);
    let sizeToDisplay = allPackSize[sizeIndex];

    // display price?
}


//update value on drop-down menu change
let selectNumber = document.querySelector ('#number-select');
selectNumber.addEventListener('change', onSelectNumberChange);


















//calculate final price
