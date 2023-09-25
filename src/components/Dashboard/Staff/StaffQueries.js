import React, { useState } from "react";
import "./StaffOverview.css";
import "./StaffQueries.css";

const StaffQueries = () => {
  const [details, setDetails] = useState(false)

  const clickHandler = () => {
    setDetails(true)
  }

  const queries = [
    {
      title: "Query 1.0",
      from: "Admin",
      status: "Unsettled",
      time: '12'
    },
    {
      title: "Query 2.0",
      from: "Admin",
      status: "Unsettled",
      time: '12',
    },
    {
      title: "Query 3.0",
      from: "Admin",
      status: "Settled",
      time: '12'
    },
    {
      title: "Query 4.0",
      from: "Admin",
      status: "Unsettled",
      time: '12'
    },
    {
      title: "Query 5.0",
      from: "Admin",
      status: "Unsettled",
      time: '12'
    },
    {
      title: "Query 5.0",
      from: "Admin",
      status: "Unsettled",
      time: '12'
    },
    {
      title: "Query 5.0",
      from: "Admin",
      status: "Unsettled",
      time: '12'
    },
    {
      title: "Query 5.0",
      from: "Admin",
      status: "Unsettled",
      time: '12'
    },
    {
      title: "Query 5.0",
      from: "Admin",
      status: "Unsettled",
      time: '12'
    },
    {
      title: "Query 5.0",
      from: "Admin",
      status: "Unsettled",
      time: '12'
    },
    {
      title: "Query 5.0",
      from: "Admin",
      status: "Unsettled",
      time: '12'
    },
  ];

  const queryDetails = details ? 'queryDetails' : 'queryDetails-inactive'
  const notSelected = !details ? 'selected' : 'selected-inactive'

  return (
    <div className="queryArea">
      <div className="topLine"></div>
      <div className="queryAreaHeader">
        <h2>Queries</h2>
      </div>
      <div className="bottomLine"></div>
      <div className="queryAreaBody">
        <div className="queryPreview">
          <div className="queryPreviewHeader">
            <h3>Recent <span>(2 new queries)</span></h3>
            <hr />
          </div>
          {queries.map((query) => (
            <div className="queryPreviewItems" onClick={clickHandler}>
              <div className="senderStatus">
                <div className="titleSender">
                  <h5>{query.title}</h5>
                  <p>From: {query.from}</p>
                </div>
                <div className="previewStatus">
                  <p>{query.status}</p>
                </div>
              </div>
              <div className="previewTime">{query.time}min</div>
            </div>
          ))}
        </div>
        <div className="queryDetails">
          <div className="queryDetailsHeader">
            <h3>Query 1.0</h3>
            <hr />
          </div>
          <div >
            <p className={queryDetails}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
              recusandae optio qui, cumque nobis similique? Enim id excepturi et
              eveniet, maiores sit voluptas amet suscipit similique error
              expedita debitis quas! Dolorum commodi earum temporibus, minus
              aperiam neque molestiae cupiditate dolores aliquid, facere autem
              accusamus repudiandae eum, quasi blanditiis voluptate dolor
              obcaecati beatae nostrum laborum.
            </p>
            <p className={notSelected}>No query selected. Please select a query and view to resolve</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffQueries;
