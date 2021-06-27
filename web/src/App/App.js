import React from 'react';
import './App.css';
import Computer from "../Computer/Computer";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        info: null
      };
  }

  tick() {
    fetch('/info').then(res => res.json()).then(data => {
      console.log(data.info)
      this.setState(_ => ({
          info: data.info
      }));
    });
    console.log(this.state.info)
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
        <div className="App">

            {this.state.info &&
            Object.keys(this.state.info).map((key)=>(
                <Computer computer_info={this.state.info[key]}/>
            ))
            }
        </div>
    );
  }
}

export default App;