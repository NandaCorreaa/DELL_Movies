import axios from "axios"
import React, { useEffect, useState } from "react"
import styled from "styled-components"

const CatalogoContainer = styled.section`
    background-color: #000;
    color: #FFF;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 5vh 3vw;

    div {
        width: 20%;
        height: 60vh;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        padding-bottom: 3vh;
    }
`

export default function Catalogo () {

    const [filmes, setFilmes] = useState([])

    async function pegarDados (){
        const Dados = await axios.get(`https://api.sampleapis.com/movies/drama`)
    
    try{
        setFilmes(Dados.data)
    }catch(erro){
        alert(`Desculpe, ocorreu um ${erro}`)
    }
    }

    useEffect(() => {
        pegarDados()
    }, [])

    return (
        <CatalogoContainer>
            {filmes.map((item) => (
                <div>
                    <img src={item.posterURL} alt={item.title} />
                    <h2>{item.title}</h2>
                </div>
            ))}
        </CatalogoContainer>
    )
}