import axios from 'axios';

export const setLoaded = value => ({
  type: 'SET_LOADED',
  payload: value
})

export const fetchPizzas = () => (dispatch) => {
  dispatch(setLoaded(false))
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
      dispatch(setPizzas(data))
    })
}

export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items
});

