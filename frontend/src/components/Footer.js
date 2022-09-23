import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='text-center py-3'>
            {/* Center the text -> Padding on the top and bottom */}
            Copyright &copy;
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
