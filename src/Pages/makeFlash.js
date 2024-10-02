import { useContext, useState } from "react"
import { AppContext } from "../contextProvider"

export const MakeFlashcard =()=>{

    const {NewCard ,setNewCard} = useContext(AppContext)
    const [ Term ,setTerm] = useState("")
    const [Def , setDef] = useState("")
const GetTerm =(term ,id )=>{

    console.log(term , id)
    setTerm(term)
    const addTerm = NewCard.cards.map((e)=>e.id === id ? {...e , quest:Term}:e)
    console.log(addTerm)
    
}
const GetDef =(def)=>{

    console.log(def)
}




    return(<div className="creatCont">
        
        <p>Create a new flashcard set</p>
      <input className="title" placeholder="Enter a title "/>
      <input className="desc" placeholder="Add a description"/>

      {
        NewCard.cards.map((item , index)=>{
            return(<div key={index} className="addDiv">
                <div>
                    <input onChange={(e)=>GetTerm(e.target.value , item.id)} placeholder="Enter term"/>
                    <input placeholder="Enter defination"/>
                </div>
            </div>)
        })
      }
    
       
    </div>)
}