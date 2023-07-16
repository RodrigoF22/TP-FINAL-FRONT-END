import React from 'react'
import './productcard.css'
import { Link } from 'react-router-dom'

const ProductCard = ({producto}) => {
  return (
    <div className='productCard'>
        <div style={{backgroundColor: 'white'}}>{producto.imagen}</div>
        <span style={{color:'#7D8FB3', fontWeight:'900', fontSize: '10px', backgroundColor: 'white'}}>{producto.categoria}</span>
        <h2 style={{color:'#4D5E80', fontWeight:'700', fontSize: '14px', backgroundColor: 'white'}}>{producto.name}</h2>
        <span style={{color:'#6B7A99', fontWeight:'900', fontSize: '12px', backgroundColor: 'white'}}>${producto.precio}</span>
        <Link to={'/detail/' + producto.id} className='linkProductDetail'>Ver detalle</Link> 
    </div> 
  )
}

export default ProductCard