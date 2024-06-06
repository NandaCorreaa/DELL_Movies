import styled from "styled-components"
import BGAvatar from "../Imgs/BGAvatar.png"
import PosterAvatar from "../Imgs/PosterAvatar.png"
import Estrela from "../Imgs/Estrela.svg"
import Arvore from "../Imgs/ArvoreDaVida.png"
import AChegada from "../Imgs/Achegada.png"
import Interestrelar from "../Imgs/Interestrelar.png"
import Insercao from "../Imgs/Insercao.png"
import PanteraNegra from "../Imgs/PanteraNegra.png"


const FirstSectionContainer = styled.section`
    background-image: url(${BGAvatar});
    background-size: cover;
    background-color: #000000;
    height: 100vh;
`
const DivAvatarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #F6F6F6;
    padding-top: 50px;

    img {
        width: 25rem;
    }

    div img {
        width: 2rem;
    }
`
const DivAvatarItem = styled.div`
    width: 38%;
    height: 64vh;
    line-height: 50px;
    padding-left: 20px;

    h1 {
        font-size: 50px;
    }

    h3 {
        font-size: 30px;
        height: 7vh;
    }

    .avaliacao {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 25%;
        height: 8vh;

        span {
            font-size: 35px;
        }

        .imdb {
            width: 3rem;
            height: 3vh;
        }
    }
`
const SinopseAvatar = styled.p`
    line-height: 30px;
    word-spacing: 2px;
    font-size: 22px;
    width: 100%;
    height: 20vh;
    display: flex;
    align-items: center;
`
const DivButton = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 17vh;

    a {
        background-color: red;
        width: 18vw;
        height: 8vh;
        border-radius: 50px;
        font-size: 25px;
        font-weight: 600;
        color: #FFF;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .botaoCinza {
        background-color: #717171;
    }

    .botaoLaranja {
        background-color: #D53A00;
    }
`
const DivEstreias = styled.div`
    display: flex;
    justify-content: space-evenly;

    div {
        width: 14%;
        height: 15vh;
        background-size: cover;
        background-position: center;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: end;
    }

    p {
        font-size: 30px;
        height: 6vh;
        color: #FFF;
        text-shadow: black 5px 3px 4px ;
    }
`
const H2 = styled.h2`
    width: 22%;
    height: 8vh;
    display: flex;
    justify-content: center;
    color: #FFF;
    font-size: 30px;
`

export default function FirstSection () {

    const estreias = [
        {
            Poster: AChegada ,
            Titulo: "A Chegada"
        },
        {
            Poster: Arvore ,
            Titulo: "Arvore da Vida"
        },
        {
            Poster: Interestrelar ,
            Titulo: "Interestrelar"
        },
        {
            Poster: Insercao ,
            Titulo: "Inserção"
        },
        {
            Poster: PanteraNegra ,
            Titulo: "Pantera Negra"
        }
    ]

    return (
        <FirstSectionContainer>
            <div>
                <DivAvatarContainer>
                    <img src={PosterAvatar} alt="Poster Avatar" />
                        <DivAvatarItem>
                            <h1>Avatar: o Caminho da Água</h1>
                            <h3>2022</h3>
                            <h4>3 h 15 min | Ficção científica, Fantasia, Ação e Aventura</h4>
                            <div className="avaliacao">
                                <img src={Estrela} alt="Estrela" /> 
                                <p><span>9,9</span>/10</p>
                                <img className="imdb" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/640px-IMDB_Logo_2016.svg.png" alt="Logo IMDb" />
                            </div>
                            <SinopseAvatar>Após formar uma família, Jake Sully e Ney'tiri fazem de tudo para ficarem juntos. No entanto, eles devem sair de casa e explorar as regiões de Pandora quando uma antiga ameaça ressurge, e Jake deve travar uma guerra difícil contra os humanos.</SinopseAvatar>
                            <DivButton>
                                <a className="botaoCinza" target="_blank" href="https://www.youtube.com/watch?v=x5pZI-DmtrE" >Ver trailer</a>
                                <a className="botaoLaranja" target="_blank" href="https://www.disneyplus.com/pt-br/movies/avatar-o-caminho-da-agua/6hlsDJnhiU30">Assistir Agora</a>
                            </DivButton>
                        </DivAvatarItem>
                </DivAvatarContainer>
            </div>
                <H2>DELL Estréias</H2>
            <DivEstreias>
                {estreias.map((item) => (
                    <div style={{ backgroundImage: `url(${item.Poster})` }}>
                        <p>{item.Titulo}</p>
                    </div>
                ))}
            </DivEstreias>
        </FirstSectionContainer>
    )
}