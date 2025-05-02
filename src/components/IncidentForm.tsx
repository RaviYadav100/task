import React, { useState } from 'react';
import { Incident } from '../data/incidents';

interface Props {
  onAddIncident: (incident: Incident) => void;
  nextId: number;
}

const IncidentForm: React.FC<Props> = ({ onAddIncident, nextId }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState<'Low' | 'Medium' | 'High'>('Low');

  const handleSubmit = () => {
    if (!title.trim() || !description.trim()) {
      alert('Please fill in all fields.');
      return;
    }

    const newIncident: Incident = {
      id: nextId,
      title,
      description,
      severity,
      reported_at: new Date().toISOString(),
    };

    onAddIncident(newIncident);

    setTitle('');
    setDescription('');
    setSeverity('Low');
  };

  return (
    <div className="form">
      <h2>Report New Incident</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <div>
        Severity:
        <label><input type="radio" value="Low" checked={severity === 'Low'} onChange={(e) => setSeverity(e.target.value as any)} /> Low</label>
        <label><input type="radio" value="Medium" checked={severity === 'Medium'} onChange={(e) => setSeverity(e.target.value as any)} /> Medium</label>
        <label><input type="radio" value="High" checked={severity === 'High'} onChange={(e) => setSeverity(e.target.value as any)} /> High</label>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default IncidentForm;
