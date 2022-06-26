
import { useContext } from 'react';
import { DadosContext } from '../../Common/Context/Dados';
import PegaDados from '../../components/conteudo/Conteudo';


function Home() {
  const {dados} = useContext(DadosContext)
  
  console.log(dados)
  return (
    <div className="App">
     
     <PegaDados></PegaDados>
    
    </div>
  );
}

export default Home;