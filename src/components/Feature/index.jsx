import React from 'react';
import classnames from 'classnames';

import styles from './feature.module.css';

const Feature = ({ description, iconStyle, title }) => {
  return (
    <div
      className={classnames(
        'col col--4 feature',
        styles.featureWrapper,
        !description && styles.featureBigIconWrapper
      )}
    >
      {description === undefined ? (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <span className={classnames(styles.featureBigIcon, iconStyle)} />
        </div>
      ) : (
        <>
          {iconStyle && (
            <div className={classnames('text--center', styles.featureIcon)}>
              <hr className={classnames(styles.featureAccent)} />
              <span className={classnames(styles.featureIcon, iconStyle)} />
              <hr className={classnames(styles.featureAccent)} />
            </div>
          )}
          <div className="text--center">
            <h2>{title}</h2>
          </div>
          <div className={classnames(styles.featureText)}>
            <p>{description}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Feature;
