
import './App.css'
import { CustomButton } from '../components/CustomButton.tsx';
import GitHubCards from "../components/GitHubCards";
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
        <SquareImageButton imageSrc={email} borderColor='purple' link={' mailto:haydenross00@gmail.com'} />
        <SquareImageButton imageSrc={linkedin} borderColor='red' link={'https://www.linkedin.com/in/hayden-ross21/'} />
        <SquareImageButton imageSrc={github} borderColor={'yellow'} link={'https://github.com/HayRossSibz22'} />
        <SquareImageButton imageSrc={insta} borderColor={'Blue'} link={'https://www.instagram.com/whatshaydencreatin/'} />
      </div>


      <div id="about" className="section">
        <h2>About Me</h2>
        <p>
          As a computer science graduate, I’m dedicated to excelling in a meaningful professional environment. in the meantime, I'm working on my own projects and learning new skills.
          Please look through my website to see some of my work and feel free to contact me with any questions.
        </p>

      </div>


      <div id="coding" className="section">
        <h2>Coding</h2>

        <p>
          The coding section live updates off of my github. Here are some projects I have worked on recently:
        </p>
        <GitHubCards />

      </div>
      <div id="art" className="section">
        <h2>Art</h2>
        <p>
          in 2019, I started drawing with a pen for fun. I have since moved on to digital art and have been training as a concept artist.
          While this is mostly a hobby, I can envision a future where I combine my coding and art skills to create games!
          Here is some of my work:
        </p>
        {/* Art content */}
      </div>

      <div id="games" className="section">
        <h2>Games</h2>
        {/* Games content */}
        <p>
<<<<<<< HEAD
          My ultimate goal within development is to create unique experiences. Game development has always been an interest of mine,
          and I have been working on a few projects in my spare time. In the near future,
          I plan on documenting the progress of my projects on a youtube channel. but currently there is no public content.
=======
          NOOOO CLUE YET
>>>>>>> parent of 98f8a36 (Edits)
        </p>
      </div>

      <div id="resume" className="section">
        <h2>Resume</h2>
        <a href={resume} target="_blank">Download Resume</a>
      </div>

    </>

  );
}
