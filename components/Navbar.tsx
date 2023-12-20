"use client"

import Link from 'next/link'
import React from 'react'
import { useEffect } from "react";

const Navbar = () => {

    
const user = true
useEffect(() => {
  require("bootstrap/dist/js/bootstrap.bundle.min.js");
}, []);
  return (
    <nav className="navbar navbar-expand-lg  bg-black py-3">
    <div className="container-fluid d-flex align-items-end">
      <Link className="navbar-brand text-white fs-2 " href="/">
        Turkel's E-Commerce
      </Link>
      <button
        className="navbar-toggler bg-white"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>     
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav d-flex justify-content-end gap-4 w-100 px-5">
            
            {!user?(<Link className="nav-link text-white fs-4" aria-current="page" href="/my-box">
            Login 
          </Link> ):
          ( <>
          <Link className="nav-link text-white fs-4" aria-current="page" href="/my-box">
          My Box 
        </Link> 
        <Link className="nav-link text-white fs-4" href="/my-purchases">
          My Purchases 
        </Link>
        <Link className="nav-link text-white fs-4" href="/my-purchases">
         Logout
        </Link>
        </>)}
            
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar