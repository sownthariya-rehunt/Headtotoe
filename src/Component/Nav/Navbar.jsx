import React from 'react'
import "./Nav.css"
import logo from "../images/logo-1.png"


const Navbar = () => {
  return (
  
     
    <div className='p-0  '>
      <nav class="navbar navbar-expand-lg navbar-light bg-transprant p-0 indexnav">
  <div class="container-fluid bgnav">
    <a class="navbar-brand" href="#"><img src={logo} width={75}/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link " aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Condition we treat</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Our Packages
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Women Health Rehab</a></li>
            <li><a class="dropdown-item" href="#">Pelvic Floor Rehab</a></li>
            <li><a class="dropdown-item" href="#">Postural Correction </a></li>
            <li><a class="dropdown-item" href="#">HeadAche Management</a></li>
            <li><a class="dropdown-item" href="#">TMJ Management</a></li>
            <li><a class="dropdown-item" href="#">Post-Surgical Rehab</a></li>
            <li><a class="dropdown-item" href="#">Sport Rehab</a></li>
          </ul>
        </li>

        <li class="nav-item">
          <a class="nav-link" href="#">Therapy</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Our Technology</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Gallery</a>
        </li>
        

        <li class="nav-item ms-5 ">
          <button className='btn'> Book Appoinment</button>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

    </div>
    
       
      
 
  )
}

export default Navbar
