import React,{useState} from 'react'
import { Header,Mordalbox,Form } from '../'
import { ResponsiveMenu } from '../header/responsive'

function Layout() {

    const [VisivelMenu, setVisivelMenu] = useState(false);
    const [showForm, setShowForm] = useState(false);
  return (
    <React.Fragment>
        <Header setShowForm ={setShowForm} setVisivelMenu={setVisivelMenu}/>
        {VisivelMenu && <ResponsiveMenu setVisivelMenu ={setVisivelMenu} setShowForm={setShowForm}/>}
        {showForm && <Mordalbox onclick= {setShowForm}>
        <Form/>
        </Mordalbox> }

    </React.Fragment>
  )
}

export  {Layout}