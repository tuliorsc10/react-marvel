import { createContext, useState } from "react";

export const DadosContext = createContext();

export const DadosProvider = ({children}) => {
    const [dados, setDados] = useState([])
    return (
        <DadosContext.Provider value={{dados, setDados}}>
            {children}
        </DadosContext.Provider>
    )
}

