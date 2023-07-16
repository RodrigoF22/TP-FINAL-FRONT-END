import React from 'react'

const ProductCardCart = ({producto}) => {
  return (
    <div>
        <h2>{producto.name}</h2>
        <h3>${producto.precio}</h3>
        <p>{producto.descripcion}</p>
        <p>Cantidad: {producto.quantity}</p>
        <hr />
    </div>
  )
}

export default ProductCardCart