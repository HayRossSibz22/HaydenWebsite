
import './App.css'
import { CustomButton } from '../components/CustomButton.tsx';
import GitHubCards from "../components/GitHubCards";
import SquareImageButton from '../components/SquareImageButtons.tsx';
import email from '../assets/email.svg';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import resume from '../assets/Hayden_Ross_Resume.08-21.pdf';
import insta from '../assets/insta.png'
import UnityGame from '../components/UnityGame';
import { useState, useEffect } from 'react';



export default function App() {
  const [showGame, setShowGame] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      const elementsToShow = ["about", "coding", "art", "games", "resume", "square-image-button", "image-grid", "gif", "imgur", "buttons", "github-cards-container", "repo-list", "repo-title", "sub-category"];

      elementsToShow.forEach((id) => {
        const elem = document.getElementById(id);
        if (elem) {
          const position = elem.getBoundingClientRect().top;

          if (position <= windowHeight) {
            elem.classList.add("fade-in");
            elem.style.opacity = "1";
            elem.style.filter = "blur(0px)";
            elem.style.transform = "translateX(0%)";
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // The initial fade-in
  useEffect(() => {
    setTimeout(() => {
      const elementsToFadeIn = ["header", "buttons", "name", "about", "square-image-button", "coding"];

      elementsToFadeIn.forEach((id) => {
        const elem = document.getElementById(id);
        if (elem) {
          elem.classList.add("fade-in");
          elem.style.opacity = "1";
          elem.style.filter = "blur(0px)";
        }
      });
    }, 0);
  }, []);


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
        <SquareImageButton imageSrc={email} borderColor='white' link={'mailto:haydenross00@gmail.com'} />
        <SquareImageButton imageSrc={linkedin} borderColor='White' link={'https://www.linkedin.com/in/hayden-ross21/'} />
        <SquareImageButton imageSrc={github} borderColor={'white'} link={'https://github.com/HayRossSibz22'} />
        <SquareImageButton imageSrc={insta} borderColor={'White'} link={'https://www.instagram.com/whatshaydencreatin/'} />
      </div>


      <div id="about" className="section fade-in">
        <h2>About Me</h2>
        <p>
          As a computer science graduate, I’m dedicated to excelling in a meaningful professional environment. In the meantime, I'm working on my own projects and learning new skills.
          Please look through my website to see some of my work and feel free to contact me with any questions.
        </p>

      </div>


      <div id="coding" className="section fade-in">
        <h2>Coding</h2>

        <p>
          The coding section live updates off of my github. Here are some projects I have worked on recently:
        </p>
        <GitHubCards />

      </div>
      <div id="art" className="section fade-in">
        <h2>Art</h2>
        <p>
          in 2019, I started drawing with a pen for fun. I have since moved on to digital art and have been training as a concept artist.
          While this is mostly a hobby, I can envision a future where I combine my coding and art skills to create games!
          Here is some of my work:
        </p>
        <div className="image-grid">
          <a href="https://imgur.com/wbrxRER"><img src="https://i.imgur.com/wbrxRER.png" className="imgur" alt="Image 1" /></a>
          <a href="https://imgur.com/z701UvQ"><img src="https://i.imgur.com/z701UvQ.jpg" className="imgur" /></a>
          <a href="https://imgur.com/jtVn734"><img src="https://i.imgur.com/jtVn734.png" className="imgur" /></a>
          <a href="https://imgur.com/SkGMa6M"><img src="https://i.imgur.com/SkGMa6M.png" className="imgur" title="source: imgur.com" /></a>

        </div>

        {/* Art content */}
      </div>

      <div id="games" className="section fade-in">
        <h2>Games</h2>
        {/* Games content */}
        <p>
          My ultimate goal within development is to create unique experiences. Game development has always been an interest of mine,
          and I have been working on a few projects in my spare time. In the near future,
          I plan on documenting the progress of my projects on a youtube channel. Currently, my main project is building and innovating on the classic 2D snake game. This is my progress so far:
        </p>
        <div className="gif-grid">
          <a href="https://imgur.com/FwxVd4A"><img src="https://i.imgur.com/FwxVd4A.gif" title="source: imgur.com" className='gif' /></a>
          <a href="https://imgur.com/h3397DZ"><img src="https://i.imgur.com/h3397DZ.gif" title="source: imgur.com" className='gif' /></a>
          </div>

        </div>

        <div id="resume" className="section fade-in">
          <h2>Resume</h2>
          <a href={resume} target="_blank">Download Resume</a>
        </div>

      </>

      );
}
