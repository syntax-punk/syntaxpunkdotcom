import React from 'react';
import Image from 'next/image'; 

const CardArticle: React.FC = () => {
  return (
    <article>
      <span className='info-body'>
        <div className="pic" />
        <p>
          <span role="img" aria-label="wave">👋</span> I&apos;m David, a software developer based in Norway. I have a strong passion for building great solutions and I love to take on new challenges that can help me grow my skillset. 
        </p>
        <br />
        <p>
          Currently, I work as a software developer at <a href="https://www.webstep.no/" className='slug' target="_blank" rel="noreferrer">WEBSTEP</a> and during my free time, I enjoy tinkering with latest technology.                 
        </p>
        <br />
        If you&apos;re interested in my work, please feel free to check out my projects and get in touch with via means listed below.
      </span>
      <div className="icons-row">
        <a href="https://syntaxpunk.com/resume" rel="noreferrer">
          <Image loading="eager" src="/images/doc.svg" alt="Resume logo" width="64" height="64"/>
        </a>
        <a href="mailto:david.jaeren@gmail.com" target="_blank" rel="noreferrer">
          <Image loading="eager" src="/images/email.svg" alt="Email logo" width="64" height="64"/>
        </a>
        <a href="https://github.com/syntax-punk" target="_blank" rel="noreferrer">
          <Image loading="eager" src="/images/github.svg" alt="Github logo" width="64" height="64"/>
        </a>
        <a href="https://twitter.com/syntax_punk" target="_blank" rel="noreferrer">
          <Image loading="eager" src="/images/twitter.svg" alt="Twitter logo" width="64" height="64"/>
        </a>
      </div>
    </article>
  );
};

export { CardArticle }

