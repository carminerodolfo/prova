import React from 'react'
import styled from 'styled-components'

const TitleStyles = styled.div`
.container__title {
    
}
.title__section {
    position: relative;
}
.title__section::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 2px;
    background-color: #555555;
    left: 50%;
    top: 100%;
    transform: translate(-50%, -50%);
}
h2 {
    color: #d9d9d9;
    font-size: 4rem;
}
`

const TitleContact = () => {
    return (
        <TitleStyles>
      <div className='container__title'>
          <div className='title__section'>
              <h2>Contact</h2>
          </div>
      </div>
      </TitleStyles>
    )
  }

export default TitleContact