import React from 'react'
import { Header,Mordalbox,MenuUser,Form } from '../'
import { ResponsiveMenu } from '../header/responsive'
import { UseVisivelMenu,UseMordalBox } from '../../hooks';
import { useState, useEffect } from 'react';
function Layout() {

    const {VisivelMenu, setVisivelMenu} = UseVisivelMenu();
    const {showForm, setShowForm, HandleSign} = UseMordalBox()
    const [showMenuUser, setShowMenuUser] = useState(false)
    useEffect (() => {
       window.addEventListener('scroll', function (){
        this.screenY !== 0 && setShowMenuUser(false)
       })
    }, [])
    
    
  return (
    <React.Fragment>
        <Header  setVisivelMenu={setVisivelMenu} HandleSign={HandleSign} setShowMenuUser={setShowMenuUser}/>
        {VisivelMenu && <ResponsiveMenu setVisivelMenu ={setVisivelMenu} HandleSign ={HandleSign}/>}
        {showForm && <Mordalbox onclick= {setShowForm}>
        <Form/>
        </Mordalbox> }
      {showMenuUser &&  <MenuUser setShowMenuUser={setShowMenuUser}/>}

        
      
    </React.Fragment>
  )
}

export  {Layout}