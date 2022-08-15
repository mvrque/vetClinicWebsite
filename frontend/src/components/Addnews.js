import React, {useState} from 'react'
import Axios from "axios"


function Addnews() {
    const [newsHeader , setNewsHeading] = useState("");
    const [newsDescription, setDescription] = useState("");
    const addNews = () => {
        Axios.post("http://localhost:3001/insert", {
            newsHeader: newsHeader,
            newsDescription: newsDescription,
        }) 
    }
  return (
    <div className="addnews-container">
        <h2>Lisa uudis</h2>
        <div className='addnews-wrapper'>
            <label>Uudise pealkiri</label>
            <input 
                className='header-container'
                type='text'
                onChange={(event) =>{
                    setNewsHeading(event.target.value)
                }}/>
            <label>Uudise kirjeldus</label>
            <textarea 
            className='description-container' 
            name="Text1" 
            cols="40" 
            rows="5" 
            type='text'
            onChange={(event) =>{
                setDescription(event.target.value)
            }} />         
            <button onClick={addNews}>Lisa uudis!</button>
        </div>
    </div>
  )
}

export default Addnews