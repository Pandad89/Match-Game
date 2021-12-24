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
      Color: [
        'green',
        'red',
      ],
      ButtonText: [
        'Correct',
        'Wrong',
      ],
      Question: 'Question 1',
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
      ],
    }

  }

  correctClickHandler = () => {
    this.setState({
      Correct: this.state.Correct += 1,
      Question: 'Question 2'
    })
  }
  wrongClickHandler = () => {
    this.setState({
      Wrong: this.state.Wrong += 1

    })
  }

  render() {
    return (
      <div className='Background'>
        <div className="AppBody">
          <TopBar Correct={this.state.Correct} Wrong={this.state.Wrong} Color={this.state.Color}/>
          <Image Question={this.state.Question} Color={this.state.BackgroundColor}/>
          <BottomBar ButtonText={this.state.ButtonText} Click={[this.correctClickHandler, this.wrongClickHandler]}/>
        </div>
      </div>
    )
  }
}
export default App;
