import React from 'react'
import NavLanding from '../../Dashboard/Components/Nav/nav/Nav'
import Carrousel from '../../Landing/ComponentsLanding/Carrousel/carrousel'
import Footer from '../../Landing/Footer/Footer'
import HBlog from '../../Landing/ComponentsLanding/HeaderBlog/HBlog'
import BlogCard from '../../Landing/BlogCard/BlogCard'
import BlockDev from '../../Landing/ComponentsLanding/Block/BlockDev'
import Section from '../../Landing/Section/Section'
import Faq from '../../Landing/FAQ/Faq'

export default function Home() {
  return (
    <div className=' text-black dark:text-white '>
        <NavLanding />
        <Carrousel />
        <HBlog />
        <BlogCard />
        <BlockDev />
        <Section />
        <Faq />
        {/* <Footer /> */}
    </div>
  )
}
