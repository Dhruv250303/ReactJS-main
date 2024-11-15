import React from 'react'

function message() {

    function sayhello() {
        console.log('Hello');
        
    }
  return (
    <button onClick={sayhello}>Click here to say Hello</button>
  )
}

export default message
