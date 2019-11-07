import React, {Component} from 'react';

class Achievements extends Component {
    render() {
        const listItem = this.props.achievements.map((desc) =>
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

export default Achievements;