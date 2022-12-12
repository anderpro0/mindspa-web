import React from 'react'
import logo from '../assets/logo.png'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {

  const [mobileNav, setMobileNav] = React.useState(false)

  function toggleMobileNav() {
    setMobileNav(prevState => !prevState)
  }

  return (
    <nav className='container flex p-6 max-w-7xl mx-auto items-center relative'>

      {/* logo */}
      <div id="logo" className='mr-auto'>
        <img src={logo} alt="" className='w-[100px]' />
      </div>

      {/* list items */}
      <div className='space-x-12 mr-12 font-semibold hidden md:flex'>
        <a href="#About" className='hover:text-primaryone'>About Us</a>
        <a href="#About" className='hover:text-primaryone'>What we offer</a>
        <a href="#Resource" className='hover:text-primaryone'>Resources</a>
        <a href="Contact" className='hover:text-primaryone'>Contact Us</a>
      </div>

      {/* download app button  */}
      <button className='px-6 bg-primaryone py-2 rounded-3xl text-white hidden lg:flex hover:bg-primarythree'>Download App</button>




      {/* open menu */}
      <button onClick={toggleMobileNav} className='text-3xl md:hidden absolute top-12 right-12 hover:text-primaryone p-2 '>
        <AiOutlineMenu />
      </button>



      {mobileNav &&
        <div className=' shadow-md py-6 px-12 absolute top-6 right-6 rounded-xl md:hidden z-10 bg-white'>

          <button onClick={toggleMobileNav} className='text-3xl hover:text-primaryone absolute top-6 right-6 p-2 '>
            <AiOutlineClose />
          </button>

          {/* mobile menu list */}
          <div className='max-w-sm text-xs sm:text-base mt-10 flex flex-col space-y-6 font-semibold '>
            <a href="#About" className='hover:text-primaryone rounded-xl'>About Us</a>
            <a href="#About" className='hover:text-primaryone rounded-xl'>What we offer</a>
            <a href="#Resource" className='hover:text-primaryone rounded-xl'>Resources</a>
            <a href="Contact" className='hover:text-primaryone  rounded-xl'>Contact Us</a>
          </div>
        </div>
      }

    </nav>
  )
}

export default Navbar