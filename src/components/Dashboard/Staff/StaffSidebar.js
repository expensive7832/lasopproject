import React from "react";
import home from "./../../../assets/home1.png";
import Students from "./../../../assets/profile-2user.svg";
import Calendar from "./../../../assets/calendar-2.svg";
import { Link, useLocation } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import "./StaffSidebar.css";

const StaffSidebar = () => {
  const navigation = [
    {
      title: "Overveiw",
      href: "/dashboard/home/",
      icon: home,
    },
    {
      title: "Students",
      href: "/dashboard/students/",
      icon: Students,
    },
    {
      title: "Classroom",
      href: "/dashboard/classroom",
      icon: Calendar,
    },
    {
      title: "Assessments",
      href: "/dashboard/assessments",
    },
    {
      title: "Projects",
      href: "/dashboard/projects",
    },
    {
      title: "Messages",
      href: "/dashboard/messages",
    },
    {
      title: "Queries",
      href: "/dashboard/queries",
    },
  ];

  let location = useLocation();

  return (
    <div className="p-2 sidebarArea">
      <div className="d-flex align-items-center flex-column justify-content-around gap-3">
        <Link
          to="/"
          className="text-start fw-bold text-decoration-none h2 text-primary py-0 py-md-3"
        >
          <img
            className=" "
            style={{ width: "4rem" }}
            src="./../../../../../images/logo.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="pt-4 mt-2 d-flex justify-content">
        <Nav vertical className="sidebarNav">
          {navigation.map((nav, index) => (
            <NavItem
              className={
                location.pathname === nav.href
                  ? "sidebarActive rounded fw-bold nav-link py-3"
                  : "nav-link text-white py-3"
              }
            >
              <Link to={nav.href}></Link>
              <img src={nav.icon} />
              <span className="ms-3 d-inline-block">{nav.title}</span>
            </NavItem>
          ))}

          <NavItem>
            <button type="submit" class="btn logoutBtn w-100">
              Log out
            </button>
          </NavItem>
        </Nav>
      </div>
    </div>
  );
};

export default StaffSidebar;
