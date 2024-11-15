import React from "react";

function Animal() {
  let Animals = ["Dog ", "Cat ", "Cow "];
  return (
    <div>
      <ol>
        {Animals.map((Animals) => (
          <li>{Animals}</li>
        ))}
      </ol>
    </div>
  );
}

export default Animal;
