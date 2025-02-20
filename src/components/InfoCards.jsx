import { useContext, useState } from "react"
import { AddInfoCard } from "./AddInfoCards"
import BtnContext from "../context/Btncontext"

export default function InfoCards({ header, textInput, numInput, data, setData }) {

  const [isClicked, setIsClicked] = useState(false)
  const [btnClicked, setBtnClicked] = useState(false)
  const { submitBtnClicked } = useContext(BtnContext)

  const handleSubmit = () => {
    setBtnClicked(false); // Close the add card form
    setIsClicked(true); // Keep the info section open
  };

  return(

    // ********************   mainCard    ********************

    <div className="container">
      <h1
        onClick={() => setIsClicked(!isClicked)}
        className={`h-[12vh] w-[370px] font-medium flex border-1 justify-center items-center rounded-2xl bg-white text-2xl hover:cursor-pointer ${
          (isClicked || btnClicked) ? "border border-b-0 rounded-b-none" : ""
        }`}>
          {header}
      </h1>

      {/* //********************  addSection    ******************** */}

      {(isClicked || submitBtnClicked)  &&
        <div className="info border border-t-0 bg-white rounded-2xl rounded-t-none w-[370px] p-4">
          <div className="flex justify-between">
            <span>Symbiosis</span>
            <span>{data[header.toLowerCase()]?.name || ''}</span>
            <span>
              <i className="fa-solid fa-pen-to-square"></i>
              <i className="fa-solid fa-trash"></i>
            </span>
          </div>
          
          <button
          onClick={() => {
            setBtnClicked(!btnClicked)
            setIsClicked(false)
           }
          }
          >+ {header}</button>
        </div>
      }

      { /* // ********************   inputCard    ******************** */}
      
      {btnClicked &&
        <AddInfoCard textInput={textInput} numInput={numInput} />
      }
    </div>
    
  )
}