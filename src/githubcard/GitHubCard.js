import React from "react";
import Card from "react-bootstrap/Card";
import HxH from "./HxH.png";

function GitHubCard() {
  return (
    <div className="card">
      <Card style={{ width: "10rem" }}>
        {HxH}
        <Card.Img variant="top" src={HxH} />
        {}
        <Card.Body>
          <Card.Title>Chernandez2022</Card.Title>
          <Card.Text>Through failure I am finally awake</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default GitHubCard;
