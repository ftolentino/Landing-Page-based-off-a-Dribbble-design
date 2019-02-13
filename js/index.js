
function getElementId (element) {
   console.log(element.value); 
}

let objForm = {
   travelers: travelers.value,
   travelFrom: travelFrom.value,
   travelTo: travelTo.value,
   startDate: startDate.value,
   endDate: endDate.value
};

function submitForm () {
   console.log(objForm);
}

