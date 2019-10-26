import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';

class Experience extends Component {
    render() {
        const listItem = this.props.jobDescription.map((desc) =>
            <li>{desc}</li>
        );
        return(
            <Row>
               <Col xs={2}>
                    <div style={{backgroundColor: "#E5E7E9", textAlign: 'center', borderRadius: '10px'}}>
                        <p>{this.props.startYear}  - {this.props.endYear}</p>
                    </div>  
                </Col>
                <Col xs={10}> 
                    <h5 style={{marginTop: '0px', fontWeight: 'bold'}}>{this.props.jobName}</h5>
                    <h6 style={{marginTop: '0px', color: 'grey'}}><i><b>{this.props.companyName}</b></i></h6>
                    <ul>{listItem}</ul>                
                </Col>
            </Row>
        )
    }
}

export default Experience;