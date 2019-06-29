import React from 'react'
import { Link } from 'gatsby'
import style from './layout.module.scss'

//This Component plug the menu and footer to all pages that need it
const Layout = {'menu': () => (
                <nav className = {style.menu}>
                  <Link to = "/">Home</Link>
      
                  <Link to = "/about/">About</Link>
      
                  <Link to = "/contribute/">Contribute</Link>
              </nav>),
              'footer': () => (
                <footer className = {style.footer}>
                  <p>&copy; 2018</p> 
                </footer>)}

export default Layout
