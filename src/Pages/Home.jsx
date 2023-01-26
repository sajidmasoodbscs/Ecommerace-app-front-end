import React from 'react'
import Announcements from '../Components/Announcements'
import Navbar from '../Components/Navbar'
import Slider from '../Components/Slider'
import Categories from '../Components/Categories'
import Products from "../Components/Products";
import Newsletter from '../Components/Newsletter'
import Footer from '../Components/Footer'



function Home() {
  return (
    <div>
        <Announcements/>
        <Navbar/>
        <Slider/>
        <Categories />
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home
