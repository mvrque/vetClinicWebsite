import React, { useState, useEffect } from 'react'
import Axios from "axios";


function Addnews() {
    const [newsHeader , setNewsHeading] = useState("");
    const [newsDescription, setDescription] = useState("");

    const [newsList, setNewsList] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:3001/read").then((response) => {
            setNewsList(response.data)
        })
    }, [])
    const reversedList = newsList.reverse()

    const addNews = () => {
        Axios.post("http://localhost:3001/insert",{
            newsHeader: newsHeader,
            newsDescription: newsDescription,
        })
        console.log(newsHeader + newsDescription) 
    }

    const deleteNews = (id) => {
        Axios.delete(`http://localhost:3001/delete${id}`)
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
        <h1>Uudised</h1>
        <div className='news-container'>
        {reversedList.map((val, key) => {
            return <div className='one-news' key={key}>
                <h1>{val.newsHeader}</h1>
                <p> {val.newsDescription} </p>
                <button onClick={() => deleteNews(val._id)}>KUSTUTA</button>
            </div>
        })}
        </div>
    </div>
  )
}

export default Addnews