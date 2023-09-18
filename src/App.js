import React, { lazy, Suspense, useLayoutEffect, useState } from 'react';
import { Spinner } from 'reactstrap';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "aos/dist/aos.js"
import "aos/dist/aos.css"
import AOS from "aos"
import 'react-toastify/dist/ReactToastify.css';
import "lightbox2/dist/css/lightbox.min.css"
import axios from 'axios';
import { ToastContainer} from 'react-toastify';
import { useSelector } from 'react-redux';


import CallToAction from "./components/common/CallToAction"
import StaffProfile from './components/Dashboard/pages/StaffProfile';
import Staffs from './components/Dashboard/pages/Staffs';
import StaffSidebar from './components/Dashboard/Staff/StaffSidebar';
import StaffOverview from './components/Dashboard/Staff/StaffOverview';



const Home = lazy(() => import("./components/Pages/Home"))
const Course = lazy(() => import("./components/Pages/Course"))
const Onboard = lazy(() => import("./components/Pages/Onboard"))
const Login = lazy(() => import("./components/Pages/Login"))
const Hire = lazy(() => import("./components/Pages/Hire"))
const Calendar = lazy(() => import("./components/Pages/Calendar"))
const Faq = lazy(() => import("./components/Pages/FaqPage"))
const NotFound = lazy(() => import("./components/Pages/NotFound"))
const About = lazy(() => import("./components/Pages/About"))
const Contact = lazy(() => import("./components/Pages/Contact"))
const Courses = lazy(() => import("./components/Pages/Courses"))
const Blog = lazy(() => import("./components/Pages/Blog"))
const Blogdetails = lazy(() => import("./components/Pages/Blogdetails"))
const Dashboard = lazy(() => import("./components/Dashboard/Layout"))



function App() {
  
  const token = useSelector((state) => state?.user?.token)

  const [blogData, setBlogData] = useState([])

  

  useLayoutEffect(() =>{

    axios?.get(`${process.env.REACT_APP_API_URL}/getarticles`,{
      headers:{
        Authorization: token !== null ? `Bearer ${token}` : ""
      }
    }).then((res) => setBlogData(res?.data?.article))
    .catch((err) => {
      //window.location.href = "/login"
     
    })

  

  }, [])



  AOS.init({
    duration: 3000,
    easing: 'ease-in-out',
    delay: 100,
  })

  window.addEventListener("scroll", () => AOS.refresh());

  return (
    <Suspense fallback={
      <div className='anime position-absolute top-50 start-50  translate-middle '>
        <img style={{width: "5rem", objectFit: "contain"}} src="./../images/logo.png" alt="logo" />
      </div>
    }>
      <Router>

       
       <Routes>
          <Route path="/" element={<Home data={blogData}/>}/>
          <Route path="/signup" element={ <Onboard/> }/>
          <Route path="*" element={ <NotFound/> }/>
          <Route path="/login" element={ <Login/> }/>
          <Route path="/hire" element={ <Hire/> }/>
          <Route path="/courses" element={ <Courses/> }/>
          <Route path="/calendar" element={ <Calendar/> }/>
          <Route path="/faq" element={ <Faq/> }/>
          <Route path="/contact" element={ <Contact/> }/>
          <Route path="/about" element={ <About blogdata={blogData}/> }/>
          <Route path="/blog" element={ <Blog blogdata={blogData}/> }/>
          <Route path="/blog/:id" element={<Blogdetails data={blogData}/>}/>
          <Route path="/:id" element={<Course/>}/>
          <Route path="/dashboard/:text/?" element={<Dashboard/>}/>
          <Route path="/staffprofile" element={<StaffOverview/>} /> 
        </Routes>


      
        
      
      </Router>
      <ToastContainer
      position='top-center'
      />
    </Suspense>
  );
}

export default App;
