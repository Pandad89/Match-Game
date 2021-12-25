import React from "react";

class BottomBar extends React.Component{
    render(props){
        return(
            <div className="BottomBar" style={{background: this.props.Color[4]}}>
                <button  className="Correct" onClick={this.props.Click[0]}><h1>&nbsp;&nbsp;{this.props.ButtonText[0]}&nbsp;&nbsp;</h1></button>
                <button className="Wrong" onClick={this.props.Click[1]}><h1>&nbsp;&nbsp;{this.props.ButtonText[1]}&nbsp;&nbsp;</h1></button>
            </div>
        )
    }
}

export default BottomBar;