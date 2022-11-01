import React from 'react';

let Body = (e) => {

   const [meme, setmeme] = React.useState({
    topText:'',
    bottomText:'',
    randomImage:'https://i.imgflip.com/1jwhww.jpg'  
   }) 

  const [allMemes , setallMemes] = React.useState([])

  React.useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
    .then(res => res.json())
    .then(data=> setallMemes(data.data.memes))
     },[])
      
    let click  = () => {
        const getRandomNumber = Math.floor(Math.random() * allMemes.length)
        const url =allMemes[getRandomNumber].url
        console.log(url);

       setmeme(pre => {
      return{
        ...pre,
        randomImage: url
      }
      
     })
    
    };
    const handleChange  = (e) => {
      const {name,value} = e.target 
       setmeme(pre => {
        return{
          ...pre,
          [name]: value
        }
       })
    };
     return(
     <div className='main'>
       <div className='inputs'>
       <input
       placeholder='shut up'
       name='topText'
       value={meme.topText}
       onChange={handleChange}
       />
        <input 
          placeholder='and take my money'
          name='bottomText'
          value={meme.bottomText}
          onChange={handleChange}
        />
       </div>
        <button
        onClick={click}
        >Generate Random Meme Image</button>
      <div 
         className='img'>
      <img
        src= {meme.randomImage}
        alt='hey' 
        width={470}
        />
        <h2 className='h21'>{meme.topText}</h2>
        <h2 className='h22'>{meme.bottomText}</h2>
      </div>
     </div>
     )
};
export default Body