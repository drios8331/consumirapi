import React from 'react'

function Navbar({texto}) {
  return (
    <>
        <nav className='navbar navbar-dark bg-dark'>
            <div className="container">
                <a href='/' className='navbar-brand text-uppercase'>{texto}</a>
            </div>
        </nav>
    </>
  )
}

export default Navbar
