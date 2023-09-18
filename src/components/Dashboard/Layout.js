import React from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Container } from "reactstrap";
import Home from "./pages/Home";
import {toast} from "react-toastify"
import { useRef } from "react";
import "./layout.css"
import Applicants from "./pages/Applicants";
import Students from "./pages/Students";
import Staffs from "./pages/Staffs";
import StaffProfile from "./pages/StaffProfile";
import StudentProfile from "./pages/StudentProfile";
import Finance from "./pages/Finance";
import Syllabus from "./pages/Syllabus";
import Cohortsyllabus from "./pages/Cohortsyllabus";
import Exams from "./pages/Exams";
import Calendar from "./pages/Calendar";
import Blog from "./pages/Blog";
import Receipt from "./pages/Receipt";
import { useSelector } from "react-redux";
import { LastPage } from "../../Redux/Slices/onboardslice";



const Layout = () => {

  const navigate = useNavigate()

  var sb = useRef()

  const {text} = useParams()

  const user = useSelector((state) => state?.user)
  const dispatch = useNavigate()



  const showPage = () =>{

    if(text === "home"){
      return <Home/>
      
    }else if(text === "calendar"){
      return <Calendar/>
    
    }else if(text === "blog"){
      return <Blog/>
    }
    
    else if(text === "applicants"){
    
      return <Applicants/>
    }else if(text === "students"){
      const uid = new URLSearchParams(window.location.search).get("id")
      return uid === null ? <Students/>: <StudentProfile id={uid} />
    }else if(text === "staffs"){
      const uid = new URLSearchParams(window.location.search).get("id")
      return uid === null ? <Staffs/>: <StaffProfile id={uid} />
      
    }else if(text === "finances"){
      return <Finance/>

    }else if(text === "syllabus"){
      const uid = new URLSearchParams(window.location.search).get("id")
      return uid === null ? <Syllabus/>: <Cohortsyllabus id={uid} />
    
    }else if(text === "exam"){
      return <Exams/>
    
    }else if(text === "receipt"){
      return <Receipt/>
    }
    
  }

 


  function Oops(){
    toast.error("Oops! you need to pay to access the dashboard")
   setTimeout(() =>{
    dispatch(LastPage())
    navigate("/signup")
   }, 1000)
  }


  return (
  
   <>
   
   {user?.info?.role === "admin" ?
   
   <main className="" >
   <div className="pageWrapper d-lg-flex">
     {/********Sidebar**********/}
     <aside className="sidebarArea shadow" ref={sb}>
       <Sidebar sideBarArea={sb}/>
     </aside>
     {/********Content Area**********/}

     <div className="contentArea w-100">
       {/********header**********/}
       <Header sideBarArea={sb}/>
       {/********Middle Content**********/}
       <Container className="p-4 wrapper" fluid>
         {showPage()}
       </Container>
     </div>
   </div>
 </main>

 :



 user?.info?.paymentstatus === 1?


 <main className="" >
 <div className="pageWrapper d-lg-flex">
   {/********Sidebar**********/}
   <aside className="sidebarArea shadow" ref={sb}>
     <Sidebar sideBarArea={sb}/>
   </aside>
   {/********Content Area**********/}

   <div className="contentArea w-100">
     {/********header**********/}
     <Header sideBarArea={sb}/>
     {/********Middle Content**********/}
     <Container className="p-4 wrapper" fluid>
       {showPage()}
     </Container>
   </div>
 </div>
</main>

// :

  <Oops/> 

 

 
{/* } */}
   
 




   </>

  );
};

export default Layout;

