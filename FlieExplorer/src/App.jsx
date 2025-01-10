import { useEffect, useState } from 'react'

import './App.css'
import explorer from './data/folderData'
import Floder from './components/Floder'
import useTraverseTree from '../hooks/use-traverse-tree'

function App() {
  const [explorerData, setExplorerData] = useState(explorer)
  console.log(explorerData)

  const {insertNode,deleteNode,renameNode} =  useTraverseTree()

  const handleDeleteNode = (folderId) => {
    const finalTree = deleteNode(explorerData, folderId);
    setExplorerData({...finalTree});
  };

  const handleInsertNode = (folderId,item,isFolder) =>{
    const finalTree = insertNode(explorerData,folderId,item,isFolder);
    console.log(finalTree)
    setExplorerData(finalTree)
  }

  return (
    <>
    <Floder explorer={explorerData} 
    handleInsertNode={handleInsertNode}
    handleDeleteNode={handleDeleteNode}/>
    </>
  )
}

export default App
