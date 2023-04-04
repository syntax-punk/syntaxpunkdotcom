import React from 'react';
import { CardArticle } from './cardArticle';
import Image from 'next/image'; 

const FlipCardBodyMobile: React.FC = () => {
  return (
    <figure className="flipcard-face">
      <div className="photo-badge"/>
      <CardArticle />
    </figure>
  );
};

export { FlipCardBodyMobile }

