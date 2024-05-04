import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Collection from '../components/Collection'
import Features from '../components/Features'

function Home() {
  return (
    <>
        <Navbar />
        <Hero/>
        <Collection />
        <Features />
    </>
  )
}

export default Home