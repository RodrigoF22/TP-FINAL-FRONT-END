import React from 'react'
import './productcard.css'
import { Link } from 'react-router-dom'

const ProductCard = ({producto}) => {
  return (
    <div className='productCard'>
        <div style={{backgroundColor: 'white'}}>{producto.imagen}</div>
        <span className='category'>{producto.categoria}</span>
        <h2>{producto.name}</h2>
        <span className='price'>${producto.precio}</span>
        <Link to={'/detail/' + producto.id} className='linkProductDetail'>Ver detalle</Link> 
    </div> 
  )
}

export default ProductCard