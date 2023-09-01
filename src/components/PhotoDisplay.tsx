import React from 'react';

interface ImageLinkProps {
  href: string;
  src: string;
  alt: string;
}

const ImageLink: React.FC<ImageLinkProps> = ({ href, src, alt }) => {
  return (
    <a href={href}>
      <img
        src={src}
        alt={alt}
        style={{
          maxWidth: '100%',
          height: 'auto',
          display: 'block',
          margin: '0 auto',
        }}
      />
    </a>
  );
};

export default ImageLink;