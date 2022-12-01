import React, { useState, useEffect } from 'react'
import Axios from "axios";
import News from './pages/News';

let newDate = new Date()
let date = newDate.getDate();
let month = newDate.toLocaleString('default', { month: 'short' })
let year = newDate.getFullYear();


function Addnews() {
    const [newsHeader , setNewsHeading] = useState("");
    const [newsDescription, setDescription] = useState("");
    const [datePosted] = date + month;

    const [newsList, setNewsList] = useState([])

    useEffect(() => {
        Axios.get("https://tatarinews-api.cyclic.app/read").then((response) => {
            setNewsList(response.data)
            
        })
    }, [])
    //const reversedList = newsList.reverse()

    const addNews = () => {
        Axios.post("https://tatarinews-api.cyclic.app/insert",{
            newsHeader: newsHeader,
            newsDescription: newsDescription,
            datePosted: date+'.'+' '+month+' '+ year
        })
        //window.location.reload(false);
        
    }

    const deleteNews = (id) => {
        Axios.delete(`https://tatarinews-api.cyclic.app/delete/${id}`)        
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
                }
                }/>
            <label>Uudise kirjeldus</label>
            <textarea 
            className='description-container' 
            name="Text1" 
            cols="" 
            rows="" 
            type='text'
            onChange={(event) =>{
                setDescription(event.target.value)
            }} />
            <p> {date}.{month}</p>         
            <button onClick={addNews}>Lisa uudis!</button>

            
        </div>
        <h1>Uudised</h1>
        <div className='news-container'>
        {newsList.map((val, key, array) => {
            return <div className='one-news' key={key}>
                <h1>{array[array.length - 1 - key].newsHeader}</h1>
                
                <p> {array[array.length - 1 - key].newsDescription} </p>
                <span>{array[array.length - 1 - key].datePosted}</span>
                <button onClick={() => deleteNews(array[array.length - 1 - key]._id)}>KUSTUTA</button>
            </div>
        })}
        </div>
    </div>
  )
}

export default Addnews