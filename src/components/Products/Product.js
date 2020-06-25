import React from 'react';
import {
    Container, Row, Col,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

class Product extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [{
                "id": "0122d6ad-b856-4952-b457-ce0fdf75518f",
                "name": "Potatoes - Pei 10 Oz",
                "description": "eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
            }, {
                "id": "6441c339-7c37-4f4d-bde5-a093fac50e11",
                "name": "Juice - Pineapple, 48 Oz",
                "description": "risus dapibus augue vel accumsan tellus nisi eu orci mauris lacinia sapien quis libero nullam",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
            }, {
                "id": "9ce82b77-b397-4395-86ad-90700a987d03",
                "name": "Chicken - Leg / Back Attach",
                "description": "fusce posuere felis sed lacus morbi sem mauris laoreet ut rhoncus aliquet pulvinar sed nisl",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
            }, {
                "id": "172c5190-314c-4134-a775-78306570fbad",
                "name": "Ice Cream - Turtles Stick Bar",
                "description": "quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
            }, {
                "id": "bfe6aebd-cf3c-4d58-b96f-37f0195bbf27",
                "name": "Pork - Tenderloin, Fresh",
                "description": "nec nisi volutpat eleifend donec ut dolor morbi vel lectus in quam fringilla rhoncus mauris",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
            }, {
                "id": "3cd1b10a-1768-40cd-9887-197b61b88607",
                "name": "Sponge Cake Mix - Vanilla",
                "description": "cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
            }, {
                "id": "c1ba966c-861a-4369-bbe0-b886f89a2fee",
                "name": "Cabbage - Nappa",
                "description": "rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
            }, {
                "id": "027f7fe7-f421-4335-8b8d-a6e9883e75db",
                "name": "Chutney Sauce - Mango",
                "description": "ut erat curabitur gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
            }, {
                "id": "5aa46456-13ad-4757-b5d0-314f23b9328b",
                "name": "Cranberries - Fresh",
                "description": "sed augue aliquam erat volutpat in congue etiam justo etiam pretium iaculis justo in hac",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
            }, {
                "id": "fd01695a-7f67-4ba4-aa52-36fe440fdebc",
                "name": "Sausage - Liver",
                "description": "parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
            }, {
                "id": "a9f7d319-dd4e-40e3-b37b-cf5afbb45abd",
                "name": "Cloves - Whole",
                "description": "tortor id nulla ultrices aliquet maecenas leo odio condimentum id luctus nec molestie sed justo",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
            }, {
                "id": "75a382bc-200e-4522-ab11-8d9b539eb879",
                "name": "Stock - Chicken, White",
                "description": "nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris",
                "imageUrl": "http://dummyimage.com/300x200.jpg/5fa2dd/ffffff"
            }, {
                "id": "15aa1a4e-a1da-418f-80ef-f94794e369a2",
                "name": "Clams - Littleneck, Whole",
                "description": "rutrum at lorem integer tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum sed magna",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
            }, {
                "id": "992feb9f-24ce-4a29-b4d4-e45568cea576",
                "name": "Beer - Mcauslan Apricot",
                "description": "nulla integer pede justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
            }, {
                "id": "ad50744c-2733-4006-a41d-f8c2ed016178",
                "name": "Juice - Apple Cider",
                "description": "pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa",
                "imageUrl": "http://dummyimage.com/300x200.jpg/dddddd/000000"
            }, {
                "id": "14e40414-a9af-4aa3-aecb-0c015208de83",
                "name": "Gatorade - Fruit Punch",
                "description": "lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
            }, {
                "id": "8fc3de7c-1473-4677-a33b-19d07d0d04ca",
                "name": "Wine - White, Lindemans Bin 95",
                "description": "cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
            }, {
                "id": "6009f361-0bb8-41be-8247-a5fd9c0a6002",
                "name": "Flower - Daisies",
                "description": "erat fermentum justo nec condimentum neque sapien placerat ante nulla justo aliquam quis turpis eget",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
            }, {
                "id": "64013321-925d-4dbf-9b90-2078ddf998bb",
                "name": "Water - Spring Water 500ml",
                "description": "ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat curabitur gravida",
                "imageUrl": "http://dummyimage.com/300x200.jpg/ff4444/ffffff"
            }, {
                "id": "1a807850-0fa8-40df-a666-80b72b856c8d",
                "name": "Eggplant - Asian",
                "description": "adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in",
                "imageUrl": "http://dummyimage.com/300x200.jpg/cc0000/ffffff"
            }]
        };

    }

    render() {
        const { products } = this.state;
        return (
            <Container>
                <h2>Product</h2>
                <Row>
                    {products.map(product => (
                        <Col sm="4">
                            <Card>
                                <CardImg
                                    top
                                    width="100%"
                                    src={product.imageUrl} />
                                <CardBody>
                                    <CardTitle>{product.name}</CardTitle>
                                    <CardText>{product.description}</CardText>
                                    <Button>Add To Cart</Button>
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