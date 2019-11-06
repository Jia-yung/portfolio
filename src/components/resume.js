import React, {Component} from 'react';
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
                    <Row className="shadow resume-background">
                        <Col xs={12} md={12} lg={3} className="resume-left-column">
                            <section className="resume-left-section">
                                <ScrollAnimation animateIn="fadeInUp">
                                    <div className="resume-name">
                                        <h3>Yap Jia Yung</h3>
                                    </div>                                                                        
                                    <h4 className="resume-left-label">Contact</h4>
                                    <hr className="mt-0"/>
                                    <div className="contact-list">                                       
                                        <i className= "fas fa-envelope-square email" aria-hidden="true"/>
                                        <a href="mailto:yapjiayung@gmail.com" className="">yapjiayung@gmail.com</a>                                                                                                                                                                                                                                         
                                    </div>
                                    <h4 className="resume-left-label">Personal</h4>
                                    <hr className="mt-0"/>
                                    <div className="personal-list"> 
                                        <div>
                                            Nationality: Malaysian 
                                        </div>                                   
                                        <div>
                                            Language: English | Chinese | Malay 
                                        </div>                                                                                                                                                                 
                                    </div>
                                    <h4 className="resume-left-label">Connect</h4>
                                    <hr className="mt-0" />
                                    <div>
                                        <div className="contact-list">
                                            <i className= "fab fa-linkedin linkedin" aria-hidden="true"/>
                                            <a href='http://bit.ly/jiayung-linkedin' target='_blank' rel="noopener noreferrer">bit.ly/jiayung-linkedin</a>                                                                               
                                        </div>                                   
                                        <div className="contact-list">
                                            <i className= "fab fa-github-square github" aria-hidden="true"/>
                                            <a href='http://bit.ly/jiayung-Github' target='_blank' rel="noopener noreferrer">bit.ly/jiayung-Github</a>  
                                        </div>                                                                                                                
                                    </div>
                                </ScrollAnimation>
                            </section>
                        </Col>                                                              
                        <Col className="resume-right-col" xs={12} md={12} lg={9}>
                            <section>
                                <ScrollAnimation animateIn="fadeInUp">
                                    <div className="resume-right-label text-center">
                                        <i className="fa fa-graduation-cap fa-resume-header" aria-hidden="true"/>
                                        Education
                                    </div>
                                    <Education 
                                        desc={1}
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
                                        desc={2}
                                        startYear={2015}
                                        endYear={2016}
                                        program="Foundation in Arts"
                                        schoolName="Sunway College - Kuala Lumpur, Malaysia"
                                        educationDescription={["CGPA: 85.01%","Granted Jeffrey Cheah Entrance Scholarship"]}
                                        /> 
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInUp">                           
                                    <div className="resume-right-label text-center">
                                        <i className="fa fa-briefcase fa-resume-header" aria-hidden="true"/>
                                        Employment History
                                    </div>
                                    <Experience
                                        desc={3}
                                        startYear="2019"
                                        endYear="2019"
                                        jobName="Intern Software Engineer" 
                                        companyName="Infiniti Lab - Kuala Lumpur, Malaysia"
                                        jobDescription={["Developed and lead front end development for SMRT’s training portal using ASP.net HTML.", 
                                                         "Developed front end for the company website using WordPress.", 
                                                         "Developed webpages to query and display insurance details for an insurance broker using ASP.net MVC.", 
                                                         "Developed Excel sheets auto generator for an insurance's admin panel using .Net Framework"]}
                                    />  
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInUp">
                                    <div className="resume-right-label text-center">
                                        <i className="fas fa-chalkboard-teacher fa-resume-header" aria-hidden="true"/>
                                        Teaching Experience
                                    </div>
                                    <Experience
                                        desc={4}
                                        startYear="2017"
                                        endYear="2018"
                                        jobName="Mentor leader for Peer Assisted Learning Program(PALP)" 
                                        companyName="Sunway University - Kuala Lumpur, Malaysia"
                                        jobDescription={["Lead mentoring for Computer Mathematics and Computer Organisation subjects.", 
                                                         "Facilitated learning sessions in a supportive and collaborative manner.", "Assisted peer learners in developing appropriate learning strategies.", 
                                                         "Joined personal development and professional development training."]}
                                    />  
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInUp"> 
                                    <div className="resume-right-label text-center">
                                        <i className="fa fa-code fa-resume-header" aria-hidden="true"/>
                                        Projects
                                    </div>                              
                                    <Row>
                                        <Col>
                                            <ResumeProjects 
                                                projects = {["Rising sea water virtualisation tool using Javascript, HTML, CSS",
                                                            "Donation Platform website using HTML, CSS, PHP", 
                                                            "Sales Management using ASP.net C#", 
                                                            "Movie Database Management using MongoDB", 
                                                            "Congkak board game in command line interface using Java", 
                                                            "Tic Tac Toe game with minimax and alpha-beta pruning algorithm using Python", 
                                                            "Face Detection and Recognition in Python using Haar Cascade and LBPH from OpenCV"]}
                                            />
                                        </Col>
                                    </Row>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInUp">                                                                                            
                                    <div className="resume-right-label text-center">
                                        <i className="fa fa-desktop fa-resume-header" aria-hidden="true"/>
                                        Skills
                                    </div>
                                    <Row>
                                        <Col className="col-auto">
                                            <Skills skills={["Programming Language: Java | C# | C | Python | HTML | CSS | JavaScript", 
                                                             "Database: SQL | Oracle | MongoDB"]}
                                            />
                                        </Col>
                                    </Row> 
                                </ScrollAnimation>
                            </section>                                            
                        </Col>
                    </Row>                
                </Container>            
            </div>             
        )
    }
}

export default Resume;