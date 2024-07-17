import React from 'react';
import { Navigate } from 'react-router-dom';
import Cards from './Cards';
import Testimonial from './Testimonials';
import TestimonialImage  from "../Assets/Testimonial1.jpg";
import TestimonialImage2  from "../Assets/Testimonial2.jpg";
import TestimonialImage3  from "../Assets/man.jpg";
import Footer from './Footer';
const Home = () => {

  const handleGetStarted=()=>{
    Navigate('/signup')
  }
  return (
    <>
    <div className='items-center mt-44 text-center px-4'>
      <h1 className='font-medium text-6xl leading-relaxed'>Build your best ideas together, in DocuVerse</h1>
      <h3 className='text-xl text-gray-500 font-normal mt-3'>Create and collaborate on online documents in real-time and from any device</h3>
      
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg mt-6' onClick={handleGetStarted}>
        Get Started
      </button>

      <div className='flex flex-col items-center mt-12'>
        <span className='text-gray-500'>Scroll down to see more</span>
        <svg className='w-6 h-6 mt-2 animate-bounce' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'></path>
        </svg>
      </div>
    </div>
    <Cards/>
    <h1 className='text-center text-5xl font-medium mt-72'>Testimonials</h1>
    <div className='flex flex-row container items-center justify-center gap-14 mt-20'>
    <Testimonial
          title="— Sarah L., Freelance Writer"
          description="Notevault has completely transformed the way I take and manage notes. The user-friendly interface makes it incredibly easy to jot down ideas quickly, and the rich text formatting options allow me to organize my thoughts just the way I like. I love that my notes are secure and accessible from anywhere. This app is a game-changer for productivity!"
          rating={4}
          image={TestimonialImage}/>
        
          <Testimonial 
          title="— Alex P., University Student"
          description="As a college student, I need a reliable and efficient note-taking app, and Notevault has been the perfect solution. The ability to categorize and search my notes has made studying so much easier. Plus, the security features give me peace of mind knowing my notes are always safe. Highly recommend it to anyone looking for a top-notch note-taking app!"
          rating={4}
          image={TestimonialImage2}/>
         
          <Testimonial 
          title="— Emily K., Entrepreneur"
          description="Since I started using Notevault, my productivity has skyrocketed. The app's sleek design and straightforward functionality make it a pleasure to use. I can quickly capture ideas and tasks, and the secure storage ensures that my information is always protected. Highly recommend it to anyone looking for a top-notch note-taking app. Notevault is the best note-taking app!"
          rating={4}
          image={TestimonialImage3}/>
          </div>

          <Footer/>
    </>
  );
}

export default Home;
