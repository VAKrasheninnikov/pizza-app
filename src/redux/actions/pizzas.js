import axios from 'axios';

export const setLoaded = value => ({
  type: 'SET_LOADED',
  payload: value
})

export const fetchPizzas = (sortBy, category) => (dispatch) => {
  
  dispatch(setLoaded(false))
  if (category===null) {
    axios.get(`/pizzas?_sort=${sortBy.type}&_order=${sortBy.order}`).then(({ data }) => {
      dispatch(setPizzas(data))
    })
  }
  else {
    axios.get(`/pizzas?category=${category}&_sort=${sortBy.type}&_order=${sortBy.order}`).then(({ data }) => {
      dispatch(setPizzas(data))
    })
  }
}

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items
});

