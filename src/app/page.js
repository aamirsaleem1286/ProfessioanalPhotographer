"use client"

import { FaWhatsapp } from 'react-icons/fa';
import Testimonials from '@/components/Testimonials'; 
import Portfolio from '@/components/Portfolio'; 
import ImageCart from '@/components/ImageCart';
import { useState } from 'react';
import Pricing from '@/components/Pricing';
import Navbar from '@/components/Navbar';
import Statistics from '@/components/Statistics';
import ClientPage from '@/components/Client';

export default function Home() {

  const [loading, setLoading] = useState(true);

  const timeLoading = () => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }

  timeLoading(); 

  return (
    <>
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
          <p className="loading-text">Loading...</p>
        </div>
      ) : (
        <div className="relative bg-cover bg-center h-min-screen bg-black" 
          // style={{ backgroundImage: "url('/pexels-shukran-1534411.jpg')" }}
        >
        <Navbar/>
          <ImageCart/>
          <Portfolio/>
          <Statistics/>
          <ClientPage/>
          <Pricing/>
          <Testimonials />
          

<a href="https://wa.me/+923242846072" target="_blank" rel="noopener noreferrer" className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center">
  <FaWhatsapp className="h-6 w-6 mr-2" />
  WhatsApp
</a>

        </div>
      )}
    </>
  );
}
