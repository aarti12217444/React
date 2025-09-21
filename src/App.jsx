import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Greeting from './assets/Greeting';
import Parent from './assets/Parent';


function App() {
  // const [count, setCount] = useState(0)
  // const[message,setMessage]=useState("Hello World");

  // Passing Multiple Props
  const appStyle={
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    margin:0,
    fontFamily: 'Arial, sans-serif'
  };
  return (
    <>


    {/* Passing Multiple Props */}
      <div style={appStyle}>
        <Parent/>


    {/* Passing a Single Prop to a React Functional Component: */}
    {/* <div style={{textAlign:"center",marginTop:"20px"}}>
      <Greeting message="Hello, World!"/> */}

      


      {/* FUNCTIONAL COMPONENTS */}
      {/* <div style={{textAlign:"center",marginTop:"20px"}}>
        <h1>{message}</h1>
        <button className='btn' onClick={()=>setMessage("Hello from GeeksforGeeks")}>Click Me</button> */}



        {/* COUNT WINDOW */}
        {/* <img 
  src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210419113249/gfg-new-logo-min.png" 
  className="logo" 
  alt="GeeksforGeeks Logo"
/>


      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button className='btn' onClick={() => setCount((count) => count + 1)}>
          count is {count}
          </button> */}
          </div>
    </>
  );
}

export default App
