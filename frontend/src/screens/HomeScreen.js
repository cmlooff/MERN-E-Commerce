import React, { Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';
import products from '../products';
import { Product } from '../components/Product';

const HomeScreen = () => {
  return (
    <Fragment>
      <h1>Latest Products</h1>
      <Row>
        {/* Loop through products */}
        {products.map((product) => {
          // Small screens take 12 columns, medium 6 columns, etc
          // ? Also need to have a key for the Col b/c react requires it.
          return (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              {/* Mapping the individual product to an array and returning our columns */}
              <Product product={product} />
            </Col>
          );
        })}
      </Row>
    </Fragment>
  );
};

export default HomeScreen;
