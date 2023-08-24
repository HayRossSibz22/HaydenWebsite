
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

export default function App() {

  return (

    
    <>

    <div className="header">
      <h1 className="name">Hayden Ross</h1>

    </div>
    <div className="buttons">
      <CustomButton href={'#about'} title={'About Me'} />
      <CustomButton href={'#coding'} title={'Coding'} />
      <CustomButton href={'#art'} title={'Art'} />
      <CustomButton href={'#games'} title={'Games'} />
    </div>
    <div id="about">
        <h2>About Me</h2>
        <p>
          As a computer science graduate, I’m dedicated to excelling in a meaningful professional environment.
          With industry experience in quality assurance, as well as in-depth knowledge of C++, C, and Java, I am a versatile hire ready to learn even more.
          I’m enthusiastic about contributing to a community that values innovation, building strong bonds, and creating exceptional user experiences.
         </p>
      </div>


      <div id="coding">
        <h2>Coding</h2>
        <p>
          As a computer science graduate, I’m dedicated to excelling in a meaningful professional environment.
          With industry experience in quality assurance, as well as in-depth knowledge of C++, C, and Java, I am a versatile hire ready to learn even more.
          I’m enthusiastic about contributing to a community that values innovation, building strong bonds, and creating exceptional user experiences.

          As a computer science graduate, I’m dedicated to excelling in a meaningful professional environment.
          With industry experience in quality assurance, as well as in-depth knowledge of C++, C, and Java, I am a versatile hire ready to learn even more.
          I’m enthusiastic about contributing to a community that values innovation, building strong bonds, and creating exceptional user experiences.
          As a computer science graduate, I’m dedicated to excelling in a meaningful professional environment.
          With industry experience in quality assurance, as well as in-depth knowledge of C++, C, and Java, I am a versatile hire ready to learn even more.
          I’m enthusiastic about contributing to a community that values innovation, building strong bonds, and creating exceptional user experiences.
          As a computer science graduate, I’m dedicated to excelling in a meaningful professional environment.
          With industry experience in quality assurance, as well as in-depth knowledge of C++, C, and Java, I am a versatile hire ready to learn even more.
          I’m enthusiastic about contributing to a community that values innovation, building strong bonds, and creating exceptional user experiences.
          As a computer science graduate, I’m dedicated to excelling in a meaningful professional environment.
          With industry experience in quality assurance, as well as in-depth knowledge of C++, C, and Java, I am a versatile hire ready to learn even more.
          I’m enthusiastic about contributing to a community that values innovation, building strong bonds, and creating exceptional user experiences.
          As a computer science graduate, I’m dedicated to excelling in a meaningful professional environment.
          With industry experience in quality assurance, as well as in-depth knowledge of C++, C, and Java, I am a versatile hire ready to learn even more.
          I’m enthusiastic about contributing to a community that values innovation, building strong bonds, and creating exceptional user experiences.

         </p>
      </div>
      <div id="art">
        <h2>Art</h2>   
        <p>
          As a computer science graduate, I’m dedicated to excelling in a meaningful professional environment.
          With industry experience in quality assurance, as well as in-depth knowledge of C++, C, and Java, I am a versatile hire ready to learn even more.
          I’m enthusiastic about contributing to a community that values innovation, building strong bonds, and creating exceptional user experiences.

          As a computer science graduate, I’m dedicated to excelling in a meaningful professional environment.
          With industry experience in quality assurance, as well as in-depth knowledge of C++, C, and Java, I am a versatile hire ready to learn even more.
          I’m enthusiastic about contributing to a community that values innovation, building strong bonds, and creating exceptional user experiences.
          As a computer science graduate, I’m dedicated to excelling in a meaningful professional environment.
          With industry experience in quality assurance, as well as in-depth knowledge of C++, C, and Java, I am a versatile hire ready to learn even more.
          I’m enthusiastic about contributing to a community that values innovation, building strong bonds, and creating exceptional user experiences.
          As a computer science graduate, I’m dedicated to excelling in a meaningful professional environment.
          With industry experience in quality assurance, as well as in-depth knowledge of C++, C, and Java, I am a versatile hire ready to learn even more.
          I’m enthusiastic about contributing to a community that values innovation, building strong bonds, and creating exceptional user experiences.
          As a computer science graduate, I’m dedicated to excelling in a meaningful professional environment.
          With industry experience in quality assurance, as well as in-depth knowledge of C++, C, and Java, I am a versatile hire ready to learn even more.
          I’m enthusiastic about contributing to a community that values innovation, building strong bonds, and creating exceptional user experiences.
          As a computer science graduate, I’m dedicated to excelling in a meaningful professional environment.
          With industry experience in quality assurance, as well as in-depth knowledge of C++, C, and Java, I am a versatile hire ready to learn even more.
          I’m enthusiastic about contributing to a community that values innovation, building strong bonds, and creating exceptional user experiences.

         </p>
        {/* Art content */}
      </div>
      
      <div id="games">
        <h2>Games</h2>
        {/* Games content */}
      </div></>

  );
}
