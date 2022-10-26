import {useEffect, useState} from 'react'
import Classroom from './Classroom'
import './Catalog.css'

const Catalog = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/api/classrooms')
        .then(response => response.json())
        .then(json => setData(json))
    }, [])
    return (
        <div>
            <h1 className="title">Catalog</h1>
            <div className="classrooms">
                {data.map((classroom) => (
                    <Classroom code={classroom.code} building={classroom.building} image={classroom.img}/>
                ))}
            </div>
        </div>
    )
}

export default Catalog
