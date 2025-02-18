import { useState } from "react";
import PersonalCard from "./components/PersonalCard";
import InputSection from "./components/InputSection";
import Navbar from "./Navbar";

export default function App(){

  return(
    <>
      <Navbar />
      <div className="body bg-gray-300">
        <div className="left h-auto min-h-[100vh] w-[40vw] flex flex-col gap-5 items-center p-5 border-r">
          <InputSection />
        </div>
      </div>
      
    </>
    
  )
}