import React, { useState, useEffect } from 'react'
import Axios from "axios";
import './Newsall.css';
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton
} from "react-share";
import {FacebookIcon} from "react-share";


//const { ShareButton} = require('react-custom-share');


function Newsall() {
  const [newsList, setNewsList] = useState([])
  useEffect(() => {
    Axios.get("https://tatarinews.herokuapp.com/read")
    .then((response) => {
        setNewsList(response.data)
    })
    .catch((error) => {
      // Error
      if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          // console.log(error.response.data);
          // console.log(error.response.status);
          // console.log(error.response.headers);
      } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the 
          // browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
      } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
      }
      console.log(error.config);
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