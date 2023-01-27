import './App.css';
import { Routes, Router, Route} from 'react-router-dom';
import Home from './Hero';
import BlogPage from './pages/BlogPage';
import NotFound from './pages/NotFound';
import BlogArticle from './pages/BlogArticle';
import AddBlog from './pages/AddBlog';
import Hero from './Hero';
// import { Toaster } from 'react-hot-toast';
function App() {
  return (
  <>
  <Hero />
    {/* <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blogs' element={<BlogPage/>}/>
        <Route path='/blog/add' element={<AddBlog/>}/>
        <Route path='/blog/:id' element={<BlogArticle/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes> 
    </Router> */}


  </>
  );
}

export default App;
