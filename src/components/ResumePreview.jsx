import { useContext } from "react"
import DataContext from "../context/DataContext"

export default function ResumePreview() {

  const {data} = useContext(DataContext)

  return(
    <div className="resume w-[90%] h-[100vh] bg-white">

      <div className="navbar h-[20%] ">
        <div className="sec1 h-[50%] p-[10px]">
          <h1 className="displayName text-[30px] font-bold">{data.personalDetails.name}</h1>
          <div className='displayAbout'>{data.personalDetails.about}</div>
        </div>
      </div>

      <div className="sec2 bg-orange-400 h-[14%] p-[10px] text-white">
          <div className="emailbox h-[33%]">
            <i className="fa-solid fa-envelope"></i>
            <span id='displayEmail' className='ml-[10px]'>{data.personalDetails.email}</span>
          </div>

          <div className="locationbox h-[33%]">
            <i className="fa-solid fa-location-dot"></i>
            <span id='displayLocation' className='ml-[10px]'>{data.personalDetails.location}</span>
          </div>

          <div className="linkedinbox h-[33%]">
            <i className="fa-brands fa-linkedin"></i>
            <span id='displayLinkedIn' className='ml-[10px]'>{data.personalDetails.linkedin}</span>
          </div>
       </div>

      <div className="sec3 p-[10px]">
        <div className="educationBox">
          <h1 className='text-[30px] font-bold'>Education</h1><hr />
          {data.education.map((entry, index) => (
            <div className="" key={index}>
              <div className="flex justify-between">
                
              </div>
            </div>
          ))}
          
          <div>{data.education.name}</div>
        </div>
        <div className="educationBox">
          <h1 className='text-[30px] font-bold'>Experience</h1><hr />
        </div>
        <div className="educationBox">
          <h1 className='text-[30px] font-bold'>Projects</h1><hr />
        </div>
        <div className="educationBox">
          <h1 className='text-[30px] font-bold'>Skills</h1><hr />
        </div>
      </div>

    </div>
  )
}