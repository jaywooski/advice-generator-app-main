// Add query selectors needed for functionality
const adviceBox = document.querySelector('.advice');
const adviceButton = document.querySelector('.btn');
const URL = 'https://api.adviceslip.com/advice';


// Functions
async function fetchAdvice() {
    try {
        const response = await fetch(URL)
        const JSON_Response = await fetch(response.json())
        console.log(JSON_Response);
        
    } catch (error) {
        console.error(error);
    }
    
    //     const data = await response.json();
    //    console.log(data);
}
// console.log(response);


// event listeners
adviceButton.addEventListener('click', fetchAdvice);