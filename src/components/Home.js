import React from 'react'
import HomeDetails from './homeComponents/HomeDetails';
import Banner from './homeComponents/Banner';
import ElevateToTheNextLevel from './homeComponents/ElevateToTheNextLevel';
import PrestigiousHome from './homeComponents/PrestigiousHome';
import AboutPortrait from './homeComponents/AboutPortrait';
import SatisfiedHomeowners from './homeComponents/SatisfiedHomeowners';
import FAQs from './homeComponents/FAQs';
import Footer from './homeComponents/Footer';

const Home = () => {
  return (
    <div>
      <div 
        className="background-image h-[90vh] sm:h-[100vh] md:h-[110vh] lg:h-[120vh] xl:h-[136vh] relative flex flex-col justify-end"
      >
        <div className="absolute bottom-[20%] sm:bottom-[22%] md:bottom-[23%] left-[5%] sm:left-[7%] md:left-[10.5%]">
          <h2 className="text-[20px] sm:text-[24px] md:text-[26px] font-bold uppercase text-white">
            Elegant Dwelling Makeover
          </h2>
          <h1 className="text-[36px] sm:text-[46px] md:text-[56px] lg:text-[64px] w-full font-bold uppercase text-white">
            Artistry in Renovation <br />
            Making your Vision a Reality
          </h1>
        </div>

        <div className="home-bottom-component">
          <div className="w-[90vw] flex flex-col sm:flex-row items-center justify-evenly text-center sm:text-left">
            <div className="flex items-center mb-4 sm:mb-0">
              <img src='./person-icon.png' alt='' className="mr-2.5"/>
              <div>
                <p>Build by</p>
                <p>Terry Deskin</p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-full bg-white"></div>

            <div className="flex items-center mb-4 sm:mb-0">
              <img src='./call-calling.png' alt='' className="mr-2.5"/>
              <div>
                <p>Call us</p>
                <p>(123) 456-7890</p>
              </div>
            </div>

            <div className="hidden sm:block w-px h-full bg-white"></div>

            <div className="flex items-center">
              <img src='./home-hashtag.png' alt='' className="mr-2.5"/>
              <div>
                <p>Project</p>
                <p>#YourDreamHome</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 w-full flex justify-center">
        <div className="w-[90%] md:w-[80%] text-center">
          <h1 className="text-[32px] sm:text-[40px] md:text-[46px] font-bold">Services</h1>
          <p className="font-medium text-[16px] sm:text-[18px]">
            Our goal here at Portrait Renovations, Inc is to look after our customer in all aspects of the project. To provide the best quality in servicing our customers with workmanship, material quality, seasoned installers, and deadlines to keep projects on schedule.
          </p>
          <p className="mt-2 font-medium text-[16px] sm:text-[18px]">
            We also provide a schedule from start to finish with all scope of work. This is crucial in keeping the project moving without delay. It also helps with making sure all materials needed are onsite ahead of the installer.
          </p>
        </div>
      </div>

      <HomeDetails/>
      <Banner/>
      <ElevateToTheNextLevel/>
      <PrestigiousHome/>
      <AboutPortrait/>
      <SatisfiedHomeowners/>
      <FAQs/>
      <Footer/>
    </div>
  )
}

export default Home;
