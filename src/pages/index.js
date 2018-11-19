import React from "react";
import Helmet from "react-helmet";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import { faClipboardList } from '@fortawesome/free-solid-svg-icons'
import { faServer } from '@fortawesome/free-solid-svg-icons'

import Layout from '../components/layout';

import { Link } from "gatsby"

import pic01 from '../assets/images/olympics.jpg'
import pic02 from '../assets/images/datavolley.jpg'
import pic03 from '../assets/images/paralympics.jpg'
import pic04 from '../assets/images/VIS.jpg'

class Homepage extends React.Component {
    render() {
        const siteTitle = "VolleyballScores.co.uk - Volleyball Scores and Statistics";

        return (
            <Layout>
                <Helmet title={siteTitle}>
                  <meta name="google-site-verification" content="7xDx0JgfYbkerG_sToIzEZM487nXsRpPhDvdQBaQaNY" />
                </Helmet>

                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>Welcome to Volleyball Scores</h2>
                            </header>
                            <p>This site has been created to display live scores for a number of
                            volleyball events around Great Britain.  This site has been created in
                            associated with <a href="http://www.volleyballengland.org" target="_blank"
                            rel="noopener noreferrer">Volleyball England</a> to broadcast scores from
                            national and international events on the internet.</p>
                            <p>This site contains information on both pieces of software including
                            statistics produced by both and the methods used to generate these statistics.
                            The site also contains a calendar of upcoming events at which the systems
                            will be used.</p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={pic01} alt="" /></span>
                        </div>
                    </div>
                </section>

                <section id="two" className="main style2">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <ul className="major-icons">
                                <li><FontAwesomeIcon icon={faCode} className="icon style1 major fontawesome" transform={{ rotate: 45 }} size="xs"/></li>
                                <li><FontAwesomeIcon icon={faAddressCard} className="icon style2 major fontawesome" transform={{ rotate: 45 }} size="xs"/></li>
                                <li><FontAwesomeIcon icon={faCamera} className="icon style3 major fontawesome" transform={{ rotate: 45 }}/></li>
                                <li><FontAwesomeIcon icon={faClipboardList} className="icon style4 major fontawesome" transform={{ rotate: 45 }}/></li>
                                <li><FontAwesomeIcon icon={faServer} className="icon style5 major fontawesome" transform={{ rotate: 45 }}/></li>
                                <li><FontAwesomeIcon icon={faCalendar} className="icon style6 major fontawesome" transform={{ rotate: 45 }}/></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <header className="major">
                                <h2>What do we do?</h2>
                            </header>
                            <p>Volleyball Scores provides a number of services at volleyball events including:</p>
                            <ul>
                              <li>Live statistics of games</li>
                              <li>Creation and hosting of event websites</li>
                              <li>Online results management</li>
                              <li>Live scoring</li>
                              <li>Field of play technology management and support</li>
                              <li>Consultancy on best practices for using technology at events</li>
                            </ul>
                            <p>We use our combination of volleyball and technology knowledge to enhance sporting events. Our solutions can are tailored to your specific needs and outcomes you want from your event.</p>
                        </div>
                    </div>
                </section>

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>What Software do we use?</h2>
                            </header>
                            <p>We use a number of pieces of software to generate our statistics, including:</p>
                        </div>

                        <div className="col-4">
                            <span className="image fit"><img src={pic02} alt="" /></span>
                            <h3>DataProject DataVolley</h3>
                            <p>The most widely used statistics software for volleyball across the world. Used at all Volleyball England and CEV events.</p>
                            <ul className="actions">
                                <li><Link to="/data-volley/" className="button">More</Link></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic03} alt="" /></span>
                            <h3>DataProject e-scoresheet</h3>
                            <p>Software to replace the traditional paper scoresheet for volleyball. Used across all CEV events.</p>
                            <ul className="actions">
                                <li><Link to="/e-scoresheet/" className="button">More</Link></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={pic04} alt="" /></span>
                            <h3>VIS</h3>
                            <p>The original statistics software produced by the FIVB. Used mainly for FIVB events.</p>
                            <ul className="actions">
                                <li><Link to="/vis/" className="button">More</Link></li>
                            </ul>
                        </div>

                    </div>
                </section>

                <section id="four" className="main style2 special">
                    <div className="grid-wrapper">
                      <div className="col-12">
                        <header className="major">
                            <h2>Want to find out more?</h2>
                        </header>
                        <p>If you would like more information or would like to use the facilities provided by this site for an event you are hosting, please contact us using the form below.</p>
                      </div>
                      <div className="col-12">
                        <form method="post" action="#" name="contact" data-netlify="true" data-netlify-honeypot="bot-field">
                          <input type="hidden" name="bot-field" />
                          <div className="field half first">
                              <label htmlFor="name">Name</label>
                              <input type="text" name="name" id="name" />
                          </div>
                          <div className="field half">
                              <label htmlFor="email">Email</label>
                              <input type="text" name="email" id="email" />
                          </div>
                          <div className="field">
                              <label htmlFor="message">Message</label>
                              <textarea name="message" id="message" rows="6"></textarea>
                          </div>
                          <ul className="actions">
                              <li><input type="submit" value="Send Message" className="special" /></li>
                              <li><input type="reset" value="Clear" /></li>
                          </ul>
                        </form>
                      </div>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default Homepage;
