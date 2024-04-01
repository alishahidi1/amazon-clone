function calculateTotal(){
    const inputElement = document.querySelector('.js-cost-input');
    let cost = Number(inputElement.value);
    if (cost < 40){
        cost += 10;
    } 

    document.querySelector('.js-total-cost').innerHTML = `$${cost}`;
}

function handleCostKeyDown(e){
    if (e.key === 'Enter'){
    calculateTotal();
}
}

function subscribe(){
    const buttonElement = document.querySelector('.js-subscribe-button');

    if (buttonElement.innerText === 'Subscribe'){
        buttonElement.innerHTML = 'Subscribed';
        buttonElement.classList.add('is-subscribed');
    } else{
        buttonElement.innerHTML = 'Subscribe';
        buttonElement.classList.remove('is-subscribed');
    }
}