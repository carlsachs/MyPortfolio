import React from "react";

//import bootstrap/css
import "./Readrr.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

//images
import med from "./images/medcabinet.png";

const MedCabinet = () => {

    return (
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={med} />
            <Card.Body>
                <Card.Title>MedCabinet</Card.Title>
                <Card.Text>
                My first build week in React.  I was one of two front-end developers on the team.
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem><b>Role:</b>  Front-End Developer</ListGroupItem>
                <ListGroupItem><b>Language:</b>  React Native</ListGroupItem>
                <ListGroupItem><b>Time Allotted:</b>  3 1/2 Days</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="https://med-cabinet-3.now.sh/">Demo</Card.Link>
                <Card.Link href="https://github.com/bw-med-cabinet-3/Front-End">Repository</Card.Link>
            </Card.Body>
        </Card>
    )
}

export default MedCabinet;