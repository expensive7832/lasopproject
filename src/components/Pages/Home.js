import React from 'react'
import Navbar from './../navbarfiles/Navbar'
import Footer from './../footerfiles/Footer'
import bannerImg from "./../../assets/Image.svg"
import line from "./../../assets/Line 12.svg"
import outline from "./../../assets/outline.png"
import { BiCalendar } from 'react-icons/bi'
import { RxDividerVertical } from "react-icons/rx"
import { Link, NavLink } from 'react-router-dom'
import { TbMathGreater } from "react-icons/tb"
import { FaArrowRight, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import Advert from '../common/Advertsection'
import Testimony from '../common/Testimony'
import Faq from '../common/Faq'
import Getstarted from '../common/Getstarted'
import doubleline from "./../../assets/double.png"
import {TfiEmail } from "react-icons/tfi"
import { BsWhatsapp } from "react-icons/bs"

import "./home.css"
import Blogcard from '../common/Blogcard'
import LearnEarn from '../common/LearnEarn'
import OurProgram from '../common/OurProgram'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { infoCtrl } from '../../Redux/Slices/userSlice'

import CallToAction from "./../common/CallToAction"

const Home = ({data}) => {

let blogdatas = data.slice(0,3)
 

  const cardsData = [
    {
      title: "Fullstack development",
      info: "Learn to create professional, responsive websites using HTML, CSS, Bootstrap, JavaScript, JQuery, React, Python, Django & SQL.",
      index: 2,
      slug: 'fullstackweb',
      img: "full.png",

    },
    {
      title: "Mobile app development",
      info: "Learn to create mobile UI designs with native frameworks or cross-platform frameworks, React Native, Flutter",
      index: 4,
      slug:'mobileappdev',
      img: "mob.png"
    },
    {
      title: "Frontend development",
      info: "Learn to create professional, responsive websites using HTML, CSS, Bootstrap, JavaScript, JQuery, React, & SQL.",
      index: 1,
      slug: 'frontendweb',
      img: "full.png"
    },
    {
      title: "Backend development",
      info: "Learn Python, and its framework Django. Or  Node and Express.NET if your interest is to become a Nodejs developer.",
      index: 3,
      slug: 'backendweb',
      img: "backend.png"
    },
    {
      title: "UI/UX design",
      info: "Learn design thinking, wireframes, interactive prototyping. Earn a UX design certification to accelerate your career with cutting-edge skills.",
      index: 0,
      slug: 'productdesign',
      img: "ui.png"
    },
    {
      title: "Data science and AI",
      info: "Dive into prescriptive and predictive analytics, machine learning, artificial intelligence, statistical analysis, and programming languages.",
      index: 5,
      slug: 'datascience',
      img: "ds.png"
    },
  ]



  return (
    <div className="home">
      <Navbar />

      <div className="home">
        <div className="banner p-3 " data-aos="zoom-in-up">
          <div className="container p-md-5 p-1">
            <div className="row align-items-center">
              <div className='col-md-6 col-12 px-4'>
                <h2 className="h2" data-aos="fade-in"> Empower yourself with a skill that will make you fulfilled</h2>
                <p className='p'>Transform your passion for technology into a rewarding career and take your coding skills to the next level with any of our practical, industry-focused training programs.</p>
                <div className='info-btn container-fluid'>
                  <div className="row align-items-center gap-1">


                  </div>
                </div>
              </div>

              <div className="col-md-6 col-12 my-3 my-md-0">
                <img className='' src={bannerImg} alt="banner" />
              </div>
            </div>

          </div>
        </div>

      

        <div data-aos="zoom-in-up" className="next-cohort w-75 m-auto p-3 my-5 rounded border border-primary ">
          <div className="row align-items-center justify-content-between">
            <div className="col-md-5 col-12 d-flex justify-content-between align-items-center">
              <div className=''>
                <h6 className='small'><BiCalendar /> Next cohort starts:</h6>
                <h4>Sept 04</h4>
                <h6 className='small'>9:00am - 2:00pm WAT</h6>
              </div>
              <button className="btn-sm btn btn-primary">
                <Link to="/signup" className='nav-link'>Enroll Now</Link>
              </button>
            </div>

            <div className="col-md-2 col-12 text-md-center">
              <RxDividerVertical size={40} />
            </div>

            <div className="col-md-5 col-12 flex-column flex-md-row d-flex align-items-md-center justify-content-around">
              <h6 className='small text-capitalize'>Find Another cohort <br /> that fit your schedule</h6>

              <Link to="/calendar" className="mb-2 nav-link border border-primary text-center p-md-2 p-1 small text-primary rounded">
              see all cohort
              </Link>
            </div>
          </div>
        </div>

        <div data-aos="zoom-in-down" className="outline">
          <h6 className="text-center h2">Course Outline</h6>
          <img src={outline} className="d-block m-auto img-fluid" alt="outline" />

        </div>


        <div data-aos="zoom-in-up" className="cards container p-4">
          <div className="row gap-md-0 gap-3">
            {cardsData?.map((data, i) => (
              <div key={i} className="col-md-6 col-lg-4 my-2">
                <div className="card p-3">
                  <img src={`./../../../images/${data?.img}`} alt={data?.title} className="card-img-top img-fluid" />
                  <h5 className='my-3 text-capitalize '>{data?.title}</h5>
                  <p>{data?.info}</p>
                  <div className="border w-50 rounded p-2 border-primary d-flex gap-3 align-items-center">
                    <Link to={`/${data?.slug}`} className='fw-bold'>learn more</Link>
                    <TbMathGreater color='#000066' />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

       <div data-aos="zoom-in-down" className="learn_earn">
       <LearnEarn/>
       </div>

       <div className="ourprogram" data-aos="zoom-up">
          <OurProgram/>
       </div>

        <div className="advert p-5" data-aos="zoom-down">
     <Advert/>
     </div>



     <div className="testimony" data-aos="zoom-in-up">
      <Testimony/>
     </div>

     <div className="faq p-md-5" data-aos="zoom-down">

     <h4 className='text-center text-white text-capitalize '>frequently asked questions</h4>
        <img src={doubleline} className='doubleline' alt="" />

      <Faq/>
     </div>

     <div className="getstarted p-5" data-aos="">
      <Getstarted/>
     </div>

     <div className="event p-5" data-aos="zoom-down">

      <h5 className='text-center'>Upcoming Events, News and Blogs</h5>

      <img className='doubleline' src={doubleline} alt="line" />

      {data?.length !== 0 &&
      <>
      <Blogcard  blogdata={blogdatas}/>
      

     <div className="d-flex ">
     <div className='d-flex justify-content-center bg-white viewall my-4 my-md-0  '>
        <Link to="/blog" className='me-3 nav-link'>View all blogs</Link>
       <div className="mt-0"> <FaArrowRight/></div>
      </div>

    
     </div>

     </>
}

     </div>
      </div>

    
    <CallToAction/>


      <Footer/>
    </div>
  )
}

export default Home