import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SingleProduct from './SingleProduct';

function App() {
  const [products, setProducts] = useState([]);

  const getTheProdcutsList = async() =>{
    const response = await fetch('https://dummyjson.com/products?limit=100');
    const data = await response.json();
    if(data && data.products)
    setProducts(data.products)
  }

  useEffect(()=>{
    getTheProdcutsList();
  },[])

  return (
  
    <div className='container'>
      <SingleProduct products={products}/>
    </div>

  )
}

export default App
