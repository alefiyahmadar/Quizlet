import { useContext } from "react"
import { AppContext } from "../contextProvider"
import { useNavigate } from "react-router"

export const HomePg =()=>{
const navigate = useNavigate()
const {GetUsers , setUsers} = useContext(AppContext)
    
    

    return(<div>

        
        <div className="cardContainer" >
            <p>Famous Flashcards</p>
        <div className="CardCnt">
        {
            GetUsers.map((item)=><div  onClick={() => navigate(`/individual/${item.cards[0].subject}/${item.user}`)} className="ParentCard" id={item.user}>
                <p>{item.cards[0].subject}</p>
                <p>{item.user}</p>
            </div>)
        }
        </div>
        </div>
        
    </div>)
}