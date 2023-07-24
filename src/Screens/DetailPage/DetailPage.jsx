import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import { useCustomContext } from '../../ContextManager/ContextProvider'
import { Counter } from '../../Components'
import './detailpage.css'

const DetailPage = () => {
    const {id} = useParams()
    console.log(id)

    const {getProductById, isInCart, getProductCartById} = useCustomContext()
    const [productDetail, setProductDetail] = useState(isInCart(id) ? getProductCartById(id): getProductById(id))

  return (
    <div className='detailPage-container'>
        <h1>Apple Store</h1>
        <div className='detailPage-block'>
            <div style={{backgroundColor:'white'}}>{productDetail.imagen}</div>
            <h3>{productDetail.name}</h3>
            <span>${productDetail.precio}</span>
        </div>
        <p>{productDetail.descripcion}</p>

        {
          isInCart(id)
          ?
          <Counter initialValue={productDetail.quantity} stock={productDetail.stock} id = {productDetail.id}/>
          :
          <Counter initialValue={1} stock={productDetail.stock} id = {productDetail.id}/>
        }
    </div>
  )
}

export default DetailPage

