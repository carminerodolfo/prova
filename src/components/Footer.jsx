import React from 'react'
import Instagram from '../assets/instagram.svg'
import Linkedin from '../assets/linkedin.svg'
import Twitter from '../assets/twitter.svg'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const FooterStyle = styled.div`
.hero__social__text {
  margin-bottom: 1rem;
        ul {
          display: flex;
          align-items: center;
            li{      
              padding: 0 0.5rem;
            }
            a {
                display: inline-block;
            }
            img {
                width: 25px;
                cursor: pointer;
            }
        }
    }
.container-footer {
    background: #555555;
}

.footer-box {
    margin: 0rem auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.footer-links {
    display: flex;
    justify-content: center;
    padding: 2rem;
}

.icons-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 150px;
}

.img {
    color: #040f0f;
    font-size: 24px;
}

.terms {
    display: flex;
    margin-bottom: 10px;
}



@media screen and (max-width: 576px) {
    .footer-links {
        text-align: center;
        padding: 2rem 0;
}
}
`;

const Footer = () => {
  return (
    <FooterStyle>
    <div className="container-footer">
        <div className='footer-box'>
           <div className="footer-links">
                 <p>Policy</p>
           </div>
            <div className='terms'>
                <p>@2022. All rights reserved.</p>
            </div>
           </div>
      </div>
    </FooterStyle>
  )
}

export default Footer