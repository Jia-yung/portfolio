import React, {Component} from 'react';
import {Row, Col, Container, Button, Accordion, Card} from 'react-bootstrap';
import ProfilePic from '../images/web-developerCropped.jpg';
import ScrollAnimation from 'react-animate-on-scroll';
import {Link} from 'react-router-dom';

class About extends Component {
    render(){
        return(
            <div>
                <section className="about-section">
                    <Container> 
                        <ScrollAnimation animateIn="fadeIn">           
                            <Row>                     
                                <Col xs={12} sm={12} md={4}>                    
                                    <img src={ProfilePic} className='img-fluid about-avatar shadow' style={{marginBottom: '20px'}} alt=""/>
                                </Col>
                                <Col xs={12} sm={12} md={8}>                                
                                    <h1>Yap Jia Yung</h1>
                                    <hr/>                             
                                    <p className="text-justify">Hi, I am a software developer based in Kuala Lumpur, Malaysia. My objective is to apply IT-related knowledge and programming skills by developing cutting edge applications and enhancing user experiences. During my studies I have worked on several <Link to="/projectspage">projects</Link> which have prepared me with the relevant theory and practice to pursue a career in software development role.</p>
                                    <p className="text-justify">I have worked in <a href="https://www.infinitilab.com" rel="noopener noreferrer" target="_blank">Infinitilab</a> during my internship and my responsibilities include creating algorithm, developing user interface and contributing to development of a variety of software packages and web systems. </p>
                                    <p className="text-justify">I am also looking forward to pursue my masters studies in the UK to further improve my computing knowledge. In the meantime, I am planning to work as a software developer to acquire some experience before continuing my studies.</p>
                                    <p className="text-justify">If you have any questions about my competence, do not hesitate to drop me an email !</p>
                                    <div className="fa-pull-right">                                   
                                        <a href="mailto:yapjiayung@gmail.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary email-btn" ><span className="fa fa-envelope email-btn" aria-hidden="true" style={{marginRight: '10px'}}/>Email</a>
                                    </div>                                  
                                    <hr style={{marginTop: '76px'}}/>                                                  
                                </Col>
                            </Row> 
                        </ScrollAnimation>                      
                    </Container>              
                </section>              
                <section className="achievement-section"> 
                    <ScrollAnimation animateIn="fadeIn">                   
                        <Container>
                            <Row>                           
                                <Col xs={12}>
                                    <Accordion>
                                        <h1 className="text-reflect">ACHIEVEMENTS</h1>
                                        <Card>
                                            <Card.Header className="accordion-title">
                                                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                                    Top 10 in Unicode challenge
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body className="text-justify accordion-content"><a href="https://newinti.edu.my/intis-unicode-enhances-inter-varsity-competitive-spirit-in-24-hours/" rel="noopener noreferrer" target="_blank">Unicode</a> is a coding challenge organised by INTI University where participants are given a set of challenging question which requires problem solving skill and algorithm to solve them. In this competition, me and a friend of mine got into Top 10 after competing with participants from different University in Malaysia.</Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card>
                                            <Card.Header className="accordion-title">
                                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                                    Leader in Peer Assisted Learning Program(PALP) in Sunway University
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="1" >
                                                <Card.Body className="text-justify accordion-content">Peer Assisted Learning Programme (PALP) is a peer facilitated student support scheme for students who would like to improve their studies. Peer leaders who excel in certain subjects are trained to foster student learning and active engagement with their course content. In this program, I am choosens to be the peer leader for Computer Mathematics and Computer Organisation to assist my junior who have difficulties in that area of studies.</Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card>
                                            <Card.Header className="accordion-title">
                                                <Accordion.Toggle as={Button} variant="link" eventKey="2" >
                                                    Medalist in state level Chess Competition for Year 2013-2016
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="2">
                                                <Card.Body className="text-justify accordion-content">In this state level competition, I participated for the team of 4 event representing my school and we secured 3rd place for three consecutive years.</Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </Col>                            
                            </Row>                      
                        </Container>
                    </ScrollAnimation>
                </section>                   
            </div>          
        )
    }
}

export default About;