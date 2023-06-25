import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Logo from '../Logo';

const AdminFooter: React.FC = () => {
  return (
    <Container className="p-4">
      <Row>
        <Col>
          <Logo />
        </Col>

        <Col>
          <span className="float-right">firegames.com • contato@firegames.com</span>
        </Col>
      </Row>
    </Container>
  )
}

export default AdminFooter;