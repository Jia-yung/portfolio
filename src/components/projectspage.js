import React, {Component} from 'react';
import {Row, Col, Container, Tabs, Tab} from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';
import Project from './project';
import PortLogo from '../images/portfolio.png';
import TTCLogo from '../images/tictactoe.png';
import FaceLogo from '../images/facerecognition.png';
import CongkakLogo from '../images/congkak.png';
import RobotLogo from '../images/linefollower.png';
import DonationLogo from '../images/donationlogo.png';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = {activeTab: 2};
    }
    
    render(){
        return(               
            <Container fluid className="projects-page-grid">
                <ScrollAnimation animateIn="fadeIn">
                    <Row>
                        <Col xs={12}>
                            <Tabs className="justify-content-center tabs-nav-custom" activeKey={this.state.activeTab}  onSelect={(tabId) => this.setState({activeTab: tabId})}>                        
                                <Tab eventKey="0" title="React" > 
                                    <Container className="mt-4">                                                         
                                        <Row className="justify-content-center">  
                                            <Col className="col-auto mb-3">                                                                              
                                                <Project 
                                                    projectTitle="Portfolio"
                                                    projectDescription="A webpage about my the materials that showcase my skills, qualifications and education."
                                                    projectLink1="https://www.google.com/"
                                                    projectPic={PortLogo}
                                                /> 
                                            </Col>                                                                                             
                                        </Row> 
                                    </Container>                             
                                </Tab>
                                <Tab eventKey="1" title="Python" >
                                    <Container className="mt-4">
                                        <Row className="justify-content-center">
                                            <Col className="col-auto mb-3">                                                                              
                                                <Project 
                                                    projectTitle="Tic-Tac-Toe(AI)"
                                                    projectDescription="A multiplayer tic-tac-toe game that implements minimax and alpha beta pruning algorithm."
                                                    projectLink1="https://github.com/Jia-yung/Tic-Tac-Toe-with-Minimax-AlphaBetaPruning"
                                                    projectPic={TTCLogo}
                                                /> 
                                            </Col> 
                                            <Col className="col-auto mb-3"> 
                                                <Project 
                                                    projectTitle="Face Recognition"
                                                    projectDescription="A Face Detection and Recognition system using Haar Cascade and LBPH from OpenCV"
                                                    projectLink1="https://github.com/Jia-yung/Face-Detection-and-Recognition"
                                                    projectPic={FaceLogo}
                                                    /> 
                                            </Col>                                                                                          
                                        </Row>    
                                    </Container>                                
                                </Tab>
                                <Tab eventKey="2" title="Java" >
                                    <Container className="mt-4">
                                        <Row className="justify-content-center">
                                            <Col className="col-auto mb-3">                                                                              
                                                <Project 
                                                    projectTitle="Congkak"
                                                    projectDescription="A multiplayer game with the objective of capturing all or some set of opponent seeds. The game is develop in command line interface and be play against friends or computer."
                                                    projectLink1="https://github.com/Jia-yung/Congkak"
                                                    projectPic={CongkakLogo}
                                                /> 
                                            </Col>
                                            <Col className="col-auto mb-3">                                                                              
                                                <Project 
                                                    projectTitle="Autonomous Driving"
                                                    projectDescription="A self driving robot based on line following and obstacle detection via image processing and ultrasonic sensor respectively."
                                                    projectLink1="https://github.com/Jia-yung/EV3-LineFollower-and-ObstacleDetection"
                                                    projectPic={RobotLogo}
                                                /> 
                                            </Col>                                                                                     
                                        </Row>    
                                    </Container>       
                                </Tab>
                                <Tab eventKey="3" title="PHP">
                                    <Container className="mt-4">
                                        <Row className="justify-content-center">
                                            <Col className="col-auto mb-3">                                                                              
                                                <Project 
                                                    projectTitle="Donation Platform"
                                                    projectDescription="A website that bring together the donator and fund raiser to raise money through crowd funding."
                                                    projectLink1="https://github.com/Jia-yung/Donation-platform-website"
                                                    projectPic={DonationLogo}
                                                /> 
                                            </Col>                                                                                
                                        </Row>    
                                    </Container>       
                                </Tab>
                            </Tabs> 
                        </Col>
                    </Row> 
                </ScrollAnimation>                      
            </Container>                                                          
        )
    }
}

export default Projects;