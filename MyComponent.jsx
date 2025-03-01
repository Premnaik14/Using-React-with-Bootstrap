import React from "react";
import { Button, Card } from "react-bootstrap";

const MyComponent = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>React-Bootstrap</Card.Title>
        <Card.Text>This is a card with Bootstrap styling.</Card.Text>
        <Button variant="primary">Click Me</Button>
      </Card.Body>
    </Card>
  );
};

export default MyComponent;
