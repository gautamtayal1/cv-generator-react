import InputSection from "./components/InputSection";
import Navbar from "./Navbar";
import ResumePreview from "./components/ResumePreview";
import { useState } from "react";

export default function App(){

  const [data, setData] = useState({
    name:"",
    email: "",
    location: "",
    linkedin: "",
    about: ""

  })

  return(
    <>
      <Navbar />
      <div className="body bg-gray-300 flex">
        <div className="left h-auto min-h-[100vh] w-[40vw] flex flex-col gap-5 items-center p-5 border-r">
          <InputSection data={data} setData={setData}/>
        </div>
        <div className="right w-[60vw] h-[100vh] flex justify-center mt-5">
          <ResumePreview data={data}/>
        </div>
      </div>
      
    </>
    
  )
}