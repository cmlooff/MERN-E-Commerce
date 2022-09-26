import React from 'react';
import { Card } from 'react-bootstrap';
import { Rating } from './Rating';

// Accessing our props from HomeScreen using new react methods
export const Product = ({ product }) => {
  return (
    // Putting in a bootstrap Card with it's unique className features
    <Card className='my-3 p-3 rounded'>
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </a>

      {/* Product Name with Link on name */}
      <Card.Body>
        {/* Product name as title  */}
        <a href={`/product/${product._id}`}>
          <Card.Title as={'div'}>
            {' '}
            <strong>{product.name}</strong>{' '}
          </Card.Title>
        </a>

        {/* Rating */}
        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3'>${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};
