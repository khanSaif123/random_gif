import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { flushSync } from 'react-dom';
import Spinner from './Spinner';

const Tag = () => {

    // jo bhi hum env file mye insert krte hai usko hum prosses ki help se access krskte hain
    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

    const[gif, setgif] = useState('');
    const[loading, setLoading] = useState('false');

    const[tag, setTag] = useState('car');

    // we use useEffect to call the API.
    async function fetchData(){

        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

        // the axios that we download at the time of downloading the npm.
        // we use axios to get the api. here we are not using the fetch to get the api axios is more secure.
        // axios request based on promises same as fetch
        const {data} =  await axios.get(url)
        const imageSource = data.data.images.downsized_large.url;  
        setgif(imageSource);
        
        setLoading(false)
         
        // console.log(imageSource)
        // const output = await axios.get(url);
        // console.log(output);
        
    }

    // here calling the function by using useEffect.
    useEffect(() =>{
        fetchData();
    },[])

    function clickHandler(){
       
        fetchData();
    }

    function changeHandler(event){
        setTag(event.target.value);
    }

  return (
    <div className='w-1/2 bg-blue-400 mx-auto rounded-lg border border-black
     flex flex-col items-center gap-y-5 ' >
        <h1 className=' text-2xl uppercase underline font-bold mt-[20px]'>Random {tag} Gif</h1>

        {
           loading ? (<Spinner/>) : (<img src={gif} width="350"/>) 
        }
         
         <input
            type='text'
            className='w-8/12 text-lg py-2 rounded-lg mb-[3px] text-center'
            onChange={changeHandler}
            value={tag}
         />
        
        <button onClick={clickHandler}
        className=' bg-lime-50 w-8/12 rounded-md py-2 px-6 font-semibold mb-[20px]'
        >Generate</button>
    </div>
  )
}

export default Tag