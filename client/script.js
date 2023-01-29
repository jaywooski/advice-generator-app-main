// Add query selectors needed for functionality
const adviceBox = document.querySelector('.advice');
const adviceButton = document.querySelector('.btn');
const advice_ID_number = document.querySelector('#advice_id')
const URL = 'https://api.adviceslip.com/advice';


// Functions
async function fetchAdvice() {
    try {
        const response = await fetch(URL)
        const JSON_Response = await response.json()
        const advice = JSON_Response.slip.advice
        const adviceID = JSON_Response.slip.id

        adviceBox.innerText = advice;
        advice_ID_number.innerText = `Advice #${adviceID}`;
        console.log('success!')
        
    } catch (error) {
        console.log(error);
    }
   
}
// console.log(response);


// event listeners
adviceButton.addEventListener('click', fetchAdvice);