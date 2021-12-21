import React from 'react'
import Header from '../Components/Header'
import SliderBanner from '../Components/SliderBanner'
import Product from '../Components/Product'
import SliderBottom from '../Components/SliderBottom'
import Footer from '../Components/Footer'
import '../css/Home.css'

function Home() {
    return (
        <>
            <Header/>
            <SliderBanner/>
            <Product/>
            <SliderBottom/>
            <Footer/>
        </>
    )
}

export default Home
