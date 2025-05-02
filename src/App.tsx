import React, { useState } from 'react';
import { Incident, initialIncidents } from './data/incidents';
import IncidentList from './components/IncidentList';
import FilterSortControls from './components/FilterSortControls';
import IncidentForm from './components/IncidentForm';
import './App.css';

const App: React.FC = () => {
  const [incidents, setIncidents] = useState<Incident[]>(initialIncidents);
  const [filter, setFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('Newest');
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set());

  const toggleDetails = (id: number) => {
    const newExpandedIds = new Set(expandedIds);
    if (expandedIds.has(id)) {
      newExpandedIds.delete(id);
    } else {
      newExpandedIds.add(id);
    }
    setExpandedIds(newExpandedIds);
  };

  const handleAddIncident = (incident: Incident) => {
    setIncidents([incident, ...incidents]);
  };

  const handleDeleteIncident = (id: number) => {
    const updatedIncidents = incidents.filter(incident => incident.id !== id);
    setIncidents(updatedIncidents);

    // Also close expanded view if it was open
    const newExpandedIds = new Set(expandedIds);
    newExpandedIds.delete(id);
    setExpandedIds(newExpandedIds);
  };

  const filteredIncidents = incidents
    .filter((incident) => (filter === 'All' ? true : incident.severity === filter))
    .sort((a, b) => {
      if (sortOrder === 'Newest') {
        return new Date(b.reported_at).getTime() - new Date(a.reported_at).getTime();
      } else {
        return new Date(a.reported_at).getTime() - new Date(b.reported_at).getTime();
      }
    });

  return (
    <>
      <nav>
      <h1>AI Safety Incident Dashboard</h1>
      </nav>
    <div className="container">
      <FilterSortControls
        filter={filter}
        sortOrder={sortOrder}
        onFilterChange={setFilter}
        onSortChange={setSortOrder}
      />
      <IncidentList
        incidents={filteredIncidents}
        expandedIds={expandedIds}
        toggleDetails={toggleDetails}
        onDelete={handleDeleteIncident}
      />
      <IncidentForm onAddIncident={handleAddIncident} nextId={incidents.length + 1} />
    </div>
    </>
  );
};

export default App;
