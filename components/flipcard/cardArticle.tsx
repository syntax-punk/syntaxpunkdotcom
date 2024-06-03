import React from 'react';
import Image from 'next/image'; 
import Link from 'next/link';

const CardArticle: React.FC = () => {
  return (
    <article>
      <span className='info-body'>
        <div className="pic" />
        <p>
          <span role="img" aria-label="wave">👋</span> I&apos;m David! I&apos;m a software developer based in Norway with a strong passion for creating great solutions. I love to take on new challenges that help me expand my skillset. 
        </p>
        <br />
        <p>
          Currently, I work at <a href="https://www.webstep.no/" className='slug' target="_blank" rel="noreferrer">WEBSTEP</a> and in my free time, you&apos;ll find me exploring new tech trends and tinkering with cutting-edge tools.
        </p>
        <br />
        Feel free to explore my <Link href="/projects" className='slug' style={{ textDecoration: 'underline' }}>projects</Link> and get in touch with me through the contact options listed below. I look forward to connecting with you!
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

