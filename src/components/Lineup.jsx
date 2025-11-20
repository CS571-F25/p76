import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import ArtistCard from './ArtistCard';

export default function Lineup() {
  const artists = [
    {
      name: "The Madison Sound",
      genre: "Indie Rock",
      time: "Friday 8:00 PM",
      stage: "Main Stage"
    },
    {
      name: "DJ Badger Beats",
      genre: "Electronic",
      time: "Friday 6:00 PM",
      stage: "Side Stage"
    },
    {
      name: "Campus Collective",
      genre: "Hip Hop",
      time: "Saturday 7:00 PM",
      stage: "Main Stage"
    },
    {
      name: "Acoustic Duo",
      genre: "Folk",
      time: "Saturday 3:00 PM",
      stage: "Acoustic Stage"
    },
    {
      name: "Jazz Ensemble",
      genre: "Jazz",
      time: "Friday 4:00 PM",
      stage: "Side Stage"
    },
    {
      name: "Rock Revival",
      genre: "Classic Rock",
      time: "Saturday 9:00 PM",
      stage: "Main Stage"
    }
  ];

  return (
    <Container>
      <Row className="mb-4">
        <Col>
          <h1 className="display-4">Artist Lineup</h1>
          <p className="lead">Check out our amazing performers for BadgerFest 2025</p>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <div className="d-flex gap-2 flex-wrap">
            <Badge bg="primary">All Stages</Badge>
            <Badge bg="secondary">Main Stage</Badge>
            <Badge bg="success">Side Stage</Badge>
            <Badge bg="info">Acoustic Stage</Badge>
          </div>
        </Col>
      </Row>

      <Row>
        {artists.map((artist, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <ArtistCard {...artist} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
