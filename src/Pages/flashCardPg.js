import { useContext , useState } from "react"
import { AppContext } from "../contextProvider"
import { useParams } from "react-router-dom"



export const FlashCardsPg = ()=>{
const {prodUser} = useParams()


const {GetCards , setCards} = useContext(AppContext)

const [currentIndex, setCurrentIndex] = useState(0);
const [flippedIndex, setFlippedIndex] = useState(false);



const getCurrentCards = GetCards.find((e)=>e.user === prodUser)

const handleFlip = (index) => {
    if (flippedIndex === index) {
        setFlippedIndex(null); // If the clicked card is already flipped, unflip it
      } else {
        setFlippedIndex(index); // Otherwise, flip the selected card
      }
  };

const handleNext = () => {
    if (currentIndex < getCurrentCards.cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setFlippedIndex(null);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setFlippedIndex(null);
    }
  };
console.log(getCurrentCards)
const currentFlashCard = getCurrentCards.cards[currentIndex];
console.log(currentFlashCard)


    return(<div className="card-container">

<div className={`card ${flippedIndex   ? "flipped" : ""}`} onClick={handleFlip}>
<div className="card-front">
          <p>{currentFlashCard.quest}</p>
        </div>
        <div className="card-back">
          <p>{currentFlashCard.ans}</p>
        </div>
        
</div>
    </div>)
}