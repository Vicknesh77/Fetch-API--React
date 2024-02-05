import React, { useState } from 'react'
import { useEffect } from 'react'
import Axios from './Axios'


const Advice = () => {

    const[advice, setAdvice] =useState('')
    const [count , setCount] =useState(0)

    const getadvice = async ()=>{
    const res= await fetch('https://api.adviceslip.com/advice')
    const data = await res.json();
    //    console.log(data);
    setAdvice(data.slip.advice);
    setCount((e)=>e + 1)

};
useEffect(()=>{
    const getadvice = async ()=>{
        const res= await fetch('https://api.adviceslip.com/advice')
        const data = await res.json();
           console.log(data);
        setAdvice(data.slip.advice);
        setCount((e)=>e+1)};
        

},[])
  return (
    <>
        <div className='bg-blue-200 w-full h-600px text-center py-36 align-center'>

            <p>{advice}</p>

            <button onClick={getadvice}className='bg-black text-white rounded-2xl p-5 mb-5'>
                Get advice
            </button>

            <p>You have {count} only pratice to make</p>
        </div>

       
        </>
  )
}

export default Advice