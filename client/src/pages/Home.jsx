import React from 'react'
import Hero from '../components/Hero'
import FeaturedDestination from '../components/FeaturedDestination'
import ExclusiveOffers from '../components/ExclusiveOffers'
import Testinomial from '../components/Testinomial'
import NewsLetter from '../components/NewsLetter'
import RecommendedHotels from '../components/RecommendedHotels'

const Home = () => {
  return (
    <>
      <Hero/>
      <RecommendedHotels/>
      <FeaturedDestination/>
      <ExclusiveOffers/>
      <Testinomial />
      <NewsLetter/>
    </>
  )
}

export default Home
