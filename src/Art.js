import React from 'react';
import Footer from './Footer';
import NavBar from './Navbar-2';
import './Art.css'

function Art() {
  const showPhoto1=()=>{
    document.querySelector('.public').style.display="none";
    document.querySelector('.publica').style.display="block";
    dontShowPhoto2();
    dontShowPhoto3();
    dontShowPhoto4();
    dontShowPhoto5();
    dontShowPhoto6();
    dontShowPhoto7();
    dontShowPhoto8();
    dontShowPhoto9();
    dontShowPhoto10();
    dontShowPhoto11();
    dontShowPhoto12();
  }
  const showPhoto2=()=>{
    document.querySelector('.brany').style.display="none";
    document.querySelector('.bran').style.display="block";
    dontShowPhoto3();
    dontShowPhoto4();
    dontShowPhoto1();
    dontShowPhoto5();
    dontShowPhoto6();
    dontShowPhoto7();
    dontShowPhoto8();
    dontShowPhoto9();
    dontShowPhoto10();
    dontShowPhoto11();
    dontShowPhoto12();
  }
  const showPhoto3=()=>{
    document.querySelector('.digita').style.display="none";
    document.querySelector('.digitay').style.display="block";
    dontShowPhoto1();
    dontShowPhoto2();
    dontShowPhoto4();
    dontShowPhoto5();
    dontShowPhoto6();
    dontShowPhoto7();
    dontShowPhoto8();
    dontShowPhoto9();
    dontShowPhoto10();
    dontShowPhoto11();
    dontShowPhoto12();
  }
  const showPhoto4=()=>{
    document.querySelector('.trainig').style.display="none";
    document.querySelector('.trainin').style.display="block";
    dontShowPhoto2();
    dontShowPhoto1();
    dontShowPhoto3();
    dontShowPhoto5();
    dontShowPhoto6();
    dontShowPhoto7();
    dontShowPhoto8();
    dontShowPhoto9();
    dontShowPhoto10();
    dontShowPhoto11();
    dontShowPhoto12();
  }
  const showPhoto5=()=>{
    document.querySelector('.photo5').style.display="none";
    document.querySelector('.phot5').style.display="block";
    dontShowPhoto2();
    dontShowPhoto1();
    dontShowPhoto3();
    dontShowPhoto6();
    dontShowPhoto7();
    dontShowPhoto8();
    dontShowPhoto9();
    dontShowPhoto10();
    dontShowPhoto11();
    dontShowPhoto12();
  }
  const showPhoto6=()=>{
    document.querySelector('.photo6').style.display="none";
    document.querySelector('.phot6').style.display="block";
    dontShowPhoto2();
    dontShowPhoto1();
    dontShowPhoto3();
    dontShowPhoto5();
    dontShowPhoto7();
    dontShowPhoto8();
    dontShowPhoto9();
    dontShowPhoto10();
    dontShowPhoto11();
    dontShowPhoto12();
  }
  const showPhoto7=()=>{
    document.querySelector('.photo7').style.display="none";
    document.querySelector('.phot7').style.display="block";
    dontShowPhoto2();
    dontShowPhoto1();
    dontShowPhoto3();
    dontShowPhoto6();
    dontShowPhoto5();
    dontShowPhoto8();
    dontShowPhoto9();
    dontShowPhoto10();
    dontShowPhoto11();
    dontShowPhoto12();
  }
  const showPhoto8=()=>{
    document.querySelector('.photo8').style.display="none";
    document.querySelector('.phot8').style.display="block";
    dontShowPhoto2();
    dontShowPhoto1();
    dontShowPhoto3();
    dontShowPhoto6();
    dontShowPhoto7();
    dontShowPhoto5();
    dontShowPhoto9();
    dontShowPhoto10();
    dontShowPhoto11();
    dontShowPhoto12();
  }
  const showPhoto9=()=>{
    document.querySelector('.photo9').style.display="none";
    document.querySelector('.phot9').style.display="block";
    dontShowPhoto2();
    dontShowPhoto1();
    dontShowPhoto3();
    dontShowPhoto6();
    dontShowPhoto7();
    dontShowPhoto8();
    dontShowPhoto5();
    dontShowPhoto10();
    dontShowPhoto11();
    dontShowPhoto12();
  }
  const showPhoto10=()=>{
    document.querySelector('.photo10').style.display="none";
    document.querySelector('.phot10').style.display="block";
    dontShowPhoto2();
    dontShowPhoto1();
    dontShowPhoto3();
    dontShowPhoto6();
    dontShowPhoto7();
    dontShowPhoto8();
    dontShowPhoto9();
    dontShowPhoto5();
    dontShowPhoto11();
    dontShowPhoto12();
  }
  const showPhoto11=()=>{
    document.querySelector('.photo11').style.display="none";
    document.querySelector('.phot11').style.display="block";
    dontShowPhoto2();
    dontShowPhoto1();
    dontShowPhoto3();
    dontShowPhoto6();
    dontShowPhoto7();
    dontShowPhoto8();
    dontShowPhoto9();
    dontShowPhoto10();
    dontShowPhoto5();
    dontShowPhoto12();
  }
  const showPhoto12=()=>{
    document.querySelector('.photo12').style.display="none";
    document.querySelector('.phot12').style.display="block";
    dontShowPhoto2();
    dontShowPhoto1();
    dontShowPhoto3();
    dontShowPhoto6();
    dontShowPhoto7();
    dontShowPhoto8();
    dontShowPhoto9();
    dontShowPhoto10();
    dontShowPhoto11();
    dontShowPhoto5();
  }
  const dontShowPhoto1=()=>{
    document.querySelector('.public').style.display="block";
    document.querySelector('.publica').style.display="none"
  }
  const dontShowPhoto2=()=>{
    document.querySelector('.brany').style.display="block";
    document.querySelector('.bran').style.display="none"
  }
  const dontShowPhoto3=()=>{
    document.querySelector('.digita').style.display="block";
    document.querySelector('.digitay').style.display="none"
  }
  const dontShowPhoto4=()=>{
    document.querySelector('.trainig').style.display="block";
    document.querySelector('.trainin').style.display="none"
  }
  const dontShowPhoto5=()=>{
    document.querySelector('.photo5').style.display="block";
    document.querySelector('.phot5').style.display="none"
  }
  const dontShowPhoto6=()=>{
    document.querySelector('.photo6').style.display="block";
    document.querySelector('.phot6').style.display="none"
  }
  const dontShowPhoto7=()=>{
    document.querySelector('.photo7').style.display="block";
    document.querySelector('.phot7').style.display="none"
  }
  const dontShowPhoto8=()=>{
    document.querySelector('.photo8').style.display="block";
    document.querySelector('.phot8').style.display="none"
  }
  const dontShowPhoto9=()=>{
    document.querySelector('.photo9').style.display="block";
    document.querySelector('.phot9').style.display="none"
  }
  const dontShowPhoto10=()=>{
    document.querySelector('.photo10').style.display="block";
    document.querySelector('.phot10').style.display="none"
  }
  const dontShowPhoto11=()=>{
    document.querySelector('.photo11').style.display="block";
    document.querySelector('.phot11').style.display="none"
  }
  const dontShowPhoto12=()=>{
    document.querySelector('.photo12').style.display="block";
    document.querySelector('.phot12').style.display="none"
  }
  return (
    <div className="main-content">
        <NavBar />
        <main className=''>
        <div className='art-image'>
          <section class="">
              <div class="grid max-w-screen-xl px-4 py-8 mx-auto sm:mt-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                  <div class="mr-auto place-self-center lg:col-span-7 content">
                      <h1 class="max-w-2xl mt-24 mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl xl:text-6xl">The art of <br /> Storytelling</h1>
                      <a href=" " class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white contact-link">
                        Read Article
                      </a> 
                  </div>
                  <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                      
                  </div>                
              </div>
          </section>
        </div>
        <section className='my-8'>
          <div className='grid px-4 gap-8 -ml-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
            <div onMouseOver={showPhoto1} onMouseLeave={dontShowPhoto1}>
                <div class="max-w-sm p-6 bg-white border border-gray-200 border dark:bg-gray-800 dark:border-gray-700 public">
                  <img src="https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-red-400 border border-red-700">
                    Read Article
                  </a>
                </div>
                <div class="max-w-sm bg-white publica">
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                </div>
            </div>
            <div onMouseOver={showPhoto2} onMouseLeave={dontShowPhoto2}>
                <div class="max-w-sm p-6 bg-white border border-gray-200 border dark:bg-gray-800 dark:border-gray-700 brany">
                  <img src="https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-red-400 border border-red-700">
                    Read Article
                  </a>
                </div>
                <div class="max-w-sm bg-white bran">
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                </div>
            </div>
            <div onMouseOver={showPhoto3} onMouseLeave={dontShowPhoto3}>
                <div class="max-w-sm p-6 bg-white border border-gray-200 border dark:bg-gray-800 dark:border-gray-700 digita">
                  <img src="https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-red-400 border border-red-700">
                    Read Article
                  </a>
                </div>
                <div class="max-w-sm bg-white digitay">
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                </div>
            </div>
            <div onMouseOver={showPhoto4} onMouseLeave={dontShowPhoto4}>
                <div class="max-w-sm p-6 bg-white border border-gray-200 border dark:bg-gray-800 dark:border-gray-700 trainig">
                  <img src="https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-red-400 border border-red-700">
                    Read Article
                  </a>
                </div>
                <div class="max-w-sm bg-white trainin">
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                </div>
            </div>
            <div onMouseOver={showPhoto5} onMouseLeave={dontShowPhoto5}>
                <div class="max-w-sm p-6 bg-white border border-gray-200 border dark:bg-gray-800 dark:border-gray-700 photo5">
                  <img src="https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-red-400 border border-red-700">
                    Read Article
                  </a>
                </div>
                <div class="max-w-sm bg-white phot5">
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                </div>
            </div>
            <div onMouseOver={showPhoto6} onMouseLeave={dontShowPhoto6}>
                <div class="max-w-sm p-6 bg-white border border-gray-200 border dark:bg-gray-800 dark:border-gray-700 photo6">
                  <img src="https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-red-400 border border-red-700">
                    Read Article
                  </a>
                </div>
                <div class="max-w-sm bg-white phot6">
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                </div>
            </div>
            <div onMouseOver={showPhoto7} onMouseLeave={dontShowPhoto7}>
                <div class="max-w-sm p-6 bg-white border border-gray-200 border dark:bg-gray-800 dark:border-gray-700 photo7">
                  <img src="https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-red-400 border border-red-700">
                    Read Article
                  </a>
                </div>
                <div class="max-w-sm bg-white phot7">
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                </div>
            </div>
            <div onMouseOver={showPhoto8} onMouseLeave={dontShowPhoto8}>
                <div class="max-w-sm p-6 bg-white border border-gray-200 border dark:bg-gray-800 dark:border-gray-700 photo8">
                  <img src="https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-red-400 border border-red-700">
                    Read Article
                  </a>
                </div>
                <div class="max-w-sm bg-white phot8">
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                </div>
            </div>
            <div onMouseOver={showPhoto9} onMouseLeave={dontShowPhoto9}>
                <div class="max-w-sm p-6 bg-white border border-gray-200 border dark:bg-gray-800 dark:border-gray-700 photo9">
                  <img src="https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-red-400 border border-red-700">
                    Read Article
                  </a>
                </div>
                <div class="max-w-sm bg-white phot9">
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                </div>
            </div>
            <div onMouseOver={showPhoto10} onMouseLeave={dontShowPhoto10}>
                <div class="max-w-sm p-6 bg-white border border-gray-200 border dark:bg-gray-800 dark:border-gray-700 photo10">
                  <img src="https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-red-400 border border-red-700">
                    Read Article
                  </a>
                </div>
                <div class="max-w-sm bg-white phot10">
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                </div>
            </div>
            <div onMouseOver={showPhoto11} onMouseLeave={dontShowPhoto11}>
                <div class="max-w-sm p-6 bg-white border border-gray-200 border dark:bg-gray-800 dark:border-gray-700 photo11">
                  <img src="https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-red-400 border border-red-700">
                    Read Article
                  </a>
                </div>
                <div class="max-w-sm bg-white phot11">
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                </div>
            </div>
            <div onMouseOver={showPhoto12} onMouseLeave={dontShowPhoto12}>
                <div class="max-w-sm p-6 bg-white border border-gray-200 border dark:bg-gray-800 dark:border-gray-700 photo12">
                  <img src="https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-red-400 border border-red-700">
                    Read Article
                  </a>
                </div>
                <div class="max-w-sm bg-white phot12">
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                </div>
            </div>
            {/* <div onMouseOver={showTraining} onMouseLeave={dontShowTraining}>
                <div class="max-w-sm p-6 bg-white border border-gray-200 border dark:bg-gray-800 dark:border-gray-700 training">
                  <img src="https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-red-400 border border-red-700">
                    Read Article
                  </a>
                </div>
                <div class="max-w-sm bg-white trainin">
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                </div>
            </div>
            <div onMouseOver={showTraining} onMouseLeave={dontShowTraining}>
                <div class="max-w-sm p-6 bg-white border border-gray-200 border dark:bg-gray-800 dark:border-gray-700 training">
                  <img src="https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-red-400 border border-red-700">
                    Read Article
                  </a>
                </div>
                <div class="max-w-sm bg-white trainin">
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                </div>
            </div>
            <div onMouseOver={showPhoto1} onMouseLeave={dontShowPhoto1}>
                <div class="max-w-sm p-6 bg-white border border-gray-200 border dark:bg-gray-800 dark:border-gray-700 public">
                  <img src="https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-red-400 border border-red-700">
                    Read Article
                  </a>
                </div>
                <div class="max-w-sm bg-white publica">
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                </div>
            </div>
            <div onMouseOver={showBrand} onMouseLeave={dontShowBrand}>
                <div class="max-w-sm p-6 bg-white border border-gray-200 border dark:bg-gray-800 dark:border-gray-700 brand">
                  <img src="https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-red-400 border border-red-700">
                    Read Article
                  </a>
                </div>
                <div class="max-w-sm bg-white bran">
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                </div>
            </div>
            <div onMouseOver={showDigital} onMouseLeave={dontShowDigital}>
                <div class="max-w-sm p-6 bg-white border border-gray-200 border dark:bg-gray-800 dark:border-gray-700 digital">
                  <img src="https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-red-400 border border-red-700">
                    Read Article
                  </a>
                </div>
                <div class="max-w-sm bg-white digitaly">
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                </div>
            </div>
            <div onMouseOver={showTraining} onMouseLeave={dontShowTraining}>
                <div class="max-w-sm p-6 bg-white border border-gray-200 border dark:bg-gray-800 dark:border-gray-700 training">
                  <img src="https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-red-400 border border-red-700">
                    Read Article
                  </a>
                </div>
                <div class="max-w-sm bg-white trainin">
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                </div>
            </div>
            <div onMouseOver={showTraining} onMouseLeave={dontShowTraining}>
                <div class="max-w-sm p-6 bg-white border border-gray-200 border dark:bg-gray-800 dark:border-gray-700 training">
                  <img src="https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-red-400 border border-red-700">
                    Read Article
                  </a>
                </div>
                <div class="max-w-sm bg-white trainin">
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                </div>
            </div>
            <div onMouseOver={showTraining} onMouseLeave={dontShowTraining}>
                <div class="max-w-sm p-6 bg-white border border-gray-200 border dark:bg-gray-800 dark:border-gray-700 training">
                  <img src="https://images.pexels.com/photos/415071/pexels-photo-415071.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-red-400 border border-red-700">
                    Read Article
                  </a>
                </div>
                <div class="max-w-sm bg-white trainin">
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                  <h5 class="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Some Other Article</h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Kiri is a Swahili word meaning Acknowledge, we see and acknowledge the work you are doing to make the world</p>
                  <a href=" " class="font-normal text-blue-600 dark:text-blue-500 hover:underline">Read Article</a>
                </div>
            </div> */}
                {/* <div className='grid-item-2' onClick={showBrand} onMouseOver={showBrand} onMouseLeave={dontShowBrand}>
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
                </div> */}
          </div>
        </section>
        </main>
        <Footer />
    </div>
  )
}

export default Art