import React, { useEffect, useState } from 'react';
import Navbar from '../Navbarr';
import Footer from "../Footer";
import {Link, useNavigate, useParams} from "react-router-dom";
import toast from 'react-hot-toast';

function BlogArticle(props) {
    const navigate=useNavigate();
    const [blog,setBlog]=useState('');
    const [more,setMore]=useState('');
    //fetching more blogs
    const getMore=async()=>{
        try {
            const url='https://kiri-api.onrender.com/api/'
            const response=await fetch(url,{
                method:"GET"
            })
            const parseRes=await response.json();
            setMore(parseRes.slice(1,2))
        } catch (error) {
            console.log(error.message)
        }
    }
    //fetching single blog
    const {id}=useParams();
    const getBlog=async()=>{
        try {
            preloader();
            const url=`https://kiri-api.onrender.com/api/${id}`;
            const response=await fetch(url,{
                method:"GET"
            })
            const parseRes=await response.json();
            setBlog(parseRes);
            preloaderOff();
        } catch (error) {
            toast.error('Failed to fetch!');
            navigate('/blogs')
            preloaderOff();
        }
    }
    useEffect(()=>{
        getBlog();
        getMore();
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
            <div className='blog-article'>
                <div style={{paddingTop:'20px',marginBottom:'20px'}}>
                    <Navbar/>
                </div>
                <div className='blog-article-header'></div>
                <div className='article-content'>
                    <h1>{blog.title}</h1>
                    <p>{blog.body}</p>
                    <small>Article written by : {blog.author}</small>
                </div>
                {/* more article */}
                    <div className='more-article'>
                        <h2>More Articles</h2>
                        <div className='grid-blogs'>
                           {more&&more.map((more)=>(
                            <div key={more._id} className='card-blogs'>
                                <img src={more.photo} alt='...'/>
                                <h3>{more.title}</h3>
                                <p>{more.body.substring(0,100)}...</p>
                                <Link to={`/blog/${more._id}`}><button>Read Article</button></Link>
                             </div>
                           ))}
                            
                            <Link to='/blogs'>See More &rarr;</Link>
                        </div>
                    </div>
                <Footer/>
            </div>
            
        </>
    );
}

export default BlogArticle;