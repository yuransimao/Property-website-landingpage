import React from 'react'
import { Header,Mordalbox,Form } from '../'
import { ResponsiveMenu } from '../header/responsive'
import { UseVisivelMenu,UseMordalBox } from '../../hooks';
function Layout() {

    const {VisivelMenu, setVisivelMenu} = UseVisivelMenu();
    const {showForm, setShowForm, HandleSign} = UseMordalBox()
    
  return (
    <React.Fragment>
        <Header  setVisivelMenu={setVisivelMenu} HandleSign={HandleSign}/>
        {VisivelMenu && <ResponsiveMenu setVisivelMenu ={setVisivelMenu} HandleSign ={HandleSign}/>}
        {showForm && <Mordalbox onclick= {setShowForm}>
        <Form/>
        </Mordalbox> }

    </React.Fragment>
  )
}

export  {Layout}