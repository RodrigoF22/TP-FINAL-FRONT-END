import React, { createContext, useContext, useState } from 'react'
import applemacbookpro from '../Assets/AppleMacBookPro.png'
import motorolag32 from '../Assets/MotorolaG32.png'
import samsunggalaxys10 from '../Assets/SamsungGalaxys10.png'
import ipadpro11 from '../Assets/IpadPro11.png'
import microsoftsurfacestudio from '../Assets/MicrosoftSurfaceStudio.png'
import samsungqled4k from '../Assets/SamsungQled4K.png'
import applewatch from '../Assets/AppleWatch.png'
import samsungwatch from '../Assets/SamsungWatch.png'

const Context = createContext()


const ContextProvider = ({children}) => {

    const products = [
        {
            categoria: 'LAPTOPS',
            name: 'Apple Mac Book Pro',
            precio: 950000,
            imagen: <img style={{backgroundColor:'white'}}src={applemacbookpro}/>,
            stock: 15,
            id: 1,
            descripcion: 'La MacBook Pro estrena una potencia y una eficiencia sin precedentes de la mano de los chips M2 Pro y M2 Max. Tiene un rendimiento fuera de serie, incluso cuando no está conectada a la corriente. Una batería que te acompaña por más tiempo. Una espectacular pantalla Liquid Retina XDR. Y todos los puertos que necesitas. Esta laptop es tan pro que parece sacada de otro planeta.'
        },

        {
            categoria: 'PHONES',
            name: 'Motorola G32',
            precio: 90000,
            imagen: <img style={{backgroundColor:'white'}} src={motorolag32}/>,
            stock: 25,
            id: 2,
            descripcion: 'No te pierdas de un solo momento con el nuevo Motorola Moto G32. Con su cámara de 50+8+2+2 MP; sacá fotos nítidas y claras tanto de día como de noche. El Motorola Moto G32 posee un procesador Octa-Core 2.3 GHz para que disfrutes de todas tus aplicaciones sin inconvenientes. Memoria interna de 128 GB y expandible con una MicroSd hasta 1TB.'
        },

        {
            categoria: 'PHONES',
            name: 'Samsung Galaxy s10+',
            precio: 100000,
            imagen: <img style={{backgroundColor:'white'}} src={samsunggalaxys10}/>,
            stock: 10,
            id: 3,
            descripcion:'Al igual que el Galaxy S10, el Samsung Galaxy S10+ viene con un potente chip Snapdragon 855, una construcción de vidrio y metal y un lector de huellas digitales integrado en la pantalla. Sin embargo, es más grande, lo que significa que obtienes una pantalla OLED más grande de 6.4 pulgadas y una batería más grande de 4100 mAh que dura más entre cargas. El teléfono se puede tener con hasta 1 TB de almacenamiento integrado y 12 GB de RAM. El sistema de cámara es idéntico, ya que combina una cámara principal de 12 MP con doble apertura, una cámara de teleobjetivo con zoom 2x y una cámara súper gran angular para tomas épicas. En la parte frontal, la pantalla curva se extiende de un borde a otro, interrumpida solo por un corte ovalado para la cámara frontal dual de 10 MP con enfoque automático y grabación de vídeo 4K.'
        },

        {
            categoria: 'TABLETS',
            name: 'iPad Pro 11',
            precio: 600000,
            imagen: <img style={{backgroundColor:'white'}} src={ipadpro11}/>,
            stock: 12,
            id: 4,
            descripcion:'El iPad en su máxima expresión. Un rendimiento fuera de serie con el chip M1, una espectacular pantalla XDR y conexión inalámbrica ultrarrápida. El iPad Pro está listo para todo.'
        },

        {
            categoria: 'LAPTOPS',
            name: 'Microsoft Surface Studio',
            precio: 1500000,
            imagen: <img style={{backgroundColor:'white'}} src={microsoftsurfacestudio}/>,
            stock: 4,
            id: 5,
            descripcion: 'Surface Studio está listo para cualquier cosa. Nuestra Surface más eficaz hasta la fecha, tiene un procesador Intel® Core™ i7 y una GPU NVIDIA® GeForce® discreta.  Puedes ejecutar software de calidad profesional como Adobe Premiere Pro, Solidworks y Autodesk, y usar herramientas únicas como el Lápiz para Surface y Surface Dial para reinventar la forma en que creas.'
        },

        {
            categoria: 'TELEVISIONS',
            name: 'Samsung Qled 4K',
            precio: 347000,
            imagen: <img style={{backgroundColor:'white'}} src={samsungqled4k}/>,
            stock: 22,
            id: 6,
            descripcion: 'Expandí tu experiencia Smart 4K con el Smart TV Samsung 50” UHD serie 7, Sentite parte de las películas gracias a la cantidad de colores que es capaz de reproducir con PurColor. El diseño elegante que atrae a la imagen más pura. Elaborado con un estilo minimalista y eficiente desde todos los ángulos y un diseño innovador que establece nuevos estándares.'
        },

        {
            categoria: 'WATCHES',
            name: 'Apple Watch',
            precio: 325000,
            imagen: <img style={{backgroundColor:'white'}} src={applewatch}/>,
            stock: 14,
            id: 7,
            descripcion: 'El Apple Watch Series 7 tiene la pantalla Retina siempre activa más grande y avanzada hasta ahora. Todo se ve increíble y es más fácil de usar. También es el más resistente a golpes gracias a su nuevo cristal frontal. Sus funcionalidades avanzadas te permiten medir tu nivel de oxígeno en la sangre, monitorear tus horas de sueño y practicar la conciencia plena. Y tiene un montón de entrenamientos para mantenerte en movimiento, incluyendo Tai Chi y Pilates.'
        },

        {
            categoria: 'WATCHES',
            name: 'Samsung Watch',
            precio: 110000,
            imagen: <img style={{backgroundColor:'white'}} src={samsungwatch}/>,
            stock: 45,
            id: 8,
            descripcion: 'Medí la composición corporal con el potente sensor bioactivo Samsung, Supervisa tus sesiones de entrenamiento desde tu muñeca y disfrutá de un diseño elegante, simple e icónico con el Galaxy Watch 4, el watch que te conoce mejor.'
        }
    ]

    const [userData, setUserData] = useState({})

    const [formUserData, setFormUserData] = useState({
        nombre: '',
        email: '',
        mensaje: '',
    })

    const handleRegisterUser = (evento) =>{
        evento.preventDefault()
        console.log(evento)
        setUserData(formUserData)
        setFormUserData({nombre:'',
        email:'',
        mensaje:''})
    }
    
    const handleChangeRegisterUser = (evento) =>{
        console.log(evento.target.value)
        console.log(formUserData)
        setFormUserData({...formUserData, [evento.target.name]:evento.target.value})
    }
    
    const getProductById = (id) => {
        return products.find(producto => producto.id === Number(id))
    }

    const getProductCartById = (id) =>{
        return cart.find(producto => producto.id === Number(id)) 
    }

    const [cart, setCart] = useState([])
    const isInCart = (id) => cart.some((producto) => producto.id === Number(id))

    const addProductCart = (id, quantity) => {
        if(isInCart(id)){
            setCart(cart.map((producto) => {
                if(producto.id == id){
                    producto.quantity = quantity
                }
                return producto
            }))
        }else{
            return setCart([...cart, {...getProductById(id), quantity : quantity}])
        }
    }

    const getTotal = () => {
        let total = 0;
        cart.forEach((producto) => total += producto.precio * producto.quantity)
        return total
    }

  return (
    <Context.Provider value={{products, formUserData, handleRegisterUser, handleChangeRegisterUser, getProductById, cart, addProductCart, isInCart, getProductCartById, getTotal}}>
        {children}
    </Context.Provider>
  )
}

export const useCustomContext = () => useContext(Context)

export default ContextProvider