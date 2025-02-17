import React from 'react'

const PersonalCard = () => {
  return (
    <div>
      <form className='border overflow-hidden max-h-none w-auto'>

        <label htmlFor="name">Name</label><br />
        <input type="text" id="name" placeholder="gautam" /><br />

        <label htmlFor="email">Email</label><br />
        <input type="text" id="email" placeholder="" /><br />

        <label htmlFor="location">Location</label><br />
        <input type="text" id="location" placeholder="location" /><br />

        <label htmlFor="linkedin">LinkedIn</label><br />
        <input type="text" id="linkedin" placeholder="linkedin" /><br />

        <label htmlFor="about">About</label><br />
        <input type="text" id="about" placeholder="about" /><br />
      </form>
    </div>
  )
}

export default PersonalCard
