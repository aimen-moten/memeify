import React, { useState } from 'react'
import memedata from './memedata.js'

function Form() {
  
  
  const [image, setImage] = useState("")
  function getMemeImage(){
    const memesArray = memedata.data.memes
    const randomNumber = Math.floor(Math.random()* memesArray.length)
    const url = memesArray[randomNumber].url
    setImage(url)
  }
  return (
    <main>
        <div className='form'>
            <input className='form--input' type='text'></input>
            <input className='form--input' type='text'></input>
            <button onClick={getMemeImage} className='form--button' type='submit'>Change meme image 🖼</button>
        </div>

        <img src={image} className='meme--image' ></img>


    </main>
  )
}

export default Form