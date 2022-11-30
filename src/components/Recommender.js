import React, { useState } from "react";
import { MultiSelectComponent  } from '@syncfusion/ej2-react-dropdowns';
import * as ReactDOM from "react-dom";
import { MultiSelect } from "react-multi-select-component";
import "./Recommender.css"


  export default function Example() {
    const features = [
      { label: "Computer", value: "Computer" },
      { label: "Air conditioning", value: "Air conditioning" },
      { label: " Wifi", value: "Wifi"},
    ];
    const start_time = [
        { label: "Computer", value: "Computer" },
        { label: "Air conditioning", value: "Air conditioning" },
        { label: " Wifi", value: "Wifi"},
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

    return (
      <div className="background1">
        <h1 className="first">Select Features</h1>
        <MultiSelect className="selector"
          options={features}
          value={selected1}
          onChange={setSelected1}
          labelledBy="Select start timedfefde"
          isCreatable={true}
        />
        <h1>Select Time Range</h1>
        <MultiSelect className="selector"
          options={start_time}
          value={selected2}
          onChange={setSelected2}
          labelledBy="Select"
        />
        <h1>Select Location</h1>

        <MultiSelect className="selector"
          options={location}
          value={selected3}
          onChange={setSelected3}
          labelledBy="Select"
        />
      <div className="copyright1">Copyright © 2022 Hexabytes</div>
      </div>
    );
  };

