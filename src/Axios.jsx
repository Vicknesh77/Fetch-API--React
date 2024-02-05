import React, { useState } from 'react'
import axios from 'axios'

const Axios = () => {
    
    const[data , setData] = useState('')
    const[count , setCount] = useState(0);

    const getquote =()=>{
        axios.get('https://api.quotable.io/random')
        .then(res =>{
            // console.log(res.data.content)

            setData(res.data.content)

        }).catch(err =>{
            // console.log("Error")
        })
        setCount((e)=> e+1)
      
    }

  return (
    <div className='mt-20 bg-blue-400 w-full h-600px text-center py-36 align-center'>
        <h1 className='text-2xl'>Axios Fetch</h1>

        <p className='mb-5 mt-10 text-white'>{data}</p>

        <button onClick={getquote} className=' bg-black text-white rounded-2xl p-5 mb-5'>Get Quote</button>

        <p>You have {count} only pratice to make</p>

    </div>


  )
}

export default Axios