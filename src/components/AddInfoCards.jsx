import { useContext, useState } from "react";
import BtnContext from "../context/Btncontext";
import DataContext from "../context/DataContext";

export function AddInfoCard({ textInput, numInput, onSubmit, header, data, setData, category }) {
  const { setSubmitBtnClicked } = useContext(BtnContext);
  const { data, setData } = useContext(DataContext);
  const [formData, setFormData] = useState({});

  const handleInputChange = (inputHead, value) => {
    setFormData(prev => ({
      ...prev,
      [inputHead.toLowerCase()]: value
    }));
  };

  const handleSubmit = (e) => {
    
    e.preventDefault();
    setData(prev => ({
      ...prev,
      [header.toLowerCase()]: [...prev[header.toLowerCase()], formData]
    }));

    onSubmit();
    setSubmitBtnClicked(false);
    setFormData({});
    console.log(data);
    
  };


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
          <input 
            type="text" 
            id={inputHead.toLowerCase()} 
            placeholder="" 
            className="input"
            onChange={(e) => handleInputChange(inputHead, e.target.value)}
            value={formData[inputHead.toLowerCase()] || ""}
          /><br />
        </div>
      ))}
      {numInput.map((inputHead) => (
        <div key={inputHead}>
          <label htmlFor={inputHead} className="label">{inputHead}</label><br />
          <input 
            type="date" 
            id={inputHead.toLowerCase()} 
            placeholder="" 
            className="input"
            onChange={(e) => handleInputChange(inputHead , e.target.value)}
            value={formData[inputHead.toLowerCase()] || ""}
          /><br />
        </div>
      ))}
      <button type="submit" onClick={handleSubmit}>Submit</button>
      <button type="reset" onClick={() => setFormData({})}>Reset</button>
    </form>
  );
}