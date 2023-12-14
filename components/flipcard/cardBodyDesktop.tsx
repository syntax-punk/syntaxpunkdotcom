import React from "react";
import Image from 'next/image'; 
import { CardArticle } from "./cardArticle";

interface Props {
  width: number;
  height: number;
}

const FlipCardBodyDesktop: React.FC<Props> = ({ width, height }) => {
  return (
    <>
      <figure className="flipcard-face">
        <Image 
          loading="lazy" 
          className="mephoto" 
          src="/images/syntaxpnk.png" 
          alt="Photo of me" 
          placeholder="blur"
          blurDataURL="/images/syntaxpnk_blurred.png"
          width={width}
          height={height}
          />
      </figure>
      <div className="flipcard-back">
        <CardArticle />
      </div>
    </>
  );
};

export { FlipCardBodyDesktop }