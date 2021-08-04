import React, { useEffect, useRef } from 'react';
import classnames from 'classnames';
import gsap from 'gsap';

import styles from './hero.module.css';

const Hero = () => {
  const heroTextWrapperRef = useRef(null);

  useEffect(() => {
    gsap.from(heroTextWrapperRef.current, { y: '3rem', opacity: 0 });

  }, [heroTextWrapperRef]);

  return (
    <header className={classnames('hero hero--primary', styles.heroSection)}>
      <div ref={heroTextWrapperRef} className={classnames('container', styles.container, styles.heroContainer)}>
        <h1 className={classnames(styles.heroTitle)}>Venture Time</h1>
        <h4 className={classnames(styles.heroDescription)}>
				We are an operative co-founder of IT-companies with international growth ambitions. Our
				primary investment resources are time and knowledge to solve common biz and tech problems.
        </h4>
      </div>
    </header>
  );
};

export default Hero;
