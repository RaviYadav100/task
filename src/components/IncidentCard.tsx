import React from 'react';
import { Incident } from '../data/incidents';

interface Props {
  incident: Incident;
  isExpanded: boolean;
  toggleDetails: (id: number) => void;
  onDelete: (id: number) => void;
}

const IncidentCard: React.FC<Props> = ({ incident, isExpanded, toggleDetails, onDelete }) => {
  return (
    <div className="incident-card">
      <strong>{incident.title}</strong>
      <div>Severity: {incident.severity}</div>
      <div>Reported: {incident.reported_at.slice(0, 10)}</div>
      <button onClick={() => toggleDetails(incident.id)}>
        {isExpanded ? 'Hide Details' : 'View Details'}
      </button>
      <button className="delete-button" onClick={() => onDelete(incident.id)}>
        Delete
      </button>
      {isExpanded && <p>{incident.description}</p>}
    </div>
  );
};

export default IncidentCard;
