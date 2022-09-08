import React, { useState, useEffect } from 'react'
import Axios from "axios";

import './Newsinhome.css'

function Newsinhome() {
    const [newsList, setNewsList] = useState([])
    useEffect(() => {
        Axios.get("https://tatarinews.herokuapp.com/read").then((response) => {
            setNewsList(response.data)
        })
    }, [])
    const reversedList = newsList.reverse()
    console.log(reversedList)
  return (
    <div className='home-news-container'>
        
        
            <div className='home-one-news'>
                <h1>{reversedList[0].newsHeader}</h1>
                <p> {reversedList[0].newsDescription} </p>
            </div>
        
        

    </div>
  )
}

export default Newsinhome