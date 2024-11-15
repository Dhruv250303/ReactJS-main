import React from 'react'
import Todo from './Todo'

function Todo_container({todos,deltodo}) {
  return (
    <div className='container'>
      {todos.map((todo,index)=>{
        return (
            <Todo todo={todo} index={index} deltodo={deltodo}/>
        )
      })}
    </div>
  )
}

export default Todo_container
