console.log('Hello from client side JavaScript!');

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

// messageOne.textContent
weatherForm.addEventListener('submit', (e) => {
  e.preventDefault(); // stop the browser from refreshing

  const location = search.value;
  console.log(location);
  fetch('http://localhost:3000/weather?address=' + location).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          return (
            (messageOne.textContent = data.error), (messageTwo.textContent = '')
          );
        }
        messageOne.textContent = data.location;
        messageTwo.textContent = data.temperature;
      });
    }
  );
});
