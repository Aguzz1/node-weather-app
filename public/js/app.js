const weatherForm = document.querySelector('form')
const searchedLocation = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

messageOne.textContent = 'Loading...';
messageTwo.textContent = ''

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = searchedLocation.value
    const codedLocation = encodeURIComponent(location);



        fetch('http://localhost:3000/weather?address=' + codedLocation).then((response) => {
    response.json().then((data) => {
       if (data.error){
       messageOne.textContent = (data.error)
       } else {
        messageOne.textContent = (data.location)
        messageTwo.textContent = (data.forecast)
            }
        })
    })
})
