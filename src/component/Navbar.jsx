
import { Link , useNavigate}  from 'react-router-dom'
import { ImCart } from "react-icons/im";
import CartContext from '../context/CartContext';
import { useContext } from 'react';
import Authcontext from '../context/Authcontext';

const Navbar = () => {
  let ctx=useContext(CartContext)
  let ctx1 =useContext(Authcontext)

  console.log(ctx.cartItem.length)
    let navigate = useNavigate()
     const handleLogin=()=>{
        console.log("hello")
        navigate('login')
     }
     const handleSingup=()=>{
    
        navigate('Singup')
     }
     const handleInputChange=(e)=>{
      console.log(e.target.value)
      ctx.setNavsearch(e.target.value)
     }
    const handleLogout=()=>{
      localStorage.removeItem('login')
      ctx1.setAuthvalue(false)
      navigate('/login')
    }

  return (
    <div>
     <nav  className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid  " style={{backgroundColor:"plum"}}>
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <form className="d-flex m-auto" role="search">
        <input onChange={handleInputChange} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
      <button onClick={handleLogin} className='btn bg-warning'>Login</button>
      <button onClick={handleLogout} className='btn bg-warning'>Logout</button>
      <button onClick={handleSingup} className='btn bg-primary ms-3'>Singup</button>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link btn bg-danger active me-2" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link btn btn-info " to="/cart"><ImCart size={"30px"}/>{ctx.cartItem.length}</Link>
        </li>
      
     
      
      </ul>
 
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
