import "./style.scss";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const history = useNavigate()
    return(
        <div id="menuFundo">
            <div id="menu">
                <div id="home">Home</div>
                <div id="sobre" onClick={() => history("/sobre")}>Sobre</div>
                <div id="contato">Contato</div>
            </div>
        </div>
    )
}

export default Navbar;