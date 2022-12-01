import {useEffect, useState} from 'react'
import * as ReactDOM from "react-dom";
import { MultiSelect } from "react-multi-select-component";
import "./Review.css"
import {Card} from "react-bootstrap"
import './Box.css'


  const Review = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://rum-study-areas-backend.herokuapp.com/api/studyareas/')
        .then(response => response.json())
        .then(json => setData(json))
    }, []) 
    
    // Study Areas 
  const database = [
    {
        "name": "Review 1",
        "user": "Nyla Jones",
        "comment": "Great room! Really helped me focus.",
        "rating": "★★★★☆ "
    },
    {
        "name": "Review 2",
        "user": "Nicole López",
        "comment": "The air conditioner was not working.",
        "rating": "★★☆☆☆ "
    },
    {
        "name": "Review 3",
        "user": "Javier Román",
        "comment": "Very spacious and comfortable, but most chairs are broken.",
        "rating": "★★★☆☆ "
    },
    {
        "name": "Review 4",
        "user": "Pablo Rodríguez",
        "comment": "The room was perfect. The air conditioner was working great. Very recommended!",
        "rating": "★★★★★"
    },
]

const renderCard = (card, index) =>{
    return(
      
        <Card style={{ width: '18 rem'}} key={index} className="box">
        <Card.Body>
            <Card.Title>{card.name}</Card.Title>
            <Card.Subtitle>{card.user}</Card.Subtitle>
            <Card.Text>
                {card.comment}
            </Card.Text>
            <Card.Text>
                {card.rating}
            </Card.Text>
        </Card.Body>
    </Card>
    )
}


    return (
      <div className="background2">
      <div className="review">Reviews for S-113:</div>
      <div className="subtitleReview">Add your own.</div>
      <div className="grid">{database.map(renderCard)}</div>
      <div className="copyright3">Copyright © 2022 Hexabytes</div>
      </div>
    );
  };

  export default Review 

