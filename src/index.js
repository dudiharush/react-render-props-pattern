import React from 'react';
import { render } from 'react-dom';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <MouseWithLine/>
  </div>
);

class MouseTracker extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100%' }} onMouseMove={this.handleMouseMove}>
        <h1>Move the mouse around!</h1>
        {this.props.render(this.state)}
      </div>
    );
  }
}


class Line extends React.Component {
  render() {
    return <p>The current mouse position is ({this.props.mouse.x}, {this.props.mouse.y})</p>;
  }
}

class MouseWithLine extends React.Component {
  render(){
    return <MouseTracker render={mouse => <Line mouse={mouse}/>}/>
  }
}

  render(<App /> , document.getElementById('root'));
