import { useState } from 'react';
import { Card, Badge } from 'react-bootstrap';

export default function StageMap() {
  const [selectedStage, setSelectedStage] = useState(null);
  
  const stages = {
    main: { name: "Main Stage", artists: 3, color: "#0d6efd" },
    side: { name: "Side Stage", artists: 2, color: "#198754" },
    acoustic: { name: "Acoustic Stage", artists: 1, color: "#ffc107" }
  };

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title>Festival Map</Card.Title>
        <svg viewBox="0 0 600 400" className="w-100" role="img" aria-label="Interactive festival venue map">
          {/* Main Stage */}
          <rect 
            x="200" y="50" width="200" height="100" 
            fill={selectedStage === 'main' ? stages.main.color : '#e9ecef'}
            stroke="#495057" strokeWidth="3"
            onClick={() => setSelectedStage('main')}
            style={{ cursor: 'pointer' }}
            role="button"
            aria-label="Main Stage - Click for details"
            tabIndex="0"
          />
          <text x="300" y="105" textAnchor="middle" fontSize="20" fontWeight="bold">
            Main Stage
          </text>
          
          {/* Side Stage */}
          <rect 
            x="50" y="200" width="150" height="80" 
            fill={selectedStage === 'side' ? stages.side.color : '#e9ecef'}
            stroke="#495057" strokeWidth="3"
            onClick={() => setSelectedStage('side')}
            style={{ cursor: 'pointer' }}
            role="button"
            aria-label="Side Stage - Click for details"
            tabIndex="0"
          />
          <text x="125" y="245" textAnchor="middle" fontSize="18" fontWeight="bold">
            Side Stage
          </text>
          
          {/* Acoustic Stage */}
          <rect 
            x="400" y="200" width="150" height="80" 
            fill={selectedStage === 'acoustic' ? stages.acoustic.color : '#e9ecef'}
            stroke="#495057" strokeWidth="3"
            onClick={() => setSelectedStage('acoustic')}
            style={{ cursor: 'pointer' }}
            role="button"
            aria-label="Acoustic Stage - Click for details"
            tabIndex="0"
          />
          <text x="475" y="245" textAnchor="middle" fontSize="16" fontWeight="bold">
            Acoustic Stage
          </text>
          
          {/* Entry */}
          <circle cx="300" cy="350" r="30" fill="#6c757d" />
          <text x="300" y="355" textAnchor="middle" fill="white" fontSize="14">
            Entry
          </text>
        </svg>
        
        {selectedStage && (
          <div className="mt-3">
            <Badge bg="primary">{stages[selectedStage].name}</Badge>
            <p className="mt-2 mb-0">
              {stages[selectedStage].artists} artists performing here
            </p>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}