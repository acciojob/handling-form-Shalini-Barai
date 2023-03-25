
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  const [inp,setInp]=useState("");
  function handleChange(e){
        setInp(e.target.value);
        console.log(e.target.value);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <input type="text" value={inp} onChange={handleChange}/>
    </div>
  )
}

export default App
