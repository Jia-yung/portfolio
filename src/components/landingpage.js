import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import ProfilePic from '../images/profilePicCropped.jpg';
import ScrollAnimation from 'react-animate-on-scroll';

class Landing extends Component {
  render() {
    return( 
          <Container fluid className="landing-grid">
            <Row>
                <Col xs={12}>
                    <ScrollAnimation animateIn="fadeIn">
                        <div className="avatar">
                            <img src={ProfilePic} alt="" className="img-fluid"/>   
                        </div>                
                        <div className="banner-text">
                            <h1>Software Developer</h1>
                            <hr/>
                            <p>HTML/CSS | JavaScript | Java | C# | Python | React | SQL | Oracle | MongoDB</p>
                            <div className="social-links">
                                {/* LinkedIn */}
                                <a href="http://bit.ly/jiayung-linkedin" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square custom-hover" aria-hidden="true" />
                                </a>

                                {/* Github */}
                                <a href="http://bit.ly/jiayung-Github" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square custom-hover" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </ScrollAnimation>
                </Col>
            </Row>
        </Container>
    )
  }
}

export default Landing;