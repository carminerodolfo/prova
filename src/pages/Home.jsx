import React from 'react'
import HeroSection from '../components/HeroSection';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Projects from '../components/Projects';
import About from '../sections/About';

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home