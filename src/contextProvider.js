import { createContext, useContext, useState } from "react";



export const AppContext = createContext()

export const ContextProvider = ({children})=>{

const [GetCards , setCards] = useState()


    

    return(
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>  
    )
}