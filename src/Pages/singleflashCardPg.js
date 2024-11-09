import { useContext , useState } from "react"
import { AppContext } from "../contextProvider"
import { useParams } from "react-router-dom"




export const FlashCardsPg = ()=>{
const {prodUser , prodSubject} = useParams()



const {GetUsers , setUsers} = useContext(AppContext)

const [currentIndex, setCurrentIndex] = useState(0);
const [isFlipped, setIsFlipped] = useState(false);

console.log( prodUser , GetUsers , prodSubject)
const GetSingleCard = GetUsers.find((item)=>{
if(item.user === prodUser){

  return item.cards
}

})




console.log(GetSingleCard)

const handleFlip = () => {
  setIsFlipped(!isFlipped);
};


const handleNext = () => {
  setCurrentIndex((prevIndex) => (prevIndex + 1) % GetSingleCard.cards.length);
  setIsFlipped(false);
};

const handlePrev = () => {
  setCurrentIndex((prevIndex) => (prevIndex - 1 + GetSingleCard.cards.length) % GetSingleCard.cards.length);
  setIsFlipped(false);
};



    return(

<div className="container">
      {GetSingleCard.cards.map((item, index) => (
        index === currentIndex && (
          <div key={item.id}>
            <div className={`flip-card ${isFlipped ? "flipped" : ""}`} onClick={handleFlip}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <p>{item.quest}</p>
                </div>
                <div className="flip-card-back">
                  <p>{item.ans}</p>
                </div>
              </div>
            </div>
            <div className="buttons">
              <button onClick={handlePrev}>Previous</button>
              <button onClick={handleNext}>Next</button>
            </div>
          </div>
        )
      ))}
       </div>
    )
}