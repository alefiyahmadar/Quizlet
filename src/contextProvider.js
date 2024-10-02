import { createContext, useContext, useState } from "react";
import {Flashcards} from "./backend/flashCards"


export const AppContext = createContext()

export const ContextProvider = ({children})=>{

const [GetCards , setCards] = useState(Flashcards)
const [NewCard , setNewCard] = useState({
    user:"",
    subject:"",
    cards:[{id:0 ,quest:"" , ans:""},
        {id:1 , quest:"" , ans:""}]
})


    

    return(
        <AppContext.Provider value={{GetCards , setCards , NewCard ,setNewCard}}>
            {children}
        </AppContext.Provider>  
    )
}