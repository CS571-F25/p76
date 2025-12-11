import { Container, Row, Col } from 'react-bootstrap';
import CountdownTimer from './CountdownTimer';
import EventHighlight from './EventHighlight';

export default function Home() {
  return (
    <Container className="py-4">
      <Row className="mb-5">
        <Col>
          <h1 className="display-4 text-center mb-3">BadgerFest 2025</h1>
          <p className="lead text-center">UW-Madison's Premier Music & Arts Festival</p>
          <p className="text-center text-muted">April 25-26, 2025 | Library Mall</p>
        </Col>
      </Row>

      <Row className="mb-5 justify-content-center">
        <Col lg={8} xl={6}>
          <CountdownTimer />
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <h2 className="h3 mb-4">Featured Events</h2>
        </Col>
      </Row>

      <Row>
        <Col md={6} className="mb-4">
          <EventHighlight 
            title="Main Stage Performances"
            description="Two days of incredible live music from local and national artists"
            time="12:00 PM - 10:00 PM"
          />
        </Col>
        <Col md={6} className="mb-4">
          <EventHighlight 
            title="Art Showcase"
            description="Featuring student artwork, installations, and interactive exhibits"
            time="10:00 AM - 8:00 PM"
          />
        </Col>
      </Row>
    </Container>
  );
}