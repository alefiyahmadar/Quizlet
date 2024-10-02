import { useContext } from "react"
import { AppContext } from "../contextProvider"

export const MakeFlashcard =()=>{

    const {NewCard ,setNewCard} = useContext(AppContext)

const GetTerm =(term ,_id )=>{

    console.log(term , _id)
    
    console.log(NewCard)

    
}
const GetDef =(def)=>{

    console.log(def)
}



    return(<div className="creatCont">
        
        <p>Create a new flashcard set</p>
      <input className="title" placeholder="Enter a title "/>
      <input className="desc" placeholder="Add a description"/>

      {
        NewCard.cards.map((item)=>{
            return(<div key={item.id} className="addDiv">
                <div>
                    <input onChange={(e)=>GetTerm(e.target.value , item.id)} placeholder="Enter term"/>
                    <input onChange={(e)=>GetDef(e.target.value)} placeholder="Enter defination"/>
                </div>
            </div>)
        })
      }
    
       
    </div>)
}