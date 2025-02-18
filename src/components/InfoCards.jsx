import { useState } from "react"

export default function InfoCards({ header }) {

  const [isClicked, setIsClicked] = useState(false)

  return(
    <div className="container">
      <h1
        onClick={() => setIsClicked(!isClicked)}
        className=
        {`h-[12vh] w-[370px] font-medium flex border-1 justify-center items-center rounded-2xl bg-white text-2xl hover:cursor-pointer ${
          isClicked ? "border border-b-0 rounded-b-none" : ""
        }`}>
          {header}
      </h1>

      {isClicked &&
        <div className="info border border-t-0 bg-white rounded-2xl rounded-t-none w-[370px] p-4">
          <div className="flex justify-between">
            <span>Symbiosis School of Economics</span>
            <span>
              <i class="fa-solid fa-pen-to-square"></i>
              <i class="fa-solid fa-trash"></i>
            </span>
          </div>
          
          <button>+ {header}</button>
        </div>
      }
      

    </div>
    
  )
}