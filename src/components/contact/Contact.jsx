import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./contact.css";

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // emailjs.send('service_by96pju','template_2t1563n', formRef.current, '<YOUR USER ID>')
    // .then((response) => {
    //    console.log('SUCCESS!', response.status, response.text);
    // }, (err) => {
    //    console.log('FAILED...', err);
    // });
  };
  return (
    <div className="contact-container">
      <div className="contact-bg"></div>
      <div className="contact-wrapper">
        <div className="contact-left">
          <h1 className="contact-title">Lorem ipsum may be used as a</h1>
          <div className="contact-info">
            <div className="contact-info-item">
              <img
                src={require("../../img/phone.png")}
                alt=""
                className="contact-icon"
              />
              +0 123 4454 333
            </div>
            <div className="contact-info-item">
              <img
                src={require("../../img/email.png")}
                alt=""
                className="contact-icon"
              />
              thaiduong6898@gmail.com
            </div>
            <div className="contact-info-item">
              <img
                src={require("../../img/address.png")}
                alt=""
                className="contact-icon"
              />
              Lorem ipsum may be used
            </div>
          </div>
        </div>
        <div className="contact-right">
          <p className="contact-desc">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input placeholder="Name" type="text" name="userName" />
            <input placeholder="Subject" type="text" name="userSubject" />
            <input placeholder="Email" type="text" name="userEmail" />
            <textarea rows={5} placeholder="Message..." name="message" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
