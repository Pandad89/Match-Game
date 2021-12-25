import React from "react";

class Image extends React.Component{
    render(props){
        return(
            <div className="Image" style={{background: this.props.Color[3]}}>
                <div className="Photo" style={{background: this.props.BackgroundColor[this.props.ColorIndex]}}></div>
                <h1>Question {this.props.Question}: Is this color {this.props.BackgroundColor[this.props.ColorIndex]}?</h1>
            </div>
        )
    }
}

export default Image;