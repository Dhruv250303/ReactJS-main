import React,{useState} from "react";

function Form() {

    // const [text , setText] = useState('')
    const [name,setName]= useState({firstname:'Ben',lastname:'10'})

    // function change(e) {
    //    setText(e.target.value)
    //     console.log(e);
        
    // }

  return (
    <div>

        <h1>{name.firstname} --- {name.lastname}</h1>
      <form>
        <label >FirstName</label>
        <input onChange={(e)=>setName({...name,firstname : e.target.value})} type="text"  value={name.firstname}/>
        <label >LastName</label>
        <input onChange={(e)=>setName({...name,lastname:e.target.value})} type="text"  value={name.lastname}/>
      </form>

      <button onClick={(e)=>{e.preventDefault(); console.log(name)}}>Submit here</button>
    </div>
  );
}

export default Form;
