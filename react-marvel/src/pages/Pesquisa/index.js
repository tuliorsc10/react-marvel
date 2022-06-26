import React, { useEffect, useState } from "react";
import axios from "axios";

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
        <div>
            <input onChange={(event) => setNome(event.target.value)}/>
            <button onClick={() => pegaId(nome)}>Achar</button>
            {dadosTitle.map((item) => (
                <div key={item.id}>
                    <img src={item.thumbnail.path + "/portrait_uncanny.jpg"} alt=""/>
                </div>

            ))}
            {comics.map((item) => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <img src={item.thumbnail.path + "/portrait_uncanny.jpg"} alt=""/>
                    
                </div>
            ))}
        </div>
    )
}

export default Pesquisa;