import React, { useState } from 'react'
import  CartContext from './CartContext'

const CartState = (props) => {
  const [Navsearch, setNavsearch] = useState("");
    const [cartItem, setcartItem] = useState([]);
    const addtoCart=(ans)=>{
        console.log(ans)
        setcartItem([...cartItem,ans])
        console.log(cartItem)

    }
    const removedFromCart=(ans)=>{
      console.log(ans)
      let filteredArr =cartItem.filter((ele)=>ele.id!==ans.id)
      console.log(cartItem)
      setcartItem(filteredArr)
      console.log(filteredArr)
        
    }
    const incrementQuantity=(ans)=>{
    console.log(ans)
    let updateobj={
      ...ans,
      quantity: ans.quantity+1,
      price:ans.price +ans.price /ans.quantity
    }
    console.log(updateobj)
    let Index=cartItem.findIndex((ele) => ele.id === ans.id);
   console.log(Index)
   let copyArr=[...cartItem]
   copyArr[Index]=updateobj
   setcartItem(copyArr)
    }
    const decrementQuantity=(ans)=>{
      console.log(ans)  
      let deleteobj={
      ...ans,
      quantity: ans.quantity-1,
      price:ans.price -ans.price /ans.quantity
    }
    console.log(deleteobj)
    let Index=cartItem.findIndex((ele) => ele.id === ans.id);
   console.log(Index)
   let copyArr=[...cartItem]
   copyArr[Index]=deleteobj
   setcartItem(copyArr)
      }
  return (
    <CartContext.Provider value={{cartItem,removedFromCart, decrementQuantity,incrementQuantity,addtoCart,setNavsearch,Navsearch}}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartState
