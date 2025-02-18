import { useState } from "react"
import PersonalCard from "./PersonalCard"
import InfoCards from "./InfoCards"

export default function InputSection({ data, setData }) {

  const [isClicked, setIsClicked] = useState(false)

  function addInfo(category, newItem) {
    setData((prev) =>({
      ...prev, 
      [category] :{
        ...prev[category],
        newItem
      }
    }))
  }

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
            {isClicked && <PersonalCard data={data} setData={setData}/>}
          </div>  
          
        </div>
      

        <InfoCards 
        header={"Education"} 
        textInput={["School", "Course"]} 
        numInput={["Start Date", "End Date"]} 
        data={data} 
        setData={(newItem) => addInfo("education", newItem)}/>

        <InfoCards 
        header={"Experience"} 
        textInput={["Position", "Company", "Achievements"]} 
        numInput={["Start Date", "End Date"]} 
        data={data} 
        setData={(newItem) => addInfo("experience", newItem)}/>

        <InfoCards 
        header={"Projects"} 
        textInput={["Name", "Tools", "Description"]} 
        numInput={[]} 
        data={data} 
        setData={(newItem) => addInfo("projects", newItem)}/>

        <InfoCards 
        header={"Skills"} 
        textInput={["Skill"]} 
        numInput={[]} 
        data={data} 
        setData={(newItem) => addInfo("skills", newItem)}/>
    </>
    
  )
}