import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import Hero from '../components/Hero';
import Slope from '../components/Slope';
import Features from '../components/Features';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const sections = siteConfig.customFields.sections;
  return (
    <Layout title={siteConfig.title} description={siteConfig.customFields.tagDescription}>
      <Hero tagline={siteConfig.tagline} config={siteConfig.customFields.hero} />
      <Slope />
      <main>
        <Features featureList={featureList} config={sections.features} />
      </main>
    </Layout>
  );
}

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
