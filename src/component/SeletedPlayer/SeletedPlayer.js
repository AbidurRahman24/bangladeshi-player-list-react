import React from 'react';
import { Card } from 'react-bootstrap';

const SeletedPlayer = (props) => {
   const {name, image, salary} = props.club
    return (
        <div>
            <div className="container">
                <div className="row" style={{margin:'10px'}}>
                    <div className="col-md-12" >
                    <Card style={{ width: '12rem' }} >
                <Card.Img variant="top" src={image}  />
                <Card.Body>
                    <Card.Title>Player Name: {name}</Card.Title>
                    <Card.Text>Salary: ${salary}</Card.Text>
                </Card.Body>
            </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeletedPlayer;