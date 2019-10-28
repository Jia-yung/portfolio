import React, {Component} from 'react';
import {Card, ListGroup, } from 'react-bootstrap';

class Project extends Component {
    render() {
        return( 
            <Card className="shadow rounded-0 view overlay zoom hover-custom card-custom h-100" border="light">
                <div style={{overflow: 'hidden', borderBottom: '1px solid #E5E7E9'}}>
                    <Card.Img variant="top" className="project-image rounded-0 " src={this.props.projectPic}/>  
                </div>          
                <Card.Body >
                    <Card.Title>{this.props.projectTitle}</Card.Title>
                    <Card.Text className="text-justify">{this.props.projectDescription}</Card.Text>
                </Card.Body>        
                <ListGroup variant="flush">
                    <ListGroup.Item><Card.Link href={this.props.projectLink1} target="_blank">Github</Card.Link></ListGroup.Item>  
                </ListGroup>                                                                   
            </Card>   
        )
    }
}

export default Project;