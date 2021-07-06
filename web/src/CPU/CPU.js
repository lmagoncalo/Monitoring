import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

class CPU extends React.Component{
  render() {
    return (
           <Card.Body className="CPU">
               <p id="CPU_title" className="title_css">Processor</p>
               <p id="CPU_model" className="model_css">{this.props.cpu_info.name}</p>
               <p id="CPU_usage" className="usage_css" >{this.props.cpu_info.usage}%</p>
               <p id="CPU_usage_label"  className="usage_label_css">processor usage</p>
               <CardGroup className="subcomponent">
                    <Card className="subcard-component"><p className="CPU_cores">{this.props.cpu_info.l_cores} cores</p></Card>
                    <Card className="subcard-component"><p className="CPU_bits">{this.props.cpu_info.bits}-bit</p></Card>
                </CardGroup>
           </Card.Body>
    );
  }
}

export default CPU;