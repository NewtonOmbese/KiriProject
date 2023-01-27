// import React, { useState } from 'react';
// import Navbar from '../Navbarr';
// import {useNavigate} from "react-router-dom";
// import {projectStorage,ref,getDownloadURL,uploadBytesResumable} from "../firebase/FireBaseConfig";
// import toast from "react-hot-toast";
// import Footer from '../Footer';

// function AddBlog(props) {
//     const [postButton,setPostButton]=useState(<button>Post Blog</button>);
//     const [title,setTitle]=useState('');
//     const [body,setBody]=useState('');
//     const [author,setAuthor]=useState('');
//     const [error,setError]=useState(null);
//     const [file,setFile]=useState(null);
//     const [wait,setWait]=useState('');
//     const navigate=useNavigate();
//     //upload item images
//     const types=['image/png', 'image/jpeg'];
//       const changeHandler=(e)=>{
//         let selected=e.target.files[0]
//         if(selected&&types.includes(selected.type)){
//             setFile(selected)
//             setError('')
//             //uploading image to storage
//             const storageRef=ref(projectStorage,selected.name);
//             const uploadTask = uploadBytesResumable(storageRef, selected);
//             uploadTask.on('state_changed',
//              async()=>{
//                 try {
//                     setWait(<><div style={{color:'green'}}><small><i>Sending</i></small></div></>)
//                      await getDownloadURL(storageRef).then((url)=>{
//                       console.log(url);
//                       localStorage.setItem('pic',url);
//                      })
//                     setWait('');
//                 } catch (error) {
//                     setWait('');
//                     console.log(error)
//                 }
//                      })
                     
//         }else{
//             setWait('')
//             setFile(null);
//             setError('Please select an image file(png or jpeg)')
//         }
//       }
//     //post blog to api
//     const form =document.querySelector('form');
//  const postBlog=async(e)=>{
//     e.preventDefault();
//     try {
//         setPostButton(<><button><i>Posting...</i></button></>)
//         preloader();
//         const url='https://kiri-api.onrender.com/api/';
//         const response=await fetch(url,{
//             method:"POST",
//             body:JSON.stringify({
//                 photo:localStorage.getItem('pic'),
//                 title,
//                 body,
//                 author
//             }),
//             headers:{
//                 'content-type':'application/json'
//             }
//         })
//         setPostButton(<button>Post Blog</button>);
//         navigate('/blogs');
//         preloaderoff();
//         toast.success('Blog successfully added');
//         const parseRes=await response.json();
//         console.log(parseRes);
//         form.reset();
//     } catch (error) {
//         form.reset();
//         setPostButton(<button>Post Blog</button>);
//         preloaderoff();
//         toast.error('Please try again!')
//         console.log(error.message)
//     }
//  }
//  //preloader
//  const preloader=()=>{
//     const loader=document.querySelector('.preload');
//     loader.style.display='block';
//   }
//   const preloaderoff=()=>{
//     const loader=document.querySelector('.preload');
//     loader.style.display='none';
//   }
//     return (
//         <>
//         <div className='preload'></div>
//         <div className='add-blog-page'>
//                     <div className='add-blog-nav'>
//                         <Navbar/>
//                     </div>
//                     <div className='form-container'>
//                         <form className='add-blog-form' onSubmit={postBlog}>
//                             <label>Blog Title</label>
//                             <input type='text' onChange={(e)=>setTitle(e.target.value)} required/><br/>
//                             <label>Add Blog image</label>
//                             <input type="file" onChange={changeHandler} /><br/>
//                             <div className="img-response">
//                                 {error&&<div className='error' style={{color:'orangered'}}>{error}</div>}
//                                 {file&&<div style={{color:'green'}}>{file.name}</div>}
//                                 {wait}
//                             </div>
//                             <label>Blog Body</label>
//                             <textarea onChange={(e)=>setBody(e.target.value)} required></textarea><br/>
//                             <label>Author</label>
//                             <input type='text' onChange={e=>setAuthor(e.target.value)} required/><br/>
//                             {postButton}
//                         </form>
//                     </div>
//             <Footer/>
//         </div>
//         </>
//     );
// }

// export default AddBlog;