import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.scss";
import Navbar from "../../components/navbar/navbar";
import Button from "../../components/button/button";

const timeStamp = '1656097826317';
const apiKey = 'f9f96a867de4ee807d740e4097757ccd'
const md5 = '550547bc83d2c9520deb8f2b6851d40c'

function Pesquisa() {
    const [nome, setNome] = useState("")
    const [dadosTitle, setDadosTitle] = useState([])
    const [empurraId, setEmpurraId] = useState(Number)
    console.log(nome)

    function pegaId(nome){
        axios.get(`https://gateway.marvel.com/v1/public/characters?name=${nome}&orderBy=name&ts=${timeStamp}&apikey=${apiKey}&hash=${md5}`)
        .then((response) => {
            const data = response.data.data.results
            setDadosTitle(data)
            setEmpurraId(data[0].id)
        })
        .catch((Error) => {
            console.log(Error)
        })
    }
    console.log(dadosTitle)
    const [comics, setComics] = useState([])

    useEffect(() => {
        axios.get(`https://gateway.marvel.com/v1/public/characters/${empurraId}/comics?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}`)
        .then((response) => {
            const data = response.data.data.results
            setComics(data)
        })
        .catch((Error) => {
            console.log(Error)
        })
    },[empurraId])

    console.log(empurraId)
    console.log(comics)
    return(
        <div id="body">
            <Navbar></Navbar>
                <div id="pesquisa">
                    <div className="heroi">
                        {dadosTitle.map((item) => (
                            <div key={item.id} id="imgHeroi">
                                <img src={item.thumbnail.path + "/portrait_uncanny.jpg"} alt=""/>
                            </div>

                        ))}
                    </div>
                    <div id="input">
                        <input onChange={(event) => setNome(event.target.value)} placeholder="Escolha seu Herói"/>
                    </div>
                </div>
                <div className='botaoAchar'>
                  <Button component='Link' onClick={() => pegaId(nome)}>Achar</Button>
                </div>
                
            <div className="cards">
                {comics.map((item) => (
                    <div key={item.id} id="quadrinhos">
                        <h2 id="titulo">{item.title}</h2>
                        <div id="card">
                            <img src={item.thumbnail.path + "/portrait_uncanny.jpg"} alt="" id="imagem"/>
                        </div>
                    </div>
                ))}
            </div>
           
        </div>
    )
}

export default Pesquisa;