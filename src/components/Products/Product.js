import React from 'react';
import {
    Container, Row, Col,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import axios from 'axios';
import { CartContext } from '../ProductContext/Cart';

class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            imageUrl: 'https://idichthuat.com/wp-content/uploads/2020/03/cac-danh-gia-chuan-nhat-tu-su-kien-hello-world.jpg'
        };

    }

    componentDidMount() {
        axios.get('http://dummy.restapiexample.com/api/v1/employees').then(res => {
            console.log(res);
            this.setState({
                products: res.data.data
            });
        });
    }

    render() {
        const { products, imageUrl } = this.state;
        return (
            <Container>
                <h2>Product</h2>
                <Row>
                    {products.map((product, index) => (
                        <Col sm="4" key={index}>
                            <Card>
                                <CardImg
                                    top
                                    width="100%"
                                    src={imageUrl} />
                                <CardBody>
                                    <CardTitle>{product.employee_name}</CardTitle>
                                    <CardText>{product.employee_salary}</CardText>
                                    <CartContext.Consumer>
                                        {({ addToCart }) => <Button onClick={() => addToCart(product)}>Add To Cart</Button>}
                                    </CartContext.Consumer>


                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        );
    }
}


Product.propTypes = {

};


export default Product;