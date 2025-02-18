export function AddInfoCard({ textInput, numInput, data, setData, category }) {

  const handleSubmit = (e) => {
    e.preventDefault()
    const newEntry = {}

    textInput.forEach(input => {
      newEntry[input.toLowerCase()] = e.target[input.toLowerCase()].value
    });
    numInput.forEach(input => {
      newEntry[input.toLowerCase()] = e.target[input.toLowerCase()].value
    });

    setData((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        ...newEntry
      }
    }));

    
  }

  return (
    <form className='border border-t-0 bg-white rounded-2xl rounded-t-none w-[370px] p-4'
    onSubmit={handleSubmit}
    >
      {textInput.map((inputHead) => (
        <div key={inputHead}>
          <label htmlFor={inputHead} className="label">{inputHead}</label><br />
          <input type="text" id={inputHead.toLowerCase()} placeholder="" className="input"/><br />
        </div>
      ))}
      {numInput.map((inputHead) => (
        <div key={inputHead}>
          <label htmlFor={inputHead} className="label">{inputHead}</label><br />
          <input type="date" id={inputHead.toLowerCase()} placeholder="" className="input"/><br />
        </div>
      ))}
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </form>
  );
}