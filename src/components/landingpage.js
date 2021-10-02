import React, { Component } from 'react';
import '../css/landingpage.css';
import { Row, Col, Container } from 'react-bootstrap';
import ProfilePic from '../images/profilePicCropped.jpg';
import ScrollAnimation from 'react-animate-on-scroll';

class Landing extends Component {
  render() {
    return( 
          <Container fluid className="landing-grid">
            <ScrollAnimation animateIn="fadeIn">           
                <Row>
                    <Col xs={12}>
                        <div className="avatar">
                            <img src={ProfilePic} alt="" className="img-fluid landing-avatar"/>   
                        </div>                
                        <div className="banner-text">
                            <h1 style={{marginBottom:"10px"}}>Software Developer</h1>
                            <hr/>
                            <p>HTML/CSS/SCSS | JavaScript | Java | C | C# | Python | React | SQL | JSON </p>
                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="http://bit.ly/jiayung-linkedin" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-linkedin" aria-hidden="true"></i>
                                </a>
                                {/* Github */}
                                <a href="http://bit.ly/jiayung-Github" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-github-square" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </ScrollAnimation>
        </Container>
    )
  }
}

export default Landing;