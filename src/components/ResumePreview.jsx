export default function ResumePreview() {

  return(
    <div className="resume w-[90%] h-[100vh] bg-white">

      <div className="navbar h-[20%] ">
        <div className="sec1 h-[50%] p-[10px]">
          <h1 className="displayName text-[30px] font-bold">Name</h1>
          <div className='displayAbout'>About</div>
        </div>
      </div>

      <div className="sec2 bg-orange-400 h-[14%] p-[10px] text-white">
          <div className="emailbox h-[33%]">
            <i className="fa-solid fa-envelope"></i>
            <span id='displayEmail' className='ml-[10px]'>email</span>
          </div>

          <div className="locationbox h-[33%]">
            <i className="fa-solid fa-location-dot"></i>
            <span id='displayLocation' className='ml-[10px]'>location</span>
          </div>

          <div className="linkedinbox h-[33%]">
            <i className="fa-brands fa-linkedin"></i>
            <span id='displayLinkedIn' className='ml-[10px]'>linkedin</span>
          </div>
       </div>

      <div className="sec3 p-[10px]">
        <div className="educationBox">
          <h1 className='text-[30px] font-bold'>Education</h1><hr />
        </div>
        <div className="educationBox">
          <h1 className='text-[30px] font-bold'>Education</h1><hr />
        </div>
        <div className="educationBox">
          <h1 className='text-[30px] font-bold'>Education</h1><hr />
        </div>
        <div className="educationBox">
          <h1 className='text-[30px] font-bold'>Education</h1><hr />
        </div>
      </div>

    </div>
  )
}