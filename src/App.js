import "./styles.css";
import { Route , Routes, useNavigate } from "react-router";
import { HomePg } from "./Pages/homePg";
import { FlashCardsPg } from "./Pages/flashCardPg";
import { NavLink } from "react-router-dom";





export default function App() {
const navigate = useNavigate()


  return (
    <div className="App">
      <h1>Quizlet</h1>
      
      <NavLink to={"/flashcards"}>cards</NavLink>


      <Routes>
        <Route path="/" element={<HomePg/>}></Route>
        <Route path="/flashcards" element={<FlashCardsPg/>}></Route>
      </Routes>

      
    </div>
  );
}
