import React from 'react'
import frame from '../assets/iconone.png'
import person from '../assets/icontwo.png'
import connect from '../assets/iconthree.png'
import girlOne from '../assets/personone.png'
import girlTwo from '../assets/persontwo.png'
import books from '../assets/bookshelf.png'

const What = () => {
  return (
    <section className='container flex p-6 max-w-7xl mx-aut'>

      <div>
        <p>What we offer</p>

        <div>

        <div>
          <img src={connect} alt="" />
          <p>Learn about mental illness, including signs and symptoms.</p>
        </div>

        <div>
          <img src={person} alt="" />
          <p>Receive supportive counseling about daily life and strategies for stress management</p>
        </div>

        <div>
          <img src={frame} alt="" />
          <p>Have interavtive sessions with our Mind-bot that provides resources to deal with various mental health challenges</p>
        </div>

        </div>

        <p>Information at your fingertips</p>
        <p>Taking this first step may feel daunting and overwhelming but we’ll be with you every step of the way.</p>

        <div>
      <div>
        <img src={girlOne} alt="" />
      </div>

      <div>
        <img src={books} alt="" />
      </div>

      <div>
        <img src={girlTwo} alt="" />
      </div>

        </div>

      </div>

    </section>
  )
}

export default What