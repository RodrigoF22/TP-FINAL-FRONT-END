import React from 'react'
import house from './Assets/House.png'
import cart from './Assets/Cart.png'
import handlens from './Assets/HandLens.png'
import logo from './Assets/Logo.png'
import { HomePage, ContactPage, CartPage, DetailPage } from './Screens'
import {NavLink, Routes, Route} from 'react-router-dom'
import './app.css'


const App = () => {

  return (
    <>
      <div>
        <nav className='navBar'>
          <img src={logo}/>
          <div className='navBar-links'>
            <NavLink to = '/contact' className='navBar-links-contact'>Contact</NavLink>
            <NavLink to = '/'><img src={house}/></NavLink>
            <NavLink to = '/searchgoods'><img src={handlens}/></NavLink>
            <NavLink to = '/cart'><img src={cart}/></NavLink>
          </div>
        </nav>
        <Routes>
          <Route path = '/' element = {<HomePage/>}/>
          <Route path = '/contact/' element = {<ContactPage/>}/>
          <Route path = '/cart/' element = {<CartPage/>}/>
          <Route path = '/detail/:id' element = {<DetailPage/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
