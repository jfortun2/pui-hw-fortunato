function glazingChange(element){
    const priceChange = element.value
}

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


function displayValue(glaze){
    let glazeValue = document.querySelector('#price');
    glazeValue.innerText = glaze.value;
}

function onSelectValueChange() {
    console.log("you selected" + this.value);

    let glazeIndex = parseInt(this.value);

    let glazeToDisplay = allGlaze[glazeIndex];

    displayValue(glazeToDisplay);

}

let selectElement = document.querySelector ('#glaze-select');
selectElement.addEventListener('change', onSelectValueChange);











//assign value to drop downs
//add to starting price
//multiply by amount chosen
//update price at bottom on dropdown change
//maybe try element.innertext = newText