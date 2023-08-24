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

import { useState, useEffect } from 'react'
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
import fetchPinnedRepos from '../components/GitHubRequest';


interface Repo {
  id: number;
  name: string;
  // Add more properties as needed
}

export default function App() {

  const [pinnedRepos, setPinnedRepos] = useState<Repo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchPinnedRepos();
        setPinnedRepos(response.data as Repo[]); // Type assertion
      } catch (error) {
        console.error('Error fetching pinned repositories:', error);
      }
    };


    fetchData();
  }, []);

  return (
    <>
      <h1>Portfolio</h1>

        <CustomButton href={'#id'} title={'Coding'}/>
        <CustomButton href={'#id'} title={'Art'}/>
        <CustomButton href={'#id'} title={'Games'}/>
        
        <h2>Pinned Repositories</h2>
      <ul>
        {pinnedRepos.map(repo => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>

        
    </>
  );
}
