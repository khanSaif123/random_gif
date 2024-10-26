import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { flushSync } from 'react-dom';
import Spinner from './Spinner';

const Random = () => {

    // jo bhi hum env file mye insert krte hai usko hum prosses ki help se access krskte hain
    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

    const[gif, setgif] = useState('');
    const[loading, setLoading] = useState(false);

    // we use useEffect to call the API.
    async function fetchData(){

        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

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

  return (
    <div className='w-1/2 bg-green-400 mx-auto rounded-lg border border-black
     flex flex-col items-center gap-y-10'>
        <h1 className=' text-2xl uppercase underline font-bold mt-[20px]'>A Random Gif</h1>

        {
           loading ? (<Spinner/>) : (<img src={gif} width="320"/>) 
        }

        
        <button onClick={clickHandler}
        className=' bg-lime-50 w-8/12 rounded-md py-2 px-6 font-semibold mb-[20px]'
        >Generate</button>
    </div>
  )
}

export default Random