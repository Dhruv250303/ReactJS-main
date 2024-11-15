import React from "react";

function Todo({todo,index,deltodo}) {
  return (
    <div className="task-container">
      <div className="tasks">
        <p>{todo}</p>
        <div className="tickbox">
          <input type="checkbox" />
          <button onClick={()=> deltodo(index)}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Todo;
