import React from 'react'

const Loading = ({width}) => {
  return (
    <div className={`w-${width} h-${width} rounded-full border-4 border-blue-400 border-t-white border-l-white animate-spin`}/>
  )
}

export default Loading