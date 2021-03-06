import React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';
import Image from './components/Image';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      Correct: 0,
      Wrong: 0,
      QuestionNum: 1,
      Color: [
        'green',
        'red',
        'white',
        'darkgoldenrod',
        'crimson',
      ],
      ButtonText: [
        'Yes',
        'No',
      ],
      ColorIndex: 0,
      BackgroundColor: [
        'darkgreen',
        'coral',
        'black',
        'chartreuse',
        'cornflowerblue',
        'darkred',
        'goldenrod',
        'hotpink',
        'orangered',
        'saddlebrown',
        'burlywood',
        'cadetblue',
        'darkmagenta',
        'lavender',
        'mediumseagreen',
        'thistle',
        'rosybrown',
        'teal',
        'sienna',
        'salmon',
        'palevioletred',
        'darkviolet',
        'olive',
        'indigo',
        'aquamarine',
      ],
    }
  }

  correctClickHandler = () => {
    if (this.state.QuestionNum <= 25) {
      this.setState(prevState => {
        return{
        Correct: prevState.Correct + 1,
        QuestionNum: prevState.QuestionNum + 1,
        ColorIndex: prevState.ColorIndex + 1,
      }})
    }
  }
  wrongClickHandler = () => {
    if (this.state.QuestionNum <= 25) {
      this.setState(prevState => {
        return{
        Wrong: prevState.Wrong + 1,
        QuestionNum: prevState.QuestionNum + 1,
        ColorIndex: prevState.ColorIndex + 1,
      }})
    }
  }

  render() {
    return (
      <div className='Background'>
        <div className="AppBody">
          <TopBar Correct={this.state.Correct} Wrong={this.state.Wrong} Color={this.state.Color} />
          <Image Question={this.state.QuestionNum} Color={this.state.Color} BackgroundColor={this.state.BackgroundColor} ColorIndex={this.state.ColorIndex} />
          <BottomBar ButtonText={this.state.ButtonText} Click={[this.correctClickHandler, this.wrongClickHandler]} Color={this.state.Color}/>
        </div>
      </div>
    )
  }
}
export default App;