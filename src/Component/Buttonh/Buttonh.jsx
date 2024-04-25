import React from 'react'
import './Buttonh.css'

const Buttonh = (props) => {
  return (
    <div>
      <div className="outer">
      <button href="#0" className="slide_left button_slide">
   {props.value}
      </button>
    </div>
    </div>
  )
}

export default Buttonh
