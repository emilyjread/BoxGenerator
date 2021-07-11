
import React, {useState} from "react"

const MyForm = (props)=>{
    const [color, setColor]= useState("");
    const [height, setHeight] = useState("");
    
    const handleColor = (e) =>{
        setColor(e.target.value);
    }

    const handleHeight = (e) =>{
        setHeight(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.onNewBox(color, height);
        setColor("");
        setHeight("")
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <label>
                <h2>Color:</h2>
                <input value={color} onChange={handleColor}></input>
            </label>
            <label>
                <h2>Size</h2>
                <input value={height} onChange={handleHeight}></input>
            </label>
            <label>
                <input type="submit"></input>
            </label>
        </form>
    )
}

export default MyForm


