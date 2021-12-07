import {Component}  from "react"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"

class Product extends Component {


  render(){
    return(
      <Col>
        <Card>
          <Card.Img variant ="top" src ={this.props.product.image}/>
          <Card.Body>
            <Card.Title>{this.props.product.title}</Card.Title>
            <Card.Text>
              {this.props.product.description}
            </Card.Text>
            <Card.Text>
              {this.props.product.price}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}

export default Product