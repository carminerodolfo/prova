import React, { useState, useRef } from 'react'
import styled from 'styled-components';
import Instagram from '../assets/instagram.svg'
import Linkedin from '../assets/linkedin.svg'
import Twitter from '../assets/twitter.svg'
import Email from '../assets/email.svg'
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';
import TitleContact from './TitleContact';

const ContactStyles = styled.div`
.container {
  padding: 200px 0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
h2 {
  font-size: 4rem;
  margin-bottom: 1rem;
  color: #d9d9d9;
}
.left {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 700px;
  margin: 0.5rem auto;
}
.right {
  width: 100%;
  max-width: 700px;
}
.social {
  display: flex;
  gap: 3rem;
  align-items: center;
  padding: 1rem;
  border-radius: 5px;
  position: relative;
  background-color: #1e1e1e;
  img {
  width: 32px;
  }
}

.form-group {
  width: 100%;
  margin-bottom: 1.5rem;
}
.label {
  font-size: 1.5rem;
}
input, textarea {
  width: 100%;
  font-size: 2rem;
  padding: 1.2rem;
  color: #1e1e1e;
  background-color: #d9d9d9;;
  outline: none;
  border: none;
  border-radius: 5px;
  margin-top: 0.5rem;
  }
textarea {
  min-height: 250px;
  resize: vertical;
}
button[type='submit'] {
  background-color: #d9d9d9;
  color: #1e1e1e;
  font-size: 1rem;
  display: inline-block;
  outline: none;
  border: none;
  padding: 0.5rem 2rem;
  border-radius: 5px;
  cursor: pointer;
}
button {
  float: right;
}
}

@media screen and (max-width: 1200px) {
  .container {
        padding: 100px 0;

  }

}
@media only screen and (max-width: 768px) {
    .contact__wrapper {
      flex-direction: column;
    }
    .social {
      flex-direction: column;
      gap: 1rem;
      text-align: center;
    }
    .contact__wrapper::after {
      display: none;
    }
    .left,
    .right {
    }
    .right {
      padding: 4rem 2rem 2rem 2rem;
    }
    h2 {
      text-align: left;
    }
  }
`;


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_07xapyl', 'template_dcq6zdt', form.current, 'VpNSItA0cuBpGniGL')
      .then((result) => {
          console.log(result.text);
          console.log('message sent');
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <ContactStyles>
    <div className="container" id='contacts'>
      <TitleContact></TitleContact>
        <div className="left">
          <div className="social">
            <img src={Instagram}></img>
            <h4>Account:</h4>
            <p>carmine.tagliafierro</p>
          </div>
          <div className="social">
            <img src={Twitter}></img>
            <h4>Account:</h4>
            <p>Non disponibile al momento</p>
          </div>
          <div className="social">
            <img src={Linkedin}></img>
            <h4>Account</h4>
            <p>Carmine Rodolfo Tagliafierro</p>
          </div>
          <div className="social">
            <img src={Email}></img>
            <h4>Indirizzo:</h4>
            <p>c.tagliafierro@libero.it</p>
          </div>
        </div>
      {/*}
        <div className="right">
          <form ref={form} onSubmit={sendEmail}>
            <div className='form-group'>
              <label>Name</label>
              <input type='text' name='user_name'/>
            </div>
            <div className='form-group'>
            <label>Email</label>
            <input type='text' name='user_email'/>
            </div>
            <div className='form-group'>
            <label>Message</label>
            <textarea name='message'/>
            </div>
            <button type='submit' value='Value'>Send</button>
          </form>
  </div>*/}
      
    </div>
  </ContactStyles>
  )
}

export default Contact