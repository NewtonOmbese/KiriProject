import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <>
    <footer class="p-4 sm:p-6 dark:bg-gray-900 footerr">
        <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
            <div>
                <h2 class="mb-6 text-sm font-bold text-white uppercase dark:text-white">Service</h2>
                <ul class="text-white dark:text-white">
                    <li class="mb-2">
                        <a href=" " class="hover:underline">Home</a>
                    </li>
                    <li class="mb-2">
                        <a href=" " class="hover:underline">About</a>
                    </li>
                    <li class="mb-2">
                        <a href=" " class="hover:underline">Services</a>
                    </li>
                    <li class="mb-2">
                        <a href=" " class="hover:underline">Blog</a>
                    </li>
                </ul>
            </div>
        </div>
        <div>
                <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white">Contact</h2>
                <ul class="text-white dark:text-white social-link">
                    <li class="mb-1 flex">
                        <p className='mr-4'>
                            <i class="fa fa-light fa-location-dot"></i>
                        </p>
                        <p>
                            <span>Office Address</span>
                            <br />
                            <span>Kisumu</span>
                        </p>
                    </li>
                    <li class="mb-1 flex">
                        <p className='mr-4'>
                            <i class="fa fa-sharp fa-solid fa-envelope"></i>
                        </p>
                        <p>
                            <span>Email Us</span>
                            <br />
                            <span>corporate@kiriconsultants.com</span>
                        </p>
                    </li>
                    <li class="flex">
                        <p className='mr-4'>
                        <i class="fa fa-thin fa-phone"></i>
                        </p>
                        <p>
                            <span>Call Us</span>
                            <br />
                            <span>+254 741 248643 | +254 719 297091</span>
                        </p>
                    </li>
                </ul>
        </div>
        </div>
        <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0 social-links">
            <a href="https://www.facebook.com/kirimarketingconsultants" target="_blank" class="text-whitehover:text-gray-900 dark:hover:text-white" >
                <i class="fa fa-brands fa-facebook-f"></i>
            </a>
            <a href='https://www.twitter.com/kiriconsultants' target='_blank' class="text-white hover:text-gray-900 dark:hover:text-white">
                <i class="fa fa-brands fa-twitter"></i>
            </a>
            <a href='https://www.linkedin.com/company/kiri-consultants/' target='_blank' class="text-white hover:text-gray-900 dark:hover:text-white">
                <i class="fa fa-brands fa-linkedin-in"></i>
            </a>
            <a href='https://www.instagram.com/kiriconsultants/' target='_blank' class="text-white hover:text-gray-900 dark:hover:text-white">
                <i class="fa fa-brands fa-instagram"></i>
            </a>
        </div>
        <span class="block mt-4 text-sm text-white sm:text-center dark:text-gray-400">©2022 Kiri Marketing and PR Consultants 
        </span>
    </footer>

    </>
  )
}

export default Footer;