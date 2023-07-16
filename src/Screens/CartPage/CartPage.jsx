import React from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { ProductCard, ProductCardCart } from '../../Components'

const CartPage = () => {
  
  const {cart} = useCustomContext()
  console.log(cart)

  return (
    <div>
      <div>
        {cart.map((producto) =>{
          return <ProductCardCart producto={producto} key={producto.id}/>
        })}
      </div>
        
    </div>
  )
}

export default CartPage