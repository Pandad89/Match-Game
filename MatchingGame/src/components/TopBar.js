import React from "react";

class TopBar extends React.Component{
    render(props){
        return(
            <div className="TopBar">
                <h1 className="Correct" style={{color: this.props.Color[0]}}>Correct: {this.props.Correct}</h1>
                <h1 className="Wrong" style={{color: this.props.Color[1]}}>Wrong: {this.props.Wrong}</h1>
            </div>
        )
    }
}

export default TopBar;