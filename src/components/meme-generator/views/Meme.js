import { useState, useEffect } from 'react';

export default function Meme(props){

    const [allMemes, setAllMemes] = useState([]);
    const [meme, setMeme] = useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    });

    useEffect(() => {
        fetch(`https://api.imgflip.com/get_memes`)
        .then(res => res.json())
        .then(response => {
            setAllMemes(response.data.memes);
        })
    }, []);

    function setFormData(event){
        const {name, value} = event.target;
        setMeme(prevState => {
            return {...prevState,[name]: value}
        })
    }

    function getMemeImages(){
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const memeURL = allMemes[randomNumber].url
        setMeme(prevState => ({...prevState, randomImage:`${memeURL}`}))
    }

    return(
        <main className={props.darkMode?"darkMeme":""} >
            <div className="form">
                <input 
                    type="text"
                    className="form-input"
                    placeholder="Top Text"
                    value={meme.topText}
                    onChange={setFormData}
                    name="topText"
                />
                <input 
                    type="text" 
                    className="form-input"
                    placeholder="Bottom Text"
                    value={meme.bottomText}
                    onChange={setFormData}
                    name="bottomText"
                />
                <button onClick={getMemeImages} className="form-btn">Get a new meme image 🖼</button>
            </div>
            <div className='meme'>    
                <img className='meme-img' src={meme.randomImage} alt=""/>
                <h2 className='meme-text top'>{meme.topText}</h2>
                <h2 className='meme-text bottom' >{meme.bottomText}</h2>
            </div>
        </main>
    )
}