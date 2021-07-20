import React from 'react';
import Scrollspy from 'react-scrollspy';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Scroll from '../components/Scroll';
import overLayPic from '../assets/images/overlay.png';
import { Link } from 'gatsby';

const sections = [
  { id: 'one', bg: require('../assets/images/pic01.jpg') },
  { id: 'two', bg: require('../assets/images/pic02.jpg') },
  { id: 'three', bg: require('../assets/images/pic03.jpg') },
  { id: 'footer', bg: require('../assets/images/pic04.jpg') },
];

const IndexPage = () => (
  <Layout>
    <Header />

    <section id="one" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[0].bg} alt="" />
        </span>
        <div className="content">
          <header className="major">
            <h2>What are we?</h2>
          </header>
          <p>
            We are startup hub and Time Venture firm, investing software development time in
            start-up companies. Through collaboration with other passionate co-founders we build
            teams, products and companies with clear bussiness modelles.
          </p>
        </div>
        <Scroll type="id" element="two">
          <a href="#two" className="goto-next ">
            Next
          </a>
        </Scroll>
      </div>
    </section>

    <section id="two" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[1].bg} alt="" />
        </span>
        <div className="content">
          <header className="major">
            <h2>Who are we?</h2>
          </header>
          <p>
            We are it-entrepreneurs for life. Since early childhood we have been hacking with
            computers and been eager to learn more about those marvelous things. During our adult
            life we have been running companies and performed two exits.
          </p>
        </div>
        <Scroll type="id" element="three">
          <a href="#three" className="goto-next ">
            Next
          </a>
        </Scroll>
      </div>
    </section>

    <section id="three" className="main special">
      <div className="container">
        <span className="image fit primary">
          <img src={sections[2].bg} alt="" />
        </span>
        <div className="content">
          <header className="major">
            <h2>What we do?</h2>
          </header>
          <p>
            We build tech, proccess and systems that can be used in all companies we collaborate
            with. This minimizes the technology and information we need to understand and helps us
            to be experts in what we do.
          </p>
          <ul className="icons-grid">
            <li>
              <span className="icon major fa-code" />
              <h3>System Development</h3>
            </li>
            <li>
              <span className="icon major fa-briefcase" />
              <h3>Bussiness Development</h3>
            </li>
            <li>
              <span className="icon major fa-users" />
              <h3>Team Development</h3>
            </li>
            <li>
              <span className="icon major fa-coffee" />
              <h3>Sipping Coffee</h3>
            </li>
          </ul>
        </div>
        <Scroll type="id" element="footer">
          <a href="#footer" className="goto-next ">
            Next
          </a>
        </Scroll>
      </div>
    </section>

    <section id="footer">
      <div className="container">
        <header className="major">
          <h2>Contact us</h2>
        </header>
        <p>
          <b>Phone:</b> 08-38 91 38.
          <br />
          <b>Email: </b>info@carcosa.se
        </p>
      </div>
      <Footer />
    </section>

    <Scrollspy
      items={sections.map(s => s.id)}
      currentClassName="active"
      offset={0}
      componentTag={'div'}
    >
      {sections.map(s => {
        return (
          <div
            key={s.id}
            className="main-bg"
            id={`${s.id}-bg`}
            style={{ backgroundImage: `url(${overLayPic}), url(${s.bg})` }}
          />
        );
      })}
    </Scrollspy>
  </Layout>
);

export default IndexPage;
