
//Declaration

const orderButton = document.getElementById('main-article-button');

const oneKnives = document.getElementById('knives-1');
const twoKnives = document.getElementById('knives-2');
const threeKnives = document.getElementById('knives-3');
const fourKnives = document.getElementById('knives-4')
const fiveKnives = document.getElementById('knives-5');

const orderPrice = document.getElementById('order-price')

const buttons = [oneKnives, twoKnives, threeKnives, fourKnives, fiveKnives];

//Event Listener

orderButton.addEventListener('click', function() {
    document.getElementById('order-article').scrollIntoView({behavior: "smooth"});
})

oneKnives.addEventListener('click', function() {
    oneKnives.style.boxShadow = 'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px';
    twoKnives.style.boxShadow = 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(100, 100, 100, 0.3) 0px 18px 36px -18px inset';
    threeKnives.style.boxShadow = 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(100, 100, 100, 0.3) 0px 18px 36px -18px inset';
    fourKnives.style.boxShadow = 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(100, 100, 100, 0.3) 0px 18px 36px -18px inset';
    fiveKnives.style.boxShadow = 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(100, 100, 100, 0.3) 0px 18px 36px -18px inset';
    orderPrice.innerHTML = 'Rp. 10.000';
});

twoKnives.addEventListener('click', function() {
    twoKnives.style.boxShadow = 'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px';
    oneKnives.style.boxShadow = 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(100, 100, 100, 0.3) 0px 18px 36px -18px inset';
    threeKnives.style.boxShadow = 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(100, 100, 100, 0.3) 0px 18px 36px -18px inset';
    fourKnives.style.boxShadow = 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(100, 100, 100, 0.3) 0px 18px 36px -18px inset';
    fiveKnives.style.boxShadow = 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(100, 100, 100, 0.3) 0px 18px 36px -18px inset';
    orderPrice.innerHTML = 'Rp. 20.000';
});

threeKnives.addEventListener('click', function() {
    threeKnives.style.boxShadow = 'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px';
    oneKnives.style.boxShadow = 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(100, 100, 100, 0.3) 0px 18px 36px -18px inset';
    twoKnives.style.boxShadow = 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(100, 100, 100, 0.3) 0px 18px 36px -18px inset';
    fourKnives.style.boxShadow = 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(100, 100, 100, 0.3) 0px 18px 36px -18px inset';
    fiveKnives.style.boxShadow = 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(100, 100, 100, 0.3) 0px 18px 36px -18px inset';
    orderPrice.innerHTML = 'Rp. 30.000';
});

fourKnives.addEventListener('click', function() {
    fourKnives.style.boxShadow = 'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px';
    oneKnives.style.boxShadow = 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(100, 100, 100, 0.3) 0px 18px 36px -18px inset';
    twoKnives.style.boxShadow = 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(100, 100, 100, 0.3) 0px 18px 36px -18px inset';
    threeKnives.style.boxShadow = 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(100, 100, 100, 0.3) 0px 18px 36px -18px inset';
    fiveKnives.style.boxShadow = 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(100, 100, 100, 0.3) 0px 18px 36px -18px inset';
    orderPrice.innerHTML = 'Rp. 40.000';
});

fiveKnives.addEventListener('click', function() {
    fiveKnives.style.boxShadow = 'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px';
    oneKnives.style.boxShadow = 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(100, 100, 100, 0.3) 0px 18px 36px -18px inset';
    twoKnives.style.boxShadow = 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(100, 100, 100, 0.3) 0px 18px 36px -18px inset';
    threeKnives.style.boxShadow = 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(100, 100, 100, 0.3) 0px 18px 36px -18px inset';
    fourKnives.style.boxShadow = 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(100, 100, 100, 0.3) 0px 18px 36px -18px inset';
    orderPrice.innerHTML = 'Rp. 50.000';
});