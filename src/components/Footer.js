import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <section id="footer">
                {/*<ul className="icons">
                    <li><a href="#" className="icon alt fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a href="#" className="icon alt fa-facebook"><span className="label">Facebook</span></a></li>
                    <li><a href="#" className="icon alt fa-instagram"><span className="label">Instagram</span></a></li>
                    <li><a href="#" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                    <li><a href="#" className="icon alt fa-envelope"><span className="label">Email</span></a></li>
                </ul>*/}
                <ul className="copyright">
                    <li>&copy; Volleyball Scores 2018</li><li>Website By: <a href="http://ben-brown.co.uk" target="_blank" rel="noopener noreferrer">Ben Brown</a></li>
                </ul>
            </section>
        )
    }
}

export default Footer
