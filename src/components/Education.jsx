import React from 'react'
import styled from 'styled-components'

const EducationStyles = styled.div`
.container {
    padding: 100px 0;
    display: flex;
}
h2 {
    font-size:3rem;
    color: #1e1e1e;
    text-shadow: -1px 0 #555555, 0 1px #555555, 1px 0 #555555, 0 -1px #555555;
    border: 2px solid orange;
}
.info {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin: 2rem auto;
}

.item {
    display: flex;
    gap: 3rem;
}
.text {
    position: relative;
    width: 100%;
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

@media screen and (max-width: 768px) {
    h3 {
        font-size: 1.2rem;
        padding-bottom: 0.5rem;
    }
    .item {
        flex-direction: column;
        gap: 0rem;
    }
}
`


const Education = () => {
  return (
    <EducationStyles>
    <div className='container'>
        
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
        </div>
    </EducationStyles>
  )
}

export default Education