import React, { useState } from 'react'
import './App.css'
import { data } from './data'

function App() {

  const[leftItem,setLeftItems] = useState(data)
  const[rightItems,setRightItems] = useState([]);

  const checkedList  = (list,id,checked) =>{
      return list.map((item)=>{
          if(id === item.id){
            return {
              ...item,
              checked : !checked
            }
          }
          return item;
      })
  }
 
  const handleClick = (id,checked,direction)=>{
    if(direction==='LEFT'){
        let copyList = [...leftItem];
        copyList = checkedList(copyList,id,checked)
        setLeftItems(copyList)
    }else{
        let copyList = [...rightItems];
        copyList = checkedList(copyList,id,checked);
        setRightItems(copyList)
    }
  }

  const resetChecked = (list) =>{

    return list.map((item)=>{
      return {
        ...item,
        checked :false
      }
    })

  }

  const handleTransferBtn = (dir) =>{
    if(dir === 'LEFT_TO_RIGHT'){
      if(leftItem.length){
        let copyList = [...leftItem];
        const checkedList = copyList.filter(item=>item.checked);
        const unCheckList = copyList.filter(item=>!item.checked);
        setRightItems(resetChecked([...rightItems, ...checkedList]));
        setLeftItems([...unCheckList])
      }
    }
    else{
        let copyList = [...rightItems];
        const checkedList = copyList.filter(item=>item.checked);
        const unCheckList = copyList.filter(item=>!item.checked);
        setLeftItems(resetChecked([...leftItem, ...checkedList]));
        setRightItems([...unCheckList])
      }
    
  }

  return (
   <div className='App'>
    <h1 className=''>Transfer List</h1>
        <div className="container">
            <div className="box">
              {/* left side */}
              {
                leftItem.map(({title,id,checked})=>
                <button key={title}
                id={id}
                className={`item ${checked && 'checked'}`}
                onClick={()=>handleClick(id,checked,'LEFT')}
                >{title}</button>
                )
              }
            </div>
            <div className="actions">
              <button onClick={()=>handleTransferBtn('LEFT_TO_RIGHT')}>Left</button>
              <button onClick={()=>handleTransferBtn('RIGHT_TO_LEFT')}>Right</button>
              {/*middle button */}
            </div>
            <div className="box">
              {/* right side */}
              {
                rightItems.map(({title,id,checked})=>(
                  <button key={title}
                  id={id}
                  className={`item ${checked && 'checked'}`}
                  onClick={()=>handleClick(id,checked,'RIGHT')}
                  >
                    {title}
                    </button>
                ))
              }
            </div>
        </div>
   </div>
  )
}

export default App
