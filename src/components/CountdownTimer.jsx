import { useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const eventDate = new Date('2025-04-25T12:00:00');
    
    const calculateTimeLeft = () => {
      const difference = eventDate - new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Card className="text-center bg-dark text-white">
      <Card.Body>
        <Card.Title className="mb-4">Event Starts In:</Card.Title>
        <Row>
          <Col xs={3}>
            <div className="display-4 fw-bold">{timeLeft.days}</div>
            <div className="text-muted">Days</div>
          </Col>
          <Col xs={3}>
            <div className="display-4 fw-bold">{timeLeft.hours}</div>
            <div className="text-muted">Hours</div>
          </Col>
          <Col xs={3}>
            <div className="display-4 fw-bold">{timeLeft.minutes}</div>
            <div className="text-muted">Minutes</div>
          </Col>
          <Col xs={3}>
            <div className="display-4 fw-bold">{timeLeft.seconds}</div>
            <div className="text-muted">Seconds</div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
