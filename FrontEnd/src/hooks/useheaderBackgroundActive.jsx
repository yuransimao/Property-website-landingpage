import {useState, useEffect} from 'react'


function UseheaderBackgroundActive(){
    const [BackgroundActive, setBackgroundActive] = useState(false)

    useEffect(() => {
        

        window.addEventListener("scroll", function(){
            this.scrollY > 652 ? setBackgroundActive(true) : setBackgroundActive(false)
        })
    },[])

    return {BackgroundActive, setBackgroundActive}

}

export { UseheaderBackgroundActive} 