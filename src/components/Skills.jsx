import React from 'react'
import Tick from '../assets/tick.svg';
import styled from 'styled-components';


const SkillsStyles = styled.div`
.container {
    padding: 100px 0;
    display: flex;
    justify-content: center;
}
h2 {
font-size:3rem;
color: #1e1e1e;
text-shadow: -1px 0 #555555, 0 1px #555555, 1px 0 #555555, 0 -1px #555555;
border: 2px solid orange;
}
.skills {
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-auto-flow: column;
  gap: 1rem;
  }
  
  .skills-ui {
    display: flex;
    border: 1px solid #00a6fb;
    border-radius: 5px;
    gap: 1rem;
    padding: 0.5rem 1rem;
    width: 150px;
  }

  .skills-web {
    display: flex;
    border: 1px solid #f0c808;
    border-radius: 5px;
    gap: 1rem;
    width: 150px;
    padding: 0.5rem 1rem;
  }

  .skills-web:hover {
    background-color: #f0c808;
    h3 {
      color: #1e1e1e;
    }
  }


  .skills-ui:hover {
    background-color: #00a6fb;
    h3 {
      color: #1e1e1e;
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
  }
@media screen and (max-width:768px) {
  .skills {
  grid-template-rows: repeat(4, auto);
}
}
`


const Skills = () => {
  return (
      <SkillsStyles>
    <div className='container'>
        <div className="skills">
              <div className='skills-ui'>
                <div className='symbol'>
                    <img src={Tick}/>
                </div>
                <div className='text'>
                    <h3>Figma<span>Advanced</span></h3>
                </div>
              </div>
              <div className='skills-ui'>
                <div className='symbol'>
                    <img src={Tick}/>
                </div>
                <div className='text'>
                    <h3>Adobe XD<span>Intermediate</span></h3>
                </div>
              </div>
              <div className='skills-web'>
                <div className='symbol'>
                    <img src={Tick}/>
                </div>
                <div className='text'>
                    <h3>HTML<span>Advanced</span></h3>
                </div>
              </div>
              <div className='skills-web'>
                <div className='symbol'>
                    <img src={Tick}/>
                </div>
                <div className='text'>
                    <h3>CSS    <span>Advanced</span></h3>
                </div>
              </div>
              <div className='skills-web'>
                <div className='symbol'>
                    <img src={Tick}/>
                </div>
                <div className='text'>
                    <h3>Bootstrap<span>Intermediate</span></h3>
                </div>
              </div>
              <div className='skills-web'>
                <div className='symbol'>
                    <img src={Tick}/>
                </div>
                <div className='text'>
                    <h3>JavaScript<span>Basic</span></h3>
                </div>
              </div><div className='skills-web'>
                <div className='symbol'>
                    <img src={Tick}/>
                </div>
                <div className='text'>
                    <h3>React <span>Basic</span></h3>
                </div>
              </div>
              <div className='skills-web'>
                <div className='symbol'>
                    <img src={Tick}/>
                </div>
                <div className='text'>
                    <h3>Next.js   <span>Basic</span></h3>
                </div>
              </div>
            </div>
        </div>
        </SkillsStyles>
  )
}

export default Skills