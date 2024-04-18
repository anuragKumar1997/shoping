import  axios  from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'
import CartContext from '../context/CartContext';
import { Link } from 'react-router-dom';
import { VscGlobe } from 'react-icons/vsc';

const Home = () => {
 const [searchItem, setsearchItem] = useState([]);
 const [currentpage, setcurrentpage] = useState(1);
 const [items, setitems] = useState([]);
let recordsperpages=15;
let lastIndex =currentpage*recordsperpages;
let firstIndex =lastIndex-recordsperpages;

let noofpages= Math.ceil(items.length/recordsperpages)
let buttonArray=[...Array(noofpages+1).keys()].slice(1)

let ctx=useContext(CartContext)
console.log(ctx)
console.log(ctx.Navsearch)

let filteredItem = searchItem.filter((ele)=>ele.title.toLowerCase().includes(ctx.Navsearch))
let sliceItem = filteredItem.slice(firstIndex,lastIndex)
// console.log(sliceItem)
console.log(filteredItem)
const [categories, setcategories] = useState(["All","smartphones","laptops","fragrances","skincare","groceries","home-decoration","furniture","tops","womens-dresses","womens-shoes","mens-shirts","mens-shoes","mens-watches","womens-watches","womens-bags","womens-jewellery","sunglasses","automotive","motorcycle","lighting"]);
    async function fetchData(){
        let res =await axios.get('https://dummyjson.com/products?posts?skip=0&limit=100')
        // console.log(res.data.products)
        setitems(res.data.products)
        setsearchItem(res.data.products)
        
    }
    console.log(items)
    useEffect(()=>{
        fetchData()
    },[])
    const handleAddtoCart=(ans)=>{
console.log(ans)
let obj={
  ...ans,
  quantity:1
}
console.log(obj)
ctx.addtoCart(obj)
    }
    const handleClick=(ans)=>{
      console.log(ans)
      if(ans!=='All'){
      let filteredProducts =items.filter((ele)=>ele.category.toLowerCase()== ans)
      console.log(filteredProducts)
      setsearchItem(filteredProducts)
    }
    else{
        setsearchItem(items)
      }
    }
    const handlePrev =()=>{
      if(currentpage>1){
        setcurrentpage(currentpage-1)

      }
    }
    const handleNext =()=>{
      if(currentpage<noofpages){
        setcurrentpage(currentpage+1)

      }
    }
  return (
    <div className='container-fluid  d-flex gap-2'>
    <div className='col-2 bg-warning p-2 category'>
    <h3 className='text-center '>categories</h3>
    <ul class="list-group ">
    {categories.map((ele)=>{
      return <li onClick={()=>handleClick(ele)} class="list-group-item Li">{ele}</li>    
    })
   

    }
 

</ul>

</div>
    <div className='col-10 bg-info'>
    <div className='row row-cols-3 d-flex justify-content-center'>
{sliceItem.map((ele)=>{
    return <div key={ele.id} className="card m-2" style={{width: '18rem',borderRadius:"25px",borderColor:"darkolivegreen",borderWidth:"5px"}}>
  <img style={{height:"200px",borderRadius:"20px"}} src={ele.thumbnail} className="card-img-top" />
  <div className="card-body">
    <h5 className="card-title text-truncate">{ele.title}</h5>
    <p className="card-text">PRICE:{ele.price}</p>
    {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
    <Link to="/" onClick={()=>handleAddtoCart(ele)} className="btn " style={{borderRadius:"20px",backgroundColor:"lightgreen"}}>Add to cart</Link>
  </div>
</div>


})}
    </div>
<div className='d-flex justify-content-center'>
<nav aria-label="Page navigation example  ">
  <ul class="pagination  ">
    <li onClick={handlePrev} class="page-item"><a class="page-link" href="#">Previous</a></li>
  {buttonArray.map((ele)=>{
 return<li onClick={()=>setcurrentpage(ele)} class="page-item"><a class="page-link" href="#">{ele}</a></li>
  }) }

    <li onClick={handleNext} class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
</div>
    </div>

    </div>

  )
}

export default Home
