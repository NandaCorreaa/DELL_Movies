import Lupa from "../Imgs/lupa.svg"
import LogoDell from "../Imgs/LogoDell.svg"
import styled from "styled-components"

const HeaderContainer = styled.header`
    width: 100%;
    height: 11vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #000000;

    img {
        width: 9vw;
        cursor: pointer;
    }
`
const Nav = styled.nav`
    width: 25%;
    display: flex;

    ul {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
    }
    
    a {
        color: #FFF;
        font-size: 25px;
    }

    img{
        width: 2vw;
    }
`
export default function Header () {
    return (
        <HeaderContainer>
            <img src={LogoDell} alt="Logo Dell" />
            <Nav>
                <ul>
                <li><a href="#">Séries</a></li>
                <li><a href="#">Filmes</a></li>
                </ul>
            </Nav>
            <Nav>
                <ul>
                    <li><img src={Lupa} alt="Ícone de pesquisa" /></li>
                    <li><a href="#">Filtro</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </Nav>
        </HeaderContainer>
    )
}