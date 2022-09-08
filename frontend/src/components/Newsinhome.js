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
    console.log(newsList)
  return (
    <div className='home-news-container'>
            <div className='home-one-news'>
                <h1></h1>
                <p></p>
            </div>
        
        

    </div>
  )
}

export default Newsinhome