import { DadosProvider } from "./Common/Context/Dados";
import Router  from "./routes";

const App = () => (
  <DadosProvider>
    <Router/>
  </DadosProvider>
  
);

export default App;