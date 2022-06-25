
import { useContext } from 'react';
import { DadosContext } from '../../Common/Context/Dados';
import PegaDados from '../../components/conteudo/Conteudo';


function Home() {
  const {dados} = useContext(DadosContext)
  console.log(dados)
  return (
    <div className="App">
     <h3>{Date.now()}</h3>
     
     <div>
      <PegaDados></PegaDados>
     </div>
    </div>
  );
}

export default Home;