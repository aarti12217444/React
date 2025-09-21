import react from 'react'
import Child from './Child'

function Parent() {
  const parentStyle={
    textAlign: 'center'
  };
  return (
    <div style={parentStyle}>
      <h1>Welcom to the Parent Component!</h1>
      <Child name="John Doe" age={30} occupation="Software Engineer"/>
    </div>
  );
}
export default Parent;