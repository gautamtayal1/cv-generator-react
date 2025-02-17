import { useState } from "react";
import PersonalCard from "./components/PersonalCard";


export default function App(){

  const [isClicked, setIsClicked] = useState(false)
  return(
    <>
        <h1
        onClick={() => setIsClicked(!isClicked)}
        >perosnal details</h1>

        <div className="">
          {isClicked && <PersonalCard />}
        </div>
    </>
    
  )
}