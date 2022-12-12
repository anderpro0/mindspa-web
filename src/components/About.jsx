import React from 'react'
import Star from '../assets/star.png'
import Eye from '../assets/eye.png'
import Round from '../assets/round.png'

const About = () => {
    return (
        <section className='container max-w-7xl mx-auto mt-8 p-6'>
            <div className='flex flex-col items-center leading-loose'>

                <div> 
                    <p className='text-primarytwo text-center text-3xl font-bold mb-6'>About Us</p>
                    <p className='max-w-4xl text-center'>Mind-Spa is a platform for the rejuvenation of t
                        he mind hence our motto, Heal, Mend, Renew.
                        It addresses some of the major mental illnesses such as severe anxiety, depression,
                        schizo-affective disorders, a
                        nd re-occurring symptoms associated with a number of mental health challenges
                        prevalent in West-African communities.
                    </p>
                </div>


                <div className='flex flex-col md:flex-row mt-20 p-6 space-x-0 md:space-x-8 space-y-6 md:space-y-0'>

                    <div className='max-w-xs  md:max-w-sm bg-white p-6 rounded-3xl space-y-2'>
                        <img src={Star} alt="Star" className='mx-auto w-16' />
                        <p className='text-center text-lg font-semibold text-primarytwo'> Mission Statement</p>
                        <p className='max-w-[250px] text-center'>To become the number one provider of easily accessible mental health services in West Africa.</p>
                    </div>

                    <div className='max-w-xs md:max-w-sm bg-white p-6 rounded-3xl space-y-2'>
                        <img src={Eye} alt="" className=' mx-auto w-16' />
                        <p className='text-center text-lg font-semibold text-primarytwo'> Vision Statement</p>
                        <p className='max-w-[250px] text-center'>To create awareness, provide access  to wellness, and chart a pathway for mental wellbeing.</p>
                    </div>

                    <div className='max-w-xs  md:max-w-sm bg-white p-6 rounded-3xl space-y-2'>
                        <img src={Round} alt="" className='mx-auto w-16' />
                        <p className='text-center text-lg font-semibold text-primarytwo'> Goals Statement</p>
                        <p className='max-w-[250px] text-center'>We are creating an avenue to provide access to holistic health and promote mental wellbeing.</p>
                    </div>

                </div>
            </div>
        </section>
    )
} 

export default About