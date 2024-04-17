import React,{useState,useEffect }from 'react'
import './DigitalClock.css'
const DigitalClock = () => {

  const [time,setTime]= useState(new Date());

  useEffect(()=> {
    const interval = setInterval(()=>{
      setTime(new Date());
    },1000)
    return ()=>{
      clearInterval(interval)
    }
  },[]);

  const formatTime = ()=>{
    let hours = time.getHours()
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()
    let medrian = hours>=12 ? 'PM' : 'AM'
    
     hours = hours % 12 || 12

     return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)} ${medrian}`
  }

  const addZero = (number) =>{
    return number<10 ? `0${number}` : number
  }

  return (
    <div className='container'>
      <span className="clock">
        {formatTime()}
      </span>
    </div>
  )
}

export default DigitalClock
