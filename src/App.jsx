import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Programs from './components/Programs'
import Courses from './components/Courses'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className='w-full overflow-hidden'>
     
      <Header />
      <About />
      <Courses />

      <Programs />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App