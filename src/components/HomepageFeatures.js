import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'What are we?',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        We are startup hub and Time Venture firm, investing software development time in start-up
        companies. Through collaboration with other passionate co-founders we build teams, products
        and companies with clear bussiness modells.
      </>
    ),
  },
  {
    title: 'WHO ARE WE',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        We are it-entrepreneurs for life. Since early childhood we have been hacking with computers
        and been eager to learn more about those marvelous things. During our adult life we have
        been running companies and performed two exits.
      </>
    ),
  },
  {
    title: 'WHAT WE DO',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        We build tech, proccess and systems that can be used in all companies we collaborate with.
        This minimizes the technology and information we need to understand and helps us to be
        experts in what we do. SYSTEM DEVELOPMENT, BUSSINESS DEVELOPMENT, TEAM DEVELOPMENT
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
