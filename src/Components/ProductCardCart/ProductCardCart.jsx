import React from 'react'
import './productcardcart.css'

const ProductCardCart = ({producto}) => {
  return (
    <div className='ProductCardCartContainer'>
        <div style={{backgroundColor: 'white'}}>{producto.imagen}</div>
        <h3>{producto.name}</h3>
        <span>${producto.precio}</span>
        <p>Cantidad: {producto.quantity}</p>
    </div>
  )
}



export default ProductCardCart