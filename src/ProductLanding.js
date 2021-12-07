import {Component}  from "react"
import Row from "react-bootstrap/Row"
import Product from "./Product.js"

class ProductLanding extends Component{
  constructor(props){
    super(props);
    this.state = {
      productList : []
    }
  }

  

  render(){
    return(
      <>
        {this.state.productList ? 
        <Row>
          {this.state.productList.map(element => <Product product = {element}/>)} 
        </Row>
        : false}
      </>
    )
  }

}

export default ProductLanding