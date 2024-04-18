
import './App.css';
import { BrowserRouter ,Routes,Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Singup from './pages/Singup';
import Navbar from './component/Navbar';
import { useContext } from 'react';
import Authcontext from './context/Authcontext';

function App() {
  let ctx=useContext(Authcontext)
  console.log(ctx.Authcontext)
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
      <Routes>
       {ctx.Authvalue&& <Route path='/'  element={<Home/>}/>}
       {!ctx.Authvalue&& <Route path='/'  element={<Navigate to={'/login'}/>}/>}
        <Route path='/cart'  element={<Cart/>}/>
       {!ctx.Authvalue&&  <Route path='/login'  element={<Login/>}/>}
       {ctx.Authvalue&&  <Route path='/login'  element={<Navigate to={'/'}/>}/>}
        <Route path='/singup'  element={<Singup/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
