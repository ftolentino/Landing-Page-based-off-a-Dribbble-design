
function getElementId (element) {
   console.log(element.value); 
}

const objForm = {
   id1: travelers.value,  
   id2: travelFrom.value,
   id3: travelTo.value,
   id4: startDate.value,
   id5: endDate.value,
};

function submitForm () {
   console.log(objForm.id1, objForm.id2, objForm.id3, objForm.id4, objForm.id5);
}