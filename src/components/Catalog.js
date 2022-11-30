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
        "features": [
            "Air Conditioner",
            "Whiteboard"
        ],
        "schedules": [
            "L, M, W, J, V, 07:00:00 - 22:00:00"
        ],
        "reviews": [],
        "completed": true
    },
    {
        "room_id": "S-113",
        "building": "Stefani",
        "features": [
            "Air Conditioner",
            "Computers",
            "Whiteboard"
        ],
        "schedules": [
            "L, M, W, J, V, 07:00:00 - 22:00:00"
        ],
        "reviews": [
            "Review ID: 38189",
            "Review ID: 37441"
        ],
        "completed": true
    },
    {
        "room_id": "S-205",
        "building": "Stefani",
        "features": [
            "Air Conditioner",
            "Computers",
            "Whiteboard"
        ],
        "schedules": [
            "L, M, W, J, V, 07:00:00 - 22:00:00"
        ],
        "reviews": [],
        "completed": true
    },
    {
        "room_id": "S-206",
        "building": "Stefani",
        "features": [
            "Air Conditioner",
            "Whiteboard",
            "Keycard Required"
        ],
        "schedules": [
            "L, M, W, J, V, 07:00:00 - 22:00:00"
        ],
        "reviews": [],
        "completed": true
    },
    {
        "room_id": "S-105D",
        "building": "Stefani",
        "features": [
            "Air Conditioner",
            "Computers",
            "Whiteboard",
            "Keycard Required"
        ],
        "schedules": [
            "L, M, W, J, V, 00:00:00 - 23:59:59"
        ],
        "reviews": [],
        "completed": true
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
        "schedules": [
            "L, M, W, J, V, 00:00:00 - 23:59:59"
        ],
        "reviews": [],
        "completed": true
    },
    {
        "room_id": "S-230",
        "building": "Stefani",
        "features": [
            "Air Conditioner",
            "Whiteboard"
        ],
        "schedules": [
            "L, M, W, J, V, 07:00:00 - 22:00:00"
        ],
        "reviews": [],
        "completed": true
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
        "schedules": [
            "L, M, W, J, V, 00:00:00 - 23:59:59"
        ],
        "reviews": [],
        "completed": true
    },
    {
        "room_id": "S-308",
        "building": "Stefani",
        "features": [
            "Air Conditioner",
            "Computers",
            "Whiteboard"
        ],
        "schedules": [
            "L, M, W, J, V, 07:00:00 - 22:00:00"
        ],
        "reviews": [],
        "completed": true
    },
    {
        "room_id": "S-307",
        "building": "Stefani",
        "features": [
            "Air Conditioner",
            "Computers",
            "Whiteboard"
        ],
        "schedules": [
            "L, M, W, J, V, 07:00:00 - 22:00:00"
        ],
        "reviews": [],
        "completed": true
    },
    {
        "room_id": "S-306",
        "building": "Stefani",
        "features": [
            "Air Conditioner",
            "Whiteboard"
        ],
        "schedules": [
            "L, M, W, J, V, 07:00:00 - 22:00:00"
        ],
        "reviews": [],
        "completed": true
    },
    {
        "room_id": "IQ-105E",
        "building": "Quimica",
        "features": [
            "Air Conditioner",
            "Whiteboard",
            "Keycard Required"
        ],
        "schedules": [
            "L, M, W, J, V, 07:00:00 - 22:00:00"
        ],
        "reviews": [],
        "completed": true
    },
    {
        "room_id": "IQ-106",
        "building": "Quimica",
        "features": [
            "Air Conditioner",
            "Whiteboard"
        ],
        "schedules": [
            "L, M, W, J, V, 07:00:00 - 22:00:00"
        ],
        "reviews": [],
        "completed": true
    },
    {
        "room_id": "IQ-105",
        "building": "Quimica",
        "features": [
            "Air Conditioner",
            "Computers",
            "Whiteboard"
        ],
        "schedules": [
            "L, M, W, J, V, 07:00:00 - 22:00:00"
        ],
        "reviews": [],
        "completed": true
    },
    {
        "room_id": "L-230",
        "building": "Luchetti",
        "features": [
            "Air Conditioner",
            "Whiteboard",
            "Keycard Required"
        ],
        "schedules": [
            "L, M, W, J, V, 07:00:00 - 22:00:00"
        ],
        "reviews": [],
        "completed": true
    },
    {
        "room_id": "L-242",
        "building": "Luchetti",
        "features": [
            "Air Conditioner",
            "Whiteboard",
            "Keycard Required"
        ],
        "schedules": [
            "L, M, W, J, V, 07:00:00 - 22:00:00"
        ],
        "reviews": [],
        "completed": true
    },
    {
        "room_id": "L-243",
        "building": "Luchetti",
        "features": [
            "Air Conditioner",
            "Computers",
            "Whiteboard",
            "Keycard Required"
        ],
        "schedules": [
            "L, M, W, J, V, 07:00:00 - 22:00:00"
        ],
        "reviews": [],
        "completed": true
    },
    {
        "room_id": "L-120",
        "building": "Luchetti",
        "features": [
            "Air Conditioner",
            "Computers",
            "Whiteboard"
        ],
        "schedules": [
            "L, M, W, J, V, 07:00:00 - 22:00:00"
        ],
        "reviews": [],
        "completed": true
    },
    {
        "room_id": "L-236A",
        "building": "Luchetti",
        "features": [
            "Air Conditioner",
            "Whiteboard",
            "Keycard Required"
        ],
        "schedules": [
            "L, M, W, J, V, 07:00:00 - 22:00:00"
        ],
        "reviews": [],
        "completed": true
    },
    {
        "room_id": "L-121",
        "building": "Luchetti",
        "features": [
            "Air Conditioner",
            "Whiteboard",
            "Keycard Required"
        ],
        "schedules": [
            "L, M, W, J, V, 07:00:00 - 22:00:00"
        ],
        "reviews": [],
        "completed": true
    },
    {
        "room_id": "CI-110",
        "building": "Civil",
        "features": [
            "Air Conditioner",
            "Whiteboard",
            "Keycard Required"
        ],
        "schedules": [
            "L, M, W, J, V, 07:00:00 - 22:00:00"
        ],
        "reviews": [],
        "completed": true
    },
    {
        "room_id": "CI-111",
        "building": "Civil",
        "features": [
            "Air Conditioner",
            "Whiteboard",
            "Keycard Required"
        ],
        "schedules": [
            "L, M, W, J, V, 07:00:00 - 22:00:00"
        ],
        "reviews": [],
        "completed": true
    },
    {
        "room_id": "CI-112",
        "building": "Civil",
        "features": [
            "Air Conditioner",
            "Computers",
            "Whiteboard",
            "Keycard Required"
        ],
        "schedules": [
            "L, M, W, J, V, 07:00:00 - 22:00:00"
        ],
        "reviews": [],
        "completed": true
    },
    {
        "room_id": "CI-108",
        "building": "Civil",
        "features": [
            "Air Conditioner",
            "Whiteboard",
            "Keycard Required"
        ],
        "schedules": [
            "L, M, W, J, V, 07:00:00 - 22:00:00"
        ],
        "reviews": [],
        "completed": true
    },
    {
        "room_id": "B-180",
        "building": "Biologia",
        "features": [
            "Air Conditioner",
            "Whiteboard",
            "Keycard Required"
        ],
        "schedules": [
            "L, W, 11:00:00 - 19:00:00",
            "V, 10:00:00 - 17:00:00"
        ],
        "reviews": [],
        "completed": true
    },
    {
        "room_id": "B-182",
        "building": "Biologia",
        "features": [
            "Air Conditioner",
            "Whiteboard",
            "Keycard Required"
        ],
        "schedules": [
            "V, 09:00:00 - 17:00:00"
        ],
        "reviews": [],
        "completed": true
    },
    {
        "room_id": "B-184",
        "building": "Biologia",
        "features": [
            "Air Conditioner",
            "Whiteboard",
            "Keycard Required"
        ],
        "schedules": [
            "M, J, 19:00:00 - 22:00:00"
        ],
        "reviews": [],
        "completed": true
    },
    {
        "room_id": "B-242A",
        "building": "Biologia",
        "features": [
            "Air Conditioner",
            "Computers",
            "Whiteboard",
            "Keycard Required"
        ],
        "schedules": [],
        "reviews": [],
        "completed": true
    },
    {
        "room_id": "CH-126",
        "building": "Chardon",
        "features": [
            "Whiteboard",
            "Keycard Required"
        ],
        "schedules": [
            "L, W, V, 18:00:00 - 22:00:00",
            "M, J, 18:30:00 - 22:00:00"
        ],
        "reviews": [],
        "completed": true
    },
    {
        "room_id": "CH-230",
        "building": "Chardon",
        "features": [
            "Air Conditioner",
            "Whiteboard"
        ],
        "schedules": [
            "M, J, 19:00:00 - 22:00:00",
            "L, W, V, 15:00:00 - 22:00:00"
        ],
        "reviews": [],
        "completed": true
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
