
import React, { useEffect } from 'react';

interface InstagramEmbedProps {
  embedCode: string;
}

const InstagramEmbed: React.FC<InstagramEmbedProps> = ({ embedCode }) => {
  useEffect(() => {
    // Use the Instagram embed code directly as innerHTML
    const container = document.getElementById('instagram-container');
    if (container) {
      container.innerHTML = embedCode;
    }
  }, [embedCode]);

  return (
    <div id="instagram-container">
      {/* The Instagram post will be populated here */}
    </div>
  );
};

export default InstagramEmbed;