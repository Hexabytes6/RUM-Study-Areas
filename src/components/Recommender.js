import React, { useState } from "react";
import { MultiSelectComponent  } from '@syncfusion/ej2-react-dropdowns';
import * as ReactDOM from "react-dom";
import { MultiSelect } from "react-multi-select-component";
import "./Recommender.css"
import { Link } from 'react-router-dom'


  export default function Example() {
    const features = [
      { label: "Computer", value: "Computer" },
      { label: "Air conditioning", value: "Air conditioning" },
      { label: "Whiteboard", value: "Whiteboard"},
      { label: "Keycard Required", value: "Keycard Required"},
    ];
    const start_time = [
        { label: "00:00:00", value: "00:00:00" },
        { label: "01:00:00", value: "01:00:00" },
        { label: "02:00:00", value: "02:00:00" },
        { label: "03:00:00", value: "03:00:00" },
        { label: "04:00:00", value: "04:00:00" },
        { label: "05:00:00", value: "05:00:00" },
        { label: "06:00:00", value: "07:00:00" },
        { label: "07:00:00", value: "07:00:00" },
        { label: "08:00:00", value: "08:00:00" },
        { label: "09:00:00", value: "09:00:00" },
        { label: "10:00:00", value: "10:00:00" },
        { label: "11:00:00", value: "10:00:00" },
        { label: "12:00:00", value: "10:00:00" },
        { label: "13:00:00", value: "10:00:00" },
        { label: "14:00:00", value: "10:00:00" },
        { label: "15:00:00", value: "10:00:00" },
        { label: "16:00:00", value: "10:00:00" },
        { label: "17:00:00", value: "10:00:00" },
        { label: "18:00:00", value: "10:00:00" },
        { label: "19:00:00", value: "10:00:00" },
        { label: "20:00:00", value: "20:00:00" },
        { label: "21:00:00", value: "21:00:00" },
        { label: "22:00:00", value: "22:00:00" },
        { label: "23:00:00", value: "23:00:00" },
        { label: "24:00:00", value: "24:00:00" },
      ];
    const location = [
        { label: "Stefani", value: "Stefani" },
        { label: "Ingeniería Industrial", value: "Ingeniería Industrial" },
        { label: "Luchetti", value: "Luchetti"},
        { label: "Chardon", value: "Chardon"},
        { label: "Piñero", value: "Piñero"},
        { label: "Química", value: "Química"},
        { label: "Monzón", value: "Monzón"},
        { label: "Celis", value: "Celis"},
        { label: "Sánchez Hidalgo", value: "Sánchez Hidalgo"},
        { label: "Administración de Empresas", value: "Administración de Empresas"},
        { label: "Biología", value: "biología"},
        { label: "Coliseo Mangual", value: "Coliseo Mangual"},
        { label: "Ingeniería Civil", value: "Ingeniería Civil" },
        { label: "Gimnasio Espada", value: "Gimnasio Espada" },
        { label: "Física, Geología y Ciencias Marinas", value: "Física, Geología y Ciencias Marinas" },
        { label: "Finca Alzamora", value: "Finca Alzamora" },
        { label: "Finanzas y Pagaduría", value: "Finanzas y Pagaduría" },
        { label: "Enfermería", value: "Enfermería" },
        
      ];

    const [selected1, setSelected1] = useState([]);
    const [selected2, setSelected2] = useState([]);
    const [selected3, setSelected3] = useState([]);
    const [selected4, setSelected4] = useState([]);

    return (
      <div className="background1">
      <div className="titleRecommend">Recommender</div>
        <h3 className="first">Select Features</h3>
        <MultiSelect className="selector"
          options={features}
          value={selected1}
          onChange={setSelected1}
          labelledBy="Select start timedfefde"
          isCreatable={true}
        />
        <h3>Select Start Time</h3>
        <MultiSelect className="selector"
          options={start_time}
          value={selected2}
          onChange={setSelected2}
          labelledBy="Select"
        />
          <h3>Select End Time</h3>
          <MultiSelect className="selector"
          options={start_time}
          value={selected4}
          onChange={setSelected4}
          labelledBy="Select"
        />
        <h3>Select Location</h3>

        <MultiSelect className="selector"
          options={location}
          value={selected3}
          onChange={setSelected3}
          labelledBy="Select"
        />
        <div className="button-container3" >
        <button-container3> <Link to="/recommendations" className='button-container3'>Submit</Link></button-container3>
        </div>
      <div className="copyright1">Copyright © 2022 Hexabytes</div>
      </div>
    );
  };

