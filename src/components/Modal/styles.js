import styled from 'styled-components'

export const Container = styled.div`
    background-color: #000;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    padding: 50px;
    max-width: 1200px;

    iframe{
        border: none;
    }

`

export const Background2 = styled.div`
    
    height: 100vh;
    width: 100vw;    
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.7);   
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
`
