import React from 'react';
// import { Button } from 'bootstrap';
import { Card, Button } from 'react-bootstrap';

const Player = (props) => {
    const { id, name, image, email, salary } = props.player
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 p-2">
                    <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image}  />
                <Card.Body>
                    <Card.Text>Player ID: {id}</Card.Text>
                    <Card.Title>Player Name: {name}</Card.Title>
                    <Card.Text>Email: {email}</Card.Text>
                    <Card.Text>Salary: ${salary}</Card.Text>
                    <Button variant="primary" onClick={()=>props.handleAddClub(props.player)}>Selete Club</Button>
                </Card.Body>
            </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Player;