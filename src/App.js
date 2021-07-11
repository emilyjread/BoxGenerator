
import './App.css';
import React, {useState} from 'react';
import MyForm from './components/MyForm';

function App() {
  const [height, setHeight] = useState("");
  const [color, setColor] = useState("");
  const [boxDiv, setBoxDiv] = useState([])
  
  
  const makeBox = (color, height) =>{
    console.log(color, height)
    setColor(color)
    setHeight(height)
    setBoxDiv(boxDiv=>[...boxDiv, <div className="box" style={{backgroundColor:color, height:height+"px"}}>{color}</div>])
    

  }

  return (
    <div className="App">
      <MyForm onNewBox={makeBox}/>
      <div className="boxdiv">
        {boxDiv}
      </div>
    </div>
  );
}

export default App;
