import React, { useState, useEffect } from 'react'
import Axios from "axios";
import './Newsall.css'



function Newsall() {
  const [newsList, setNewsList] = useState([])
  useEffect(() => {
    Axios.get("http://localhost:3001/read").then((response) => {
        setNewsList(response.data)
    })
}, [])
  const reversedList = newsList.reverse()
  return (
    <div className='news-main'>
        <h2>Uudised</h2>
        <div className='news-container'>
        {reversedList.map((val, key) => {
            return <div className='one-news' key={key}>
                <h1>{val.newsHeader}</h1>
                <p> {val.newsDescription} </p>
            </div>
        })}
        </div>
    </div>
    
  )
}

export default Newsall