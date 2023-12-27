import styled, { keyframes } from 'styled-components'

const scale = keyframes`
    from{
        transform: scale(0)
    } 
    to {
        transform: scale(1)
    }

    `

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  max-width: 1500px;
  margin-top: -100px;
    

`

export const Background = styled.div`
  background-image: url(${(props) => props.image});
  height: 50vh;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;

  &::before {
    content:'';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    
  }

  &::after {
    content:'';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px;
    background-image: linear-gradient(to top, #0f0f0f,rgba(0,0,0,0));
  }
`

export const Cover = styled.div`
  padding: 20px;
  display: flex;  
  align-items: center;
  height: 100%;
  z-index: 99;
  flex-direction: column;

  img {
    margin-bottom: 20px;
  }
  

  img {
    width: 400px;
    border-radius: 30px;
    box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
    animation: ${scale} 0.5s linear;
  }
`
export const Info = styled.div`
  padding: 20px;
  width: 50%;
  z-index: 99;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 10px;

  h2{
    font-size: 40px;
    font-weight: 700;
    color: #ffffff;
  }

  p{
    font-weight: 700;
    color: #ffffff;
    margin-top: 20px;
    margin-bottom: 30px;
  }

`
export const ContainerMovies = styled.div`


`
