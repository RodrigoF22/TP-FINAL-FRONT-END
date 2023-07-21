import React, { useState } from 'react'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import './counter.css'

const Counter = ({initialValue, stock, id}) => {
  
    const {addProductCart} = useCustomContext()
    const [quantity, setQuantity] = useState(initialValue)

    /* const onClickAddProductCart = () =>{
        addProductCart(id,quantity)
    } */
    
    return (
    <>
        <div className='counter'>
            <button className='buttonCounter' onClick={() => setQuantity(quantity > 1 ? quantity - 1 : quantity)}>-</button>
            <button className='buttonCounterQuantity'>{quantity}</button>
            <button className='buttonCounter' onClick={() => setQuantity(quantity === stock ? quantity : quantity + 1)}>+</button>
        </div>
        <button className = 'addToCartButton' onClick={() => addProductCart(id,quantity)}>Add to cart</button>
    </>
  )
}

export default Counter