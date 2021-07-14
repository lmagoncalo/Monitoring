import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

class CPU extends React.Component{
  render() {
    return (
           <Card.Body className="CPU">
               <p className="title_css">Processor</p>
               <p className="model_css">{this.props.cpu_info.name}</p>
               <p className="usage_css" >{this.props.cpu_info.usage}%</p>
               <p className="usage_label_css">processor usage</p>
               <CardGroup className="subcomponent">
                    <Card className="subcard-component"><p className="CPU_cores">{this.props.cpu_info.l_cores} cores</p></Card>
                    <Card className="subcard-component"><p className="CPU_bits">{this.props.cpu_info.bits}-bit</p></Card>
                </CardGroup>
           </Card.Body>
    );
  }
}

export default CPU;