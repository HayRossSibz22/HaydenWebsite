
import { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import './App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { teal, blueGrey } from '@mui/material/colors';
import background1 from '@assets/Code.B.W.jpg'  // https://www.pexels.com/photo/abstract-art-blur-bright-373543/
import React from 'react';
import ResponsiveAppBar from './ReactBar.tsx';
import { CustomButton } from '../components/CustomButton.tsx';
import GitHubCards from "../components/GitHubCards";
import fetchPinnedRepos from '../components/GitHubRequest';
import SquareImageButton from '../components/SquareImageButtons.tsx';
import email from '../assets/email.svg';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import resume from '../assets/Hayden_Ross_Resume.08-21.pdf';
import insta from '../assets/insta.png'



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
      <CustomButton href={'#resume'} title={'Resume'} />
    </div>
    <div className="square-image-button">
      <SquareImageButton imageSrc= {email} borderColor='purple' link = {' mailto:haydenross00@gmail.com'} />
      <SquareImageButton imageSrc= {linkedin} borderColor='red' link = {'https://www.linkedin.com/in/hayden-ross21/'}/>
      <SquareImageButton imageSrc= {github} borderColor={'yellow'} link = {'https://github.com/HayRossSibz22'}/>
      <SquareImageButton imageSrc= {insta} borderColor={'Blue'} link = {'https://www.instagram.com/whatshaydencreatin/'}/>
    </div>

    
    <div id="about" className="section">
        <h2>About Me</h2>
        <p>
          As a computer science graduate, I’m dedicated to excelling in a meaningful professional environment.
          With industry experience in quality assurance, as well as in-depth knowledge of C++, C, and Java, I am a versatile hire ready to learn even more.
          I’m enthusiastic about contributing to a community that values innovation, building strong bonds, and creating exceptional user experiences.
         </p>
      </div>


      <div id="coding" className="section">
        <h2>Coding</h2>
        <GitHubCards />

      </div>
      <div id="art" className="section">
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
      
      <div id="games" className="section">
        <h2>Games</h2>
        {/* Games content */}
      </div>

      <div id="resume" className="section">
        <h2>Resume</h2>
        <a href = {resume} target = "_blank">Download Resume</a>
      </div>
      
      </>

  );
}
