import React from 'react'
import { NavLink } from 'react-router-dom';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import SocialMediaArrow from '../assets/arrow-down.svg'
import ScrollDownArrow from '../assets/arrow-scroll.svg'
import Instagram from '../assets/instagram.svg'
import Linkedin from '../assets/linkedin.svg'
import Twitter from '../assets/twitter.svg'

const HeroStyles = styled.div`
.hero{
    height: 100vh;
    min-height: 500px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    }
    .hero__heading {
        width: 100%;
        text-align: left;
        font-size: 4rem;
        margin: 0 auto 4rem;
        position: relative;
        span {
            width: 100%;
        }
    }
    .link {
        color: #d9d9d9; 
    }
    .hero__heading:hover {
        
    }

    .hero__name {
    font-size: 4rem;
    color: #d9d9d9;
    }
    
    .hero__job1 {
        color: #00a6fb;
    }

    .hero__job2 {
        color: #f0c808;
    }
    
    .hero__social, .hero__scrollDown {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        position: absolute;
        bottom: 20px;
        width: 50px;
    }
    .hero__social {
        left: 20px;
    }
    .hero__scrollDown {
        right: 20px;
    }
    .hero__social__indicator, .hero__scrollDown {
        width: 50px;
        p {
            transform: translateY(-100px) rotate(90deg);
            letter-spacing: .7rem;
            text-transform: uppercase;
        }
        img {
            max-height: 45px;
            width: 20px;
            margin: 0 auto;
            object-fit: contain;
        }
    }

    .hero__scrollDown {
        img {
            max-height: 80px;
        }
    }
    .hero__social__text {
        transform: translateY(-100px);
        ul {
            li{      
            }
            a {
                display: inline-block;
                text-transform: uppercase;
                letter-spacing: 5px;
                margin-bottom: 0.5rem;
            }
            img {
                width: 24px;
                cursor: pointer;
            }
        }
    }
    .hero__social__indicator {
        p {
            transform: translateY(-20px) rotate(270deg);
        }
        img {
            transform: translateY(-120px) rotate(180deg);
        }
    }
}



@media only screen and (max-width: 768px) {
    .hero {
      min-height: 450px;
    }
    .hero__heading {
      font-size: 3rem;
      margin: 0 auto 10rem;
      width: 90%;
      text-align: center;
    }
    .hero__name {
        font-size: 2rem;
    }
    
    .hero__social {
        left: 0.5rem;
      .hero__social__indicator {
        p {
          font-size: 1rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 0.8rem;
              margin-bottom: 1rem;
            }
          }
          img {
              max-width: 24px;
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0.5rem;
      gap: 1rem;
      img {
      }
      p {
        font-size: 1rem;
      }
    }
  }
}
`;



const HeroSection = () => {
  return (
    <HeroStyles>
        <div className="hero container">
            <div className='container'>
                <h1 className='hero__heading'>
                    <span className='hero__name'>Carmine Tagliafierro,<br></br></span>
                    <span className='hero__job1'>UI Designer<span className='link'> &amp; </span></span>
                    <span className='hero__job2'>Web Developer</span>
                </h1>
                <div className="hero__social">
                    <div className="hero__social__text">
                        <ul>
                            <li>
                                <a><img src={Instagram}></img></a>
                            </li>
                            <li>
                                <a><img src={Twitter}></img></a>
                            </li>
                            <li>
                                <a><img src={Linkedin}></img></a>
                            </li>
                        </ul>
                    </div>
                    <div className="hero__social__indicator">
                        <img src={SocialMediaArrow} alt='social media arrow'/>
                        <p>Follow</p>
                    </div>
                </div>
                <div className="hero__scrollDown">
                    <p>Scroll</p>
                    <img src={ScrollDownArrow} alt=''/>
                </div>
            </div>
        </div>
    </HeroStyles>
  )
}

export default HeroSection