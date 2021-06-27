import React from 'react';
import GPU from "../GPU/GPU";
import Memory from "../Memory/Memory";
import CPU from "../CPU/CPU";
import RAM from "../RAM/RAM";

class Computer extends React.Component{
  render() {
    return (
        <div className="Computer">
              Computador
              <p>IP: {this.props.computer_info.ip}</p>
            <CPU cpu_info={this.props.computer_info.cpu}  />
            <RAM ram_info={this.props.computer_info.ram}  />
            <Memory memory_info={this.props.computer_info.memory}  />

            {Object.keys(this.props.computer_info.gpu).map((key)=>(
                <GPU gpu_info={this.state.gpu[key]}/>
            ))
            }
        </div>
    );
  }
}

export default Computer;