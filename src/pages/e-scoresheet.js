import React from 'react'
import Layout from '../components/layout'

import { Link } from "gatsby"

const EScorePage = () => (
  <Layout>
    <section id="one" className="main style1">
      <div className="grid-wrapper">
        <div className="col-12">
          <header className="major">
            <h2>DataProject e-scoresheet Software</h2>
          </header>
          <p>Recently the CEV announced that they were trialling the use of Electronic
          Scoresheet software produced by DataProject (the same company that produce DataVolley).
          This software can currently be downloaded from <a href="http://www.dataproject.com/cev"
              target="_blank" rel="noopener noreferrer">here</a> if you wish to trial this out.</p>

          <p>At this moment in time I have no information on the software and have only
          played with many of the features, however it certainly looks promising.  My
          initial concerns lie around the tie-in to using this software with DataVolley
          and the DataProject scoreboard software, requiring vast amount of money to be
          spent in order to link up the competition venue from scoresheet to scoreboard
          to stats.  At the moment this is an initial concern and it may be possible to
          get some data out without using DataProject software, however from past experience
          this will not be easy.</p>

          <p>Once I have used this software in a tournament I will post back my thoughts.</p>

          <ul className="actions">
            <li><Link to="/" className="button">Back</Link></li>
          </ul>
        </div>
      </div>
    </section>
  </Layout>
)

export default EScorePage
