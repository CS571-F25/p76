import { Container, Row, Col } from 'react-bootstrap';
import CountdownTimer from './CountdownTimer';
import EventHighlight from './EventHighlight';

export default function Home() {
  return (
    <Container>
      <Row className="text-center mb-5">
        <Col>
          <h1 className="display-3 fw-bold">BadgerFest 2025</h1>
          <p className="lead">UW-Madison's Premier Music & Arts Festival</p>
          <p className="text-muted">April 25-26, 2025 | Library Mall</p>
        </Col>
      </Row>

      <CountdownTimer />

      <Row className="mt-5">
        <Col>
          <h2 className="mb-4">Featured Events</h2>
          <EventHighlight 
            title="Main Stage Performances"
            description="Two days of incredible live music from local and national artists"
            time="12:00 PM - 10:00 PM"
          />
          <EventHighlight 
            title="Art Showcase"
            description="Featuring student artwork, installations, and interactive exhibits"
            time="10:00 AM - 8:00 PM"
          />
          <EventHighlight 
            title="Food Vendors"
            description="Local Madison favorites and food trucks throughout the venue"
            time="11:00 AM - 9:00 PM"
          />
        </Col>
      </Row>
    </Container>
  );
}
