import { useState } from "react"
import PersonalCard from "./PersonalCard"
import InfoCards from "./InfoCards"

export default function InputSection() {

  const [isClicked, setIsClicked] = useState(false)

  return(
    <>

        <div className="full">
          <h1
          onClick={() => setIsClicked(!isClicked)}
          className=
          {`h-[12vh] max-h-auto w-[370px] font-medium flex border-1 justify-center items-center rounded-2xl bg-white text-2xl hover:cursor-pointer ${
            isClicked ? "border border-b-0 rounded-b-none" : ""
          }`}>Personal Details
          </h1>
          <div className="div">
            {isClicked && <PersonalCard />}
          </div>  
          
        </div>
      
      
        <InfoCards header={"Education"} />
        <InfoCards header={"Experience"} />
        <InfoCards header={"Projects"} />
        <InfoCards header={"Skills"} />
    </>
    
  )
}