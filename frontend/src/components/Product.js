import React from 'react';
import { Card } from 'react-bootstrap';

// Accessing our props from HomeScreen using new react methods
export const Product = ({ product }) => {
  return (
    // Putting in a bootstrap Card with it's unique className features
    <Card className='my-3 p-3 rounded'>
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </a>

      <Card.Body>
        {/* Product name as title  */}
        <a href={`/product/${product._id}`}>
          <Card.Title as={'div'}>
            {' '}
            <strong>{product.name}</strong>{' '}
          </Card.Title>
        </a>
        <Card.Text as='div'>
          <div className='my-3'>
            {product.rating} from {product.numReviews} reviews
          </div>
        </Card.Text>
        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};
