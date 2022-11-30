import {useEffect, useState} from 'react'
import Classroom from './Classroom'
import './Catalog.css'
import {Card} from "react-bootstrap"
import './Box.css'
import { json, useNavigate } from 'react-router-dom'
import React from 'react'

const Catalog = () => {
  
     const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://rum-study-areas-backend.herokuapp.com/api/studyareas/')
        .then(response => response.json())
        .then(json => setData(json))
    }, []) 
    
    // Study Areas 
  const database = [
    {
        "room_id": "S-203",
        "building": "Stefani",
        "features": "Air Conditioner, Whiteboard",
        "schedules": [
            "Lunes, 07:00:00 - 22:00:00"
        ]
    },
    {
        "room_id": "S-113",
        "building": "Stefani",
        "features": "Air Conditioner, Computers, Whiteboard",
        "schedules": "Lunes, 07:00:00 - 22:00:00 Martes, 07:00:00 - 22:00:00, Miercoles, 07:00:00 - 22:00:00, Jueves, 07:00:00 - 22:00:00, Viernes, 07:00:00 - 22:00:00"
            
    },
    {
        "room_id": "S-205",
        "building": "Stefani",
        "features": "Air Conditioner, Computers, Whiteboard",
        "schedules": [],

    },
    {
        "room_id": "S-206",
        "building": "Stefani",
        "features": "Air Conditioner, Whiteboard, Keycard Required",
        "schedules": [],

    },
    {
        "room_id": "S-105D",
        "building": "Stefani",
        "features": "Air Conditioner, Computers, Whiteboard, Keycard Required",
        "schedules": [],
    },
    {
        "room_id": "S-105B",
        "building": "Stefani",
        "features": [
            "Air Conditioner",
            "Computers",
            "Whiteboard",
            "Keycard Required"
        ],
        "schedules": [],
    },
    {
        "room_id": "S-230",
        "building": "Stefani",
        "features": [
            "Air Conditioner",
            "Whiteboard"
        ],
        "schedules": [],
    },
    {
        "room_id": "S-121",
        "building": "Stefani",
        "features": [
            "Air Conditioner",
            "Computers",
            "Whiteboard",
            "Keycard Required"
        ],
        "schedules": [],
    },
    {
        "room_id": "S-308",
        "building": "Stefani",
        "features": [
            "Air Conditioner",
            "Computers",
            "Whiteboard"
        ],
        "schedules": [],
    },
    {
        "room_id": "S-307",
        "building": "Stefani",
        "features": [
            "Air Conditioner",
            "Computers",
            "Whiteboard"
        ],
        "schedules": [],
    },
    {
        "room_id": "S-306",
        "building": "Stefani",
        "features": "Air Conditioner, Whiteboard",
        "schedules": [],
    }
];

  

    const renderCard = (card, index) =>{
        return(
          
            <Card style={{ width: '18rem' }} key={index} className="box">
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
        <div className="background">
            <div className="titleCatalog">Catalog</div>
            <div className="subtitleCatalog">Available study areas on campus.</div>
            <div className="grid">{database.map(renderCard)}</div>
            <div className="copyright">Copyright © 2022 Hexabytes</div>
        </div>
        
    )
}

export default Catalog 
