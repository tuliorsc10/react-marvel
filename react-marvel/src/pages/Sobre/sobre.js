
import React from "react";
import Button from "../../components/button/button";
import "./style.scss";
import { useNavigate } from "react-router-dom";

function Sobre() {
    const history = useNavigate();
    return (
        <main>
            <section>   
                <h1>Projeto ReactMarvel</h1>
                <Button component='Link' onClick={() => history("/")}>Voltar</Button>
            </section>
            <article id="texto">
                Este site tem intuito de realizar buscas na API da Marvel, através do personagem escolhido por você, os quadrinhos que os super heróis estejam inclusos na história.<br></br>
                Este site foi elaborado para meu desenvolvimento técnico em front-end. Nele eu utilizei a biblioteca ReactJs, Axios, React-Router-Dom e Sass. Ele está responsivo e foi escolhida uma paleta de cores semelhante ao site da marvel.<br></br> Espero que gostem!
                
            </article>
        </main>
    )
}

export default Sobre;