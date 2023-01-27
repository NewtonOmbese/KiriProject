import React, { useEffect, useState } from 'react';
import Footer from '../Footer';
import Navbar from '../Navbarr';
import {Link} from 'react-router-dom';
import toast from 'react-hot-toast';

function BlogPage(props) {
    const [blogs,setBlogs]=useState('');

    const getAllBlogs=async()=>{
        try{
            preloader();
            const url='https://kiri-api.onrender.com/api/';
            const response=await fetch(url,{
                method:'GET'
            })
            preloaderOff();
            const parseRes=await response.json()
            console.log(parseRes);
            setBlogs(parseRes);

        }catch (err){
            toast.error('Failed to fetch');
            preloaderOff();
            console.log(err.message);
        }
    }
    useEffect(()=>{
        getAllBlogs();
    },[]);

    //preloader
 const preloader=()=>{
    const loader=document.querySelector('.preload');
    loader.style.display='block';
  }
  const preloaderOff=()=>{
    const loader=document.querySelector('.preload');
    loader.style.display='none';
  }
    return (
        <>
         <div className='preload'></div>
            <div className='blogPage'>
               <div style={{paddingTop:'20px',marginBottom:'20px'}}>
                <Navbar/>
               </div>
                    <div className='header'>
                        <h1>The art of Storytelling</h1>
                        <button>Read Article</button>
                    </div>
                    {/* blogs section */}
                    <div className='blogs'>
                        {/* row1 */}
                        <div className='grid-blogs'>
                            {blogs&&blogs.map((blog)=>(
                                <div key={blog._id} className='card-blogs'>
                                    <img src={blog.photo} alt='...'/>
                                    <h3>{blog.title}</h3>
                                    <p>{blog.body.substring(0,100)}...</p>
                                    <Link to={`/blog/${blog._id}`}><button>Read Article</button></Link>
                                </div>
                            ))}
                        </div>
                    </div>

                <Footer/>
            </div>
        </>
    );
}

export default BlogPage;