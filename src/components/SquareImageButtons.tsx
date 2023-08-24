import React from 'react';

interface SquareImageButtonProps {
  imageSrc: string;
  borderColor: string;
  link: string;
}

const SquareImageButton: React.FC<SquareImageButtonProps> = ({ imageSrc, borderColor, link }) => {
  const squareImageButtonStyle = {
    border: `2px solid ${borderColor}`,

  };

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="square-image-button" style={squareImageButtonStyle}>
        <img src={imageSrc} alt="Button Image" />
      </div>
    </a>
  );
};


export default SquareImageButton;

