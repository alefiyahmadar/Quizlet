import { createContext, useContext, useState } from "react";
import {Flashcards} from "./backend/flashCards"


export const AppContext = createContext()

export const ContextProvider = ({children})=>{

const [GetCards , setCards] = useState(Flashcards)


    

    return(
        <AppContext.Provider value={{GetCards , setCards}}>
            {children}
        </AppContext.Provider>  
    )
}