import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Project from '../assets/lse-presentation.png';
import Project3 from '../assets/life.svg';
import Project2 from '../assets/bonc.png';
import TitleProjects from './TitleProjects';


const ProjectsStyles = styled.div`  
.container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 200px 0;
}
h1 {
  font-size: 4rem;
  color: #d9d9d9;
}

  .projects__container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin-top: 3rem;
  }
  h2 {
    font-size: 4rem;
    margin-bottom: 1rem;
    color: #d9d9d9;
  }
  .project__item {
    width: auto;
    min-height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    overflow: hidden;
    border-radius: 5px;
  }
  .project__item img {
    width:100%;
    transition:all 0.3s ease-in-out;
  }
  .project__title {
    position: absolute;
    color: #1e1e1e;
    z-index:10;
    background-color: #d9d9d9;
    border-radius: 5px;
    padding: 0.5rem;
    filter: opacity(0);
    transition: all 0.3s ease-in-out;
  }
  .project__description {
    position: absolute;
    color: #d9d9d9;
    font-weight: 600;
    z-index:10;
    filter: opacity(0);
    margin-top: 5rem;
    transition: all 0.3s ease-in-out;
  }

  .project__item:hover img{
    transform:scale(1.1);
    filter:brightness(0.5);
}
.project__item:hover .project__title, .project__item:hover .project__description{
    filter:opacity(1);
}

@media screen and (max-width: 1200px) {
  .container {
        padding: 100px 0;

  }

@media screen and (max-width:768px) {
  h2 {
  }
}

@media (hover:none) {
  .project__title, .project__description {
    filter: opacity(1);
  }
  .project__item img{
    filter: brightness(0.5);
}
}


`


const Projects = () => {
  return (
    <ProjectsStyles>
    <div className='work section container' id='portfolio'>
    <TitleProjects></TitleProjects>
      <div className="projects__container">
        <div className="project__item">
          <h3 className='project__title'>Latent Space Explorer</h3>
          <p className='project__description'>Web App</p>
          <img src={Project}/>
        </div>
        <div className="project__item">
          <h3 className='project__title'>BOONC</h3>
          <p className='project__description'>Mobile App</p>
          <img src={Project2}/>
        </div>
        <div className="project__item">
          <h3 className='project__title'>LIVES SAVED</h3>
          <p className='project__description'>Data Visualization</p>
          <img src={Project3}/>
        </div>
        </div>
      </div>
    </ProjectsStyles>
  )
}

export default Projects;

