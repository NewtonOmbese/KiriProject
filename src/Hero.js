import React from 'react'
import NavBarr from './Navbarr'
import image4 from './media/image 4.svg';
import image5 from './media/image 5.svg';
import image7 from './media/image 7.svg';
import image8 from './media/image 8.svg';
import image9 from './media/image 9.svg';
import image11 from './media/image 11.svg';
import person from './media/person.png';
import network from './media/network.png';
import eye from './media/eye.png';
import plane from './media/aeroplane.png';
import profile1 from './media/Profile1.png';
import profile2 from './media/Profile2.png';
import profile3 from './media/Profile3.png';
import profile4 from './media/Profile4.png';
import articleImage1 from "./media/articleImage1.png";
import articleImage2 from "./media/articleImage2.png";
import Footer from './Footer';
import "./Hero.css";
import { useState } from 'react';
// import toast from "react-hot-toast";

function Hero() {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [number,setNumber]=useState(0);
    const [text,setText]=useState('');
    const [sendButton,setSendButton]=useState(<button>Send Message</button>);
    //send email
    const sendMail=async(e)=>{
        const form=document.querySelector('form');
        e.preventDefault();
        try {
            setSendButton(<><button><i>Sending...</i></button></>);
            const url='https://kiri-api.onrender.com/api/send';
            const response=await fetch(url,{
                method:'POST',
                body:JSON.stringify({
                    name,
                    email,
                    phone:number,
                    message:text
                }),
                headers:{
                    'content-type':'application/json'
                }
            })
            form.reset();
            const parseRes=await response.json();
            console.log(parseRes);
            setSendButton(<button>Sending message</button>);
        } catch (error) {
            form.reset();
            setSendButton(<button>Send Message</button>);
            // toast.success('Email sent successfully');
            console.log(error.message);
        }
    }
    const showPublic=()=>{
        document.querySelector('.public-h3').style.display="none";
        document.querySelector('.public').style.display="block";
        dontShowBrand();
        dontShowDigital();
        dontShowTraining();
    }
   const showBrand=()=>{
    document.querySelector('.brand-h3').style.display="none";
    document.querySelector('.bran').style.display="block";
    dontShowDigital();
    dontShowTraining();
    dontShowPublic();
   }
   const showDigital=()=>{
    document.querySelector('.digital-h3').style.display="none";
    document.querySelector('.digital').style.display="block";
    dontShowPublic();
    dontShowBrand();
    dontShowTraining();
   }
   const showTraining=()=>{
    document.querySelector('.training-h3').style.display="none";
    document.querySelector('.training').style.display="block";
    dontShowBrand();
    dontShowPublic();
    dontShowDigital();
   }
   const dontShowPublic=()=>{
    document.querySelector('.public-h3').style.display="block";
    document.querySelector('.public').style.display="none"
   }
   const dontShowBrand=()=>{
    document.querySelector('.brand-h3').style.display="block";
    document.querySelector('.bran').style.display="none"
   }
   const dontShowDigital=()=>{
    document.querySelector('.digital-h3').style.display="block";
    document.querySelector('.digital').style.display="none"
   }
   const dontShowTraining=()=>{
    document.querySelector('.training-h3').style.display="block";
    document.querySelector('.training').style.display="none"
   }
  return (
    <>
        <div className="hero-main">
            <NavBarr />
            <main className='mt-0 md:mt-3 lg:mt-3 xl:mt-3'>
                <div className='hero-image'>
                    <section class="">
                        <div class="grid max-w-screen-xl px-4 py-8 mx-auto sm:mt-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                            <div class="mr-auto place-self-center lg:col-span-7 content">
                                <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl xl:text-6xl">Enhancing Brands, Enhancing Lives</h1>
                                <p class="max-w-2xl text-4xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl ">We focus on deep customer insights to provide growth.</p>
                                <a href=" " class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 contact-link">
                                    Contact Us
                                </a> 
                            </div>
                            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex"></div>                
                        </div>
                    </section>
                </div>
                {/* about us section */}
                <div className='bg-white'>
                    <section class="about-image dark:bg-gray-900">
                        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                            <div class="mr-auto place-self-center lg:col-span-7">
                                <h1 class="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white uppercase">About Us</h1>
                                <p class="max-w-2xl mb-6 font-light lg:mb-8 md:text-base lg:text-lg dark:text-gray-400">One thing that sets us apart from other digital marketing agencies is that we are mission-driven and deeply invested in our clients’ work. We believe that mission-driven companies and social enterprises play a significant role in supporting the economic development and sustainability of the country.<br/><br/>
                                Because you focus on changing the world, you deserve the best digital marketing, branding, and PR team to help you achieve your goals and increase impact work. One that understands the importance of telling your brand story, how to say it, and where to direct it.</p>
                                <h3 className='max-w-2xl mb-4 text-lg font-extrabold tracking-tight leading-none md:text-xl xl:text-2xl dark:text-white'>Mission Statement!</h3>
                                <p class="max-w-2xl mb-6 font-light slg:mb-8 md:text-base lg:text-lg dark:text-gray-400">To contribute to client’s business growth through result oriented, innovative and creative strategies that will deliver the WOW factor.</p>
                                <h3 className='max-w-2xl mb-4 text-lg font-extrabold tracking-tight leading-none md:text-xl xl:text-2xl dark:text-white'>Core Values</h3>
                                <ul className='list-disc ml-4'>
                                    <li>Professionalism</li>
                                    <li>Integrity</li>
                                    <li>Passion driven</li>
                                    <li>Authenticity</li>
                                </ul>
                            </div>
                            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                                <img src=" " alt="about-us-image" />
                            </div>                
                        </div>
                    </section>
            <div className='text-center text-2xl md:text-xl xl:text-4xl'>
                <h1><span className='span-recreate'>Recreating</span> Stories and Experiences for manufacturing Industries</h1>
            </div>
                </div>
                {/* services section */}
                <div className='services-section'>
                    <h1 class="max-w-2xl mb- mt-12 text-2xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white uppercase text-center">Services</h1>
                    <p className='max-w-2xl mb-6 mt-4 font-light text-center slg:mb-8 md:text-base lg:text-lg dark:text-gray-400'>We focus on deep customer insight to provide growth to our clients as we work on the principle of creativity, identity, innovation and inclusion and diversity.</p>
                </div>
                {/* pictures */}
                <div className='pic-grid'>
                            <div className='grid-item-1' onClick={showPublic} onMouseOver={showPublic} onMouseLeave={dontShowPublic}>
                                <h3 className='public-h3 heading'>Public Relations</h3>
                                <div className='public'>
                                    <h2 className='heading' style={{fontSize:'20px'}}>Public Relations</h2>
                                    <p>
                                        You know you’re awesome. We know you’re awesome. Let us tell the world just how awesome you are. Because that’s what great PR is all about.
                                        Connect with us!
                                        Corporate communication
                                        Social Media communication
                                        PR events and engagements
                                    </p>
                                </div>
                            </div>
                            <div className='grid-item-2' onClick={showBrand} onMouseOver={showBrand} onMouseLeave={dontShowBrand}>
                                <h3 className='brand-h3 heading'>Brand Management</h3>
                                <div className='bran'>
                                    <h2 className='heading' style={{fontSize:'20px'}}>Brand Management</h2>
                                    <p>
                                    Tell your story! We understand the importance of purpose- driven brand activation, we want you to sustain your brand visibility by showcasing it and telling your impact stories to the world and to the people that matter. Our brand activation strategies will drive results as they will be uniquely customized to exhibit the alignment of your company values and missions.
                                    </p>
                                </div>
                            </div>
                            <div className='grid-item-3' onClick={showDigital} onMouseOver={showDigital} onMouseLeave={dontShowDigital}>
                                <h3 className='digital-h3 heading'>Digital Marketing</h3>
                                <div className='digital'>
                                    <h2 className='heading' style={{fontSize:'20px'}}>Digital Marketing</h2>
                                    <p>
                                    Yes, we get you. We fully understand that you’re not just doing business, You’re in the business of changing lives. You’re passionate about solving problems in your community and driving positive change. We are also passionate about helping you change the world. To succeed, you need to engage people online, your customers, partners, and supporters.
                                    </p>
                                </div>
                            </div>
                            <div className='grid-item-4' onClick={showTraining} onMouseOver={showTraining} onMouseLeave={dontShowTraining}>
                                <h3 className='training-h3 heading'>Training</h3>
                                <div className='training'>
                                    <h2 className='heading' style={{fontSize:'20px'}}>Training</h2>
                                    <p>
                                    Yes, we get you. We fully understand that you’re not just doing business, You’re in the business of changing lives. You’re passionate about solving problems in your community and driving positive change. We are also passionate about helping you change the world. To succeed, you need to engage people online, your customers, partners, and supporters.
                                    </p>
                                </div>
                            </div>
                </div>
                {/* testimonials */}
                <div className='testimony'>
                    <div style={{textAlign:"center"}}>
                        <h2 className='heading' style={{fontSize: '50px',fontWeight: 500}}>TESTIMONIALS</h2>
                        <p style={{fontSize: '20px',fontWeight: 400}}>Think we’re bluffing? See what people we’ve worked with think about us.</p>
                    </div>
                    {/* testimony cards */}
                    <div className='testimony-cards mb-12'>
                        <div className='card-grid-1'>
                            <div className='grid-card'>
                                <p style={{fontWeight: 400, fontSize: '18px', lineHeight: 1}}>
                                Our brand has exponentially grown to explore social media avenues as it was operating offline. Choosing long term partnership with Kiri Marketing consultancy has broadened our relationship and sales growth experience. Her advice and expertise go a long way in enhancing brand needs & values.
                                </p>
                                <div className='card-footer' style={{marginTop: "5px"}}>
                                    <img width="50" height="50" src={profile1} alt="..."/>
                                    <p style={{fontSize: '16px'}}>
                                    Annet Obat &amp; Anita Lukelesia<br/>
                                    Co-Founders, Laette Closet
                                    </p>
                                </div>
                            </div>
                            <div className='grid-card'>
                                <p style={{fontWeight: 400, fontSize: '18px', lineHeight: 1}}>
                                Kiri marketing Consultants is a perfect balance between professionalism and personality. They take their time to dig in and find out what the company needs to expand their market. Their strategies have helped us in aligning our company goals which has seen us grow and sign-up new clients.
                                </p>
                                <div className='card-footer' style={{marginTop: "3px"}}>
                                <img width="50" height="50" src={profile2} alt="..."/>
                                    <p style={{fontSize: '16px', lineHeight: 1}}>
                                    Evelyne Wandanda<br/>
                                    Co-founder and managing partner, Innerblast Consultants
                                    </p>
                                </div>
                            </div>

                            <div className='grid-card'>
                                <p style={{fontWeight: 400, fontSize: '18px', lineHeight: 1}}>
                                Talent Industry acknowledges the partnership offered by Kiri Marketing Consultants in the success of the 2022 East Africa Poetic Hour Battle on 20th May 2022. We would like to thank them for their outstanding service in event planning, marketing, branding and corporate ushering.
                                </p>
                                <div className='card-footer' style={{marginTop: "5px"}}>
                                <img width="50" height="50" src={profile3} alt="..."/>
                                    <p style={{fontSize: '16px', lineHeight: 1}}> 
                                    Godfrey Emoja<br/>
                                    Managing Director, Talent Industry
                                    </p>
                                </div>
                            </div>
                            <div className='grid-card'>
                                <p style={{fontWeight: 400, fontSize: '18px', lineHeight: 1}}>Recreating Stories and Experiences for manufacturing Industries Recreating Stories and Experiences for manufacturing IndustriesRecreating Stories and Experiences for manufacturing Industries</p>
                                <div className='card-footer'>
                                <img width="50" height="50" src={profile4} alt="..."/>
                                    <p style={{fontSize: '16px', lineHeight: 1}}>
                                        Bryce Zeibu<br/>
                                        CTA, Spify
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* percentages */}
                    <div class="grid gap-16 ml-12 my-8 px-5 py-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" style={{marginLeft:"120px", placeItems:"center"}}>
                        <div className=''>
                            <div className='flex relative'>
                                <img src={person} alt='...'/>
                                <p className='text-6xl absolute bottom-2 left-6 font-light'>37+</p>
                            </div>
                            <p style={{fontSize: '24px'}}>Happy Clients</p>
                        </div>
                        <div className=''>
                            <div className='flex relative'>
                                <img src={person} alt='...'/>
                                <p className='text-6xl absolute bottom-2 left-6 font-light'>37+</p>
                            </div>
                            <p style={{fontSize: '24px'}}>Happy Clients</p>
                        </div>
                        <div className=''>
                            <div className='flex relative'>
                                <img src={person} alt='...'/>
                                <p className='text-6xl absolute bottom-2 left-6 font-light'>37+</p>
                            </div>
                            <p style={{fontSize: '24px'}}>Happy Clients</p>
                        </div>
                        <div className=''>
                            <div className='flex relative'>
                                <img src={person} alt='...'/>
                                <p className='text-6xl absolute bottom-2 left-6 font-light'>37+</p>
                            </div>
                            <p style={{fontSize: '24px'}}>Happy Clients</p>
                        </div>
                    </div>
                    {/* worked with */}
                        <h4 className='text-center text-4xl uppercase'>we’ve worked with</h4>
                    <div class="grid gap-16 ml-12 px-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 worked-with">
                        <div>
                            <img src={image4} alt='...'/>
                        </div>
                        <div>
                            <img src={image5} alt='...'/>
                        </div>
                        <div>
                            <img src={image7} alt='...'/>
                        </div>
                        <div>
                            <img src={image8} alt='...'/>
                        </div>
                        <div className='-mt-6'>
                            <img src={image9} alt='...'/>
                        </div>
                        <div>
                            <img src={image11} alt='...'/>
                        </div>
                    </div>
                </div>
                {/* history */}
                <div className='bg-black text-white mt-12'>
                    <section class="about-image">
                        <div class="grid px-6 py-8 mx-auto sm:overflow-hidden lg:gap-6 xl:gap-0 lg:py-16 lg:grid-cols-12">
                            <div class="lg:mt-0 lg:col-span-5 lg:flex">
                                <img src=" " alt="about-us-image" />
                            </div>                
                            <div class="mr-auto ml-12 place-self-center lg:col-span-7">
                                <h1 class="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white uppercase">Our history</h1>
                                <p class="max-w-2xl mb-6 font-light lg:mb-8 md:text-base lg:text-lg dark:text-gray-400">Kiri Marketing Consultants is a Private Limited company founded in 2020 during the Covid 19 pandemic.<br/><br/>

                                Our Founder has been a beneficiary of many missions driven projects especially ones that support women entrepreneurs for sustainable impact. She also has professional experience working for a Non-Profit organization. Her experiences and initiatives have enabled her to harness her skills as a team leader and helped her gain a better perspective when it comes to mission-driven companies.<br/><br/>

                                “The company was initially a Social Media Management company for small entrepreneurs and start-up companies and was birthed out of passion. With time and through more experience and realization of the gap in the market, there was a need to re-strategize and rebrand.”<br/>

                                <em>Eileen, Founder/ CEO.</em>
                            </p>                       
                            </div>
                        </div>
                    </section>
                </div>
                {/* recent articles */}
                {/* <div className='recent-articles' id='news'>
                                <h4 className='text-center heading' style={{fontSize: '50px',fontWeight: 500, marginTop: '4vh'}}>RECENT ARTICLES</h4>
                                <h2 className= 'text-center heading' style={{fontSize: '40px', fontWeight: 50}}>Get Updated on the latest trends</h2>
                                <div class="grid -ml-4 gap-10 px-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 trends">
                                    <div class="max-w-sm rounded overflow-hidden">
                                        <img class="w-full" src={articleImage1} alt=".." />
                                        <div class="px-6 py-4">
                                        <h3 className='text-2xl'>Marketing Made Easy</h3>
                                        <p class="text-base">
                                        Some concept examples to help you understand how marketing works.
                                        </p>
                                        </div>
                                    </div>
                                    <div class="max-w-sm rounded overflow-hidden">
                                        <img class="w-full" src={articleImage2} alt=".." />
                                        <div class="px-6 py-4">
                                        <h3 className='text-2xl'>Importance of Merchandise Planning</h3>
                                        <p class="text-base">
                                        The goal of merchandise planning is to meet customers’ needs by making products available at the right time, price and quantity.
                                        </p>
                                        </div>
                                    </div>
                                </div>
                </div> */}

                {/* talk more section */}
                <div className='talk-more' id='contacts'>
                    <div className='grid-talk-more'>
                        <div className='grid-talk-1'>
                            <h1>Let’s talk about building your reputation</h1>
                        </div>
                        <div className='grid-talk-2'>
                            <form class="px-8 pt-6 pb-8 mb-4 get-in-form">
                                <h2 className='text-center font-bold '>Get in touch</h2>
                                <div class="mb-4">
                                <label class="block text-black text-sm font-normal mb-2" for="name">
                                    Name
                                </label>
                                <input class="border border-black appearance-none w-full py-1 px-3 text-black leading-tight" id="name" type="text" />
                                </div>
                                <div class="mb-4">
                                <label class="block text-black text-sm font-normal mb-2" for="email">
                                    Email
                                </label>
                                <input class="border border-black appearance-none w-full py-1 px-3 text-black leading-tight" id="email" type="email" />
                                </div>
                                <div class="mb-4">
                                <label class="block text-black text-sm font-normal mb-2" for="phone">
                                    Phone
                                </label>
                                <input class="border border-black appearance-none w-full py-1 px-3 text-black leading-tight" id="phone" type="tel" />
                                </div>
                                <label for="message" class="block mb-2 text-sm font-normal">Message</label>
                                <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-black border border-black focus:ring-blue-500 focus:border-blue-500"></textarea>
                                <div class="flex items-center justify-between mt-4">
                                <button class="bg-red-700 text-white font-light py-2 px-4 focus:outline-none focus:shadow-outline" type="button">
                                    Sign In
                                </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* <div>
                <div class="w-full max-w-xs">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
        </div>
        <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
        </label>
        <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************">
        <p class="text-red-500 text-xs italic">Please choose a password.</p>
        </div>
        <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Sign In
        </button>
        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Forgot Password?
        </a>
        </div>
    </form>
                </div>
                </div> */}
                {/* <div className='bg-white'>
                    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                        <div>
                            <h3>Let’s talk about building your reputation</h3>
                        </div> 
                        <div>
                        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
            Username
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
        </div>
        <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
            Password
        </label>
        <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
        <p class="text-red-500 text-xs italic">Please choose a password.</p>
        </div>
        <div class="flex items-center justify-between">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Sign In
        </button>
        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
            Forgot Password?
        </a>
        </div>
    </form>
                        </div>             
                    </div>
                </div> */}
            </main>
            <Footer />
        </div>    
    </>
  )
}

export default Hero