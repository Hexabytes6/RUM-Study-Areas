import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";

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


const Example = () => {
  const [selected, setSelected] = useState([]);

  return (
    <div>
      <h1>Select Features</h1>
      <pre>{JSON.stringify(selected)}</pre>
      <MultiSelect
        options={features}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
      <h1>Select Time Range</h1>
      <h2>{JSON.stringify(selected)}</h2>
      <MultiSelect
        options={start_time}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
      <h1>Select Location</h1>
      <pre>{JSON.stringify(selected)}</pre>
      <MultiSelect
        options={location}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
    </div>
  );
};

export default Example;