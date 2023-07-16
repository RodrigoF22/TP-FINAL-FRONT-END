import React from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { ProductCard, ProductCardCart } from '../../Components'
import './cartpage.css'

const CartPage = () => {
  
  const {cart, getTotal} = useCustomContext()
  console.log(getTotal())

  return (
    <div className='cartContainer'>
      {cart.length > 0
        ?
        <>
          <div className='cartContainer-block-1'>
            <h2 style={{color: '#4D5E80', marginTop:'3vh', fontSize:'24px', width: '80%'}}>Cart</h2>
            {cart.map((producto) =>{
              return <ProductCardCart producto={producto} key={producto.id}/>
            })}
          </div>

          <div className='cartContainer-block-2'>
            <h3 style={{color: '#4D5E80', fontSize:'14px', width: '80%'}}>Total: ${getTotal()}</h3>
          </div>
        </>
        :
        <h2>No has comprado nada aun</h2>
      } 
    </div>
  )
}

export default CartPage


