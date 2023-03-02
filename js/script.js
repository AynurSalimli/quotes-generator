let quote = document.querySelector('.quote')
let generateBtn = document.querySelector('button')
let quoteData = {};

function getQuote (){
    displayLoading();
    fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((data)=>{
        quote.innerHTML = data.content;
        quoteData = data;
        hideLoading();
    });
}

window.onload = function (){
    getQuote();
}

generateBtn.onclick = () =>{
    getQuote()
}
function displayLoading() {
    generateBtn.innerHTML = 'Generating...'
}

function hideLoading() {
    generateBtn.innerHTML = 'Generate'
}