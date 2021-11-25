import axios from 'axios';

export const setLoaded = value => ({
  type: 'SET_LOADED',
  payload: value
})

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  console.log(category)
  dispatch(setLoaded(false))
  if (category===null) {
    axios.get(`http://localhost:3001/pizzas?_sort=${sortBy.type}&_order=${sortBy.order}`).then(({ data }) => {
      dispatch(setPizzas(data))
    })
  }
  else {
    axios.get(`http://localhost:3001/pizzas?category=${category}&_sort=${sortBy.type}&_order=${sortBy.order}`).then(({ data }) => {
      dispatch(setPizzas(data))
    })
  }
}

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items
});

