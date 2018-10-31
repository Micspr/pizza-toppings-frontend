const axios = require('axios')
const { renderToppings } = require('./renderToppings')
const { addTopping, getToppings } = require('./toppings')


// attach event to form
document.querySelector('form').addEventListener('submit', function(event){
  event.preventDefault()

  const name = event.target.toppingName.value
  const deliciousness = parseInt(event.target.deliciousness.value)

  event.target.toppingName.value = ''
  event.target.deliciousness.value = ''
  
  // // add toppings
  // addTopping(name, deliciousness)
  // const newTopping = {name, deliciousness}
  // axios.post(`https://immense-lake-82822.herokuapp.com/toppings`, newTopping)
  addTopping(name, deliciousness)
  .then(function() {
    return getToppings()
  })
  .then(function(response) {
    renderToppings(response.data.toppings)
  })

})


// initial render of data
// const toppings = getToppings()
getToppings()
.then(function(response) {
  renderToppings(response.data.toppings)
})