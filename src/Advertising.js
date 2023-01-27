import React from 'react'
import NavBar from './Navbar-2'
import './Advertising.css'
import Footer from './Footer';

function Advertising() {
  return (
    <>
      <div className='main-layout'>
        <NavBar />
        <main className='mt-20'>
          <img src="https://images.pexels.com/photos/694740/pexels-photo-694740.jpeg?auto=compress&cs=tinysrgb&" class="max-w-full h-auto" alt="..." />
          <section className='advert-home md:ml-24 lg:ml-24'>
            <h1 className='text-2xl md:text-4xl lg:text-8xl my-8 '>Advertising Trends <br /> 2022/2023</h1>
            <p>Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world a better place, and we recognize the sacrifices you have made to ensure your community has been positively impacted by the goals you have committed yourself to accomplish.We appreciate you! We support you! We cheer you on!</p>
            <p>Kiri Marketing Consultants is a digital marketing and PR agency based in Kenya that supports mission driven companies, social enterprises and nonprofit organizations. We are passionate about supporting our clients changing the world and bringing about positive impact hence our tagline, enhancing brands, enhancing lives.</p>
            <p>Our team is result oriented and dedicated to helping you meet your organizational goals through creative, innovative and authentic digital marketing, branding and PR strategies.</p>
            <p>Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world a better place, and we recognize the sacrifices you have made to ensure your community has been positively impacted by the goals you have committed yourself to accomplish.We appreciate you! We support you! We cheer you on!</p>
            <p>Kiri Marketing Consultants is a digital marketing and PR agency based in Kenya that supports mission driven companies, social enterprises and nonprofit organizations. We are passionate about supporting our clients changing the world and bringing about positive impact hence our tagline, enhancing brands, enhancing lives.</p>
            <p>Our team is result oriented and dedicated to helping you meet your organizational goals through creative, innovative and authentic digital marketing, branding and PR strategies.</p>

            <h1 className='text-2xl md:text-4xl mt-8'>What's Outdated?</h1>
            <p>Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world a better place, and we recognize the sacrifices you have made to ensure your community has been positively impacted by the goals you have committed yourself to accomplish.We appreciate you! We support you! We cheer you on!</p>
          </section>

          <section class="my-12 md:ml-24 lg:ml-24">
            <h1 className='text-2xl md:text-6xl my-8'>More Articles</h1>
            <div className='grid px-4 gap-8 -ml-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
              <div class="max-w-sm p-6 bg-white border border-gray-200 border dark:bg-gray-800 dark:border-gray-700">
                <img src="https://images.pexels.com/photos/2099691/pexels-photo-2099691.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href=" " class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-red-400 border border-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                </a>
              </div>
              <div class="max-w-sm p-6 bg-white border border-gray-200 border dark:bg-gray-800 dark:border-gray-700">
                <img src="https://images.pexels.com/photos/2099691/pexels-photo-2099691.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href=" " class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-red-400 border border-red-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>

  )
}

export default Advertising;


