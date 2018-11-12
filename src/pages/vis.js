import React from 'react'
import Layout from '../components/layout'

import { Link } from "gatsby"

const EScorePage = () => (
  <Layout>
    <section id="one" className="main style1">
      <div className="grid-wrapper">
        <div className="col-12">
          <header className="major">
            <h2>Volleyball Information System (VIS)</h2>
          </header>
          <p>Volleyball Information Systems (VIS) is the statistical software produced by the FIVB.
          The software is used to generate statistics at all FIVB based events including World Championships
          and Beach Events.</p>

          <p>VIS takes statistics for every shot in the game and ranks each shot as either:</p>
          <ul>
            <li>Excellent (Success)</li>
            <li>Normal</li>
            <li>Error (Fault)</li>
          </ul>

          <p>VIS considers volleyball to have six different shots:</p>
          <ul>
            <li>Serve</li>
            <li>Receive</li>
            <li>Set</li>
            <li>Attack</li>
            <li>Block</li>
            <li>Dig</li>
          </ul>

          <p>Three of the shot types are considered scoring skills (Serve, Attack, Block) and the other
          three are considered non-scoring skills (Receive, Set, Dig).  For scoring skills and excellent
          shot will end the rally and an error will end the rally with the point to the opposition.
          A normal shot (often called a continuation) will allow the rally to continue.  For non-scoring
          skills an excellent shot is one that results in a perfect pass or reception i.e. the setter has
          all attacking options available, or a perfect set i.e. only one blocker is present.</p>

          <p>Statistics are taken by two groups of three people, located at either end of the volleyball
          court.  One person is responsible for inputting statistics into a PC, another for calling out
          the shots i.e. 6 serve continuation, 5 attack success.  The final person is responsible for
          writing the statistics on paper, in case of software failure.  There is a 7th person that
          coordinates the statistics from both ends and sits behind the scorer in the centre of court.
          This person is responsible for correcting mistakes made by both ends and ensuring that the
          points match up correctly.</p>

          <p>The major disadvantages of VIS is that it is labour intensive (requiring 7 people per match)
          and also the software is fairly old and outdated.  The software on the two end PC’s is an old
          MSDOS window and only takes user input from the keyboard.  The VIS software also requires an
          in-depth knowledge to solve problems that will often occur at random.</p>

          <p>VIS contains modules for uploading statistics directly to the FIVB and also generates
          a number of standard reports that must be signed by the game juries at any FIVB championship.
          The statistics that VIS generates can generally be used to work out the percentage of shots
          that ended in success or error on a per team and per player basis.  The software also produces
          reports of the top players in a tournament that can be distributed to teams and media.</p>

          <p>After using VIS during a number of tournaments the best review I can give of the software
          is that when it works it produces good statistics but it is temperamental and does require
          in depth knowledge of computers, networks and the software to keep running throughout a
          tournament.</p>

          <ul className="actions">
              <li><Link to="/" className="button">Back</Link></li>
          </ul>
        </div>
      </div>
    </section>
  </Layout>
)

export default EScorePage
