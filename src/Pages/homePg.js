import { useContext } from "react"
import { AppContext } from "../contextProvider"
import { useNavigate } from "react-router"

export const HomePg =()=>{
const navigate = useNavigate()
const {GetCards , setCards} = useContext(AppContext)
    
    

    return(<div>
        <p>home</p>
        <div className="CardCnt">
        {
            GetCards.map((item)=><div  onClick={() => navigate(`/individual/${item.user}`)} className="ParentCard" id={item.user}>
                <p>{item.subject}</p>
                <p>{item.user}</p>
            </div>)
        }
        </div>
        
    </div>)
}