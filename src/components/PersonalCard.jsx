import { useContext, useState } from "react"
import DataContext from "../context/DataContext"

const PersonalCard = () => {

  const {data, setData} = useContext(DataContext)

  return (
    <div>
      <form className='border border-t-0 bg-white rounded-2xl rounded-t-none w-[370px] p-4'>

        <label htmlFor="name" className="label">Name</label><br />
        <input type="text" id="name" placeholder="gautam" className="input" 
        onChange={(e) => {
          setData((prev) => ({
            ...prev, 
            personalDetails: {
              ...prev.personalDetails,
              name : e.target.value
            }
          }))
        }}
        value={data.personalDetails.name}
        /><br />

        <label htmlFor="email" className="label">Email</label><br />
        <input type="text" id="email" placeholder="" className="input"
        onChange={(e) => {
          setData((prev) => ({
            ...prev, 
            personalDetails: {
              ...prev.personalDetails,
              email : e.target.value
            }
          }))
        }}
        value={data.personalDetails.email}/><br />

        <label htmlFor="location" className="label">Location</label><br />
        <input type="text" id="location" placeholder="location" className="input"
        onChange={(e) => {
          setData((prev) => ({
            ...prev, 
            personalDetails: {
              ...prev.personalDetails,
              location : e.target.value
            }
          }))
        }}
        value={data.personalDetails.location}/><br />

        <label htmlFor="linkedin" className="label">LinkedIn</label><br />
        <input type="text" id="linkedin" placeholder="linkedin" className="input"
        onChange={(e) => {
          setData((prev) => ({
            ...prev, 
            personalDetails: {
              ...prev.personalDetails,
              linkedin : e.target.value
            }
          }))
        }}
        value={data.personalDetails.linkedin}/><br />

        <label htmlFor="about" className="label">About</label><br />
        <input type="text" id="about" placeholder="about" className="input"
        onChange={(e) => {
          setData((prev) => ({
            ...prev, 
            personalDetails: {
              ...prev.personalDetails,
              about : e.target.value
            }
          }))
        }}
        value={data.personalDetails.about}/><br />
      </form>
    </div>
  )
}

export default PersonalCard
