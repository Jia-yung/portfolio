import React, {Component} from 'react';
import {Card, ListGroup, } from 'react-bootstrap';

class Project extends Component {
    render() {
        const listItem = this.props.projectDescription.map((desc) =>
            <li key={desc} className="project-desc">{desc}</li>
        );
        return( 
            <Card className="shadow rounded-0 view overlay zoom hover-custom card-custom h-100" border="light">
                <div className="image-section">
                    <Card.Img variant="top" className="project-image rounded-0" src={this.props.projectPic}/>  
                </div>          
                <Card.Body >
                    <Card.Title className="project-title">{this.props.projectTitle}</Card.Title>
                    <Card.Text className="text-align:left">{listItem}</Card.Text>
                </Card.Body>        
                <ListGroup variant="flush">
                    <ListGroup.Item><Card.Link href={this.props.projectLink1} target="_blank">Github</Card.Link></ListGroup.Item>                
                </ListGroup>                                                                   
            </Card>   
        )
    }
}

export default Project;