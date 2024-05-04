import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Collection from '../components/Collection'
import Features from '../components/Features'
import PopularProducts from '../components/PopularProducts'
import Testimonial from '../components/Testimonial'

function Home() {
  return (
    <>
        <Hero/>
        <Features />
        <Collection />
        <PopularProducts />
        <Testimonial />
    </>
  )
}

export default Home