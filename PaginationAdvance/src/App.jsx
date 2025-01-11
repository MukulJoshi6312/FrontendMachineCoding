import { useState,useEffect } from 'react'
import './App.css'

function App() {

  const[products,setProducts] = useState([]);
  const[page,setPage]  = useState(1);

  // for other apporch
  const[totalPage,setTotalPage]  = useState(0);


  const getTheDataFromTheApi = async() => {
    const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${page*10-10}`);
    const data = await response.json();
    if(data && data.products){
    setProducts(data.products);
    setTotalPage(parseInt(data.total/10))
    }
  }

  useEffect(()=>{
    getTheDataFromTheApi();
    console.log(products)
  },[getTheDataFromTheApi])

  const handlePageChange = (selectedPage) =>{
    if(selectedPage >= 1 && selectedPage <= totalPage && selectedPage !== page)
    setPage(selectedPage)
  }

  return (
      <div>
        {
          products.length > 0 && <div className='container'>
          { 
            products.map((item)=>{
              return <div key={item.id} className='card'>
                  <img src={item.thumbnail} alt={item.title} />
                  <span>{item.title}</span>
              </div>
            })
            }    
          </div>
        }
        {
          products.length > 0 &&(
            <div className='pagination'>
              <span onClick={()=>handlePageChange(page-1)}
                className={page  >  1 ? "" : "disable__button"}
                >Prev</span>
              {
                [...Array(totalPage)].map((_,i)=>(
                  <span key={i}
                  onClick={()=>handlePageChange(i+1)}
                  className={page === i+1 ? 'pagination__selected':""}
                  >{i+1}</span>
                ))
              }
              <span onClick={()=>handlePageChange(page+1)}
                className={page < totalPage ?  "" : "disable__button"}
                >Next</span>
            </div>
          )
        }
      </div>
  )
}

export default App
