import React from 'react';
import { Button, Col, Row } from 'apparena-patterns-react';

export default function ButtonExample() {
  return (
    <div>

      <h3>Types</h3>

      <Row>
        <Col xs={'2'}>
          <Button type="primary">primary</Button>
          <Button type="outline-primary">outline-primary</Button>
        </Col>
        <Col xs={'2'}>
          <Button type="secondary">secondary</Button>
          <Button type="outline-secondary">outline-secondary</Button>
        </Col>
        <Col xs={'2'}>
          <Button type="success">success</Button>
          <Button type="outline-success">outline-success</Button>
        </Col>
        <Col xs={'2'}>
          <Button type="info">info</Button>
          <Button type="outline-info">outline-info</Button>
        </Col>
        <Col xs={'2'}>
          <Button type="warning">warning</Button>
          <Button type="outline-warning">outline-warning</Button>
        </Col>
        <Col xs={'2'}>
          <Button type="danger">danger</Button>
          <Button type="outline-danger">outline-danger</Button>
        </Col>
        <Col xs={'1'}>
          <Button type="link">link</Button>
        </Col>
      </Row>

      <h3>Sizes</h3>

      <Row>
        <Col xs={3}>
          <Button type="primary" size="xs">xs</Button>
        </Col>
        <Col xs={3}>
          <Button type="primary" size="sm">sm</Button>
        </Col>
        <Col xs={3}>
          <Button type="primary" size="lg">lg</Button>
        </Col>
        <Col xs={3}>
          <Button type="primary" size="lg" block>block</Button>
        </Col>
      </Row>

      <h3>States</h3>

      <Row>
        <Col xs={3}>
          <Button type="primary" isActive={false}>not isActive</Button>
        </Col>
        <Col xs={3}>
          <Button type="primary" isDisabled>isDisabled</Button>
        </Col>
        <Col xs={3}>
          <Button type="primary" state="loading">loading</Button>
        </Col>
        <Col xs={3}>
          <Button type="primary" state="success">success</Button>
        </Col>
        <Col xs={3}>
          <Button type="primary" state="danger">danger</Button>
        </Col>
        <Col xs={3}>
          <Button type="primary" state="warning">warning</Button>
        </Col>

      </Row>


    </div>
  );
}
