import React from 'react';

class Computer extends React.Component{
  render() {
    return (
        <div className="Computer">
              Computador
              <p>IP: {this.props.computer_info.ip}</p>
              <p>CPU: {this.props.computer_info.cpu.usage} %</p>
              <p>RAM: {this.props.computer_info.ram.usage} %</p>
              <p>Memory: {this.props.computer_info.memory.total}</p>
        </div>
    );
  }
}

export default Computer;