import React from 'react';
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

class Memory extends React.Component{
  render() {
    return (
         <Card.Body className="Memory">
               <p className="title_css">Storage</p>
               <p className="model_css">—</p>
               <p className="usage_css">{this.props.memory_info.usage}%</p>
               <p className="usage_label_css">storage usage</p>
               <CardGroup className="subcomponent">
                    <Card className="subcard-component"><p id="Storage_storage_size">{this.props.memory_info.total} GiB Total</p></Card>
                   {/*<Card className="subcard-component"><p id="Storage_used">1 Disk</p></Card>*/}
                </CardGroup>
        </Card.Body>
    );
  }
}

export default Memory;