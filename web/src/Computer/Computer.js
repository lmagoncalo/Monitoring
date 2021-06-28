import React from 'react';
import GPU from "../GPU/GPU";
import Memory from "../Memory/Memory";
import CPU from "../CPU/CPU";
import RAM from "../RAM/RAM";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


class Computer extends React.Component{
  render() {
    return (
        <Card className="Computer">
                    <div className="Computer_identity">
                        <p className="Computer_name">Computer A</p>
                        <p className="Computer_ip">{this.props.computer_info.ip}</p>
                    </div>
                    <CardGroup className="Computer_components">
                        <Card>
                            <CPU cpu_info={this.props.computer_info.cpu}  />
                        </Card>
                        <Card>
                            <RAM ram_info={this.props.computer_info.ram}  />
                        </Card>
                        <Card>
                            <Memory memory_info={this.props.computer_info.memory}  />
                        </Card>

                        {Object.keys(this.props.computer_info.gpu).map((key)=>(
                            <Card>
                                <GPU gpu_info={this.state.gpu[key]}/>
                            </Card>
                        ))}

                    </CardGroup>
        </Card>
    );
  }
}

export default Computer;