const btnAdd = document.querySelector('button[data-add]');
const valueInput = document.querySelector("input[data-value]");
let total = 0;
const outputEl = document.querySelector('.js-output span')


btnAdd.addEventListener('click', () => { 
    console.log("hfjfgjhfghj");

    const value = Number(valueInput.value);
   
    console.log(value);
    
    total += value;
    outputEl.textContent = total;

    console.log("total : ", total);
    valueInput.value = "";

})