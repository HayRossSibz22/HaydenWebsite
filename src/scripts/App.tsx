/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/

import { useState } from 'react'
import Button from '@mui/material/Button';
import './App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { teal, blueGrey } from '@mui/material/colors';
import background1 from '@assets/Code.B.W.jpg'  // https://www.pexels.com/photo/abstract-art-blur-bright-373543/
import React from 'react';
import ResponsiveAppBar from './ReactBar.tsx';
import { CustomButton } from '../components/CustomButton.tsx';
import { StickyButton } from '../components/StickyButton.tsx';
import GithubCards from "../components/GitHubCards";

const theme = createTheme({
  palette: {
    primary: teal,
    secondary: blueGrey,
  },
});

export default function App() {
  return (
    <>
      <h1>Portfolio</h1>

        <CustomButton href={'#id'} title={'Coding'}/>
        <CustomButton href={'#id'} title={'Art'}/>
        <CustomButton href={'#id'} title={'Games'}/>
        <GithubCards />

        
    </>
  );
}
