import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <Header />
      
      <div className="welcome-section">
        <div className="welcome-box">
          <h2>Welcome to my <span className="highlight">website</span>!</h2>
        </div>
        <p className="welcome-subtext">
          My name is Brandon Chin and I am a graduating EECS major at UC Berkeley. 
          I have developed interactive, accessible, and user-focused products for industry and academia, working at several internships and publishing papers.
        </p>
      </div>
      
    </div>
  )
}

export default App
