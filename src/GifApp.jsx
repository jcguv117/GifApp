import { useState } from "react"
import { AddCategory } from "./components/addCategory"

export const GifApp = () => {

  const [categories, setCategories] = useState(['Dragon Ball', 'Dragon Slayer'])

  const handleOnAddCategory = () => {
      setCategories([...categories, 'Valorant'])
  }

  const onAddCategory = (newCategory) => {
    
    if( categories.includes(newCategory) ) return;
    setCategories([newCategory, ...categories]);
  }

  return (
    <>
        <h1>GifApp</h1>
        
        <AddCategory onNewCategory={ (value) => onAddCategory(value) }
        //onAddCategory={setCategories} 
        />

        {/* <button onClick={handleOnAddCategory}> Agregar </button> */}
        <ol>
          { 
            categories.map( category => { return <li key={category}> { category }</li>} ) 
          }
        </ol>
    </>
  )
}
