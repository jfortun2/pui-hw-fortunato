

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

//updating text to display value
function displayValue(glaze){
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


//display the value from the selected pack size
function onSelectNumberChange() {
    console.log("you selected" + this.value);

    let sizeIndex = parseInt(this.value);
    let sizeToDisplay = allPackSize[sizeIndex];
}


//update value on drop-down menu change
let selectNumber = document.querySelector ('#number-select');
selectNumber.addEventListener('change', onSelectNumberChange);


//updating text to display value
function displayValue(glaze){
    let glazeValue = document.querySelector('#price');
    glazeValue.innerText = glaze.value;
}















//calculate final price
