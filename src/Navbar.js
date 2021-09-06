import React,{useState} from 'react'
import { NavLink} from "react-router-dom";
import LogIn from './modals/LogIn'
import SignUp from './modals/SignUp'

const Navbar = () => {
    const [show, setShow] = useState(false)
    
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <NavLink class="navbar-brand " to="/">TechCoders</NavLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" onClick={()=>setShow(!show)}></span>
    </button>
    <div className={`collapse navbar-collapse ${show?'show':''}`} >
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <NavLink class="nav-link " aria-current="page" to="/">Home</NavLink>
        </li>
        <li class="nav-item">
          <NavLink class="nav-link" to="/about">About</NavLink>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Topics
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Development</a></li>
            <li><a class="dropdown-item" href="#">Services</a></li>
            <li><hr class="dropdown-divider"/>Other</li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        
        <li class="nav-item">
          <NavLink class="nav-link " aria-current="page" to="/contact">Contact Us</NavLink>
        </li>
      </ul>
      <div class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success me-2 ms-2" >Search</button>
        <NavLink class="btn btn-outline-danger text-white me-2" type="Login" to='/login' >Login</NavLink>
        <NavLink class="btn btn-outline-danger text-white" to='/signup' type="Signup" to='/signup' onClick={SignUp }>Signup</NavLink>
      </div>
    </div>
  </div>
</nav>

        </>
    )
}

export default Navbar
