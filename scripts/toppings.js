const axios = require('axios')
const shortId = require('short-id')

const toppings = [
  {
    id: shortId.generate(),
    name: 'Cheese',
    deliciousness: 10
  },
  {
    id: shortId.generate(),
    name: 'Pepperoni',
    deliciousness: 9
  },
  {
    id: shortId.generate(),
    name: 'Anchovies',
    deliciousness: 3
  },
  {
    id: shortId.generate(),
    name: 'Pineapple',
    deliciousness: 10
  },
  {
    id: shortId.generate(),
    name: 'Mushroom',
    deliciousness: 8
  },
  {
    id: shortId.generate(),
    name: 'Kalamata Olives',
    deliciousness: 8
  },
  {
    id: shortId.generate(),
    name: 'Bacon',
    deliciousness: 10
  }
]

const getToppings = () => {
  return axios.get('https://immense-lake-82822.herokuapp.com/toppings')
}

const addTopping = (name, deliciousness) => {
  // const topping = {
  //   id: shortId.generate(),
  //   name,
  //   deliciousness: parseInt(deliciousness)
  // }

  // toppings.push(toppings)

  const newTopping = {name, deliciousness: parseInt(deliciousness)}
  return axios.post(`https://immense-lake-82822.herokuapp.com/toppings`, newTopping)
}

const deleteTopping = id => {
  // const topping = toppings.find(e => e.id === id)

  // const idx = toppings.indexOf(topping)

  // if(idx !== -1)
  //   toppings.splice(idx, 1)
  return axios.delete(`https://immense-lake-82822.herokuapp.com/toppings/` + id)
}

const updateTopping = (id, name, deliciousness) => {
  // const topping = toppings.find(e => e.id === id)

  // if(topping){
  //   topping.name = name
  //   topping.deliciousness = deliciousness
  // }
  return axios.put(`https://immense-lake-82822.herokuapp.com/toppings/` + id, {name, deliciousness: parseInt(deliciousness)})
}

module.exports = {
  getToppings,
  addTopping,
  deleteTopping,
  updateTopping
}