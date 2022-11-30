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

// export default class Catalog extends React.Component {
//   state = {
//     loading: true,
//     studyareas: []
//   }

//   async componentDidMount () {
//     const url = "http://rum-study-areas-backend.herokuapp.com/api/studyareas/"
//     const response = await fetch(url)
//     const data = await response.json()

//     const {
//       name = "",
//       room_id = ""
//     } = data

//     this.setState({ name: name, room_id: room_id, loading: false})
//   }

//   render() {
//     if (this.state.loading) {
//       return <div>Loading...</div>
//     }

//     if (!this.state.name.length) {
//       return <div>No data available</div>
//     }

//     return (
//       <div>
//         <h1>Study Areas</h1>
//         {this.state.name.map((item, key) => {
//           return (
//             <div key ={key}>
//               Room ID {item.room_id}
//             </div>
//           )
//         })}
//       </div>
//     )
//   }
// }




// class Catalog extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         error: null,
//         isLoaded: false,
//         studyAreas: []
//       };
//     }
  
//     componentDidMount() {
//       fetch("http://rum-study-areas-backend.herokuapp.com/api/studyareas/?format=json")
//         .then(res => res.json())
//         .then(
//           (result) => {
//             this.setState({
//               isLoaded: true,
//               studyAreas: result.studyAreas
//             });
//           },
//           // Note: it's important to handle errors here
//           // instead of a catch() block so that we don't swallow
//           // exceptions from actual bugs in components.
//           (error) => {
//             this.setState({
//               isLoaded: true,
//               error
//             });
//           }
//         )
//     }
  
//     render() {
//       const { error, isLoaded, studyAreas } = this.state;
//       if (error) {
//         return <div>Error: {error.message}</div>;
//       } else if (!isLoaded) {
//         return <div>Loading...</div>;
//       } else {
//         return (
            
//           <div>
//             {studyAreas.map(studyAreas => (
//                 <Card style={{ width: '18rem' }} className="box">
//                     <Card.Body>
//                         <Card.Title>{studyAreas.name}</Card.Title>
//                         <Card.Subtitle className="mb-2 text-muted">{studyAreas.building}</Card.Subtitle>
//                         <Card.Text>
//                             {studyAreas.features}
//                         </Card.Text>
//                         <Card.Link href="#">Reviews</Card.Link>
//                     </Card.Body>
//                 </Card>
//             ))}
//           </div>
//         );
//       }
//     }
//   }


//   export default Catalog;
