import { useState, useEffect } from 'react';
import './App.css';
import axios from "axios"
import React from 'react';

function App() {
  const [count,setCount]=useState(0);
  const [joke,setJoke]=useState([]);
  const [news,setNews]=useState([]);
  React.useEffect(() => {
    axios.get("https://v2.jokeapi.dev/joke/christmas").then((response) => {
      setJoke(response.data);
    });
    axios.get("https://newsapi.org/v2/everything?q=tesla&from=2023-08-19&sortBy=publishedAt&apiKey=2637b1dde1f74f1d811fee2fe118b46b").then((response) => {
      setNews(response.data);
    });
  }, []);

  const jokes=()=>{
    alert(joke.setup + "-" + joke.delivery)
    window.location.reload();
  }

  const newss=()=>{
    const a=news.articles[count+1].title
    alert(a);
  }
  
  return (
    <>
    <div className='counter'>
      <div className='box'>
    <h1 className='cnt'>{count}</h1>
    <div className='btn'>
    <button className='btn1' onClick={()=>{setCount(count+1)}}> Increase </button>
    <button className='btn2' onClick={()=>{
      if(count===0){
        alert("Count cannot be neagtive")
      }
      else{
        setCount(count-1)
      }
    }}> Decrease </button>
    </div>
    <button className='btn2' onClick={jokes}> Random Jokes </button>
    <button className='btn2' onClick={newss}> Random News </button>
    </div>
    </div>
    </>
  );
}

export default App;






