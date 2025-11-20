import { Card } from 'react-bootstrap';

export default function EventHighlight({ title, description, time }) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>
          <small className="text-muted">🕐 {time}</small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
