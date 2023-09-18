import React from "react";
import Sidebar from "../Sidebar";
import "./StaffOverview.css";
import icon from "../../../assets/list_check_icon_151227.png";
import students from '../../../assets/profile-3user.svg'

const StaffOverview = () => {
  const overviewData = [
    {
      title: "No of students",
      value: 140,
      icon: students,
    },
    {
      title: "Current Cohorts",
      value: 8,
      icon: "",
    },
    {
      title: "Attendance",
      value: 120,
      icon: "",
    },
    {
      title: "Completed Cohorts",
      value: 13,
      icon: "",
    },
  ];

  const taskmanagement = [
    {
      title: "Grade students assignment",
      course: "UI/UX",
      cohort: "Cohort 1",
    },
    {
      title: "Grade students assignment",
      course: "UI/UX",
      cohort: "Cohort 2",
    },
    {
      title: "Grade students assignment",
      course: "UI/UX",
      cohort: "Cohort 3",
    },
    {
      title: "Grade students assignment",
      course: "UI/UX",
      cohort: "Cohort 4",
    },
  ];

  return (
    <div className="overviewArea">
      <div className="topLine"></div>
      <div className="overviewHeader">
        <h2>Overview</h2>
        <div className="overviewTextDate">
          <div className="datePicker">
            <span>From: </span>
            <input type="date" />
            <span>To: </span>
            <input type="date" />
          </div>
          <button className="btn createBtn">
            <span>Create</span>
          </button>
        </div>
      </div>
      <div className="bottomLine"></div>
      <div className="overviewBody">
        <div className="overviewStatistics">
          {overviewData.map((stats) => (
            <div className="overviewCard">
              <h5>{stats.title}</h5>
              <div className="valueIcon">
                <h2>{stats.value}</h2>
                <img src={stats.icon} alt="" />
              </div>
            </div>
          ))}
        </div>
        <div className="taskAttendance">
          <div className="taskManagement">
            <div className="taskManagementHeader">
              <div className="taskManagementTitle">
                <img src={icon} alt="" className="taskManagementIcon" />
                <strong>Task Management</strong>
              </div>
              <p>See all</p>
            </div>
            {taskmanagement.map((tasks) => (
              <div className="taskDetails">
                <h5>{tasks.title}</h5>
                <div className="taskSubdetails">
                  <span>{tasks.course}</span>
                  <span>{tasks.cohort}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="attendanceTracking">
            <div className="attendanceHeader">
              <h5>Attendance tracking</h5>
              <select name="cohorts" id="cohorts">
                <option value="cohort1">Cohort 1</option>
                <option value="cohort1">Cohort 2</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffOverview;
