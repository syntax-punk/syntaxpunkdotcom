import React from "react";
import Image from 'next/image'; 
import { CardArticle } from "./cardArticle";

const FlipCardBodyDesktop: React.FC = () => {
  return (
    <>
      <figure className="flipcard-face">
        <Image loading='eager' className="mephoto" src="/images/syntaxpnk.png" alt="Photo of me" layout="fill"/>
      </figure>
      <div className="flipcard-back">
        <CardArticle />
      </div>
    </>
  );
};

export { FlipCardBodyDesktop }