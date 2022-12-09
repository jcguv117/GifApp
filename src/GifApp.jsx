import { useState } from "react"

export const GifApp = () => {

  const [categories, setCategories] = useState(['Dragon Ball', 'Dragon Slayer'])

  const handleOnAddCategory = () => {
      setCategories([...categories, 'Valorant'])
  }

  return (
    <>
        <h1>GifApp</h1>
        <button onClick={handleOnAddCategory}> Agregar </button>
        <ol>
          { 
            categories.map( category => { return <li key={category}> { category }</li>} ) 
          }
        </ol>
    </>
  )
}
