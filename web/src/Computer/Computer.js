import React from 'react';
import GPU from "../GPU/GPU";
import Memory from "../Memory/Memory";
import CPU from "../CPU/CPU";
import RAM from "../RAM/RAM";
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Row} from "react-bootstrap";


class Computer extends React.Component{
  render() {
    return (
        <Card className="Computer">
                    <div className="Computer_identity">
                        <p className="Computer_name">{this.props.computer_info.name}</p>
                        <p className="Computer_ip">—</p>
                    </div>
                    <CardGroup className="Computer_components">
                            <Card className="Computer_components_cards">
                                <CPU cpu_info={this.props.computer_info.cpu}  />
                            </Card>
                            <Card className="Computer_components_cards">
                                <RAM ram_info={this.props.computer_info.ram}  />
                            </Card>
                            <Card className="Computer_components_cards">
                                <Memory memory_info={this.props.computer_info.memory}  />
                            </Card>
                    </CardGroup>
                    <CardGroup className="Computer_components">
                        {Object.keys(this.props.computer_info.gpu).map((key)=>(
                            <Card className="Computer_components_cards">
                                <GPU gpu_info={this.props.computer_info.gpu[key]}/>
                            </Card>
                        ))}
                    </CardGroup>
        </Card>
    );
  }
}

export default Computer;