import React, { useState } from "react"
import './App.css';

const Header = ({title})=> {
  return(
    <h1>{title}</h1>
  )  
}

const Content = () => {
  
  const [displayText, setDisplayText] = useState('');
 
  const handleClick = () => {
     setDisplayText(document.getElementById('text-area').value);
  }
  return (
    <div>
      <textarea id="text-area" cols="3" rows="5" />
      <button onClick={handleClick}>Click Me</button>
      {displayText && <p>{displayText}</p>}
    </div>
  )
}


const Footer = () => {
  return (
    <footer>
      <p>gmail: rajbari@gmail.com</p>
      <p>Contact: 07844 58434</p>
       <p>Map: @dhaka.home.ltd</p>
    </footer>
  )
}

const App = () => {
  return (
    <div className="App">
      <Header title="Welcome to the React"/>
      <Content />
      <Footer />
    </div>
  )
}

export default App;