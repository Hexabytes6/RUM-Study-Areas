import {useEffect, useState} from 'react'
import * as ReactDOM from "react-dom";
import { MultiSelect } from "react-multi-select-component";
import "./Answer.css"
import {Card} from "react-bootstrap"
import './Box.css'


  const Answer = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://rum-study-areas-backend.herokuapp.com/api/studyareas/')
        .then(response => response.json())
        .then(json => setData(json))
    }, []) 
    
    // Study Areas 
  const database = [
    {
        "room_id": "S-113",
        "building": "Stefani",
        "features": "Air Conditioner, Whiteboard",
        "schedules": [
            "LMWJV 07:00:00 - 22:00:00"
        ],
        "reviews": [],
        "completed": true
    },
]

const renderCard = (card, index) =>{
    return(
      
        <Card style={{ width: '18 rem'}} key={index} className="box2">
        <Card.Body>
            <Card.Title>{card.room_id}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{card.building}</Card.Subtitle>
            <Card.Text>
                {card.features}
            </Card.Text>
            <Card.Text>
                {card.schedules}
            </Card.Text>
            <Card.Link href="#">Reviews</Card.Link>
        </Card.Body>
    </Card>
    )
}


    return (
      <div className="background1">
      <div className="answer">Here's your recommendation:</div>
      <div className="grid2">{database.map(renderCard)}</div>
      <div className="copyright8">Copyright © 2022 Hexabytes</div>
      </div>
    );
  };

  export default Answer 

