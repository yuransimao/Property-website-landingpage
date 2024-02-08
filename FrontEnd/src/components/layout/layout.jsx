import React,{useState} from 'react'
import { Header,Mordalbox,Form } from '../'
import { ResponsiveMenu } from '../header/responsive'

function Layout() {

    const [VisivelMenu, setVisivelMenu] = useState(false);
  return (
    <React.Fragment>
        <Header VisivelMenu ={VisivelMenu} setVisivelMenu={setVisivelMenu}/>
        {VisivelMenu && <ResponsiveMenu setVisivelMenu ={setVisivelMenu}/>}
        <Mordalbox>
        <Form/>
        </Mordalbox>

    </React.Fragment>
  )
}

export  {Layout}