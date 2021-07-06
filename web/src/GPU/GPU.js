import React from 'react';
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

class GPU extends React.Component{
  render() {
    return (
        <Card.Body className="GPU">
               <p id="GPU_title" className="title_css">Machine</p>
               <p id="GPU_nome" className="model_css" >Ubuntu Celeron(R) CPUG1840</p>
               <p id="GPU_usage" className="usage_css" >3%</p>
               <p id="GPU_usage_label" className="usage_label_css" >ram usage</p>
                <CardGroup className="subcomponent">
                    <Card className="subcard-component"><p className="GPU_memory_perc">20%</p></Card>
                    <Card className="subcard-component"><p className="GPU_temperature">20ºC</p></Card>
                </CardGroup>
        </Card.Body>
    );
  }
}

export default GPU;