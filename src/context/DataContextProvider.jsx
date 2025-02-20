import React from "react";
import DataContext from "./DataContext";

const DataContextProvider = ({ children }) => {

  const [data, setData] = React.useState({
    personalDetails: {
      name: "Gautam Tayal",
      email: "gautamtayal65@gmail.com",
      linkedin: "linkedIn.com/gautam-tayal",
      about: "I am GOAT",
      location: "San Francisco, US"
    },
    education: [{
      school: "",
      course: "",
      startDate: "",
      enddate: ""
    }],
    experience: [{
      position: "",
      company: "",
      achievements: "",
      startdate: "",
      enddate: ""
    }],
    projects: [{
      name: "",
      tools: "",
      description: ""
    }],
    skills: [{
      skill: ""
    }]
  })

  return(
    <DataContext.Provider value={{data, setData}}>
      {children} 
    </DataContext.Provider>
  )
}

export default DataContextProvider