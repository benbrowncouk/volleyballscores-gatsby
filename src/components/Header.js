import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolleyballBall } from '@fortawesome/free-solid-svg-icons'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span className="icon major">
                      <FontAwesomeIcon icon={faVolleyballBall} size="4x"/>
                    </span>
                    <h1>Welcome to VolleyballScores.co.uk</h1>
                    <p>Volleyball Scores and Statistics from around the UK</p>
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">Discover</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
