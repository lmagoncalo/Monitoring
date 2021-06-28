import React from 'react';
import Row from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

class RAM extends React.Component{
  render() {
    return (
       <Card.Body className="RAM">
               <p id="RAM_title" className="title_css">RAM</p>
               <p id="RAM_os_and_its_version" className="model_css">{this.props.ram_info.name}</p>
               <p id="RAM_usage" className="usage_css">{this.props.ram_info.usage}%</p>
               <p id="RAM_usage_label" className="usage_label_css">ram usage</p>
               <CardGroup className="subcomponent">
                    <Card className="subcard-component"><p id="RAM_amount">{this.props.ram_info.total} GiB RAM</p></Card>
                   {/*<Card className="subcard-component"><p id="RAM_current_processes_count">108 Procs</p></Card>*/}
                </CardGroup>
        </Card.Body>
    );
  }
}

export default RAM;