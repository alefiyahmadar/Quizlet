import "./styles.css";
import { Route , Routes, useNavigate } from "react-router";
import { HomePg } from "./Pages/homePg";
import { FlashCardsPg } from "./Pages/singleflashCardPg";
import { NavLink } from "react-router-dom";
import { MakeFlashcard } from "./Pages/makeFlash";





export default function App() {
const navigate = useNavigate()


  return (
    <div className="App">
      <h1>Quizlet</h1>
      
      <NavLink to={"/flashcards"}>cards</NavLink>


      <Routes>
        <Route path="/" element={<HomePg/>}></Route>
        <Route path="/flashcards" element={<MakeFlashcard/>}></Route>
        <Route path="/individual/:prodUser" element={<FlashCardsPg/>}></Route>
      </Routes>

      
    </div>
  );
}
