import React, { Component } from 'react';
import './Section2.css';
import './style.css';

import posed from 'react-pose';
import ScrollAnimation from 'react-animate-on-scroll';

import SplitText from 'react-pose-text';

const charPoses = {
  exit: { y: 20, opacity: 0 },
  enter: {
    y: 0,
    opacity: 1,
    transition: ({ charInWordIndex }) => ({
      type: 'spring',
      delay: charInWordIndex * 60,
      stiffness: 500 + charInWordIndex * 150,
      damping: 10 - charInWordIndex * 1
    })
  }
};


class Section2 extends Component {
  render() {
    return (
      <article className="page-articles" id="section2">

        <section className="title">
          <p ><span className="loremIpsum Orange">Lorem &nbsp;</span><span className="loremIpsum Black">Ipsum</span></p>
        </section>
        <section className="grid2">
          <p className="page-item2 lorem gray" id="gray-ipsum-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <a href="#data"><button id="percent-button" type="button">Button</button></a>
        </section>
        <ScrollAnimation animateIn="fadeIn">
        <section className="grid2" id="percents-section">
          <div className="item2">
            <div className="container">
              <SplitText className="lorem159 animated rubberBand delay-1s" initialPose="exit" pose="enter" charPoses={charPoses}>
                240%
              </SplitText>
            </div>

            <p className="lorem">Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum dolor</p>
          </div>
          <div className="item2">
            <div className="container">
              <SplitText className="lorem159 animated rubberBand delay-2s" initialPose="exit" pose="enter" charPoses={charPoses}>
                105%
              </SplitText>
            </div>
            <p className="lorem">Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum dolor</p>
          </div>
          <div className="item2">
            <div className="container">
              <SplitText className="lorem159 animated rubberBand delay-3s" initialPose="exit" pose="enter" charPoses={charPoses}>
                159%
              </SplitText>
            </div>
            <p className="lorem">Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum dolor</p>
          </div>

        </section>
      </ScrollAnimation>
      </article>
    );
  }
}

export default Section2;
