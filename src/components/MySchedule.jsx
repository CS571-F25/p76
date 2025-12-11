import { Container, Row, Col, Card, Button, Alert, Badge } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import ConflictAlert from './ConflictAlert';

function ScheduleStats({ artists }) {
  if (artists.length === 0) return null;

  const genreCounts = artists.reduce((acc, artist) => {
    acc[artist.genre] = (acc[artist.genre] || 0) + 1;
    return acc;
  }, {});

  const fridayCount = artists.filter(a => a.time.includes('Friday')).length;
  const saturdayCount = artists.filter(a => a.time.includes('Saturday')).length;
  const favoriteGenre = Object.entries(genreCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'N/A';
  const totalHours = artists.length;

  return (
    <Card className="mb-4 bg-light">
      <Card.Body>
        <h3 className="h5">📊 Your Festival Stats</h3>
        <Row>
          <Col sm={6} md={3} className="mb-2">
            <div className="text-center">
              <div className="display-6 fw-bold text-primary">{fridayCount}</div>
              <small className="text-muted">Friday Shows</small>
            </div>
          </Col>
          <Col sm={6} md={3} className="mb-2">
            <div className="text-center">
              <div className="display-6 fw-bold text-success">{saturdayCount}</div>
              <small className="text-muted">Saturday Shows</small>
            </div>
          </Col>
          <Col sm={6} md={3} className="mb-2">
            <div className="text-center">
              <div className="display-6 fw-bold text-warning">{totalHours}</div>
              <small className="text-muted">Total Hours</small>
            </div>
          </Col>
          <Col sm={6} md={3} className="mb-2">
            <div className="text-center">
              <Badge bg="info" className="p-2 w-100">
                <div className="fw-bold">{favoriteGenre}</div>
                <small>Top Genre</small>
              </Badge>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default function MySchedule() {
  const [starredArtists, setStarredArtists] = useState([]);
  const [conflicts, setConflicts] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('starredArtists');
    if (stored) {
      try {
        const artists = JSON.parse(stored);
        setStarredArtists(artists);
        detectConflicts(artists);
      } catch (error) {
        console.error('Error loading starred artists:', error);
      }
    }
  }, []);

  const detectConflicts = (artists) => {
    const foundConflicts = [];
    
    for (let i = 0; i < artists.length; i++) {
      for (let j = i + 1; j < artists.length; j++) {
        if (artists[i].time === artists[j].time) {
          foundConflicts.push({
            artist1: artists[i].name,
            artist2: artists[j].name,
            time: artists[i].time
          });
        }
      }
    }
    
    setConflicts(foundConflicts);
  };

  const removeFromSchedule = (artistName) => {
    const updated = starredArtists.filter(a => a.name !== artistName);
    setStarredArtists(updated);
    localStorage.setItem('starredArtists', JSON.stringify(updated));
    detectConflicts(updated);
  };

  const clearSchedule = () => {
    if (window.confirm('Are you sure you want to clear your entire schedule?')) {
      setStarredArtists([]);
      setConflicts([]);
      localStorage.removeItem('starredArtists');
    }
  };

  const exportToCalendar = () => {
    let icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//BadgerFest 2025//EN
CALNAME:BadgerFest 2025 Schedule
`;

    starredArtists.forEach(artist => {
      const [day, time] = artist.time.split(' ');
      const date = day === 'Friday' ? '20250425' : '20250426';
      
      const [hourMin, period] = time.split(' ');
      const [hour, min] = hourMin.split(':');
      let hourInt = parseInt(hour);
      
      if (period === 'PM' && hourInt !== 12) {
        hourInt += 12;
      } else if (period === 'AM' && hourInt === 12) {
        hourInt = 0;
      }
      
      const startTime = `${hourInt.toString().padStart(2, '0')}${min}00`;
      const endHour = (hourInt + 1) % 24;
      const endTime = `${endHour.toString().padStart(2, '0')}${min}00`;
      
      icsContent += `BEGIN:VEVENT
UID:${artist.name.replace(/\s/g, '-')}-${date}@badgerfest2025.com
DTSTAMP:20250101T000000Z
DTSTART:${date}T${startTime}
DTEND:${date}T${endTime}
SUMMARY:${artist.name} - ${artist.genre}
LOCATION:${artist.stage}, Library Mall
DESCRIPTION:${artist.genre} performance at BadgerFest 2025
END:VEVENT
`;
    });

    icsContent += 'END:VCALENDAR';

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'badgerfest-schedule.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const fridayArtists = starredArtists.filter(a => a.time.includes('Friday'));
  const saturdayArtists = starredArtists.filter(a => a.time.includes('Saturday'));

  return (
    <Container className="py-4">
      <Row className="mb-4">
        <Col>
          <h1 className="display-4">My Schedule</h1>
          <p className="lead">Your personalized BadgerFest 2025 lineup</p>
        </Col>
      </Row>

      <ConflictAlert conflicts={conflicts} />

      {starredArtists.length === 0 ? (
        <Alert variant="info">
          <Alert.Heading>📅 No artists in your schedule yet</Alert.Heading>
          <p>
            Visit the <a href="#/lineup" className="alert-link">Lineup page</a> and 
            click the star button on artists you want to see!
          </p>
        </Alert>
      ) : (
        <>
          <ScheduleStats artists={starredArtists} />

          <Row className="mb-4">
            <Col className="d-flex justify-content-between align-items-center flex-wrap gap-2">
              <h2 className="h4 mb-0">🎵 {starredArtists.length} Artists Selected</h2>
              <div className="d-flex gap-2">
                <Button 
                  variant="success" 
                  size="sm"
                  onClick={exportToCalendar}
                  aria-label="Export schedule to calendar file"
                >
                  📅 Export to Calendar
                </Button>
                <Button 
                  variant="outline-danger" 
                  size="sm"
                  onClick={clearSchedule}
                  aria-label="Clear entire schedule"
                >
                  🗑️ Clear Schedule
                </Button>
              </div>
            </Col>
          </Row>

          <h3 className="h4 mb-3 mt-4">
            <Badge bg="primary" className="me-2">Friday, April 25</Badge>
            {fridayArtists.length > 0 && (
              <small className="text-muted">({fridayArtists.length} shows)</small>
            )}
          </h3>
          <Row className="mb-4">
            {fridayArtists.length === 0 ? (
              <Col>
                <Alert variant="secondary" className="mb-0">
                  <small>No artists selected for Friday</small>
                </Alert>
              </Col>
            ) : (
              fridayArtists.map((artist, index) => (
                <Col md={6} lg={4} key={index} className="mb-3">
                  <Card className="h-100">
                    <Card.Body>
                      <Card.Title className="d-flex justify-content-between align-items-start">
                        <span>{artist.name}</span>
                        <Badge bg="warning" className="ms-2">⭐</Badge>
                      </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {artist.genre}
                      </Card.Subtitle>
                      <Card.Text>
                        <small>
                          🕐 <strong>{artist.time}</strong><br />
                          📍 {artist.stage}
                        </small>
                      </Card.Text>
                      <Button 
                        variant="outline-danger" 
                        size="sm"
                        onClick={() => removeFromSchedule(artist.name)}
                        aria-label={`Remove ${artist.name} from schedule`}
                      >
                        Remove
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            )}
          </Row>

          <h3 className="h4 mb-3 mt-4">
            <Badge bg="success" className="me-2">Saturday, April 26</Badge>
            {saturdayArtists.length > 0 && (
              <small className="text-muted">({saturdayArtists.length} shows)</small>
            )}
          </h3>
          <Row>
            {saturdayArtists.length === 0 ? (
              <Col>
                <Alert variant="secondary" className="mb-0">
                  <small>No artists selected for Saturday</small>
                </Alert>
              </Col>
            ) : (
              saturdayArtists.map((artist, index) => (
                <Col md={6} lg={4} key={index} className="mb-3">
                  <Card className="h-100">
                    <Card.Body>
                      <Card.Title className="d-flex justify-content-between align-items-start">
                        <span>{artist.name}</span>
                        <Badge bg="warning" className="ms-2">⭐</Badge>
                      </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {artist.genre}
                      </Card.Subtitle>
                      <Card.Text>
                        <small>
                          🕐 <strong>{artist.time}</strong><br />
                          📍 {artist.stage}
                        </small>
                      </Card.Text>
                      <Button 
                        variant="outline-danger" 
                        size="sm"
                        onClick={() => removeFromSchedule(artist.name)}
                        aria-label={`Remove ${artist.name} from schedule`}
                      >
                        Remove
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            )}
          </Row>
        </>
      )}
    </Container>
  );
}