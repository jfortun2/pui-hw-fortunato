function getGlazeValue(){
    let selectedGlaze  = document.getElementById("glazingOptions").value;
    console.log(selectedGlaze);
}

function updatePrice() {
    let newPrice = document.getElementById("price").value;
    console.log(newPrice);
    let updatePrice = newPrice + selectedGlaze;
    console.log(updatePrice);

}



//assign value to drop downs
//add to starting price
//multiply by amount chosen
//update price at bottom on dropdown change
//maybe try element.innertext = newText