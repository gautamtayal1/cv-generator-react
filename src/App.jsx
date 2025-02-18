import { useState } from "react";
import PersonalCard from "./components/PersonalCard";
import InputSection from "./components/InputSection";
import Navbar from "./Navbar";
import ResumePreview from "./components/ResumePreview";

export default function App(){

  return(
    <>
      <Navbar />
      <div className="body bg-gray-300 flex">
        <div className="left h-auto min-h-[100vh] w-[40vw] flex flex-col gap-5 items-center p-5 border-r">
          <InputSection />
        </div>
        <div className="right w-[60vw] h-[100vh] flex justify-center mt-5">
          <ResumePreview />
        </div>
      </div>
      
    </>
    
  )
}