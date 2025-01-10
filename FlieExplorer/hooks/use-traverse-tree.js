import React from 'react'

const useTraverseTree = () => {

    function insertNode(tree,folderId,item,isFolder){
        if(tree.id === folderId && tree.isFolder){
            tree.items.unshift({
                id:new Date(),
                name:item,
                isFolder,
                items: isFolder ? [] : null,
            });
            return tree;

        }  
        let  latestNode=[]
        latestNode = tree.items.map((obj)=>{
        return insertNode(obj,folderId,item,isFolder);
      })
      return {...tree,items:latestNode};
    }

    const deleteNode = (tree, folderId) => {
        if (tree.id === folderId) {
          return null; // Remove the node
        }
    
        if (tree.items) {
          tree.items = tree.items
            .map((child) => deleteNode(child, folderId))
            .filter((child) => child !== null); // Filter out deleted nodes
        }
    
        return tree;
      };

    const renameNode = () =>{}


    return {insertNode,deleteNode,renameNode}

}

export default useTraverseTree
