import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import PropTypes from 'prop-types';

const featureList = [
  {
    title: 'What are we?',
    iconStyle: 'fe fe-help-circle',
    description: `
    We are a Time Venture firm, a startup hub or just entrepreneurs, investing time in start-up
    companies. Through collaboration with other passionate co-founders we build teams, products
    and companies with clear business models.
    `,
  },
  {
    title: '',
    iconStyle: 'fe fe-clock',
  },
  {
    title: 'What we do?',
    iconStyle: 'fe fe-trending-up',
    description: `
    We build teams, tech and companies, to be able solve problems for our end-customers. We strive to
    create tech, proccesses, documents, models and systems that can be used in all our subsidiaries. Too many companies
    invents the wheel over and over again.
    `,
  },
  {
    title: 'Who are we?',
    iconStyle: 'fe fe-cpu',
    description: `
    We are passionate IT-entrepreneurs for life. Since early childhood we have been experimenting with computers
    and been eager to learn more about those marvelous things. During our adult life we have
    been running companies and performed two exits.
    `,
  },

  {
    title: 'Market',
    iconStyle: 'fe fe-dollar-sign',
    description: `
    A company starts with a person who has a problem that needs to be solved. If there is enough of
    that kind of person, our goal is to solve that problem.
    `,
  },

  {
    title: 'How we do?',
    iconStyle: 'fe fe-users',
    description: `
      At the heart of each company is a diversified, skilled, focused and commited team of wounderful people.
      We believe and have witnessed first-hand that without the right people, a startup is doomed to fail.
    `,
  },
];

function Hero() {
  return (
    <header className={classnames('hero hero--primary', styles.heroSection)}>
      <div className={classnames('container', styles.container, styles.heroContainer)}>
        <h1 className={classnames(styles.heroTitle)}>Venture Time</h1>
        <h4 className={classnames(styles.heroDescription)}>
          We are an operative co-founder of IT-companies with international growth ambitions. Our
          primary investment resources are time and knowledge to solve common biz and tech problems.
        </h4>
      </div>
    </header>
  );
}

function Feature({ iconStyle, title, description }) {
  return (
    <div
      className={classnames(
        'col col--4',
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
}

Feature.propTypes = {
  iconStyle: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string,
};

function Features() {
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
}

function Slope() {
  return (
    <div className={styles.slopeContainer}>
      <div className={styles.slope} />
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const sections = siteConfig.customFields.sections;
  return (
    <Layout title={siteConfig.title} description={siteConfig.customFields.tagDescription}>
      <Hero tagline={siteConfig.tagline} config={siteConfig.customFields.hero} />
      <Slope />
      <main>
        <Features config={sections.features} />
      </main>
    </Layout>
  );
}
