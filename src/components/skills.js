import React, {Component} from 'react';

class Skills extends Component {
    render() {
        const listItem = this.props.skills.map((desc) =>
            <li>{desc}</li>
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

export default Skills;