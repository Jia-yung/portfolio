import React, {Component} from 'react';

class ResumeProjects extends Component {
    render() {
        const listItem = this.props.projects.map((desc) =>
            <li key={desc}>{desc}</li>
        );
        return(
            <div>                    
                <ul>
                    <p>{listItem}</p>  
                </ul>                        
            </div>                                               
        )
    }
}

export default ResumeProjects;