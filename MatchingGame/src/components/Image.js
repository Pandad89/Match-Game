import React from "react";

class Image extends React.Component{
    render(props){
        return(
            <div className="Image">
                <div className="Photo" style={{background: this.props.Color[0]}}></div>
                <h1>{this.props.Question}</h1>
            </div>
        )
    }
}

export default Image;