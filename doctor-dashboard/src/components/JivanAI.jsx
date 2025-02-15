import React, { useState } from "react";

const JivanAISymptomForm = ({ onPredict }) => {
  const [formData, setFormData] = useState({
    temperature: "",
    bloodPressure: "",
    sugarLevel: "",
    heartRate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPredict(formData);
  };

  return (
    <div>
      <h2>JivanAI Disease Prediction</h2>
      <form onSubmit={handleSubmit}>
        <input type="number" name="temperature" placeholder="Temperature (°C)" value={formData.temperature} onChange={handleChange} required />
        <input type="number" name="bloodPressure" placeholder="Blood Pressure (mmHg)" value={formData.bloodPressure} onChange={handleChange} required />
        <input type="number" name="sugarLevel" placeholder="Sugar Level (mg/dL)" value={formData.sugarLevel} onChange={handleChange} required />
        <input type="number" name="heartRate" placeholder="Heart Rate (bpm)" value={formData.heartRate} onChange={handleChange} required />
        <button type="submit">Predict</button>
      </form>
    </div>
  );
};

export default JivanAISymptomForm;
