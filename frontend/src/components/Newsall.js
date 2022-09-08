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
  
  const shareButtonProps = {
    url: "https://www.tataritest.netlify.com",
    network: "Facebook",
    text: "Give it a try - react-custom-share component",
    longtext:
      "Social sharing buttons for React. Use one of the build-in themes or create a custom one from the scratch."
  };
  const [newsList, setNewsList] = useState([])
  useEffect(() => {
    Axios.get("https://tatarinews.herokuapp.com/read").then((response) => {
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
                <FacebookShareButton 
                url='https://www.tataritest.netlify.com'
                quote={"フェイスブックはタイトルが付けれるようです"}
                hashtag={"#hashtag"}
                description={"aiueo"}><FacebookIcon />
                
                </FacebookShareButton>
                
                
            </div>
        })}
        </div>
    </div>
    
  )
}

export default Newsall