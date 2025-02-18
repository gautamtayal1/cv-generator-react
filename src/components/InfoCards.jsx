import { useState } from "react"
import { AddInfoCard } from "./AddInfoCards"

export default function InfoCards({ header, textInput, numInput }) {

  const [isClicked, setIsClicked] = useState(false)
  const [btnClicked, setBtnClicked] = useState(false)

  return(

    // ********************   mainCard    ********************

    <div className="container">
      <h1
        onClick={() => !btnClicked && setIsClicked(!isClicked)}
        className=
        {`h-[12vh] w-[370px] font-medium flex border-1 justify-center items-center rounded-2xl bg-white text-2xl hover:cursor-pointer ${
          isClicked ? "border border-b-0 rounded-b-none" : ""
        }
        ${
          btnClicked ? "border border-b-0 rounded-b-none" : ""
        }`}>
          {header}
      </h1>

      {/* //********************  addSection    ******************** */}

      {isClicked &&
        <div className="info border border-t-0 bg-white rounded-2xl rounded-t-none w-[370px] p-4">
          <div className="flex justify-between">
            <span>Symbiosis School of Economics</span>
            <span>
              <i className="fa-solid fa-pen-to-square"></i>
              <i className="fa-solid fa-trash"></i>
            </span>
          </div>
          
          <button
          onClick={() => {
            setBtnClicked(!btnClicked)
            setIsClicked(!isClicked)
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