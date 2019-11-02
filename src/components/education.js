import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

class Education extends Component {
    render() {
        
        const listItem = this.props.educationDescription.map((desc) =>
            <li key={desc}>{desc}</li>
        );
        return(  
            <Row>
                <Col xs={12} md={2}>
                    <div className="year-label">
                        <p>{this.props.startYear}  - {this.props.endYear}</p>
                    </div> 
                </Col>
                <Col xs={12} md={10}>
                    <h5 className="program-name">{this.props.program}</h5>
                    <h6 className="school-name"><i><b>{this.props.schoolName}</b></i></h6>                    
                    <div className="education-content">
                        <ul>                           
                            <p>{listItem}</p>
                        </ul>                         
                    </div>                                                                          
                </Col>
            </Row>
        )
    }
}

export default Education;