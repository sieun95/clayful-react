import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
// import cart from "../images/icons/cart.png"
import logo from "../images/icons/logo.png"
import cart from "../images/icons/cart.png"
import "./Header.css"


function Header() {
  return (
    <div className='nav-wrapper fixed-top navbar navbar-toggleable-sm navbar-expand-md'>
        <div className='container'>
            <Navbar className='w-100' collapseOnSelect expand='lg' variant='dark'>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Brand href='/'>
                    <img src={logo} alt=''/>
                </Navbar.Brand>
                <Navbar.Collapse id='reponsive-navbar-nav'>
                    <Nav className='nav-justified w-100 nav-fill'>
                        <Nav.Link href='/'>iphone</Nav.Link>
                        <Nav.Link href='/Login'>Login</Nav.Link>
                        <Nav.Link href='/user/cart'>
                            <img src={cart} alt=''/>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </div>
        
    </div>
  )
}

export default Header