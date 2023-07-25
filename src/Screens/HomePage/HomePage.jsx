import React from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { ProductCard, Footer } from '../../Components'
import './homepage.css'

const HomePage = () => {
    
    const {products} = useCustomContext() //Traigo mi array desde el contexto creado
   
  return (
    <>
    <div className='container'>
        <h1>Apple Store</h1>
        <div className='productCard-container'>
          {products.map ((producto) => 
              <ProductCard producto = {producto} key = {producto.id}/>
          )}
        </div>
    </div>

    <Footer/>
     
    </>
      
  )
}

export default HomePage