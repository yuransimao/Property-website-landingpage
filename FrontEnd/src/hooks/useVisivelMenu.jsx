import {useState, useEffect} from 'react'


function UseVisivelMenu(){
    const [VisivelMenu, setVisivelMenu] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", function(){
            this.innerWidth > 1022 && setVisivelMenu(false);
            
        })
       
    },[])

    return{VisivelMenu, setVisivelMenu}
}


export {UseVisivelMenu}