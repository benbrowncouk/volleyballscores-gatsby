import React from 'react'
import Layout from '../components/layout'

import { Link } from "gatsby"

const DataVolleyPage = () => (
  <Layout>
    <section id="one" className="main style1">
      <div className="grid-wrapper">
        <div className="col-12">
          <header className="major">
            <h2>DataProject DataVolley</h2>
          </header>
          <p>DataVolley is a statistical software package provided by DataProject.  The DataVolley
          software is a commercially available software boasting support from a number of influential
          volleyball leagues including the Italian and American leagues.  A modified, limited
          version of the software is also made available to the CEV for taking statistics at all
          CEV events including the European Champions League.  The limited version can be downloaded 
          <a href="http://www.dataproject.com/cev" target="_blank" rel="noopener noreferrer">here</a>,
          the trial software includes a user manual to explain all the concepts.</p>

          <p>DataVolley only requires a single person to take statistics for a game, although a
          second person is recommended during training.  The statistician can be located anywhere
          in the hall and will record only the attacking shots in the rallies using ‘compound codes’.
          The decision to only record attacking shots differs from VIS which records every shot.
          ‘Compound codes’ are way of shortening the amount of information that needs to be entered
          to take statistics for any particular rally.  It is these two features that allow DataVolley
          to require much less personnel to stat one match.</p>

          <p>The commercial version of DataVolley has a larger feature list than the CEV version
          and contains almost limitless possibilities to stat any aspect of any volleyball team.
          Some may say that the options are too numerous making the initial exposure to the
          software confusing.  The commercial version is also extremely expensive (unless you
            are a professional club) taking it out of reach of amateur clubs around the globe.</p>

          <p>DataVolley records each scoring shot on using up to six possible outcomes:</p>
          <ul>
            <li>Error</li>
            <li>Half Point – the opponent has to interact with the ball to win the point i.e. overpass</li>
            <li>Negative – a serve that is passed so the setter can set all options</li>
            <li>Good – somewhere in between</li>
            <li>Positive – attack that is very hard to defend</li>
            <li>Excellent – kill</li>
          </ul>

          <p>This granularity is only possible on certain skills, which while providing
          greater versatility is also confusing.  Having three fixed values in VIS is easier to
          grasp but will not give the same advanced statistics provided by DataVolley.</p>

          <p>Like VIS, DataVolley contains extra tools for uploading live scores and also
          produces the statistics in a HTML format for direct upload to a website.  DataVolley
          also contains a comprehensive reporting tool to allow analysis of the statistics taken
          during any game.</p>

          <p>The obvious advantage of DataVolley over VIS is the manpower required to take
          statistics for a game.  However, this saving comes at extra complexity making the
          software more difficult for beginners.  The DataVolley software is also more mature
          and less error prone and does not need a network to be setup to function.  One point
          to note is that the creators of DataVolley are Italian and the English documentation is
          poor at best and makes learning by reading the manual very difficult due to poor
          translations.  DataVolley is also expensive if you buy the commercial version,
          however for this money you get an awful lot of power to take statistics in the form
          that most suits your team.</p>

          <p>I have now used DataVolley at a number of different tournaments and definitely
          believe the software is better to use than VIS.  Recently DataProject have released
          a new media version of the software that can be downloaded using the link above that
          removes the licensing issues experienced in the previous version.  DataVolley is
          definitely a better piece of software, the only thing holding it back is the
          prohibitive licensing costs, especially for using it in amateur leagues where
          most teams have no budget!</p>

          <ul className="actions">
              <li><Link to="/" className="button">Back</Link></li>
          </ul>
        </div>
      </div>
    </section>
  </Layout>
)

export default DataVolleyPage
