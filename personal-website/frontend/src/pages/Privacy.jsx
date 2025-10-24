import BookCall from '@/components/BookCall'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const Privacy = () => {
  return (
    <div>
      <Navbar />
      <div className='mt-12 sm:mt-16 md:mt-20 lg:mt-24'>
        <BookCall />
      </div>
      <Footer />
    </div>
  )
}

export default Privacy
