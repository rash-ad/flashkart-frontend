import './App.css'
import Navbar from "./components/navbar/Navbar";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaSearch, FaHeart } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { GiOpenFolder } from "react-icons/gi";
import { IoIosFlash } from "react-icons/io";
import { HiMenu, HiX } from "react-icons/hi";
import Cart from "./components/navbar/cart/Cart";
import Hero from "./components/hero/Hero";
import CategoryCards from "./components/category/CategoryCards";
function App() {
  return (
  
    <div className="App">
      <Navbar />

  <Hero/>
  <CategoryCards/>
      
      
    </div>
   
  )
}

export default App;