import React, { useState } from "react";
import "./StaffMessages.css";

const StaffMessages = () => {
    const [messageClick, setMessageClick] = useState(false)

    const handleClick = () => {
        setMessageClick(true)
    }

    const messages = [{
        sender: 'Joe Nathan',
        role: 'Student',
        status: 'New',
        time: '18'
    }, {
        sender: 'Joe Nathan',
        role: 'Student',
        status: 'New',
        time: '18'
    }, {
        sender: 'Joe Nathan',
        role: 'Student',
        status: 'New',
        time: '18'
    }, {
        sender: 'Joe Nathan',
        role: 'Student',
        status: 'New',
        time: '18'
    }, {
        sender: 'Joe Nathan',
        role: 'Student',
        status: 'New',
        time: '18'
    }, {
    }, {
        sender: 'Joe Nathan',
        role: 'Student',
        status: 'New',
        time: '18'
    }, {
    }, {
        sender: 'Joe Nathan',
        role: 'Student',
        status: 'New',
        time: '18'
    }, {
    }, {
        sender: 'Joe Nathan',
        role: 'Student',
        status: 'New',
        time: '18'
    }, {
    }, {
        sender: 'Joe Nathan',
        role: 'Student',
        status: 'New',
        time: '18'
    }, {
        sender: 'Joe Nathan',
        role: 'Student',
        status: 'New',
        time: '18'
    }]

    const messageDetails = messageClick ? 'messageDetails' : 'messageDetailsInactive'
    const messageDetailsHide = !messageClick ? 'noMessages' : 'noMessagesInactive'

  return (
    <div className="messagesArea">
      <div className="topLine"></div>
      <div className="messagesHeader">
        <h2>Messages</h2>
      </div>
      <div className="bottomLine"></div>
      <div className="messageAreaBody">
        <div className="messagePreview">
            <div className="messagePreviewHeader">
                <h3>Chats <span>(2 messages)</span></h3>
                <hr />
            </div>
            {messages.map((message) => (
            <div className="messagePreviewItems" onClick={handleClick}>
              <div className="senderStatus">
                <div className="titleRole">
                  <h5>{message.sender}</h5>
                  <p> {message.role}</p>
                </div>
                <div className="previewStatus">
                  <p>{message.status}</p>
                </div>
              </div>
              <div className="previewTime">{message.time}min</div>
            </div>
          ))}
        </div>
        <div>
            <p className={messageDetails}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam eaque animi exercitationem architecto blanditiis voluptatibus tenetur aspernatur minus odit possimus officia consequuntur quo consectetur nihil at, a ex id doloremque inventore, aut amet debitis iste cupiditate? Nulla voluptatem animi repudiandae unde modi temporibus, sint commodi, repellat impedit distinctio nisi ullam eum similique minus voluptatibus! Nulla nemo perferendis dicta exercitationem cumque tenetur, neque eum facere nesciunt.</p>
            <p className={messageDetailsHide}>No chat selected Select a chat to view message</p>
        </div>
      </div>
    </div>
  );
};

export default StaffMessages;