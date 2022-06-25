import { useContext, useEffect} from "react";
import axios from "axios";
import { DadosContext } from "../../Common/Context/Dados";

const timeStamp = '1656097826317';
const apiKey = 'f9f96a867de4ee807d740e4097757ccd'
const md5 = '550547bc83d2c9520deb8f2b6851d40c'

function PegaDados() {
    const {dados, setDados} = useContext(DadosContext);
    
    useEffect(() => {
        axios.get(`http://gateway.marvel.com/v1/public/comics?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}`)
        .then((response) => {
            const data = response.data.data.results
            console.log(data)
            setDados(data)
        },[])
    })
    

    return (
        <>
        {dados.map((item) => (
            <div key={item.id}>
                <h2>{item.title}</h2>
                <h3>{item.description}</h3>
                <img src={item.thumbnail.path + "/retrato_pequeno.jpg"} alt="jpg"/>
                {console.log(item.thumbnail.path + "/retrato_fantástico.jpg")}
            </div>
            
            
            
        ))}
        </>
    )
}
 
export default PegaDados


