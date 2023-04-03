import React, { SyntheticEvent, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Image from 'next/image';

const FlipCard = () => {
  const [cardSize, setCardSize] = useState<[number, number]>([0, 0]);
  const containerref = useRef<HTMLDivElement>(null);
  const flipcardref = useRef<HTMLDivElement>(null);
  
  useEffect(function setCardSizeOnMount() {
    if (!containerref.current) return;
    const bbox = containerref.current.getBoundingClientRect();
    setCardSize([bbox.height * 0.8, bbox.height]);
  }, [])

  useEffect(function setCardListenersOnMount() {
    if (!flipcardref.current) return;

    const mouseEnterEvent = (e: MouseEvent) => {
      e.stopPropagation()
      e.preventDefault();
      flipcardref.current?.classList.add('hover');
    }

    const mouseLeaveEvent = (e: MouseEvent) => {
      e.stopPropagation()
      e.preventDefault();
      flipcardref.current?.classList.remove('hover');
    }


    flipcardref.current.addEventListener('mouseenter', mouseEnterEvent);
    flipcardref.current.addEventListener('mouseleave', mouseLeaveEvent);

    return () => {
      flipcardref.current?.removeEventListener('mouseenter', mouseEnterEvent);
      flipcardref.current?.removeEventListener('mouseleave', mouseLeaveEvent);
    }
  }, [])


  const [width, height] = cardSize;

  return (
    <Container ref={containerref} className="fade-in three">
      <div ref={flipcardref} className="flipcard" style={{ width: `${width}px`, height: `${height}px`}}>
        <div className="flipcard-content">
          <figure className="flipcard-face">
            <Image loading='lazy' className="mephoto" src="/images/syntaxpnk.png" alt="Photo of me" layout="fill"/>
          </figure>
          <div className="flipcard-back">
            <article>
              <span>
                <span role="img" aria-label="wave">👋</span> I&apos;m David, a software developer based in Norway. I have a strong passion for building great solutions and love to take on new challenges that can help me grow my skillset. 
                <br/>
                <br/>
                Currently, I work as a software developer at <a href="https://www.webstep.no/" className='slug' target="_blank" rel="noreferrer">WEBSTEP</a> and during my free time, I enjoy tinkering with latest technology.                 
                <br />
                <br />
                If you&apos;re interested in my work, please feel free to check out my projects and get in touch with via means listed below.
              </span>
              <div className="icons-row">
                <a href="mailto:david.jaeren@gmail.com" target="_blank" rel="noreferrer">
                  <Image loading="eager" src="/images/email.svg" alt="Email logo" width="64" height="64px"/>
                </a>
                <a href="https://github.com/syntax-punk" target="_blank" rel="noreferrer">
                  <Image loading="eager" src="/images/github.svg" alt="Github logo" width="64px" height="64px"/>
                </a>
                <a href="https://twitter.com/syntax_punk" target="_blank" rel="noreferrer">
                  <Image loading="eager" src="/images/twitter.svg" alt="Twitter logo" width="64px" height="64px"/>
                </a>
              </div>
          </article>
          </div>
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

  .flipcard.hover .flipcard-content {
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

  article {
    display: grid;
    padding: 2rem 1.8rem;
    grid-template-rows: 80% 20%;
    grid-row-gap: 2rem;
    height: 100%;
    width: 100%;
    color: #F1E9FB;
    text-align: left;
    
    > span {
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
  }

  @media only screen and (max-width: 700px) {
  }
`;


export { FlipCard };