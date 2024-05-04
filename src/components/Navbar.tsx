import React from 'react'
import Container from './Container'

function Navbar() {
  return (
    <header className='z-30 w-full'>
    <Container>
        <div className='flex h-16 items-center justify-between text-black'>
            <div className='font-bold'> Homify </div>
            <div className='hidden md:block'>
                <ul className='flex gap-5'>
                    <li>Home</li>
                    <li>Products</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div>cart</div>
        </div>
    </Container>
    </header>
  )
}

export default Navbar