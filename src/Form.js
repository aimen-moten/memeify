import React, { useState } from 'react'
import memedata from './memedata.js'

function Form() {
  
  React.useEffect(()=> {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setAllMemes(data.data.memes) )
  }, [])
  

  const [meme, setMeme] = useState(
    {
      topText: "",
      bottomText: "",
      randomImage: "https://i.imgflip.com/30b1gx.jpg"
    }
  )

  function handleChange(event) {
    const {name, type, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
    
  }

  const [allMemes, setAllMemes] = useState([])

  
  // const [image, setImage] = useState("")

  function getMemeImage(){
    // const memesArray = allMemeImages
    // console.log(memesArray)
    const randomNumber = Math.floor(Math.random()* allMemes.length)
    const url = allMemes[randomNumber].url
   setMeme(prevMeme => ({
    ...prevMeme,
    randomImage: url
   }))
  }
  return (
    <main>
        <div className='form'>
            <input className='form--input' type='text' onChange={handleChange} name="topText" value={meme.topText} placeholder='Top Text'></input>
            <input className='form--input' type='text' onChange={handleChange} name="bottomText" value={meme.bottomText} placeholder='Bottom Text'></input>
            <button onClick={getMemeImage} className='form--button' type='submit'>Change meme image 🖼</button>
        </div>

        <div className="meme">
                <img src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>

    </main>
  )
}

export default Form