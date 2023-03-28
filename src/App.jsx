import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css';

import Header from './component/Header/Header'
import Movie from './component/Movie/Movie';
import { ToastContainer, toast } from 'react-toastify';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Movie></Movie>
    </div>
  )
}

export default App
