import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const TypeWriterText = ({ text }) => {
  return (
    <span className="text-blue-600">
      <Typewriter words={[text]} loop={0} cursor cursorStyle='_' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
    </span>
  )
}

export default TypeWriterText