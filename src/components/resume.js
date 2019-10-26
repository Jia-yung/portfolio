import React, {Component} from 'react';
import ProfilePic from '../images/profilePicCropped.jpg';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import ResumeProjects from './resumeprojects';
import {Row, Col, Container} from 'react-bootstrap';
import ScrollAnimation from 'react-animate-on-scroll';

class Resume extends Component {
    render(){
        return(
           <div className="resume-grid">             
                <Container>
                    <ScrollAnimation animateIn="fadeIn">
                        <Row className="shadow resume-background">
                            <Col xs={3} className="resume-left-column">
                                <section className="resume-left-section">
                                    <div className="resume-avatar-section">
                                        <img src={ProfilePic} className="resume-avatar img-fluid" alt="avatar"/>
                                    </div>
                                    <h3 className="avatar-name">Yap Jia Yung</h3>
                                    <h4 className="resume-left-label">Contact</h4>
                                    <hr className="mt-0"/>
                                    <div className="contact-list">                                     
                                        <i className= "fa fa-phone-square" aria-hidden="true"/>
                                        (+60) 13-3687715
                                        <i className= "fa fa-envelope-square" aria-hidden="true"/>
                                        <a href="mailto:yapjiayung@gmail.com">yapjiayung@gmail.com</a>                                                                                                  
                                    </div>
                                    <h4 className="resume-left-label">Personal</h4>
                                    <hr className="mt-0"/>
                                    <div className="personal-list">                                    
                                        Nationality: Malaysian                                
                                        Language: English | Chinese | Malay                                                       
                                    </div>
                                    <h4 className="resume-left-label">Connect</h4>
                                    <hr className="mt-0" />
                                    <div className="contact-list">                                    
                                        <i className= "fa fa-linkedin-square" aria-hidden="true"/>
                                        <a href='http://bit.ly/jiayung-linkedin' target='_blank' rel="noopener noreferrer">bit.ly/jiayung-linkedin</a>                                   
                                        <i className= "fa fa-github" aria-hidden="true"/>
                                        <a href='http://bit.ly/jiayung-Github' target='_blank' rel="noopener noreferrer">bit.ly/jiayung-Github</a>                                                                             
                                    </div>
                                </section>
                            </Col>                           
                            <Col className="resume-right-col" xs={9} >
                                <section>
                                    <div className="resume-right-label" >
                                        <i className="fa fa-graduation-cap fa-custom" aria-hidden="true"/>
                                        Education
                                    </div>
                                    <Education 
                                        startYear={2016}
                                        endYear={2019}
                                        program="BSc (Hons) in Computer Science"
                                        schoolName="Sunway University - Kuala Lumpur, Malaysia"
                                        educationDescription={["CGPA: 3.9/4.0", 
                                        "Granted Jeffrey Cheah Continuing Scholarship(75%) for academic excellence", 
                                        "Mentor Leader for Computer Mathematics and Computer Organisation under Peer Assisted Learning Program (PALP)", 
                                        "Final Year Project: Autonomous Driving based on Line Following and Obstacle Detection", 
                                        "Courses: Web Fundamentals | Software Architecture | Human Computer Interaction | Database Management System | Programming Principles | Data Structure and Algorithm | Computer Vision"]}                                      
                                        />   
                                    <hr/>
                                    <Education 
                                        startYear={2015}
                                        endYear={2016}
                                        program="Foundation in Arts"
                                        schoolName="Sunway College - Kuala Lumpur, Malaysia"
                                        educationDescription={["CGPA: 85.01%"]}
                                        />                            
                                    <div className="resume-right-label">
                                        <i className="fa fa-briefcase fa-custom" aria-hidden="true"/>
                                        Employment History
                                    </div>
                                    <Experience
                                        startYear="2019"
                                        endYear="2019"
                                        jobName="Intern Software Engineer" 
                                        companyName="Infiniti Lab - Kuala Lumpur, Malaysia"
                                        jobDescription={["Developed and lead front end development for SMRT’s training portal using ASP.net HTML.", 
                                                        "Developed front end for the company website using WordPress.", "Create webpages to query and display details for an insurance broker.", 
                                                        "Generate Excel sheets automatically with .Net Framework to view different insurance plans for an insurance broker's admin panel."]}
                                    />        
                                    <div className="resume-right-label">
                                        <i className="fa fa-code fa-custom" aria-hidden="true"/>
                                        Projects
                                    </div>                              
                                    <Row>
                                        <Col xs={12}>
                                            <ResumeProjects 
                                                projects = {["Donation Platform website using HTML, CSS, PHP", 
                                                            "Sales Management using ASP.net C#", 
                                                            "Movie Database Management using MongoDB", 
                                                            "Congkak board game in command line interface using Java", 
                                                            "Tic Tac Toe game with minimax and alpha-beta pruning algorithm using Python", 
                                                            "Face Detection and Recognition in Python using Haar Cascade and LBPH from OpenCV"]}
                                            />
                                        </Col>
                                    </Row>                                                                                           
                                    <div className="resume-right-label">
                                        <i className="fa fa-desktop fa-custom" aria-hidden="true"/>
                                        Skills
                                    </div>
                                    <Row>
                                        <Col xs={12} className="col-auto">
                                            <Skills skills={["Programming Languages: Java | C# | C | Python | HTML | CSS | JavaScript", 
                                            "Database: SQL | Oracle | MongoDB"]}/>
                                        </Col>
                                    </Row> 
                                </section>                                            
                            </Col>
                        </Row>
                    </ScrollAnimation>
                </Container>            
            </div>             
        )
    }
}

export default Resume;