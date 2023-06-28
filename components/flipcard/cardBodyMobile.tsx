import React from 'react';
import { CardArticle } from './cardArticle';

const FlipCardBodyMobile: React.FC = () => {
  return (
    <figure className="flipcard-face">
      <div className="photo-badge"/>
      <CardArticle />
    </figure>
  );
};

export { FlipCardBodyMobile }

