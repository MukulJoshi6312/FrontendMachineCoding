import { useState } from 'react'
import './App.css'

function App() {

  const [items, setItems] = useState([{
    value: 'Item 1',
    isChecked: false
  }, {
    value: 'Item 2',
    isChecked: false
  }, {
    value: 'Item 3',
    isChecked: false
  }, {
    value: 'Item 4',
    isChecked: true
  }, {
    value: 'Mukul Joshi',
    isChecked:false
  }])

  const checkClickHandler = (index)=>{
    items[index].isChecked =  !items[index].isChecked;
    setItems([...items]);
    console.log(items)
  }

  const removeHandler=(index)=>{
    items.splice(index,1);
    setItems([...items])
    alert("remove")
  }

  return (
    <div className="App">
      <h1>Checkbox list</h1>
      {
        items.map((dataItem,index)=>(
          <div key={index}>
          <input type="checkbox"
          checked={dataItem.isChecked}
          className='check'
          onChange={()=>checkClickHandler(index)}
           />
           <label htmlFor='check'>{dataItem.value} {dataItem.isChecked && <span onClick={()=>removeHandler(index)}>X</span> }</label>
           </div>
        ))
      }
    </div>
  )
}

export default App
