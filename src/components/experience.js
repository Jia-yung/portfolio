import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

class Experience extends Component {
    render() {
        const listItem = this.props.jobDescription.map((desc) =>
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
                    <h5 className="job-name">{this.props.jobName}</h5>
                    <h6 className="company-name"><i><b>{this.props.companyName}</b></i></h6>
                    <ul>{listItem}</ul>                
                </Col>
            </Row>
        )
    }
}

export default Experience;