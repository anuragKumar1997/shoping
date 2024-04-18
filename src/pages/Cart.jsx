import React, { useContext } from 'react'
import CartContext from '../context/CartContext'

const Cart = () => {
 
 
  let ctx=useContext(CartContext)
  console.log(ctx.cartItem)
  console.log(ctx)
  const handleDelete =(ans)=>{
    console.log(ans)
ctx.removedFromCart(ans)
  }
  const handleIncrement=(ans)=>{
    console.log(ans)
ctx.incrementQuantity(ans)
  }
 const  handledecrement=(ans)=>{
  console.log(ans)
  ctx.decrementQuantity(ans)
 }
 let arr = [5,20,6,10]

 if(arr.includes(20)){
   console.log("yes")
 }else{
   console.log('no')
 }

 function xyz(ans){
   console.log(ans)
 }

 xyz(9)
 xyz('1bc')
 xyz('abcd')
  return (
    <div>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Sno.</th>
      <th scope="col">products images</th>
      <th scope="col">title</th>
      <th scope="col">price</th>
      <th scope="col">quantity</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
  {ctx.cartItem.map((ele,i)=>{
   return <tr key={ele.id}>
      <th scope="row">{i+1}</th>
      <td><img style={{height:"150px",width:"150px"}} src={ele.thumbnail}  /></td>
      <td>{ele.title}</td>
      <td>{ele.price}</td>
      <td><button onClick={()=>{handleIncrement(ele)}} className='btn btn-success'>+</button>{ele.quantity}<button onClick={()=>{handledecrement(ele)}} className='btn btn-success'>-</button></td>
      <td><button onClick={()=>{handleDelete(ele)}} className='btn btn-danger'>Delete item</button></td>
    </tr>
  })}
    
  </tbody>
</table>

    </div>
  )
}

export default Cart
