import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>At <b>Forever</b>, we believe that fashion isn’t just about trends—it’s about making a statement, feeling confident, and embracing your unique style. We’re not just another clothing brand; we’re a movement that celebrates self-expression, individuality, and timeless elegance.</p>
          <p>Every stitch, every fabric, and every design we create is meant to <b>empower you</b> —whether you’re dressing up for a bold statement or keeping it effortlessly chic. From classic essentials to trendsetting pieces, our collections are curated with passion, precision, and a touch of modern sophistication.</p>
          <p>We don’t just follow fashion—we define it. Join us in shaping a wardrobe that speaks <b>your story, your confidence, and your forever style.</b></p>
          <p><b className='text-gray-800'>Stay Stylish. Stay Confident. Stay Forever.</b></p>
        </div>
      </div>
      <div className='text-2xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>With out user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About
