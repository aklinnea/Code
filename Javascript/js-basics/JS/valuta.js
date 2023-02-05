function currencyInit() {
    const sumElement = document.getElementById('sum');
    const currencyToElement = document.getElementById('currencyTo');
    const convertButtonElement = document.getElementById('convert');
    const resultElement = document.getElementById('result');
    
    convertButtonElement.addEventListener('click', renderResult);
    window.addEventListener('keyup', (event) => {
        if(event.key === 'Enter') {
            action();
        }
    });

    function renderResult() {
        resultElement.textContent = conversion();
    }

    function conversion() {
        if(sumElement.value === '') {
            return 'Please wrtie an amount';
        }
        if(currencyToElement.value === '') {
            return 'Please choose a currency';
        }
        return Math.floor(sumElement.value * currencyToElement.value);
    };

    async function valueOption() {
        const url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/nok.json';
        const response = await fetch (url);
        const result = await response.json();
        console.log(result);
    }

    valueOption();
}

currencyInit();