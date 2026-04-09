import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div style={{display:"flex"}}>
        <Link to="/signin">
          <button>sign in</button>
        </Link>


         <Link to="/signup">
          <button>sign up</button>
        </Link>
      
    </div>
  )
}
