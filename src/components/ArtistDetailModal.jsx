// ArtistDetailModal.jsx - 14th component
import { Modal, Button, Badge } from 'react-bootstrap';

export default function ArtistDetailModal({ artist, show, onHide }) {
  if (!artist) return null;

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>{artist.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Badge bg="secondary" className="mb-3">{artist.genre}</Badge>
        <p><strong>Performance Time:</strong> {artist.time}</p>
        <p><strong>Stage:</strong> {artist.stage}</p>
        <p className="text-muted">
          {artist.name} brings an electrifying {artist.genre.toLowerCase()} experience 
          that will have you dancing all night! Don't miss this incredible performance.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}