import React from 'react';
import clsx from 'clsx';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './index.module.css';

const featureList = [
  {
    title: 'What are we?',
    iconStyle: 'fe fe-help-circle',
    description: `
    We are a Time Venture firm, a startup hub or just entrepreneurs, investing time in start-up
    companies. Through collaboration with other passionate co-founders we build teams, products
    and companies with clear business modells.
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
    We build teams, tech and companies, to be able solve problems for our customers. As much as possible we try to
    create tech, proccess, documents, models and systems that can be used in all our subsidiaries. To many companies
    inventes the wheel over and over again.
    `,
  },
  {
    title: 'Who are we?',
    iconStyle: 'fe fe-cpu',
    description: `
    We are passionated it-entrepreneurs for life. Since early childhood we have been hacking with computers
    and been eager to learn more about those marvelous things. During our adult life we have
    been running companies and performed two exits.
    `,
  },

  {
    title: 'Market',
    iconStyle: 'fe fe-dollar-sign',
    description: `
    A company starts with a person who have a problem that needs to be solved. If there is enough of
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

function Hero({ tagline, config }) {
  return (
    <header className={classnames('hero hero--primary', styles.heroSection)}>
      <div className={classnames('container', styles.container, styles.heroContainer)}>
        <h1 className={classnames(styles.heroTitle)}>Venture Time</h1>
        <h4 className={classnames(styles.heroDescription)}>
          We are an operative co-founder of it-companies with international growth ambitions. Our
          primary investment resources are time and knowledge to solve common biz and tech problems.
        </h4>
        {/* <div className={styles.buttons}>
          <Link
            className={classnames(
              'button button--outline button--lg',
              styles.button,
              styles.blueBtn
            )}
            to={useBaseUrl('docs/about/what-is-clutch')}
          >
            Learn More
          </Link>
        </div> */}
      </div>
      {/* <div style={{ width: '20%', margin: '0 5% 5% 5%' }}>
        { <img src={useBaseUrl('img/microsite/home.svg')} alt="home icon" /> }
      </div> */}
    </header>
  );
}

function Feature({ iconStyle, title, description }) {
  return (
    <div className={classnames('col col--4')}>
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

function Features({ config }) {
  return (
    <section className={classnames(styles.section, styles.features)}>
      <div className={classnames('container', styles.container)}>
        <div className="row">
          {featureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Demo({ config }) {
  return (
    <div className={styles.darkBackground}>
      <section className={classnames('text--center', styles.section, styles.demoSection)}>
        <div className={classnames('container', styles.container, styles.demoContainer)}>
          {config.lines.map((line, idx) => (
            <h1 key={idx} className={classnames('hero__title', styles.sectionHeadingDark)}>
              {line}
            </h1>
          ))}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Link
              className={classnames(
                'button button--outline button--lg',
                styles.button,
                styles.greenBtn,
                styles.demoBtn
              )}
              to={useBaseUrl(config.cta.link)}
            >
              {config.cta.text}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function Consolidation({ config }) {
  return (
    <section className={classnames(styles.section, styles.consolidation, styles.darkBackground)}>
      <div className={classnames('container', styles.container)}>
        <img src={useBaseUrl('img/microsite/consolidation.gif')} />
      </div>
      <div className={classnames('container', styles.container, styles.textContainer)}>
        <div>
          {config.snippets.map((snippet, idx) => (
            <p key={idx}>{snippet}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const sections = siteConfig.customFields.sections;
  return (
    <Layout title={siteConfig.title} description={siteConfig.customFields.tagDescription}>
      <Hero tagline={siteConfig.tagline} config={siteConfig.customFields.hero} />
      <main>
        <Features config={sections.features} />
        {/* <Demo config={sections.demo} />
        <Consolidation config={sections.consolidation} /> */}
      </main>
    </Layout>
  );
}
