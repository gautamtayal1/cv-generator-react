import React, { useState } from "react";
import BtnContext from "./Btncontext";

const BtnContextProvider = ( {children} ) => {
  const [submitBtnClicked, setSubmitBtnClicked] = useState(false)

  return(
    <BtnContext.Provider value={{submitBtnClicked, setSubmitBtnClicked}}>
      {children}
    </BtnContext.Provider>
  )
}

export default BtnContextProvider
