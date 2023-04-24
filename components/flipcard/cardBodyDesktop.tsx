import React from "react";
import Image from 'next/image'; 
import { CardArticle } from "./cardArticle";

const FlipCardBodyDesktop: React.FC = () => {
  return (
    <>
      <figure className="flipcard-face">
        <Image 
          loading="lazy" 
          className="mephoto" 
          src="/images/syntaxpnk.png" 
          alt="Photo of me" 
          layout="fill"
          placeholder="blur"
          blurDataURL="/images/syntaxpnk_blurred.png"
          />
      </figure>
      <div className="flipcard-back">
        <CardArticle />
      </div>
    </>
  );
};

export { FlipCardBodyDesktop }