import React, { useEffect, useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import './App.css'

const SingleProduct = ({products}) => {

    const[like,setLikes] = useState(()=> products.map(()=>false));

    const toggleLike = (index) => {
        setLikes((prevLikes) => {
          const updatedLikes = [...prevLikes]; // Create a copy of the current likes
          updatedLikes[index] = !updatedLikes[index]; // Toggle the like for the specific index
          return updatedLikes; // Return the updated likes array
        });
    };

    useEffect(()=>{

            const[like,setLikes] = useState(()=> products.map(()=>false));


    },[selectedPageHandler])

    const[page,setPage] = useState(1);
    const selectedPageHandler = (selectedPage)=>{
    if(selectedPage >= 1 && selectedPage <= products.length /10 && selectedPage !== page)
        setPage(selectedPage);
    }

    // console.log(products)
    return (
        <div className='item'>
            {
                products.slice(page*10 -10,page*10).map((item,index)=>(
                    <div className='card' key={item.id}>
                        <img src={item.thumbnail} alt={item.title} />
                        <p>{item.title}</p>
                        <div className='heart-icon' onClick={()=>toggleLike(index)}>
                            {like[index] ? <FaHeart/> : <CiHeart/>}
                        </div>
                    </div>
                    
                ))
            }

            {
            
                products.length > 0 &&
                <div className='pagination'>
                    <span onClick={()=>selectedPageHandler(page-1)}
                        className={page > 1 ? "" : "pagination__disable"}
                        >Prev</span>
                        {
                        [...Array(products.length/10)].map((_,index)=>{
                            return <span key={index} 
                            onClick={()=>selectedPageHandler(index+1)}
                            className={page === index+1 ? 'pagination__selected':''}
                            >{index+1}</span>
                        })
                        }
                    <span onClick={()=>selectedPageHandler(page+1)}
                        className={page < products.length / 10 ? "" :"pagination__disable"}
                        >Next</span>
                </div>
            }
    </div>
  )
}

export default SingleProduct
