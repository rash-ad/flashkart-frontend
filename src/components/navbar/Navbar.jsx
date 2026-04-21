import React, { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaSearch, FaHeart } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { GiOpenFolder } from "react-icons/gi";
import { IoIosFlash } from "react-icons/io";
import { HiMenu, HiX } from "react-icons/hi";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <span className="logo-icon">
          <IoIosFlash />
        </span>
        <h2>FlashKart</h2>
      </div>

      {/* Search */}
      <div className="navbar-search">
        <input type="text" placeholder="Search for products..." />
        <button>
          <FaSearch />
        </button>
      </div>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <HiX /> : <HiMenu />}
      </div>

      {/* Menu */}
      <div className={`navbar-menu ${menuOpen ? "active" : ""}`}>
        <div className="menu-item">
          <GiOpenFolder />
          <span>Categories</span>
        </div>

        <div className="menu-item">
          <FaHeart />
          <span>Wishlist</span>
        </div>

        <div className="menu-item">
          <MdOutlineShoppingCart />
          <span>Cart (3)</span>
        </div>

        <div className="menu-item">
          <VscAccount />
          <span>Login</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;