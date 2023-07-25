import React from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { ProductCard, ProductCardCart } from '../../Components'
import './cartpage.css'

const CartPage = () => {
  
  const {cart, getTotal, removeCart} = useCustomContext()
  console.log(getTotal())

  const onClickBuy = () =>{
    removeCart()
    alert('Tu compra ha sido realizada con éxito')
}

  return (
    <div className='cartContainer'>
      {cart.length > 0
        ?
        <>
          <div className='cartContainer-block-1'>
            <h2>Cart</h2>
            {cart.map((producto) =>{
              return <ProductCardCart producto={producto} key={producto.id}/>
            })}
            <button className = 'addToCartButton' onClick={onClickBuy}>Buy</button>
          </div>

          <div className='cartContainer-block-2'>
            <span>Total: ${getTotal()}</span>
          </div>
        </>
        :
        <h2 className='cartEmpty'>No has comprado nada aún</h2>
      } 
    </div>
  )
}

export default CartPage


