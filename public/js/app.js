console.log('javascript loaded')

const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

//messageOne.textContent = 'From Javascript'
//messageTwo.textContent = 'Message Tqo'

weatherform.addEventListener('submit', (e) => {
  e.preventDefault()

  const address = search.value

  messageOne.textContent = 'Loading...'
  messageTwo.Two = ''


  fetch('http://localhost:3000/weather?address='+address).then((resposne) =>{
  resposne.json().then((data) => {
    if (data.error){
      messageOne.textContent = data.error
    }
    else{
      messageOne.textContent = data.location
      messageTwo.textContent = data.forecast
    }

  })

})

})