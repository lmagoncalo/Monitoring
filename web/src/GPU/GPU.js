import React from 'react';

class GPU extends React.Component{
  render() {
    return (
        <div className="GPU">
              GPU
              <p>GPU Name: {this.props.gpu_info.name}</p>
              <p>GPU Usage: {this.props.gpu_info.cpu.usage} %</p>
              <p>GPU Memory: {this.props.gpu_info.memory} %</p>
        </div>
    );
  }
}

export default GPU;