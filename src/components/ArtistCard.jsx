import { Card, Button } from 'react-bootstrap';
import { useState } from 'react';

export default function ArtistCard({ name, genre, time, stage }) {
  const [starred, setStarred] = useState(false);

  const handleStar = () => {
    setStarred(!starred);
    // Later we can add local storage here
  };

  return (
    <Card className="h-100">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-start mb-2">
          <Card.Title>{name}</Card.Title>
          <Button 
            variant={starred ? "warning" : "outline-secondary"}
            size="sm"
            onClick={handleStar}
          >
            {starred ? "★" : "☆"}
          </Button>
        </div>
        <Card.Subtitle className="mb-2 text-muted">{genre}</Card.Subtitle>
        <Card.Text>
          <small>
            🕐 {time}<br />
            📍 {stage}
          </small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
