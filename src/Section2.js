import React, { Component } from 'react';
import './Section2.css';
import './style.css';


class Section2 extends Component {
  render() {
    return (
      <article className="page-articles" id="section2">
        <section className="title">
          <p ><span className="loremIpsum Orange">Lorem &nbsp;</span><span className="loremIpsum Black">Ipsum</span></p>
        </section>
        <section className="grid2">
          <p className="page-item2 lorem gray" id="gray-ipsum-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <button>Button</button>
        </section>
        <section className="grid2" id="percents-section">
          <div className="item2">
            <h1 className="lorem159">240%</h1>
            <p className="lorem">Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum dolor</p>
          </div>
          <div className="item2">
            <h1 className="lorem159">105%</h1>
            <p className="lorem">Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum dolor</p>
          </div>
          <div className="item2">
            <h1 className="lorem159">159%</h1>
            <p className="lorem">Lorem ipsum dolor sit amet Lorem ipsum dolor ipsum dolor</p>
          </div>

        </section>
      </article>
    );
  }
}

export default Section2;
