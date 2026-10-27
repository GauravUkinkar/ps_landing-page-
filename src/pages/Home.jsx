import React from 'react'
import Hero from '../componant/Hero/Hero'
import Services from '../componant/services/Services'
import Strategy from '../componant/strategy/Strategy'
import Process from '../componant/Process/Process'
import Testimonial from '../componant/testimonial/Testimonial'
import Hook from '../componant/Hook/Hook'
import Casestudy from '../componant/CaseStudy/Casestudy'
import Contact from '../componant/contact/Contact'

const Home = () => {
  return (
    <>
      <Hero />
      <Hook />
      <Services />
      <Strategy />
      <Casestudy />
      <Contact />
      {/* <Process /> */}
      <Testimonial />
      
    </>
  )
}

export default Home
