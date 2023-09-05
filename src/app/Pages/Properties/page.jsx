import Hero from '@/app/componentTwo/Herosection/page';
import Navbar from '@/app/componentTwo/NavBar/page';
import NavTwo from '@/app/componentTwo/NavBarTwo/page';
import Page2Footer from '@/app/componentTwo/SecondPageFooter/page';
import Section1Page1 from '@/app/componentTwo/SecondPageSection1/page';
import Section2Page2 from '@/app/componentTwo/SecondPageSection2/page';
import Section3Page3 from '@/app/componentTwo/SecondPageSection3/page';
import React from 'react'

const PropertiesPage = () => {
  return (
    <>
    <Navbar />
    <NavTwo />
    <Hero />
    <Section1Page1 />
    <Section2Page2 />
    <Section3Page3 />
    <Page2Footer />
    </>
  )
}

export default PropertiesPage;
