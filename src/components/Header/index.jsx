import Logo from '../../assets/nice-movies2.png'
import { Container, Menu, Li} from './styles'
import { Link, useLocation } from 'react-router-dom'
import {useState} from 'react'

function Header(){

    const [changeBackground, setChangeBackground] = useState(false)
    const {pathname} = useLocation()

    window.onscroll = () => {
        if(!changeBackground && window.scrollY > 150){
            setChangeBackground(true)
        } 
        if(changeBackground && window.scrollY <= 150){
            setChangeBackground(false)
        } 
    }
    

    return (

        <Container changeBackground={changeBackground}>
            <img src={Logo} alt="logo-nice-movies"/>
            <Menu>
                <Li isActive={pathname === '/'}>
                    <Link to="/">Home</Link>
                </Li>
                <Li isActive={pathname.includes('movies')}>
                    <Link to="/movies">Filmes</Link>
                </Li>
                <Li isActive={pathname.includes('series')}>
                    <Link to="/series">Series</Link>
                </Li>
            </Menu>
            
        </Container>

    )
}

export default Header