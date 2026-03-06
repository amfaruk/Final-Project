"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { sectors } from "@/config/sectors";

export default function SectorForm() {
  const { sector } = useParams();
  const config = sectors[sector as keyof typeof sectors];

  const [formData, setFormData] = useState<any>({});
  const [coordinates, setCoordinates] = useState<any[]>([]);

  if (!config) return <div>Invalid sector</div>;

  const handleChange = (name: string, value: any) => {
    setFormData({ ...formData, [name]: value });
  };

  const addPoint = () => {
    console.log('addPoint clicked');
    setCoordinates([...coordinates, [0, 0]]);
  };

  const updatePoint = (i: number, lng: string, lat: string) => {
    const newCoords = [...coordinates];
    newCoords[i] = [parseFloat(lng), parseFloat(lat)];
    setCoordinates(newCoords);
  };

  const handleSubmit = async () => {
    console.log('submit clicked', { formData, coordinates });
    const data = {
      sector,
      properties: formData,
      geom: {
        type: config.geometry,
        coordinates:
          config.geometry === "Point"
            ? coordinates[0]
            : coordinates,
      },
      userId: 1,
    };

    // send to new submissions endpoint which will store and run collision check
    const res = await fetch("/api/submissions", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data),
    });

    const json = await res.json();
    console.log("submission response", json);
    if (json.hasCollision) {
      alert("Submission recorded – potential collision detected, manager will review.");
    } else {
      alert("Submission recorded – no collision found.");
    }
  };

  return (
    <div>
      <h1>{sector} Submission</h1>

      {/* Dynamic fields */}
      {config.fields.map((field) => (
        <input
          key={field.name}
          placeholder={field.label}
          onChange={(e) => handleChange(field.name, e.target.value)}
        />
      ))}

      {/* Geometry */}
      <h3>Coordinates</h3>

      {coordinates.map((coord, i) => (
        <div key={i}>
          <input
            placeholder="Lng"
            onChange={(e) => updatePoint(i, e.target.value, coord[1])}
          />
          <input
            placeholder="Lat"
            onChange={(e) => updatePoint(i, coord[0], e.target.value)}
          />
        </div>
      ))}

      <button onClick={addPoint} style={{ cursor: 'pointer' }}>Add Coordinate</button>
      <button onClick={handleSubmit} style={{ cursor: 'pointer', marginLeft: 8 }}>Submit</button>
    </div>
  );
}