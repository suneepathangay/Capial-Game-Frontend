import { data } from 'autoprefixer'
import axios from 'axios'
import React, { useEffect, useState } from 'react'


function index() {
  const[country,setCountry]=useState("")
  const[capital,setCapital]=useState("")
  const[userCapital,setUser]=useState("")
  const[score,setScore]=useState(0)

  const handleChange=(event)=>{
    setUser(event.target.value)
    console.log(userCapital)
  }

  
  const getCountries=async()=>{
    const result=await axios.get("http://localhost:3001/getcountry")
    setCountry(result.data)
    setCapital("")
  }

  const getCapital=async()=>{
    const results=await axios.get(`https://restcountries.com/v3.1/name/${country}`)
    const jsonString=results.data[0]["capital"][0]
    console.log(jsonString)
    console.log(userCapital)
    if(jsonString===userCapital){
      setScore(score+1)
    }else{
      
      setScore(0)
    }
  
  }



  











return (
    <div className='flex flex-col items items-center'>
      
        <div className='text-orange-700 font-bold pb-4'>Capital Game</div>
        <div className='pt-4 pb-4'>
          <div>{score}</div>
          <div>Country</div>
          <div>{country}</div>
          <div className='pt-4'>{capital}</div>
        </div>
        <div className='pb-4'>Capital</div>
        <input name="GPA" className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pb-3" id="username" type="text" onChange={handleChange} />
        <div className='pt-4 pb-4'>
        <button  className='bg-orange-700 rounded-md text-white' onClick={getCountries}>Next</button>
        </div>
        <button className='bg-orange-700 rounded-md text-white' onClick={getCapital} >Submit</button>
        <div className='pt-4'>
        <button className='bg-orange-700 rounded-md text-white' onClick={getCountries}>Start</button>
        </div>
    </div>
  )
}

export default index