/*
// function expression - pure function
function calculate(){
    return 2 * 2;
}

console.log(calculate());

// function declaration - må brukes før console.log for å initialiseras
// arrow function - imidiate inwoke function
const averageAge = (a, b, c) => {
    return (a + b + c) / 3;
}

console.log(averageAge(14, 18, 24));
*/

// events ---->

// hente box-element fra DOM (HTML element)
const boxElement = document.querySelector('.box');
// hente select element for å lytte på endring 
const selectElement = document.querySelector('.colors');
// fullføre en oppgave når endring skjer i select-element
selectElement.addEventListener('change', (event) => {
    console.log(event.target.value);
    //alert('changed');

    boxElement.setAttribute('style', 'background-color: #333')
});

