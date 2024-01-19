import "./App.css";
import { useNavigate } from "react-router-dom";

function App() {
  
  const navigate = useNavigate();
  
  return (
    <div>
      <div className="HomeDiv">
        <button onClick={()=>{navigate('meme-generator')}} type="button">Go To Meme Generator</button>
      </div>
    </div>
  );
}

export default App;
