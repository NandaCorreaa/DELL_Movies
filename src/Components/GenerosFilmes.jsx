import styled from "styled-components"

const GenerosContainer = styled.section`
    background-color: #000;
    color: #FFF;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 12vh;
    font-size: 20px;

    button {
        border: none;
        background: none;
        color: #FFF;
        font-size: 20px;
        cursor: pointer;
    }
`
const Nav = styled.nav`
    display: flex;
    align-items: center;
    width: 60%;

    ul {
        width: 100%;
    }
    
    li {
        display: flex;
        justify-content: space-between;
    }

    a {
        color: #FFF;
    }
`

export default function GenerosFilmes () {

    const generos = ["Popular","Drama","Ação","Aventura","Comédia","Crime","Fantasia","Família"]

    return (
        <GenerosContainer>
            <Nav>
                <ul>
                    <li>
                        {generos.map((item) => (
                            <a href="">{item}</a>
                        ))}
                    </li>
                </ul>
            </Nav>
            <button>Filtro ▼</button>
        </GenerosContainer>
    )
}