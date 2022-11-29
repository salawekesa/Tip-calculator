const buttons = Array.from(document.querySelectorAll('.tips'))
const reset = document.querySelector('.reset')


buttons.forEach(button => {
        button.addEventListener('click', function(){ 

            const percent = parseInt(button.dataset.value) / 100;
            const bill = parseInt(document.querySelector('#bill-input').value);
            const people = parseInt(document.querySelector('#people-input').value);

            calculate(percent, bill, people);
        })    
})

// function validateInput(){   
//     const billAmount = parseInt(document.querySelector('#bill-amount').value);
//     const numberOfPeople = parseInt(document.querySelector('#number-of-people').value);
//     // checking whether the user has input the bill amount and number of people
//     if(billAmount > 0 && numberOfPeople > 0){
//         if(document.querySelector('#number-of-people').classList.contains('input-error')){
//             document.querySelector('#number-of-people').classList.remove('input-error');
//         }
//         return true;
//     } else {
//    
//         !billAmount > 0 ? document.querySelector('#bill-amount').classList.add('input-error') : document.querySelector('#bill-amount').classList.remove('input-error');
//         !numberOfPeople > 0 ? document.querySelector('#number-of-people').classList.add('input-error') : document.querySelector('#number-of-people').classList.remove('input-error');
//         return false;
//     }  
// }

function calculate(percent, bill, people) {
    /*if(validateInput()){*/
        const tipAmount = (bill * percent) / people;
        const totalAmount = (bill / people) + tipAmount;
        document.querySelector('.cash-tip').innerHTML = `$${tipAmount.toFixed(2)}`;
        document.querySelector('.cash-total').innerHTML = `$${totalAmount.toFixed(2)}`;

}

reset.addEventListener('click', function(){
    document.querySelector('.cash-tip').innerHTML = `$ 0.00`;
    document.querySelector('.cash-total').innerHTML = `$ 0.00`;

    document.querySelector('.inputpeople').innerHTML = `0`;
    document.querySelector('.inputbill').innerHTML = `0`;

})


const custom = document.querySelector('#custom')
custom.addEventListener('input', function(){
    if(custom){
        const percent = parseInt(custom.value) / 100;
        const bill = parseInt(document.querySelector('#bill-input').value);
        const people = parseInt(document.querySelector('#people-input').value);

        calculate(percent,bill,people);
    }


})







