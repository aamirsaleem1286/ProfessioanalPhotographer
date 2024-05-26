import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-slate-950 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-[#fc9003] text-xl font-bold">
          <Link href="/">
            <img src="/logo.png" width={92}height={45}/>
            </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#fc9003] focus:outline-none">
            <svg className={`${isOpen ? 'hidden' : 'block'} w-6 h-6`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
            <svg className={`${isOpen ? 'block' : 'hidden'} w-6 h-6`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden md:flex space-x-16">
          <li><Link href="/" className="text-[#fc9003] hover:text-[#f2d5a0]">Home</Link></li>
          <li><Link href="/about" className="text-[#fc9003] hover:text-[#f2d5a0]">About</Link></li>
          <li><Link href="/services" className="text-[#fc9003] hover:text-[#f2d5a0]">Services</Link></li>
          <li><Link href="/booknow" className="text-[#fc9003] hover:text-[#f2d5a0]">Book Now</Link></li>
        </ul>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <ul className="flex flex-col items-center bg-black">
          <li><Link href="/" className="text-[#fc9003] hover:text-[#f2d5a0] block py-2">Home</Link></li>
          <li><Link href="/about" className="text-[#fc9003] hover:text-[#f2d5a0] block py-2">About</Link></li>
          <li><Link href="/services" className="text-[#fc9003] hover:text-[#f2d5a0] block py-2">Services</Link></li>
          <li><Link href="/booknow" className="text-[#fc9003] hover:text-[#f2d5a0] block py-2">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
