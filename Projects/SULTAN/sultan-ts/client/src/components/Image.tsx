import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string
  width?: number;
  height?: number;
}

const Image: React.FC<ImageProps> = ({ className, src, alt, width, height }) => {
  return (
    <img className={className} src={src} alt={alt} width={width} height={height} />
  );
};

export default Image;