import React, { useState, useLayoutEffect } from 'react'
import './Navbar.css'
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { infoCtrl, loginCtrl } from '../../Redux/Slices/userSlice'
import axios from 'axios'
import { clearData, LastPage } from '../../Redux/Slices/onboardslice';

function Navbar() {

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const login = useSelector((state) => state?.user?.login)



  const token = useSelector((state) => state?.user?.token);

  // const [user, setUser] = useState(null)
  const user = useSelector((state) => state?.user)




  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpen2, setDropdownOpen2] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const toggle2 = () => setDropdownOpen2((prevState) => !prevState);


  useLayoutEffect(() => {

    axios.get(`${process.env.REACT_APP_API_URL}/profile`, {
      headers: {
        Authorization: token !== null && `Bearer ${token}`
      }
    }).then((res) => {
     
      // setUser(res?.data?.info)
      dispatch(infoCtrl(res?.data?.info))
    })
    .catch((err) => console.log(err))

  }, [dispatch, token])

  const pushToReceiptPage = () =>{
    dispatch(LastPage())
    navigate("/signup")
  }



  const handleLogout = () => {
    
    dispatch(loginCtrl(null))
    dispatch(infoCtrl({}))
    navigate("/login")
  }

  return (
    <nav className="container-fluid navbar navbar-expand-md">
      <div className="container">
        <Link to="/" className="navbar-brand" href="#">
          <img className="nav-logo" src="./../../../images/logo.png" alt="" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header">
            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">

           
                <Dropdown isOpen={dropdownOpen} toggle={toggle} >
                <DropdownToggle className='fw-bold' caret>Courses</DropdownToggle>
               
               <DropdownMenu  className='menu'>

                  <div className="d-flex flex-wrap">
                    <Link className='nav-link w-50' to={"/productdesign"}>Product Design</Link>
                    <Link className='nav-link w-50' to={"/frontendweb"}>Frontend</Link>
                    <Link className='nav-link w-50' to={"/fullstackweb"}>FullStack</Link>
                    <Link className='nav-link w-50' to={"/backendweb"}>Backend</Link>



                    <Link className='nav-link w-50' to={"/mobileappdev"}>Mobile  App</Link>
                    <Link className='nav-link w-50' to={"/datascience"}>Data   Science & AI</Link>
                    <Link className='nav-link w-50' to={"/dataanalytics"}>Data Analytics</Link>
 
                  </div>
                </DropdownMenu>
               
              </Dropdown>
            

              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/faq">FAQs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/blog">Blog</Link>
              </li>
              {
                login ?
                  <Dropdown isOpen={dropdownOpen2} toggle={toggle2} >
                    <DropdownToggle className='fw-bold' caret>
                      
                      {user?.info?.role === "admin" ? "Admin" : user?.info?.paymentstatus === 0 ? "Upload Your Receipt" : user?.info?.fname}
                    </DropdownToggle>
                    <DropdownMenu >
                    {user?.info?.role !== "admin" &&  user?.info?.paymentstatus === 0 &&
                      <DropdownItem onClick={pushToReceiptPage} > <p className='fw-bold'>Click To Upload</p></DropdownItem>
                    }
                      <DropdownItem > <Link className='nav-link' to={`/dashboard/${user?.info?.role === "admin" ? "home" : "syllabus"}`}>Dashboard</Link> </DropdownItem>
                      <DropdownItem >
                        <button onClick={handleLogout} className="btn m-auto  w-100 btn-sm btn-outline-danger">Logout</button>
                      </DropdownItem>

                    </DropdownMenu>
                  </Dropdown>
                  :
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>


              }



            </ul>

            <div className="d-flex gap-3">
              <Link to="/signup" className="btn btn-primary">Get Started</Link>
              <Link to="/hire" className="btn btn-outline-primary">Hire</Link>
            </div>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar