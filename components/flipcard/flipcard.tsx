import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useIsMobile } from "../../hooks/useIsMobile";
import { FlipCardBodyMobile } from "./cardBodyMobile";
import { FlipCardBodyDesktop } from "./cardBodyDesktop";

const FlipCard = () => {
  const [cardSize, setCardSize] = useState<[number, number]>([0, 0]);
  const isMobile = useIsMobile()
  const containerref = useRef<HTMLDivElement>(null);
  const flipcardref = useRef<HTMLDivElement>(null);
  
  useEffect(function setCardSizeOnMount() {
    if (!containerref.current) return;
    const bbox = containerref.current.getBoundingClientRect();
    setCardSize([bbox.height * 0.8,  bbox.height]);
  }, [])

  const [width, height] = cardSize;
  const extraClassName = isMobile ? "mobile" : "desktop";

  return (
    <Container ref={containerref} className="flipcard-container fade-in one">
      <div 
        ref={flipcardref} 
        className={`flipcard ${extraClassName}`}
        style={{ width: `${width}px`, height: `${height}px`}}
      >
        <div className={`flipcard-content ${extraClassName}`}>
          { isMobile ? <FlipCardBodyMobile /> : <FlipCardBodyDesktop />}
        </div>
      </div>
    </Container>
  );
};


const Container = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .flipcard {
    max-height: 1000px;
    max-width: 800px;
    height: 100%;
    width: 100%;
    perspective: 2500px;
    background: transparent;
    cursor: pointer;
  }

  .flipcard-content {
    height: 100%;
    width: 100%;
    position: relative;
    text-align: center;
    transition: transform 650ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transform-style: preserve-3d;
    box-shadow: 0 0 16px 10px rgba(0, 0, 0, 0.2);
    background-image: linear-gradient(135deg, rgba(29, 29, 29, 0.05) 0%, rgba(29, 29, 29, 0.05) 17%, rgba(27, 27, 27, 0.05) 17%, rgba(27, 27, 27, 0.05) 34%, rgba(31, 31, 31, 0.05) 34%, rgba(31, 31, 31, 0.05) 93%, rgba(242, 242, 242, 0.05) 93%, rgba(242, 242, 242, 0.05) 100%), linear-gradient(135deg, rgba(129, 129, 129, 0.05) 0%, rgba(129, 129, 129, 0.05) 66%, rgba(117, 117, 117, 0.05) 66%, rgba(117, 117, 117, 0.05) 91%, rgba(199, 199, 199, 0.05) 91%, rgba(199, 199, 199, 0.05) 100%), linear-gradient(135deg, rgba(31, 31, 31, 0.07) 0%, rgba(31, 31, 31, 0.07) 15%, rgba(139, 139, 139, 0.07) 15%, rgba(139, 139, 139, 0.07) 23%, rgba(200, 200, 200, 0.07) 23%, rgba(200, 200, 200, 0.07) 29%, rgba(102, 102, 102, 0.07) 29%, rgba(102, 102, 102, 0.07) 100%), linear-gradient(90deg, rgb(19, 196, 228), rgb(126, 8, 222));
    background-size: 200% 200%;
	  animation: gradient 15s ease-in-out infinite;
  }

  .flipcard.desktop:hover .flipcard-content.desktop {
    height: 100%;
    width: 100%;
    transform: rotateX(180deg);
  }

  .flipcard-face, .flipcard-back {
    height: 100%;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    border-radius: 2px;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  
  .flipcard-back {
    transform: rotateX(180deg);
  }

  .flipcard-content.mobile .photo-badge{
    position: absolute;
    top: -40px;
    right: -16px;
    border-radius: 50%;
    width: 120px;
    height: 120px;
    background-color: hotpink;
    background-image: url('/images/syntaxpnk.png');
    background-size:480px 600px;
    background-position: -280px -300px;
    background-repeat: no-repeat;
    box-shadow: 0 0 4px 4px rgba(35, 6, 141, 0.2);
  }

  article {
    display: grid;
    padding: 2rem 1.8rem;
    grid-template-rows: 80% 20%;
    grid-row-gap: 2rem;
    height: 100%;
    width: 100%;
    color: #F1E9FB;
    text-align: left;
    
    .info-body {
      padding: 2rem;
      width: 100%;
      height: 100%;
      border-radius: 10px;
      font-size: 1.6rem;
      line-height: 2.6rem;
      font-weight: 400;
      letter-spacing: 0.05rem;
      text-shadow: 0 0 12px #000;
      background-color: #13072261;
      overflow-y: auto;
    }

    .icons-row {
      display: grid;
      grid-template-columns: 2.4rem 2rem 2rem;
      grid-gap: 1rem;
      justify-content: end;
      align-items: center;
      width: 100%;
      display: grid;
      height: 52px;
    }

    .icons-row a {
      filter: grayscale(100%);
      transition: 200ms;
    }

    .icons-row a:hover {
      filter: none;
    }

    .slug {
      text-decoration: none;
      color: #f7f7f7;
      font-size: 1.6rem;
      font-family: 'Roboto Mono', monospace;
      font-weight: 400;
      transition: color 250ms ease-in-out;

      &:hover {
        color: #d082ff;
        text-decoration: none;
        cursor: pointer;
      }
    }
  }

  @media only screen and (max-width: 960px) {

    .flipcard {
      height: 80% !important;
      width: 80% !important;
    }

    article {
      padding: 1rem 0.8rem;

      .info-body {
        font-size: 1.2rem;
      }

      .slug {
        font-size: 1.3rem;
      }
    }
  }

  @media only screen and (max-width: 700px) {

    article {
      padding: 1rem 0.8rem;

      .info-body {
        font-size: 1rem;
      }

      .slug {
        font-size: 1.1rem;
      }
    }
  }
`;


export { FlipCard };