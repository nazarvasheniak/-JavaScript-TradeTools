const fetch = require("node-fetch");

function create() {
    async function getAllPrices() {
        try {
            const response = await fetch('https://api.binance.com/api/v1/ticker/allPrices');
            const json = await response.json();

            return json;
        } catch(error) {
            console.log(error);
        }
    }
}