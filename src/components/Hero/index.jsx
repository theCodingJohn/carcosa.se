import React, { useEffect, useRef } from 'react';
import classnames from 'classnames';

import styles from './hero.module.css';
import { showElement } from '../../utils/animation';

const Hero = () => {
  const heroTextWrapperRef = useRef(null);

  useEffect(() => {
    showElement(heroTextWrapperRef.current);
  }, [heroTextWrapperRef]);

  return (
    <header className={classnames('hero hero--primary', styles.heroSection)}>
      <div
        ref={heroTextWrapperRef}
        className={classnames('container', styles.container, styles.heroContainer)}
      >
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
