import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Collection from '../components/Collection'
import Features from '../components/Features'
import PopularProducts from '../components/PopularProducts'

function Home() {
  return (
    <>
        <Navbar />
        <Hero/>
        <Collection />
        <Features />
        <PopularProducts />
    </>
  )
}

export default Home