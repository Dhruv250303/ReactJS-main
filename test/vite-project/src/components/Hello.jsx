// function Hello({name,phone}) {
function Hello(props) {


  function age() {
    let age = 21;
    return `Dhruv's age is ` + age
  }

  // props.name= 'satish'// can't be done
  
  return (
      <h1>Helloo {props.name} {props.phone}  </h1>
      
  );
}

export default Hello;
