import styled from 'styled-components'

export const Container = styled.div`
    min-height: 100px;
    z-index: 99;
    width: 100%;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 90px;
    padding-left: 10px;
    background-color: ${ props => props.changeBackground ? '#000' : 'transparent'};
    transition: background-color 0.3s ease-in-out;


img{
   width: 100px;
    margin-left: 20px;
}
`

export const Menu = styled.ul`
display: flex;
list-style: none;
gap: 50px

`

export const Li = styled.li`
font-weight: 600;
cursor: pointer;
font-size: 20px;
position: relative;

a{
    text-decoration: none;
    color: #ffffff; 
    
}

&::after {
    content: '';
    height: 3px;
    width: ${(props) => (props.isActive ? '100%' : 0)};
    background-color: #D2691E;
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    transition: width 0.5s ease-in-out;

}

&:hover::after{
    width: 100%;
}

`

