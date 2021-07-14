import React from 'react';
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

class GPU extends React.Component{
  render() {
      console.log(this.props.gpu_info)
    return (
        <Card.Body className="GPU">
               <p className="title_css">GPU</p>
               <p className="model_css" >{this.props.gpu_info.name}</p>
               <p className="usage_css" >{this.props.gpu_info.usage}%</p>
               <p className="usage_label_css" >gpu usage</p>
                <CardGroup className="subcomponent">
                    <Card className="subcard-component"><p className="GPU_memory_perc">{this.props.gpu_info.memory}GiB</p></Card>
                    {/*<Card className="subcard-component"><p className="GPU_temperature">20ºC</p></Card>*/}
                </CardGroup>
        </Card.Body>
    );
  }
}

export default GPU;