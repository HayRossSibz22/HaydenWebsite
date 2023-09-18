import React, {useState} from 'react';

interface CustomButtonProps {
    href: string;
    title: string;
}

export const CustomButton: React.FC<CustomButtonProps> = ({ href, title }) => {
  const [hovered, setHovered] = useState(false); // track whether the button is hovered or not
  
  const customButtonStyles = {
      color: 'white',
      fontWeight: 'bold',
      backgroundColor: hovered ? '#900c3f' : '#6a0f5f', // change color on hover
      padding: '1rem 2rem',
      textDecoration: 'none',
      display: 'inline-block',
      marginLeft: '1rem',
      borderRadius: '10px',
      transition: 'background-color 0.6s', // animate color change
  };

  return (
    <a
      style={customButtonStyles}
      href={href}
      onMouseEnter={() => setHovered(true)} 
      onMouseLeave={() => setHovered(false)} 
      rel="noopener noreferrer"
    >
      {title}
    </a>
  );
};