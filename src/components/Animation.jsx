import React from 'react'
import { motion } from 'framer-motion'

const Animation = () => {
  return (
    <motion.div animate={{ rotate:360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className='w-64 h-64 bg-blue-500'>
    </motion.div>
  )
}

export default Animation