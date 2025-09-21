import React from "react";

function Child(props) {
  const childStyle={
    border: '2px solid #4CAF50',
    borderRadius: '10px',
    padding: '20px',
    marginTop: '20px',
        fontSize: '18px',
        color: '#333',
  };
  return(
    <div style={childStyle}>
      <h2>Hello, {props.name}!</h2>
      <p>You are {props.age} years old and work as a {props.occupation}.</p>
    </div>
  );
}
export default Child;