import React from 'react'
import { Header } from './componentParts';
import { Home, Cart } from './pages';
import { Routes, Route } from 'react-router-dom'
import axios from 'axios';
import { useDispatch } from 'react-redux'
import { fetchPizzas } from './redux/actions/pizzas'


function App() {

  const dispatch = useDispatch();

  React.useEffect(()=>{
    dispatch(fetchPizzas())
  })


  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/cart" element={<Cart />} exact />
        </Routes>
      </div>
    </div>
  );
}

export default App



