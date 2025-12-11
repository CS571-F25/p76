import { Card, Button, Modal, Badge } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function ArtistCard({ name, genre, time, stage, isLive }) {
  const [starred, setStarred] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('starredArtists');
    if (stored) {
      try {
        const starredArtists = JSON.parse(stored);
        setStarred(starredArtists.some(a => a.name === name));
      } catch (error) {
        console.error('Error loading starred state:', error);
      }
    }
  }, [name]); 

  const handleStar = (e) => {
    e.stopPropagation();
    
    const stored = localStorage.getItem('starredArtists');
    let starredArtists = stored ? JSON.parse(stored) : [];
    
    if (starred) {
      starredArtists = starredArtists.filter(a => a.name !== name);
    } else {
      starredArtists.push({ name, genre, time, stage });
    }
    
    localStorage.setItem('starredArtists', JSON.stringify(starredArtists));
    setStarred(!starred);
  };

  const getArtistDescription = (artistName) => {
    const descriptions = {
      "The Madison Sound": "A local favorite bringing indie rock vibes straight from the heart of Madison. Known for their energetic live performances and catchy hooks.",
      "DJ Badger Beats": "This electronic maestro will transform the Side Stage into a pulsing dance paradise with cutting-edge beats.",
      "Campus Collective": "Madison's premier hip hop crew delivers conscious lyrics and infectious beats.",
      "Acoustic Duo": "An intimate folk experience featuring beautiful harmonies and storytelling that touches the soul.",
      "Jazz Ensemble": "Sophisticated improvisational jazz that blends classic and modern styles.",
      "Rock Revival": "Closing out the festival with pure rock energy! The perfect grand finale."
    };
    
    return descriptions[artistName] || `Experience the incredible sounds of ${artistName} at BadgerFest 2025!`;
  };

  return (
    <>
      <Card 
        className="h-100" 
        onClick={() => setShowModal(true)}
        style={{ cursor: 'pointer' }}
      >
        <Card.Body>
          <div className="d-flex justify-content-between align-items-start mb-2">
            <Card.Title className="mb-0">
              {name}
              {isLive && (
                <Badge bg="danger" className="ms-2">
                  🔴 LIVE
                </Badge>
              )}
            </Card.Title>
            <Button 
              variant={starred ? "warning" : "outline-secondary"}
              size="sm"
              onClick={handleStar}
              aria-label={starred ? `Remove ${name} from schedule` : `Add ${name} to schedule`}
              aria-pressed={starred}
              className="ms-2"
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
          <small className="text-muted">
            <em>Click for details</em>
          </small>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {name}
            {isLive && <Badge bg="danger" className="ms-2">🔴 LIVE</Badge>}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Badge bg="secondary" className="mb-3">{genre}</Badge>
          
          <div className="mb-3">
            <p className="mb-1"><strong>📅 When:</strong> {time}</p>
            <p className="mb-1"><strong>📍 Where:</strong> {stage}</p>
          </div>

          <div className="mb-3">
            <h6 className="fw-bold">About</h6>
            <p className="text-muted mb-0">{getArtistDescription(name)}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button 
            variant={starred ? "warning" : "primary"}
            onClick={handleStar}
          >
            {starred ? "⭐ Remove" : "☆ Add to Schedule"}
          </Button>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}