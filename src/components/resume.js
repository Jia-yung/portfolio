import React, {Component} from 'react';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Achievements from './achievements';
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
                                <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
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
                                <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                                    <div className="resume-right-label text-center">
                                        <i className="fa fa-graduation-cap fa-resume-header" aria-hidden="true"/>
                                        Education
                                    </div>
                                    <Education 
                                        startYear={2016}
                                        endYear={2019}
                                        program="BSc (Hons) in Computer Science"
                                        schoolName="Sunway University - Kuala Lumpur, Malaysia"
                                        educationDescription={["CGPA: 3.90/4.0",
                                                               "Dual Award Program with Lancaster University, UK", 
                                                               "Jeffrey Cheah Continuing Scholarship(75%) recipient", 
                                                               "Jefferey Cheah Scholastic Award recipient for best student in Computer Science", 
                                                               "Nominee for Valedictorian (2020)", 
                                                               "Courses: Software Architecture, Database Management System, Data Structure and Algorithm, Computer Vision"]}                                      
                                        />   
                                    <hr/>
                                    <Education 
                                        startYear={2015}
                                        endYear={2016}
                                        program="Foundation in Arts"
                                        schoolName="Sunway College - Kuala Lumpur, Malaysia"
                                        educationDescription={["CGPA: 85.01%","Jeffrey Cheah Entrance Scholarship recipient"]}
                                        /> 
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>                           
                                    <div className="resume-right-label text-center">
                                        <i className="fa fa-briefcase fa-resume-header" aria-hidden="true"/>
                                        Employment History
                                    </div>
                                    <Experience
                                        startYear="2020 Sept"
                                        endYear="Present"
                                        jobName="OSS Delivery Engineer" 
                                        companyName="Huawei Technologies - Kuala Lumpur, Malaysia"
                                        jobDescription={["Actively engaged customer in SIT/UAT session to ensure delivery of fault management (FM) system within timeline.", 
                                                         "Configured and wrote scripts to receive and populate incoming alarm from EMS; achieved 100% alarm integrity in comparison to user’s legacy system.", 
                                                         "Configured and wrote scripts to collect alarm-related data from server and create trouble tickets for field maintenance engineers to resolve respective issues.", 
                                                         "Comply with SLA to ensure 99.95% system service availability; resulted in users’ satisfaction with quality of system.",
                                                         "Assisted in connectivity test between server and EMS for alarm reporting to FM system."
                                                        ]}
                                    />  
                                    <Experience
                                        startYear="2019 Jan"
                                        endYear="2019 March"
                                        jobName="Intern Software Engineer" 
                                        companyName="InfinitiLab Sdn.Bhd. - Kuala Lumpur, Malaysia"
                                        jobDescription={["Developed and implemented Excel sheets auto generator for an insurance admin panel using ASP.Net and EPPlus to reduce writing time on Excel; resulted in saving labor costs.", 
                                                         "Worked closely with design lead to produce a complete conceptual design (UI/UX) for a bus training portal within one week using ASP.NET.", 
                                                         "Worked closely with project lead to develop a responsive and user-friendly insurance broker website using ASP.NET.", 
                                                         "Compiled and wrote easy to understand system documentation for clients."]}
                                    />  
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                                    <div className="resume-right-label text-center">
                                        <i className="fas fa-chalkboard-teacher fa-resume-header" aria-hidden="true"/>
                                        Teaching Experience
                                    </div>
                                    <Experience
                                        startYear="2017"
                                        endYear="2018"
                                        jobName="Mentor leader for Peer Assisted Learning Program(PALP)" 
                                        companyName="Sunway University - Kuala Lumpur, Malaysia"
                                        jobDescription={["Led mentoring for Computer Mathematics and Computer Organisation subjects.", 
                                                         "Facilitated learning sessions in a supportive and collaborative manner.", 
                                                         "Assisted peer learners in developing appropriate learning strategies.", 
                                                         "Joined personal development and professional development training."]}
                                    />  
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInUp" animateOnce={true}> 
                                    <div className="resume-right-label text-center">
                                        <i className="fa fa-code fa-resume-header" aria-hidden="true"/>
                                        Projects
                                    </div>                              
                                    <Row>
                                        <Col>
                                            <ResumeProjects 
                                                projects = {["Covid-19 Visualisation Dashboard. ReactJS, JavaScript, Ajax, HTML, SCSS",
                                                             "Rising sea water virtualisation tool. Javascript, HTML, CSS",
                                                             "Donation Platform website. HTML, CSS, PHP", 
                                                             "Sales Management System. ASP.net, C#", 
                                                             "Congkak board game in command line interface. Java", 
                                                             "Tic Tac Toe game with minimax and alpha-beta pruning algorithm. Python", 
                                                             "Face Detection and Recognition in Python using Haar Cascade and LBPH from OpenCV"]}
                                            />
                                        </Col>
                                    </Row>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>                                                                                            
                                    <div className="resume-right-label text-center">
                                        <i className="fas fa-trophy fa-resume-header" aria-hidden="true"/>
                                        Achievements
                                    </div>
                                    <Row>
                                        <Col>
                                            <Achievements achievements={["NASA Space Apps Challenge (2019) Participant, Kuala Lumpur", 
                                                                         "Mentor Leader for Peer Assisted Learning Program (2017-2018), Sunway University",
                                                                         "Top 10 in Unicode coding competition (2016), INTI University",
                                                                         "President of Chess Club (2014), SMK Taman Desa",
                                                                         "Medalist in interzone chess competition for three consecutive year (2012-2014), Malaysia",
                                                                         "Medalist in school marching competition (2014), SMK Taman Desa."]}
                                            />
                                        </Col>
                                    </Row> 
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>                                                                                            
                                    <div className="resume-right-label text-center">
                                        <i className="fa fa-desktop fa-resume-header" aria-hidden="true"/>
                                        Skills
                                    </div>
                                    <Row>
                                        <Col>
                                            <Skills skills={["Programming Language: Java, JavaScript, C, C#, Python, HTML, CSS, SCSS, JSON", 
                                                            "Frameworks: ReactJS",
                                                            "Database: SQL"]}
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