import React from 'react';
import { Incident } from '../data/incidents';
import IncidentCard from './IncidentCard';

interface Props {
  incidents: Incident[];
  expandedIds: Set<number>;
  toggleDetails: (id: number) => void;
  onDelete: (id: number) => void;
}

const IncidentList: React.FC<Props> = ({ incidents, expandedIds, toggleDetails, onDelete }) => {
  return (
    <div className="incident-list">
      {incidents.map((incident) => (
        <IncidentCard
          key={incident.id}
          incident={incident}
          isExpanded={expandedIds.has(incident.id)}
          toggleDetails={toggleDetails}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default IncidentList;
