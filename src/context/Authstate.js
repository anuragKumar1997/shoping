import React, { useEffect, useState } from 'react'
import Authcontext from './Authcontext'
const Authstate = (props) => {
    const [Authvalue, setAuthvalue] = useState(false);
    console.log(Authvalue)
    useEffect(()=>{
        let user =JSON.parse(localStorage.getItem("login"))
        console.log(user)
        if(user===true){
            setAuthvalue(true)
        }else{
            setAuthvalue(false)
        }
    },[Authvalue])
  return (
    <Authcontext.Provider value={{setAuthvalue,Authvalue}}>
      {props.children}
    </Authcontext.Provider>
  )
}

export default Authstate
