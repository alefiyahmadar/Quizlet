import { createContext, useContext, useState } from "react";
import {UserArr} from "./backend/flashCards"


export const AppContext = createContext()

export const ContextProvider = ({children})=>{

const [GetUsers , setUsers] = useState(UserArr)
const [NewCard , setNewCard] = useState([{
        id:1,subject:"" , quest:"" ,ans:""
    },{
        id:2,subject:"" , quest:"" ,ans:""
    }]
)



    

    return(
        <AppContext.Provider value={{GetUsers , setUsers , NewCard ,setNewCard}}>
            {children}
        </AppContext.Provider>  
    )
}