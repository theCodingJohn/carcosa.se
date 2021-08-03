import React from 'react';
import classnames from 'classnames';

import styles from './features.module.css';
import Feature from '../Feature';

const Features = ({ featureList }) => {
  return (
    <section className={classnames(styles.section, styles.features)}>
      <div className={classnames('container', styles.container)}>
        <div className={classnames('row', styles.featuresWrapper)}>
          {featureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
