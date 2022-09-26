import React, { useState, useEffect } from 'react'
import './Newsinhome.css'

function Newsinhome() {
    
    const [title, setNewsTitle] = useState(null);
    const [description, setNewsDesc] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    // useEffect(() => {
    //     fetch("https://tatarinews.herokuapp.com/read")
    //     .then((response) => response.json())
    //     .then (data => setNewsList(data))
    //     .catch((error) => {
    //       // Error
    //       if (error.response) {
    //           // The request was made and the server responded with a status code
    //           // that falls out of the range of 2xx
    //            console.log(error.response.data);
    //            console.log(error.response.status);
    //            console.log(error.response.headers);
    //       } else if (error.request) {
    //           // The request was made but no response was received
    //           // `error.request` is an instance of XMLHttpRequest in the 
    //           // browser and an instance of
    //           // http.ClientRequest in node.js
    //           console.log(error.request);
    //       } else {
    //           // Something happened in setting up the request that triggered an Error
    //           console.log('Error', error.message);
    //       }
    //       console.log(error.config);
    // })
    // }, [])

  useEffect(() => {
    fetch("https://tatarinews.herokuapp.com/read")
      .then((response) => {
        if(!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          )
        }
        return response.json();
      })
      .then((data) => {
        setNewsTitle(data[data.length-1].newsHeader)
        setNewsDesc(data[data.length-1].newsDescription)
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        
      })
      .finally(() => {
        setLoading(false)
      });
      
  }, []);
  console.log(description)

    
  return (
    <div className='home-news-container'>
            
                <div className='home-one-news'>
                  <h2 className='one-news-header'>{title}</h2>
                  <p className='one-news-desc' >{description}</p>
                </div>
             
                
            
        
        

    </div>
  )
}

export default Newsinhome