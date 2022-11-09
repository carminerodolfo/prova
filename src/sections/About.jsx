import React from 'react'
import styled from 'styled-components'
import Tick from '../assets/tick.svg';
import TitleAbout from '../components/TitleAbout';

const AboutStyles = styled.div`
.container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 3rem;
  padding: 200px 0;
}
h1 {
  font-size: 4rem;
  color: #d9d9d9;
}
.container:hover {
  h2 {
  }
}
h2 {
    font-size:4rem;
    color: #d9d9d9;
}
.container__info {
  display: flex;
  flex-direction: column;
  gap: 5rem;
}

.info {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin: 1rem auto;
    border-radius: 10px;

}

.item {
    display: flex;
    gap: 3rem;
}
.text {
    position: relative;
    width: 100%;
    h3 {
      padding-bottom: 0.5rem;
    }
}
.time h3 {
    font-weight: 300;
}
.text::after {
position: absolute;
content: '';
width: 100%;
height: 2px;
background-color: #555555;
left: 50%;
top: 120%;
transform: translate(-50%, -50%);
}
}



.skills {
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-auto-flow: column;
  gap: 1rem;
  }
  
  .skills-ui {
    display: flex;
    border: 1px solid #555555;
    border-radius: 5px;
    gap: 1rem;
    padding: 0.5rem 1rem;
    width: 150px;
  }

  .skills-web {
    display: flex;
    border: 1px solid #555555;
    border-radius: 5px;
    gap: 1rem;
    width: 150px;
    padding: 0.5rem 1rem;
  }

  .skills-web:hover {
    border: 1px solid #d9d9d9;
    h3 {
    }
  }


  .skills-ui:hover {
    border: 1px solid #d9d9d9;
    h3 {
    }
  }

  h3 {
    color: #d9d9d9;
    font-size: 1.2rem;
    line-height: 1.2rem;
  }

  .skills img {
    width: 1.5rem;
    height: 1.5rem;
  }

  span {
    display: inline-block;
    color: #555555;
    font-size: 1rem;
    font-weight: 400;
  }

@media screen and (max-width:1200px) {
  .background {
    background-color: transparent;
  }
  .container {
    grid-template-columns: 1fr;
    gap: 2rem;
    justify-items: center;
    padding: 100px 0;
  }
  
}
  
@media screen and (max-width:768px) {
  .skills {
  grid-template-rows: repeat(4, auto);
}
  h3 {
        font-size: 1.2rem;
        padding-bottom: 0.5rem;
    }
    .item {
        flex-direction: column;
        gap: 0rem;
    }
}

@media screen and (max-width:368px) {
  .skills-web, .skills-ui {
    border: none;    
  }}

@media (hover: none){
  .title h2{
    color: #d9d9d9;
  }
}
`

const About = () => {
  return (
    <AboutStyles>
    <div className='container' id='about'>
      <TitleAbout></TitleAbout>
      <div className='container__info'>
        <div className='info'>
        <div className='item'>
            <div className="time">
                <h3>2022</h3>
            </div>
            <div className="text line">
                <h3>Laurea Magistrale in Teoria e Tecnologia della Comunicazione</h3>
                <p>Università degli Studi di Milano Bicocca</p>
            </div>
        </div>
        <div className='item'>
            <div className="time">
                <h3>2019</h3>
            </div>
            <div className="text">
                <h3>Laurea Triennale in Economia e Management</h3>
                <p>Università degli Studi di Salerno</p>
            </div>
        </div>
        <div className='item'>
            <div className="time">
                <h3>2014</h3>
            </div>
            <div className="text">
                <h3>Diploma</h3>
                <p>Liceo Scientifico di Telese Terme</p>
            </div>
        </div>
        </div>
        <div className='info'>
        <div className="skills">
              <div className='skills-ui'>
                <div className='symbol'>
                    <img src={Tick}/>
                </div>
                <div className='text-mini'>
                    <h3>Figma<span>Advanced</span></h3>
                </div>
              </div>
              <div className='skills-ui'>
                <div className='symbol'>
                    <img src={Tick}/>
                </div>
                <div className='text-mini'>
                    <h3>Adobe XD<span>Intermediate</span></h3>
                </div>
              </div>
              <div className='skills-web'>
                <div className='symbol'>
                    <img src={Tick}/>
                </div>
                <div className='text-mini'>
                    <h3>HTML<span>Advanced</span></h3>
                </div>
              </div>
              <div className='skills-web'>
                <div className='symbol'>
                    <img src={Tick}/>
                </div>
                <div className='text-mini'>
                    <h3>CSS    <span>Advanced</span></h3>
                </div>
              </div>
              <div className='skills-web'>
                <div className='symbol'>
                    <img src={Tick}/>
                </div>
                <div className='text-mini'>
                    <h3>Bootstrap<span>Intermediate</span></h3>
                </div>
              </div>
              <div className='skills-web'>
                <div className='symbol'>
                    <img src={Tick}/>
                </div>
                <div className='text-mini'>
                    <h3>JavaScript<span>Basic</span></h3>
                </div>
              </div><div className='skills-web'>
                <div className='symbol'>
                    <img src={Tick}/>
                </div>
                <div className='text-mini'>
                    <h3>React <span>Basic</span></h3>
                </div>
              </div>
              <div className='skills-web'>
                <div className='symbol'>
                    <img src={Tick}/>
                </div>
                <div className='text-mini'>
                    <h3>Next.js   <span>Basic</span></h3>
                </div>
              </div>
              </div>
        </div>
        </div>
    </div>
     </AboutStyles>
  )
}

export default About