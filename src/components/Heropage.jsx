import React from 'react'
import Hero from '../assets/hero.png'
import Phone from '../assets/phone.png'

const Heropage = () => {
  return (

 <section id='hero' className='container max-w-7xl mx-auto mt-8 '>
    <div className='flex flex-col-reverse md:flex-row space-x-12 justify-between p-6'>
        {/* text area */}
        <div className='mx-auto text-center md:text-left max-w-lx md:mt-16 lg:mt-24'>
        <p className='text-primarytwo font-semibold text-3xl lg:text-5xl leading-normal mb-5'>Heal, mend and <br />
        renew your <span className='text-primarythree'>mind</span>.</p>

        <p className='mb-12 max-w-sm'>Mind-Spa NG is a platform that helps you begin or 
        optimize your mental health jpurney through app- based     therapy.
        </p>

        <button className='bg-primarythree px-12 py-2 rounded-3xl text-white font-semibold hover:bg-primaryone'>Download App</button>
        </div>


        {/* image area */}
        <div className='max-w-lg  sm:w-[100%] md:max-w-3xl'>
        <img src={Hero} alt="Hero image"className='w-full' />
        </div>

    </div>


<div className='mt-6 p-6'>
    <p className='text-center text-xl md:text-3xl font-semibold text-primarytwo mb-14 mx-auto md:max-w-sm'>Get access to metal health recources</p>
    <div className='flex flex-col md:flex-row lg:space-x-12'>
        <img src={Phone} alt="" className='w-[100%] md:w-[50%] lg:max-w-3xl'/>
        <p className='mt-0 mx-auto md:mx-0 text-center md:text-left md:mt-40 md:text-xl leading-10 text-base sm:max-w-sm'>
        Mind Spa helps people with anxiety, depression and other mental health 
        issues find the resources they need to get better.

        <hr className='border-2  border-primaryone  w-14 rounded mt-3 mx-auto md:mx-0'/>
        </p>
    </div>
</div>

 </section>
  )
}

export default Heropage