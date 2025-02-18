const PersonalCard = () => {
  return (
    <div>
      <form className='border border-t-0 bg-white rounded-2xl rounded-t-none w-[370px] p-4'>

        <label htmlFor="name" className="label">Name</label><br />
        <input type="text" id="name" placeholder="gautam" className="input"/><br />

        <label htmlFor="email" className="label">Email</label><br />
        <input type="text" id="email" placeholder="" className="input"/><br />

        <label htmlFor="location" className="label">Location</label><br />
        <input type="text" id="location" placeholder="location" className="input"/><br />

        <label htmlFor="linkedin" className="label">LinkedIn</label><br />
        <input type="text" id="linkedin" placeholder="linkedin" className="input"/><br />

        <label htmlFor="about" className="label">About</label><br />
        <input type="text" id="about" placeholder="about" className="input"/><br />
      </form>
    </div>
  )
}

export default PersonalCard
