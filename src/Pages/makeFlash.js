import { useContext, useState } from "react"
import { AppContext } from "../contextProvider"

export const MakeFlashcard =()=>{

    const {NewCard ,setNewCard} = useContext(AppContext)
    const [getSubject , setSubject] = useState("")
    
    const HandleInput =(value ,field , id )=>{

console.log(value , field ,id)
    }

const AddCards = ()=>{



}




    return(<div className="creatCont">
        
        <p>Create a new flashcard set</p>
      <input className="subject" onChange={()=>setSubject(e.target.value)} placeholder="Enter a subject "/>
      

      {
        NewCard.map((item )=>{
            return(<div key={item.id} className="addDiv">
                <div >
                    <input onChange={(e)=>HandleInput(e.target.value , "quest" , item.id)} placeholder="Enter term"/>
                    <input onChange={(e)=>HandleInput(e.target.value , "ans" , item.id)} placeholder="Enter defination"/>
                </div>
            </div>)
        })
      }
      <button onClick={AddCards}>Create</button>
    
       
    </div>)
}