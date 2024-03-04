import React from 'react'

const Page = (gotonextPage,gotoprevPage) => {
  return (
    <div>
    <button onClick={gotoprevPage}>prev</button>
    <button onClick={gotonextPage}>next</button>
      
    </div>
  )
}

export default Page
