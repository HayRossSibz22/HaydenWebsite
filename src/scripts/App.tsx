// App.tsx
import './App.css'
import { CustomButton } from '../components/CustomButton.tsx';
import GitHubCards from "../components/GitHubCards";
import SquareImageButton from '../components/SquareImageButtons.tsx';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import resume from '../assets/Hayden_Ross_Resume.08-21.pdf';
import insta from '../assets/insta.png'
//import UnityGame from '../components/UnityGame';
import { useEffect } from 'react';

import art1 from '../../imgs/albumCoverFinal.png';
import art2 from '../../imgs/BearSketch.png';
import art3 from '../../imgs/BlueMan.png';
import art4 from '../../imgs/SelfPortrait.png';
import art5 from '../../imgs/sky2.2.png';
import gif1 from '../../imgs/Snake.gif';
import gif2 from '../../imgs/snake2.gif';
import Guitar from '../../imgs/Guitar.png';
import Oar from '../../imgs/Oar.png';

import swordGif from "../../imgs/Sword.gif";
import roomGif from "../../imgs/room.gif";
import BoatMoving from "../../imgs/BoatMoving.gif";
import BoatStylized from "../../imgs/BoatStylized.gif";
import GrassWater from "../../imgs/Grass&Water.gif";
import Speed1 from "../../imgs/Speed1.gif";
import PauseSpeed from "../../imgs/Pause.Speed.png";
import SettingsSpeed from "../../imgs/Settings.Speed.png";

export default function App() {
  //const [showGame, setShowGame] = useState(false);

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
      const elementsToFadeIn = ["header", "buttons", "name", "games", "square-image-button"];

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

//        <CustomButton href={'#about'} title={'About Me'} />
  return (

    <>

      <div className="header">
        <h1 className="name">Hayden Ross</h1>

      </div>
      <div className="buttons">

        <CustomButton href={'#games'} title={'Games'} />
        <CustomButton href={'#coding'} title={'Coding'} />
        <CustomButton href={'#art'} title={'Art'} />
        <CustomButton href={'#resume'} title={'Resume'} />
      </div>
      <div className="square-image-button">
        <SquareImageButton imageSrc={linkedin} borderColor='White' link={'https://www.linkedin.com/in/hayden-ross21/'} />
        <SquareImageButton imageSrc={github} borderColor={'white'} link={'https://github.com/HayRossSibz22'} />
        <SquareImageButton imageSrc={insta} borderColor={'White'} link={'https://www.instagram.com/whatshaydencreatin/'} />
      </div>

      <div id="games" className="section fade-in">
        <h2>Games</h2>
        {/* Games content       <div id="about" className="section fade-in">
        <h2>About Me</h2>
        <p>
          As a computer science graduate, I’m dedicated to excelling in a meaningful professional environment. In the meantime, I'm working on my own projects and learning new skills.
          Please look through my website to see some of my work and feel free to contact me with any questions.
        </p>

      </div> */}
        <p>
          My ultimate goal within development is to create unique experiences. Game development has always been an interest of mine, from the artsy indie games that were coming out when I was a kid to the AAA titles that influence culture, I'm fascinated by all elements of the industry.
          I have been working on a few projects in my spare time. 
          I've been recreating classic arcade games to buiild some foundational skills and knowledge in Unity.
        </p>
        <div className="gif-grid">
          <a href={gif1}><img src={gif1} title="source: imgur.com" className='gif' /></a>
          <a href={gif2}><img src={gif2} title="source: imgur.com" className='gif' /></a>
        </div>
        <p>
          I started 3D modeling in Blender to create my own game assets and cinematics. 
          <div className="gif-grid">
          <a href={swordGif}><img src={swordGif} title="SwordGif" className='gif' /></a>
          <a href={roomGif}><img src={roomGif} title="roomGif" className='gif' /></a>
          <a href={Guitar}><img src={Guitar} title="Guitar" className='gif' /></a>
          <a href={Oar}><img src={Oar} title="Oar" className='gif' /></a>
  
          </div>
        </p>
        <p>
          I have also been working on my first bigger project. It is an art and story driven game. The idea is explained more on my github page. I'm testing differnt options, from Assets in Godot and Unity. I decided to use Flatkit as it allows for so much customization. There is more progress and information on my github under "water"
          <div className="gif-grid">
          <a href={GrassWater}><img src={GrassWater} title="GrassWater" className='gif' /></a>
          <a href={BoatMoving}><img src={BoatMoving} title="BoatMoving" className='gif' /></a>
          <a href={BoatStylized}><img src={BoatStylized} title="BoatStylized" className='gif' /></a>
          </div>
        </p>
        <p>
          While my larger project is in development, I've also been working on smaller projects. I've started prototyping for multiple games, some more simple than others.
          I'm a big fan of superhot, and wanted to recreate the slow motion mechanic in Godot. Here is a gif of the time mechanic in action. I will likely be using this mechanic in a platformer game, which I've completed most of the coding and UI for.
          <div className="gif-grid">
          <a href={Speed1}><img src={Speed1} title="BoatStylized" className='gif' /></a>
          <a href={PauseSpeed}><img src={PauseSpeed} className="gif" title="source: imgur.com" /></a>
          <a href={SettingsSpeed}><img src={SettingsSpeed} className="gif" title="source: imgur.com" /></a>
          </div>
          <div className="image-grid">
          </div>
          
        </p>
        <p>
          Another prototype in development is a very simple endless runner game in Unity. The chore mechanic is sliding and jumping by obsticles and the secondary mechanic is using a rocket pickup to destroy the obstacles in your way. This will be my first game to be released on the app store. 
        </p>
      </div>




      <div id="coding" className="section fade-in">
        <h2>Coding</h2>

        <p>
          The coding section live updates off of my github. 
        </p>
        <GitHubCards />

      </div>
      <div id="art" className="section fade-in">
        <h2>Art</h2>
        <p>
          in 2019, I started drawing. I have since moved on to digital art and have been training as a concept artist.
          While this is mostly a hobby, I can envision a future where I combine my coding and art skills to create games! Currently, I'm taking a weapons design class.
        </p>
        <div className="image-grid">
          <a href={art1}><img src={art1} className="imgur" alt="Image 1" /></a>
          <a href={art2}><img src={art2} className="imgur" /></a>
          <a href={art3}><img src={art3} className="imgur" /></a>
          <a href={art4}><img src={art4} className="imgur" title="source: imgur.com" /></a>
          <a href={art5}><img src={art5} className="imgur" title="source: imgur.com" /></a>
        </div>

        {/* Art content */}
      </div>

      <div id="resume" className="section fade-in">
        <h2>Resume</h2>
        <a href={resume} target="_blank">Download Resume</a>
      </div>

    </>

  );
}
