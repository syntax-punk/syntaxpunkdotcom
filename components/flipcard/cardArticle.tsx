import React from 'react';
import Image from 'next/image'; 
import Link from 'next/link';

const CardArticle: React.FC = () => {
  return (
    <article>
      <span className='info-body'>
        <div className="pic" />
        <p>
          <span role="img" aria-label="wave">👋</span> I&apos;m David! I&apos;m a software developer based in Norway.
        </p>
        <p>
          I love technology and creating cool solutions is my biggest passion. I&apos;m a life-long learner and I&apos;m always taking on new challenges that can help me expand my skillset.
        </p>
        <br />
        <p>
          Currently, I work at <a href="https://www.webstep.no/" className='slug' target="_blank" rel="noreferrer">WEBSTEP</a> and in my free time, you&apos;ll find me hanging out with my family, lifting weights, hiking or exploring new tech trends and tinkering with cutting-edge tools.
        </p>
        <br />
        <p>
          Feel free to check out my <Link href="/projects" className='slug' style={{ textDecoration: 'underline' }}>projects</Link> and get in touch with me through the means listed below.
        </p>
        <br />
        <p>Cheers!</p>
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

