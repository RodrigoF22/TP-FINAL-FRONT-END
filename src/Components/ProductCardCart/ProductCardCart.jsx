import React from 'react'
import './productcardcart.css'

const ProductCardCart = ({producto}) => {
  return (
    <div className='ProductCardCartContainer'>
        <div style={{backgroundColor: 'white'}}>{producto.imagen}</div>
        <h2 style={{backgroundColor: 'white', color:'#4D5E80', fontWeight:'700', fontSize: '14px'}}>{producto.name}</h2>
        <h3 style={{backgroundColor: 'white', color:'#6B7A99', fontWeight:'900', fontSize: '12px'}}>${producto.precio}</h3>
       {/*  <p style={{backgroundColor: 'white', color: '#4D5E80', fontSize:'12px', textAlign:'justify'}}>{producto.descripcion}</p> */}
        <p style={{backgroundColor: 'white', color: 'rgb(77, 94, 128)', fontSize:'14px'}}>Cantidad: {producto.quantity}</p>
    </div>
  )
}



export default ProductCardCart