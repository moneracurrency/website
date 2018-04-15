import React, { Component } from 'react';
import logo from './monera_logo.png';
import './App.css';
import moment from 'moment'
import Countdown from 'react-countdown-now';

class App extends Component {
  render() {

    let date = new Date(1524304800000)

    return (
      <div className="app">
        <div className="jumbotron">
          <div className="inner">
            <img className="brand" src={logo}/>
            <div className="subtitle">Private CryptoNight cryptocurrency with ASIC support</div>
            <div className="countdown">
              <Countdown date={date} />
              <div className="text">ICO Start Countdown</div>
            </div>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeOjRPtVtPBai1jpThQZSU_CoVDq_TxsN6iQqAai0H19NnmSA/viewform" target="_blank">
            <div className="btn">
              <i class="fas fa-envelope"></i> &nbsp; Get Notified
            </div>
            </a>
            <div className="community">
              <a href="https://discord.gg/UTg8Tc6" target="_blank"><i class="fab fa-discord"></i></a>
              <a href="https://twitter.com/MoneraCurrency" target="_blank"><i class="fab fa-twitter"></i></a>
              <a href="https://medium.com/@moneracurrency/monera-cryptonight-currency-announcement-41fe83c5732b" target="_blank"><i class="fab fa-medium"></i></a>
              <a href="" target="_blank"><i class="fas fa-bullhorn"></i></a>
            </div>
          </div>
        </div>
        <div className="area">
          <div className="inner">
            <div className="heading">What is Monera?</div>
            <div className="info">
              <p>Monera is a privacy-focused cryptocurrency based on Monero with support for ASICs.</p>

              <br />
              <b>Monero + ASICS = Monera</b>
              <br />
              <p>Monero recently hardforked to CryptonightV7 as a reaction to the announcement of ASIC Cryptonight mining hardware. The Monero
              Team has made it clear that they will continually fork to new algorithms as they new ASICs get developed. Many members of the Monero
              family aren’t convinced that this is at all productive as specialised hardware development is inevitable and having ASIC Support is actually desirable.</p>
            </div>
          </div>
        </div>
        <div className="area-alt">
          <div className="inner">
            <div className="heading">Why Support ASICS</div>
            <div className="info">
              <ul>
                  <li>It’s unproductive to resist them - Stops innovation and takes up lots of development time.</li>
                  <li>Potentially Equal or Less Centralization - ASIC manufacturers won't sell to consumers.</li>
                  <li>Increased Network Hashing power - More secure/less prone to attacks.</li>
                  <li>Better for the environment  - ASICS are much more energy efficient.</li>
                  <li>Reduce strain on the GPU market - Why promote using unoptimised hardware?</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="area">
          <div className="inner">
            <div className="heading">ICO Information</div>
            <div className="info">
              <p>
                One of the main criticisms of supporting ASICs is how it's unfair for regular miners to be
                able to receive any coins. This coupled with the large dormant mining power of the Cryptonight ASICs
                its likely to result in a competitive network from day one. An ICO is an effective way to distribute coins
                to the community with the added bonus of funding the project to hit the ground running.
                Our biggest concern with other Monero forks born out of this CyrptonightV7 change, aside from
                showing almost no promise, is because they inherit the Monero blockchain. This means that the team
                behind has no funding or any coins. This is a recipe for disaster as team without any funding or vested
                interest in the project’s success is destined for failure. No other Monero Fork born out of the V7 fork has
                the confidence of the Monera team members which is the fundamental reason for the genesis of Monera.
              </p>

              <br />
              <b>ICO Prices:</b>
              <p>We believe in offering Monera at a low initial price for the ICO ranging from 0.41% up to 1.66% of Moneros current price.</p>

              <br />
              <b>How many coins will be for sale?</b>
              <p>Only the first 1 Million coins will be released (5.4% of total supply before tail emission) will be sold.</p>
              <br />
              <b>Network start date</b>
              <p>The network will be released publicly for miners 1 week after the ICO sale has completed.</p>
            </div>
          </div>
        </div>
        <div className="area-alt">
          <div className="inner">
            <div className="heading">Monera VS Monero</div>
            <div className="info">
            <p>Because Monera doesn’t inherit the Monero blockchain, the security flaws associated with the early Monero
              blocks and other previous forks are completely eliminated and will be starting fresh.

              Minimum Ring Size bumped up to 14 from 7 for added security.
              Fees are adjusted to compensate.

              Monera will inherit the latest Zawy difficulty algorithm to eliminate difficulty attacks and react much faster than Moneros
              and provide security around the latest time warping attacks on Cryptonight coins.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
