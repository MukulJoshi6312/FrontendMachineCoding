import React, { useState } from 'react'

const Floder = ({explorer,handleInsertNode,handleDeleteNode}) => {

    const[expend,setExpend] = useState(false);
    const[showInput,setShowInput] =  useState({
        visible:false,
        isFolder:null,
    });

    const handleNewFolder = (e,isFolder) =>{
        e.stopPropagation();
        setExpend(true)
        setShowInput({
            visible:true,
            isFolder,
        })
    }

    const onAddFolder = (e)=>{
        if(e.keyCode === 13 && e.target.value){
            // add floder logic
            handleInsertNode(explorer.id,e.target.value,showInput.isFolder)
            setShowInput({...showInput,visible:false})
        }
    }

    const deleteNode = (e) =>{
        e.stopPropagation();
        handleDeleteNode(explorer.id);
    }
    

    // console.log(explorer)
    if(explorer.isFolder){
  return (
    <div style={{marginTop:5}}>
      <div className='folder' onClick={()=>setExpend(!expend)}>
       <span style={{display:'flex',justifyContent:"center",alignItems:"center"}}>🗂️ {explorer.name}</span> 
       <div>
        <button onClick={(e)=>handleNewFolder(e,true)}>Floder +</button>
        <button onClick={(e)=>handleNewFolder(e,false)}>File +</button>
        <button onClick={(e) => deleteNode(e)}>Delete</button>
       </div>
      </div>
      <div style={{display: expend?"block":"none",paddingLeft:25}}>
        {
            showInput.visible && (
                <div className='inputContainer'>
                    <span>{showInput.isFolder?"🗂️":"🗒️"}</span>
                    <input type="text" className='inputContainer__input'
                    autoFocus
                    onBlur={()=>setShowInput({...showInput,visible:false})}
                    onKeyDown={onAddFolder}
                    />
                </div>
            ) 
        }
        {explorer.items.map((exp)=>{
            return(
                <Floder explorer={exp} 
                key={exp.id} 
                handleInsertNode={handleInsertNode}
                handleDeleteNode={handleDeleteNode}/>
            )
        })}
      </div>
    </div>
  )}
  else{
    return <span className='file'>🗒️ {explorer.name}</span>
  }
}

export default Floder
